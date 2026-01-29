export type Activity = {
  title: string;
  category: string;
  link: string;
  description: string;
};

export const activities = [
  {
    title: "お元気ですか.fm",
    link: "https://creators.spotify.com/pod/profile/ogenkidesuka-fm/",
    description:
      "yamanokuと2人でお届けする近況報告系ポッドキャストです。たまにデザインや開発の話もします。",
  },
  {
    title: "TechTrainメンター",
    link: "https://techtrain.dev/mentors/130",
    description:
      "メンターとしてフロントエンド開発やデザイン全般についての学習・キャリアサポートを行っています。",
  },
  {
    title: "MENTA",
    link: "https://menta.work/plan/635?ref=mentor_profile",
    description:
      "デザインエンジニアを志す人に向けて、キャリアや学習のサポートを提供しています。",
  },
];
