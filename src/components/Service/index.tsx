import styles from "./styles.module.css";
import { FC } from "react";
import { services } from "./data";
import type { Locale } from "../../i18n/path";

type Props = {
  locale: Locale;
};

const Service: FC<Props> = ({ locale }) => {
  return (
    <div className={styles.content}>
      {services.map((service) => (
        <div key={service.title.ja} className={styles.serviceItem}>
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceTitle}>{service.title[locale]}</h3>
            <p className={styles.serviceDescription}>
              {service.description[locale]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
