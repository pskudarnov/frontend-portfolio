import type { ReactNode } from "react";
import { cn } from "@/shared/cn";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export function Container({ className, children }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>{children}</div>;
}
