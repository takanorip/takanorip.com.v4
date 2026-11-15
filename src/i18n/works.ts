import type { Work } from "../lib/cms";
import type { Locale } from "./path";
import { workEn } from "./works.en";

export function localizeWork(work: Work, locale: Locale): Work {
  if (locale === "ja") return work;
  const translation = workEn[work.id];
  if (!translation) return work;
  return {
    ...work,
    title: translation.title ?? work.title,
    description: translation.description ?? work.description,
  };
}
