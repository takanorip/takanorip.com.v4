import styles from './styles.module.css';
import { experiences } from './data';

const Experience = () => {
  return (
    <div className={styles.wrapper}>
      {experiences.map(item => (
        <div className={styles.item}>
          <div className={styles.period}>
            <p className={styles.end}>{item.end || 'Now'}</p>
            <p className={styles.hyphen}>-</p>
            <p className={styles.start}>{item.start}</p>
          </div>
          <div className={styles.dot}></div>
          <div className={styles.detail}>
            <p className={styles.company}>{item.company}</p>
            <p className={styles.role}>{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
