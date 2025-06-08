import styles from "./styles.module.css";
import { activities } from "./data";

const Activity = () => {
  return (
    <div className={styles.activity}>
      {activities.map((item) => (
        <a key={item.title} className={styles.item} href={item.link}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.category}>{item.category}</p>
        </a>
      ))}
    </div>
  );
};

export default Activity;
