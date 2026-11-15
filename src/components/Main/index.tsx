import Button from "../Button/index";
import Experience from "../Experience/index";
import Activity from "../Activity/index";
import Service from "../Service/index";
import WorkItem from "../WorkItem/index";
import Links from "../Links/index";
import ArrowRight from "../Svg/ArrowRight";
import styles from "./styles.module.css";
import { FC } from "react";
import type { Work } from "../../lib/cms";
import type { Locale } from "../../i18n/path";
import { localizeHref } from "../../i18n/path";
import { ui } from "../../i18n/ui";

type Props = {
  works: Work[];
  locale: Locale;
};

const Main: FC<Props> = ({ works, locale }) => {
  const copy = ui[locale];
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
            <h3>{copy.aboutName}</h3>
            <p>
              {copy.aboutRole1}
              <br />
              {copy.aboutRole2}
            </p>
          </div>
          <p>
            {copy.aboutBio1}
            <br />
            {copy.aboutBio2}
          </p>
          <Links />
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Service</h2>
        <Service locale={locale} />
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Activity</h2>
        <Activity locale={locale} />
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Featured works</h2>
        <div className={styles.works}>
          {featuredWorks.map((item) => (
            <WorkItem key={item.id} item={item} locale={locale} />
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            className={styles.button}
            to={localizeHref("/works", locale)}
            icon={<ArrowRight />}
          >
            View all works
          </Button>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Experience</h2>
        <Experience locale={locale} />
      </section>
    </main>
  );
};

export default Main;
