import { describe, expect, it } from "vitest";
import { getContactTrackEvent, getProjectKey, isExternalHref } from "./tracking-taxonomy";

describe("tracking taxonomy", () => {
  it("maps contact keys to normalized events", () => {
    expect(getContactTrackEvent("tg")).toBe("telegram_click");
    expect(getContactTrackEvent("gh")).toBe("github_click");
    expect(getContactTrackEvent("resume")).toBe("resume_click");
    expect(getContactTrackEvent("email")).toBe("email_click");
  });

  it("returns undefined for unknown contact keys", () => {
    expect(getContactTrackEvent("unknown")).toBeUndefined();
  });

  it("normalizes project keys from title", () => {
    expect(getProjectKey("NordShop Storefront")).toBe("nordshop");
    expect(getProjectKey("FlowPilot Dashboard")).toBe("flowpilot");
    expect(getProjectKey("Random App")).toBe("portfolio");
  });

  it("detects external hrefs", () => {
    expect(isExternalHref("https://github.com/pskudarnov")).toBe(true);
    expect(isExternalHref("http://example.com")).toBe(true);
    expect(isExternalHref("mailto:pavel@example.com")).toBe(false);
    expect(isExternalHref("/resume_en.pdf")).toBe(false);
  });
});
