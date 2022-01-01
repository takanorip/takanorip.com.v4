import type { FunctionalComponent } from 'preact';
import { h } from 'preact';
import { format } from 'date-fns'
import Styles from './styles.module.css';

const WorkItem: FunctionalComponent = ({ item }) => {
  return (
    <a
      href={`/works/${item.id}`}
      className={Styles.card}
      style={{
        backgroundImage: `url(${item.image.url})`,
      }}
    >
      <p className={Styles.title}>{item.title}</p>
      <div className={Styles.category}>
        {item.category.map(c => (
          <p className={Styles.tag}>{c}</p>
        ))}
      </div>
      <p className={Styles.date}>{format(new Date(item.publishDate), 'yyyy.MM.dd')}</p>
    </a>
  );
}

export default WorkItem;
