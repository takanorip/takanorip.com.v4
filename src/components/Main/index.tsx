import type { FC } from "react";
import Button from "../Button/index";
import Experience from "../Experience/index";
import Activity from "../Activity/index";
import WorkItem from "../WorkItem/index";
import Links from "../Links/index";
import ArrowRight from "../Svg/ArrowRight";
import styles from "./styles.module.css";

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
          <p className={styles.keyText}>
            I'm <span className={styles.blue}>takanorip</span>.<br />
            Design Engineer.
          </p>
          <p className={styles.subText}>
            Systemizing the design and implementation of UI.
          </p>
        </div>
      </div>
      <section className={styles.section}>
        <h2 className={styles.title}>About me</h2>
        <div className={styles.text}>
          <figure className={styles.profile}>
            <img
              className={styles.image}
              src="/assets/profile.webp"
              alt="takanorip profile image"
            />
          </figure>
          <div>
            <h3>takanorip / 大木尊紀</h3>
            <p>
              デジタルプロダクトデザイナー
              <br />
              Webフロントエンドエンジニア
            </p>
          </div>
          <p>
            1991年7月生まれ。
            <br />
            WebフロントエンドエンジニアからUIデザイナーを経て、現在はデジタルプロダクトデザイナー兼フロントエンドエンジニアとしてスタートアップで働いています。
            <br />
            デザインと開発の狭間をつなぐ仕事が好きで、UIのデザイン・開発やデザインシステムの構築などが得意です。
            <br />
            最近はデザイン組織の構築やデザイナー採用にも取り組んでいます。
          </p>
          <p>
            カンファレンスやイベントへの登壇、記事の執筆も積極的に行っています。技術同人誌も何冊か執筆しています。
            <br />
            登壇実績はWorksをご覧ください。
          </p>
          <Links />
        </div>
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
      <section className={styles.section}>
        <h2 className={styles.title}>Activity</h2>
        <Activity />
      </section>
    </main>
  );
};

export default Main;
