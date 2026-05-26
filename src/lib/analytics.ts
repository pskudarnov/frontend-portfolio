"use client";

import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";

type EventName =
  | "page_view"
  | "session_start"
  | "session_end"
  | "resume_click"
  | "github_click"
  | "project_demo_open"
  | "telegram_click"
  | "email_click"
  | "scroll_depth"
  | "time_on_page"
  | "frontend_error"
  | "web_vitals";

type TrackPayload = { project?: string; value?: number; metadata?: Record<string, unknown> };

type TrackOptions = {
  flush?: boolean;
};

type TrackEvent = {
  site: string;
  event: EventName;
  path?: string;
  title?: string;
  referrer?: string;
  sessionId?: string;
  visitorId?: string;
  project?: string;
  value?: number;
  metadata?: Record<string, unknown>;
};

const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_URL ?? "/api/track";
const site = process.env.NEXT_PUBLIC_ANALYTICS_SITE ?? "portfolio";
const hasExplicitAnalyticsEndpoint = Boolean(process.env.NEXT_PUBLIC_ANALYTICS_URL);

const FLUSH_INTERVAL_MS = 5_000;
const FLUSH_BATCH_SIZE = 10;
const MAX_QUEUE_SIZE = 50;
const SCROLL_THROTTLE_MS = 250;

const VISITOR_KEY = "pa_visitor_id";
const SESSION_KEY = "pa_session_id";
const SESSION_STARTED = "pa_session_started";

let initialized = false;
let flushTimerStarted = false;
let isFlushing = false;
let queue: TrackEvent[] = [];

function id() {
  return crypto.randomUUID();
}

function trimQueue() {
  if (queue.length > MAX_QUEUE_SIZE) {
    queue = queue.slice(queue.length - MAX_QUEUE_SIZE);
  }
}

function enqueue(event: TrackEvent) {
  queue.push(event);
  trimQueue();
}

function dequeueBatch() {
  if (queue.length === 0) return [] as TrackEvent[];
  return queue.splice(0, FLUSH_BATCH_SIZE);
}

function requeue(events: TrackEvent[]) {
  if (events.length === 0) return;
  queue = [...events, ...queue];
  trimQueue();
}

function getVisitorId() {
  try {
    const existing = localStorage.getItem(VISITOR_KEY);
    if (existing) return existing;
    const v = id();
    localStorage.setItem(VISITOR_KEY, v);
    return v;
  } catch {
    return "unknown";
  }
}

function getSessionId() {
  try {
    const existing = sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const v = id();
    sessionStorage.setItem(SESSION_KEY, v);
    return v;
  } catch {
    return "unknown";
  }
}

async function sendBatch(events: TrackEvent[]): Promise<boolean> {
  try {
    const body = JSON.stringify(events);

    if (navigator.sendBeacon) {
      const sent = navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
      if (sent) return true;
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });

    return response.ok;
  } catch {
    return false;
  }
}

async function flushQueue() {
  if (isFlushing || queue.length === 0) return;
  isFlushing = true;

  try {
    while (queue.length > 0) {
      const batch = dequeueBatch();
      if (batch.length === 0) break;
      const ok = await sendBatch(batch);
      if (!ok) {
        requeue(batch);
        break;
      }
    }
  } catch {
    // swallow all tracker errors
  } finally {
    isFlushing = false;
  }
}

function ensureFlushTimer() {
  if (flushTimerStarted) return;
  flushTimerStarted = true;

  try {
    window.setInterval(() => {
      void flushQueue();
    }, FLUSH_INTERVAL_MS);
  } catch {
    // swallow
  }
}

export function track(event: EventName, payload: TrackPayload = {}, options: TrackOptions = {}) {
  try {
    enqueue({
      site,
      event,
      path: location.pathname,
      title: document.title,
      referrer: document.referrer || undefined,
      sessionId: getSessionId(),
      visitorId: getVisitorId(),
      project: payload.project,
      value: payload.value,
      metadata: payload.metadata,
    });

    if (queue.length >= FLUSH_BATCH_SIZE || options.flush) {
      void flushQueue();
    }
  } catch {
    // swallow
  }
}

export function initTracker() {
  if (initialized) return;
  initialized = true;

  try {
    ensureFlushTimer();

    if (!hasExplicitAnalyticsEndpoint && process.env.NODE_ENV !== "production") {
      console.warn("[analytics] NEXT_PUBLIC_ANALYTICS_URL is not set, fallback /api/track is used");
    }

    if (!sessionStorage.getItem(SESSION_STARTED)) {
      sessionStorage.setItem(SESSION_STARTED, "1");
      track("session_start");
    }

    track("page_view");

    const start = performance.now();
    let sessionEnded = false;
    const sentDepth = new Set<number>();
    const sentVitals = new Set<string>();
    let lastScrollHandledAt = 0;

    const endSession = () => {
      if (sessionEnded) return;
      sessionEnded = true;
      const seconds = Math.max(0, Math.round((performance.now() - start) / 1000));
      track("time_on_page", { value: seconds });
      track("session_end", { value: seconds });
      void flushQueue();
    };

    window.addEventListener("scroll", () => {
      const now = Date.now();
      if (now - lastScrollHandledAt < SCROLL_THROTTLE_MS) return;
      lastScrollHandledAt = now;

      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h <= 0) return;
      const percent = Math.round((window.scrollY / h) * 100);
      [25, 50, 75, 100].forEach((mark) => {
        if (percent >= mark && !sentDepth.has(mark)) {
          sentDepth.add(mark);
          track("scroll_depth", { value: mark });
        }
      });
    }, { passive: true });

    window.addEventListener("error", (e) => {
      track("frontend_error", {
        metadata: { message: e.message, source: e.filename, line: e.lineno, col: e.colno },
      });
    });

    window.addEventListener("unhandledrejection", (e) => {
      track("frontend_error", { metadata: { reason: String(e.reason) } });
    });

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") endSession();
    });

    window.addEventListener("pagehide", endSession);

    const vital = (metric: Metric) => {
      const key = `${metric.name}:${metric.id}`;
      if (sentVitals.has(key)) return;
      sentVitals.add(key);
      track("web_vitals", {
        metadata: { name: metric.name, value: metric.value, rating: metric.rating, id: metric.id },
      });
    };

    onLCP(vital);
    onCLS(vital);
    onINP(vital);
    onFCP(vital);
    onTTFB(vital);
  } catch {
    // swallow
  }
}
