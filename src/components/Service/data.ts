import type { Locale } from "../../i18n/path";

export const services: {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}[] = [
  {
    title: {
      ja: "開発・デザイン",
      en: "Design & Development",
    },
    description: {
      ja: "デジタルプロダクトの企画から設計・デザイン・実装まで、一貫してサポートします。情報設計から開発プロセスのマネジメントまで対応し、ユーザーにとって使いやすく価値のあるプロダクトを一緒に作ります。",
      en: "I take digital products from planning through design and implementation. I also handle information architecture and development-process management, and build products that are usable and valuable.",
    },
  },
  {
    title: {
      ja: "デザインシステム開発支援",
      en: "Design System Support",
    },
    description: {
      ja: "デザインシステムの構築・運用をサポートします。コンポーネント設計から実装、ドキュメント作成、運用プロセスの確立まで、一貫性のあるユーザー体験の実現を支援します。",
      en: "I help teams build and operate a design system, from component design and implementation to documentation and the process for keeping it running, so the user experience stays consistent.",
    },
  },
  {
    title: {
      ja: "デザイン顧問",
      en: "Design Advisor",
    },
    description: {
      ja: "デザインプロセスの効率化や組織構築をサポートします。デザイナーの責任領域の定義、フィードバック体制の確立、品質と速度のバランス調整など、組織のデザイン力を高めるアドバイスを行います。",
      en: "I advise on design process and how a design organization works. That includes defining what designers own, setting up feedback, and balancing quality with speed.",
    },
  },
  {
    title: {
      ja: "デザイナーメンター・教育サポート",
      en: "Designer Mentoring & Education",
    },
    description: {
      ja: "デザイナーやデザインエンジニアの成長をサポートするメンターサービスを提供します。スキルや経験に応じたフィードバックとキャリアサポート、登壇資料の添削、ワークショップ開催などに対応します。",
      en: "Mentoring for designers and design engineers. I give feedback matched to skill and experience, career support, reviews of talk decks, and workshops.",
    },
  },
  {
    title: {
      ja: "個人向け名刺制作支援",
      en: "Personal Business Cards",
    },
    description: {
      ja: "個人向けの名刺制作を支援します。デザインから用紙の選定・印刷まで、一貫してサポートします。",
      en: "I design personal business cards, and I can take them through paper selection and printing.",
    },
  },
];
