import type { Locale } from "../../i18n/path";

export type Activity = {
  title: Record<Locale, string>;
  link: string;
  description: Record<Locale, string>;
};

export const activities: Activity[] = [
  {
    title: {
      ja: "お元気ですか.fm",
      en: "お元気ですか.fm",
    },
    link: "https://creators.spotify.com/pod/profile/ogenkidesuka-fm/",
    description: {
      ja: "yamanokuと2人でお届けする近況報告系ポッドキャストです。たまにデザインや開発の話もします。",
      en: "A check-in podcast I host with yamanoku. We sometimes talk about design and development, too.",
    },
  },
  {
    title: {
      ja: "TechTrainメンター",
      en: "TechTrain Mentor",
    },
    link: "https://techtrain.dev/mentors/130",
    description: {
      ja: "メンターとしてフロントエンド開発やデザイン全般についての学習・キャリアサポートを行っています。",
      en: "I mentor people on frontend development, design, and their careers.",
    },
  },
  {
    title: {
      ja: "MENTA",
      en: "MENTA",
    },
    link: "https://menta.work/plan/635?ref=mentor_profile",
    description: {
      ja: "デザインエンジニアを志す人に向けて、キャリアや学習のサポートを提供しています。",
      en: "Career and learning support for people aiming to become design engineers.",
    },
  },
];
