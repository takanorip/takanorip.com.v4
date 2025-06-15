import styles from "./styles.module.css";
import { experiences } from "./data";

const Experience = () => {
  return (
    <div className={styles.wrapperWrapper}>
      <div className={styles.wrapper}>
        {experiences.map((item) => (
          <div key={item.company} className={styles.item}>
            <div className={styles.detail}>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.role}>{item.role}</p>
            </div>
            <div className={styles.period}>
              <p className={styles.start}>{item.start}</p>
              <p className={styles.hyphen}>-</p>
              <p className={styles.end}>{item.end || "Now"}</p>
            </div>
            <div className={styles.dot} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
