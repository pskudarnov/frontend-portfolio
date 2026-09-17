"use client";

import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";
import type { PortfolioTrackEvent } from "@/lib/tracking-taxonomy";

type EventName =
  | "page_view"
  | "session_start"
  | "session_end"
  | "resume_click"
  | "github_click"
  | "project_demo_open"
  | "button_click"
  | "telegram_click"
  | "email_click"
  | "scroll_depth"
  | "time_on_page"
  | "frontend_error"
  | "web_vitals"
  | PortfolioTrackEvent;

type TrackPayload = { project?: string; value?: number; metadata?: Record<string, unknown> };

type TrackOptions = {
  flush?: boolean;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    ym?: (...args: unknown[]) => void;
  }
}

const SCROLL_THROTTLE_MS = 250;

let initialized = false;
export function track(event: EventName, payload: TrackPayload = {}, options: TrackOptions = {}) {
  void options;
  try {
    const eventParams = {
      ...payload.metadata,
      project: payload.project,
      value: payload.value,
      path: location.pathname,
    };

    window.gtag?.("event", event, eventParams);

    const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
    if (yandexId) {
      window.ym?.(Number(yandexId), "reachGoal", event, eventParams);
    }
  } catch {
    // swallow
  }
}

export function initTracker() {
  if (initialized) return;
  initialized = true;

  try {
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
