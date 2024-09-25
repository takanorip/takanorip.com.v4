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
        <figcaption className={styles.title}>{item.title}</figcaption>
      </figure>
      <div className={styles.bottom}>
        <div className={styles.category}>
          {item.category.map((c) => (
            <div className={styles.tag}>{c}</div>
          ))}
        </div>
        <p className={styles.date}>
          {format(addHours(new Date(item.publishDate), 9), "MMM, yyyy")}
        </p>
      </div>
    </a>
  );
};

export default WorkItem;
