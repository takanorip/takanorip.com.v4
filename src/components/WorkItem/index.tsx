import type { FC } from "react";
import { format, addHours } from "date-fns";
import cx from "classnames";
import styles from "./styles.module.css";

type Props = {
  item: any;
  className?: string;
};

const WorkItem: FC<Props> = ({ item, className }) => {
  return (
    <a href={`/works/${item.id}`} className={cx(styles.card, className)}>
      <figure className={styles.imageWrapper}>
        <img
          loading="lazy"
          className={styles.image}
          src={item.image.url}
          alt={item.title}
        />
      </figure>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>{item.title}</p>
        <div className={styles.bottom}>
          <p className={styles.date}>
            {format(addHours(new Date(item.publishDate), 9), "yyyy/MM")}
          </p>
          <div className={styles.category}>
            {item.category.map((c, i) => (
              <div key={c} className={styles.tag}>
                #{c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkItem;
