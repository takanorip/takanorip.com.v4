import Button from "../Button/index";
import Experience from "../Experience/index";
import Activity from "../Activity/index";
import Service from "../Service/index";
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
              ソフトウェアエンジニア
            </p>
          </div>
          <p>
            WebフロントエンドエンジニアからUIデザイナーを経て、デジタルプロダクトデザイナーとして働いています。
            <br />
            デザインとエンジニアリングの狭間をつなぎプロダクトの価値を高める仕事が得意です。
          </p>
          <Links />
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Service</h2>
        <Service />
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
