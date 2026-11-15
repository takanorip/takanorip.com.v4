export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
  highlights?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Kanmu",
    role: "デザインマネージャー",
    start: "2025/04",
    end: "",
    description:
      "チャージ式VisaプリペイドカードのBtoC事業で、デザイナー組織の立ち上げと運営をしています。",
    highlights: [
      "デザイナーの評価、育成、ワークフローの設計",
      "BtoC事業のリブランディング",
      "デザインシステムの構築",
    ],
  },
  {
    company: "Ubie",
    role: "デザインエンジニア",
    start: "2022/01",
    end: "2025/03",
    description:
      "医療系アプリケーションで、デザインと実装のあいだをつなぐ仕事をしていました。デザインの均質化と、フロントエンド開発の生産性、Webアクセシビリティを同時に上げることを軸にしていました。",
    highlights: [
      "デザインシステムのロードマップ策定と、Ubie UI・デザイントークン・ドキュメントサイトの設計と開発",
      "FigmaのアセットをGitHub Actions経由で書き出すワークフローの構築",
      "toCプロダクトのアクセシビリティ試験と改善。症状検索エンジン「ユビー」は総務省「情報アクセシビリティ好事例2023」に選出",
      "マイナポータルと連携する体調の記録機能のUIデザインとフロントエンド開発",
      "社内のコンテンツ入稿システムの情報設計、UIデザイン、フロントエンドとAPIの開発",
    ],
  },
  {
    company: "ClassDo",
    role: "UI Designer",
    start: "2020/05",
    end: "2021/12",
    description:
      "オンライン授業支援ツールのUIデザインを担当し、エンジニアがUIライブラリで組んでいたプロダクトのデザインを刷新しました。",
    highlights: [
      "顧客のオペレーションに基づく情報設計の見直し",
      "拡張性を考慮したレイアウト、カラー、タイポグラフィの設計",
      "デザインガイドラインとファイルシステムUIの作成",
    ],
  },
  {
    company: "FOLIO",
    role: "フロントエンドエンジニア",
    start: "2018/10",
    end: "2020/04",
    description:
      "個人向け投資サービスのフロントエンド開発を担当し、情報設計と実装の両方に入っていました。",
    highlights: [
      "「おまかせ投資」のWebフロントエンド開発",
      "LINEスマート投資「ワンコイン投資」の情報設計、LIFF上のアプリケーション開発、LINE Pay決済の実装",
      "フロントエンドチームのリードと、FlowからTypeScriptへの置き換え",
    ],
  },
  {
    company: "SmartDrive",
    role: "フロントエンドエンジニア",
    start: "2017/06",
    end: "2018/09",
    description:
      "車両管理SaaSと、個人向けモビリティサービスのフロントエンドを開発していました。",
    highlights: [
      "車両管理SaaSの管理画面のフロントエンド開発",
      "コネクテッドカーの定額利用サービス「SmartDrive Cars」の申し込みサイト開発と技術選定",
      "オウンドメディアの構築と、コーポレートサイトやLPの運用",
    ],
  },
  {
    company: "FOURDIGIT",
    role: "デベロッパー",
    start: "2016/05",
    end: "2017/05",
    description:
      "受託のWebサイト制作で、マークアップとインタラクションの実装を担当していました。",
    highlights: [
      "任天堂のサービスサイトリニューアルでのマークアップとマイクロインタラクション",
      "トヨタ自動車のウェブサイトリニューアルでのマークアップと販売店検索の実装",
    ],
  },
];
