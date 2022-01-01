import { h } from 'preact';
import Styles from './styles.module.css';
import { experiences } from './data';

const Experience = () => {
  return (
    <div className={Styles.wrapper}>
      {experiences.map(item => (
        <div className={Styles.item}>
          <div className={Styles.period}>
            <p className={Styles.start}>{item.start}</p>
            <p className={Styles.hyphen}>-</p>
            <p className={Styles.end}>{item.end}</p>
          </div>
          <div className={Styles.dot}></div>
          <div className={Styles.detail}>
            <p className={Styles.company}>{item.company}</p>
            <p className={Styles.role}>{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
