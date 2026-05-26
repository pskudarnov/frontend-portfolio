import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Handle default locale prefix - redirect to non-prefixed path
  if (
    pathname === `/${i18n.defaultLocale}` ||
    pathname.startsWith(`/${i18n.defaultLocale}/`)
  ) {
    const newPathname =
      pathname.replace(`/${i18n.defaultLocale}`, "") || "/";
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If there's no locale prefix (like /en), it's the default locale
  if (pathnameIsMissingLocale) {
    // Rewrite internally to the default locale so the [lang] route can handle it
    return NextResponse.rewrite(
      new URL(
        `/${i18n.defaultLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|site\\.webmanifest|.*\\.pdf|.*\\.svg|.*\\.png).*)"],
};
