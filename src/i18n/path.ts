export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ja";

export function stripLocale(pathname: string): string {
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const trimmed =
    withSlash.length > 1 && withSlash.endsWith("/")
      ? withSlash.slice(0, -1)
      : withSlash;

  if (trimmed === "/en") return "/";
  if (trimmed.startsWith("/en/")) return trimmed.slice(3);
  return trimmed;
}

export function localizeHref(path: string, locale: Locale): string {
  const bare = stripLocale(path);
  if (locale === defaultLocale) return bare;
  return bare === "/" ? "/en" : `/en${bare}`;
}
