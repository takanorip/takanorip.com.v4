import type { Locale } from "./path";

export const ui: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    worksTitle: string;
    worksDescription: string;
    aboutName: string;
    aboutRole1: string;
    aboutRole2: string;
    aboutBio1: string;
    aboutBio2: string;
    viewDetails: string;
    backToWorks: string;
    experienceCompany: string;
    experienceRole: string;
    experiencePeriod: string;
  }
> = {
  ja: {
    metaTitle: "office takanorip",
    metaDescription: "デザインエンジニア takanorip のポートフォリオ",
    worksTitle: "Works | office takanorip",
    worksDescription: "takanoripの制作実績一覧です。",
    aboutName: "takanorip / 大木尊紀",
    aboutRole1: "デジタルプロダクトデザイナー",
    aboutRole2: "ソフトウェアエンジニア",
    aboutBio1:
      "WebフロントエンドエンジニアからUIデザイナーを経て、デジタルプロダクトデザイナーとして働いています。",
    aboutBio2:
      "デザインとエンジニアリングの狭間をつなぎプロダクトの価値を高める仕事が得意です。",
    viewDetails: "詳細を見る",
    backToWorks: "一覧へ戻る",
    experienceCompany: "会社名",
    experienceRole: "役職",
    experiencePeriod: "期間",
  },
  en: {
    metaTitle: "office takanorip",
    metaDescription: "Portfolio of takanorip, a design engineer.",
    worksTitle: "Works | office takanorip",
    worksDescription: "A list of takanorip's works.",
    aboutName: "takanorip / Takanori Oki",
    aboutRole1: "Digital Product Designer",
    aboutRole2: "Software Engineer",
    aboutBio1:
      "I started as a web frontend engineer, then worked as a UI designer, and now work as a digital product designer.",
    aboutBio2:
      "I do my best work between design and engineering, where connecting the two makes a product more valuable.",
    viewDetails: "View details",
    backToWorks: "Back to works",
    experienceCompany: "Company",
    experienceRole: "Role",
    experiencePeriod: "Period",
  },
};
