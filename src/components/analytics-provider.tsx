"use client";

import { useEffect } from "react";
import { initTracker } from "@/lib/analytics";

export function AnalyticsProvider() {
  useEffect(() => {
    initTracker();
  }, []);

  return null;
}
