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
  trackLabel?: string;
  trackPlacement?: string;
};

function hrefToString(href: ComponentProps<typeof Link>["href"]) {
  return typeof href === "string" ? href : href.pathname ?? "";
}

export function TrackedLink({
  trackEvent,
  trackProject,
  trackLabel,
  trackPlacement,
  onClick,
  href,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        try {
          if (trackEvent) {
            track(
              trackEvent,
              {
                project: trackProject,
                metadata: {
                  href: hrefToString(href),
                  label: trackLabel,
                  placement: trackPlacement,
                  type: "link",
                },
              },
              { flush: true },
            );
          }
        } catch {
          // swallow
        }

        onClick?.(e);
      }}
    />
  );
}
