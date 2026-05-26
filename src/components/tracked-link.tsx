"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { track } from "@/lib/analytics";

type TrackEventName =
  | "resume_click"
  | "github_click"
  | "project_demo_open"
  | "telegram_click"
  | "email_click";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  trackEvent?: TrackEventName;
  trackProject?: string;
};

export function TrackedLink({ trackEvent, trackProject, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        try {
          if (trackEvent) {
            track(trackEvent, trackProject ? { project: trackProject } : undefined);
          }
        } catch {
          // swallow
        }

        onClick?.(e);
      }}
    />
  );
}
