export type PortfolioTrackEvent =
  | "telegram_click"
  | "github_click"
  | "resume_click"
  | "email_click"
  | "project_demo_open";

export function getProjectKey(title: string): string {
  const normalized = title.toLowerCase();
  if (normalized.includes("nordshop")) return "nordshop";
  if (normalized.includes("flowpilot")) return "flowpilot";
  if (normalized.includes("stayfinder")) return "stayfinder";
  if (normalized.includes("devdocs")) return "devdocs";
  return "portfolio";
}

export function getContactTrackEvent(key: string): PortfolioTrackEvent | undefined {
  if (key === "resume") return "resume_click";
  if (key === "gh") return "github_click";
  if (key === "tg") return "telegram_click";
  if (key === "email") return "email_click";
  return undefined;
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
