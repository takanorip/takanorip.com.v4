import Button from "../Button/index";
import Experience from "../Experience/index";
import Activity from "../Activity/index";
import WorkItem from "../WorkItem/index";
import Links from "../Links/index";
import ArrowRight from "../Svg/ArrowRight";
import styles from "./styles.module.css";
import { FC } from "react";

type Props = {
  works: any;
};

const Main: FC<Props> = ({ works }) => {
  const featuredWorks = works.filter((item) => item.isFeatured);

  return (
    <main className={styles.main}>
      <div className={styles.mainArea}>
        <div className={styles.cover} />
        <div className={styles.mainContent}>
          <h1 className={styles.keyText}>
            I'm <span className={styles.blue}>takanorip</span>.<br />
            Design Engineer.
          </h1>
          <p className={styles.subText}>
            Systemizing the design and implementation of UI.
          </p>
        </div>
      </div>
      <section className={styles.section}>
        <h2 className={styles.title}>About me</h2>
        <div className={styles.aboutMe}>
          <figure className={styles.profile}>
            <img
              className={styles.image}
              src="/assets/profile.webp"
              alt="takanorip profile image"
            />
          </figure>
          <div className={styles.text}>
            <div>
              <h3>takanorip / 大木尊紀</h3>
              <p>
                デジタルプロダクトデザイナー
                <br />
                ソフトウェアエンジニア
              </p>
            </div>
            <p>
              1991年生まれ。千葉県木更津市出身。
              <br />
              WebフロントエンドエンジニアからUIデザイナーを経て、現在はデジタルプロダクトデザイナー兼ソフトウェアエンジニアとして働いています。
              デザインと開発の狭間をつなぐ仕事に興味があり、UIのデザイン・開発やデザインシステムの構築などが得意です。
              最近はデザイン組織の構築やデザイナー採用にも取り組んでいます。
            </p>
            <p>
              カンファレンスやイベントへの登壇、ブログ記事や技術同人誌の執筆も積極的に行っています。
              過去の登壇や執筆実績はWorksをご覧ください。
            </p>
            <p>
              お仕事のご相談はXのDMにお願いします。
              デザインシステムの構築支援、登壇、記事執筆、講師、イベント企画支援や司会など、お気軽にご相談ください。
            </p>
            <Links />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Activity</h2>
        <Activity />
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Featured works</h2>
        <div className={styles.works}>
          {featuredWorks.map((item) => (
            <WorkItem key={item.title} item={item} />
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Button className={styles.button} to="/works" icon={<ArrowRight />}>
            View all works
          </Button>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Experience</h2>
        <Experience />
      </section>
    </main>
  );
};

export default Main;
