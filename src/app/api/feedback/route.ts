import { NextRequest, NextResponse } from "next/server";

const MAX_REQUESTS = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_RATE_LIMIT_KEYS = 10_000;
const requests = new Map<string, number[]>();

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function pruneExpiredRequests(now: number) {
  for (const [ip, timestamps] of requests) {
    const recentRequests = timestamps.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
    );

    if (recentRequests.length === 0) {
      requests.delete(ip);
    } else {
      requests.set(ip, recentRequests);
    }
  }
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recentRequests = (requests.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (!requests.has(ip) && requests.size >= MAX_RATE_LIMIT_KEYS) {
    pruneExpiredRequests(now);
    if (requests.size >= MAX_RATE_LIMIT_KEYS) return true;
  }

  if (recentRequests.length >= MAX_REQUESTS) {
    requests.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requests.set(ip, recentRequests);
  return false;
}

function getTrustedClientIp(request: NextRequest) {
  if (process.env.NODE_ENV === "development") return "local";

  const proxyToken = process.env.FEEDBACK_PROXY_TOKEN;
  const clientIp = request.headers.get("x-real-ip");
  const providedToken = request.headers.get("x-feedback-proxy-token");

  if (!proxyToken || !clientIp || providedToken !== proxyToken) return null;
  return clientIp;
}

export async function POST(request: NextRequest) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram feedback is not configured");
    return NextResponse.json({ error: "Service is unavailable" }, { status: 503 });
  }

  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return NextResponse.json({ error: "Unsupported media type" }, { status: 415 });
  }

  const ip = getTrustedClientIp(request);
  if (!ip) {
    console.error("Feedback request did not come through the trusted proxy");
    return NextResponse.json({ error: "Service is unavailable" }, { status: 503 });
  }

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, message, website } = payload as Record<string, unknown>;
  if (website) return NextResponse.json({ ok: true });

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length < 2 ||
    name.trim().length > 80 ||
    !isValidEmail(email.trim()) ||
    message.trim().length < 10 ||
    message.trim().length > 2000
  ) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const text = [
    "New portfolio feedback",
    "",
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    "",
    message.trim(),
  ].join("\n");

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) throw new Error(`Telegram returned ${response.status}`);
  } catch (error) {
    console.error("Telegram feedback delivery failed", error);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
