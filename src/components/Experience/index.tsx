import styles from "./styles.module.css";
import { experiences } from "./data";
import type { Locale } from "../../i18n/path";
import { ui } from "../../i18n/ui";

type Props = {
  locale: Locale;
};

const Experience = ({ locale }: Props) => {
  const copy = ui[locale];

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCompany}>{copy.experienceCompany}</th>
            <th className={styles.headerRole}>{copy.experienceRole}</th>
            <th className={styles.headerPeriod}>{copy.experiencePeriod}</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((item) => (
            <tr key={item.company} className={styles.row}>
              <td className={styles.company}>{item.company}</td>
              <td className={styles.role}>{item.role[locale]}</td>
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
