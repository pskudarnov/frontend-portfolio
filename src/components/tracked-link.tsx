"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { track } from "@/lib/analytics";
import type { PortfolioTrackEvent } from "@/lib/tracking-taxonomy";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  trackEvent?: PortfolioTrackEvent;
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
                  placement: trackPlacement,
                  project: trackProject,
                  type: "link",
                  label: trackLabel,
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
