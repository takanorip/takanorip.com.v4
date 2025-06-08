import type { FC } from "react";
import Button from "../Button/index";
import Experience from "../Experience/index";
import Activity from "../Activity/index";
import WorkItem from "../WorkItem/index";
import Aside from "../Aside/index";
import ArrowRight from "../Svg/ArrowRight";
import styles from "./styles.module.css";

type Props = {
  works: any;
};

const Main: FC<Props> = ({ works }) => {
  const featuredWorks = works.filter((item) => item.isFeatured);

  return (
    <main className={styles.main}>
      <div>
        <p className={styles.keyText}>
          I'm <span className={styles.blue}>takanorip</span>.<br />
          Design Engineer.
        </p>
        <p className={styles.subText}>
          Systemizing the design and implementation of UI.
        </p>
      </div>
      <section className={styles.section}>
        <h2 className={styles.title}>About me</h2>
        <div className={styles.aside}>
          <Aside />
        </div>
        <div className={styles.text}>
          <p>
            I'm a digital design engineer living in Japan, I love Web and UI,
            and I'm involved in UI from both design and development sides.
          </p>
          <p>
            I'm interested in UI and web frontend in general. I'm particularly
            interested in web fonts, web components, and Figma, and I've been
            developing various tools and writing articles about them. Recently,
            I'm also interested in technologies that connect design and
            development, and I'm working on building and implementing design
            systems.
          </p>
          <p>
            I am also actively involved in speaking at events and conferences,
            and writing books. Please feel free to contact me for speaking
            engagements, writing, or side projects.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Featured works</h2>
        <div className={styles.worksWrapper}>
          <div className={styles.works}>
            {featuredWorks.map((item) => (
              <WorkItem key={item.title} item={item} />
            ))}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button className={styles.button} to="/works" icon={<ArrowRight />}>
            View all works
          </Button>
        </div>
      </section>
      <div className={styles.subGrid}>
        <section className={styles.subSection}>
          <h2 className={styles.title}>Activity</h2>
          <Activity />
        </section>
        <section className={styles.subSection}>
          <h2 className={styles.title}>Experience</h2>
          <Experience />
        </section>
      </div>
    </main>
  );
};

export default Main;
