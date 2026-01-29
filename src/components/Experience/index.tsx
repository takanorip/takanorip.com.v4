import styles from "./styles.module.css";
import { experiences } from "./data";

const Experience = () => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCompany}>会社名</th>
            <th className={styles.headerRole}>役職</th>
            <th className={styles.headerPeriod}>期間</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((item) => (
            <tr key={item.company} className={styles.row}>
              <td className={styles.company}>{item.company}</td>
              <td className={styles.role}>{item.role}</td>
              <td className={styles.period}>
                {item.start} - {item.end || "Now"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Experience;
