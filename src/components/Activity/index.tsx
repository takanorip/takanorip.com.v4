import styles from "./styles.module.css";
import { activities } from "./data";
import type { Locale } from "../../i18n/path";

type Props = {
  locale: Locale;
};

const Activity = ({ locale }: Props) => {
  return (
    <div className={styles.activity}>
      {activities.map((item) => (
        <a key={item.link} className={styles.item} href={item.link}>
          <h3 className={styles.title}>{item.title[locale]}</h3>
          <p className={styles.description}>{item.description[locale]}</p>
        </a>
      ))}
    </div>
  );
};

export default Activity;
