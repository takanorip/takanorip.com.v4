import styles from "./styles.module.css";
import { activities } from "./data";

const Activity = () => {
  return (
    <div className={styles.activity}>
      {activities.map((item) => (
        <a key={item.title} className={styles.item} href={item.link}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Activity;
