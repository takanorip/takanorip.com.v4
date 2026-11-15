import styles from "./styles.module.css";
import { experiences } from "./data";

const Experience = () => {
  return (
    <div className={styles.list}>
      {experiences.map((item, index) => (
        <details
          key={item.company}
          className={styles.item}
          name="experience"
          open={index === 0}
        >
          <summary className={styles.summary}>
            <span className={styles.company}>{item.company}</span>
            <span className={styles.role}>{item.role}</span>
            <span className={styles.period}>
              {item.start} - {item.end || "Now"}
            </span>
            <span className={styles.icon} aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </summary>
          <div className={styles.body}>
            <p className={styles.description}>{item.description}</p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        </details>
      ))}
    </div>
  );
};

export default Experience;
