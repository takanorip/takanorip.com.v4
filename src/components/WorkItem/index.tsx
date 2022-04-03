import type { FunctionalComponent } from 'preact';
import { h } from 'preact';
import { format } from 'date-fns'
import cx from 'classnames';
import Styles from './styles.module.css';

const WorkItem: FunctionalComponent = ({ item, className }) => {
  return (
    <a
      href={`/works/${item.id}`}
      className={cx(Styles.card, className)}
    >
      <figure className={Styles.imageWrapper}>
        <img loading="lazy" className={Styles.image} src={item.image.url} alt={item.title} />
      </figure>
      <div className={Styles.wrapper}>
        <p className={Styles.title}>{item.title}</p>
        <div className={Styles.category}>
          {item.category.map(c => (
            <div className={Styles.tag}>{c}</div>
          ))}
        </div>
        <p className={Styles.date}>{format(new Date(item.publishDate), 'MMM, yyyy')}</p>
      </div>
    </a>
  );
}

export default WorkItem;
