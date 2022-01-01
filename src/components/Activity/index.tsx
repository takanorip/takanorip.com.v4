import { h } from 'preact';
import Styles from './styles.module.css';
import { activities } from './data';

const Activity = () => {
  return (
    <div className={Styles.activity}>
      {activities.map(item => (
        <a className={Styles.item} href={item.link}>
          <p className={Styles.title}>{item.title}</p>
          <p className={Styles.category}>{item.category}</p>
        </a>
      ))}
    </div>
  );
}

export default Activity;
