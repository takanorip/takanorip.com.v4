import type { Locale } from "../../i18n/path";

export type Experience = {
  company: string;
  role: Record<Locale, string>;
  start: string;
  end: string;
};

export const experiences: Experience[] = [
  {
    company: "Kanmu",
    role: { ja: "デザインマネージャー", en: "Design Manager" },
    start: "2025/04",
    end: "",
  },
  {
    company: "Ubie",
    role: { ja: "デザインエンジニア", en: "Design Engineer" },
    start: "2022/01",
    end: "2025/03",
  },
  {
    company: "ClassDo",
    role: { ja: "UI Designer", en: "UI Designer" },
    start: "2020/05",
    end: "2021/12",
  },
  {
    company: "FOLIO",
    role: { ja: "フロントエンドエンジニア", en: "Frontend Engineer" },
    start: "2018/10",
    end: "2020/04",
  },
  {
    company: "SmartDrive",
    role: { ja: "フロントエンドエンジニア", en: "Frontend Engineer" },
    start: "2017/06",
    end: "2018/09",
  },
  {
    company: "FOURDIGIT",
    role: { ja: "デベロッパー", en: "Developer" },
    start: "2016/05",
    end: "2017/05",
  },
];
