import { h } from 'preact';
import { useState } from 'preact/hooks';
import cx from 'classnames';
import WorkItem from '../../components/WorkItem/index';
import Styles from './styles.module.css';

const Works = ({ works }) => {
  const categoryList = ['Design', 'Development', 'Speaking', 'Writing'];
  const [filteredWorks, setFilteredWorks] = useState(works);
  const [currentFilter, setCurrentFilter] = useState('All');
  const filter = (keyword) => {
    const fw = works.filter(w => w.category.includes(keyword))
    setFilteredWorks(fw);
    setCurrentFilter(keyword);
  }
  return (
    <div className={Styles.works}>
      <div className={Styles.tabWrapper}>
        <button className={cx(Styles.tab, { [Styles.active]: currentFilter === 'All' })} onClick={() => {
          setFilteredWorks(works);
          setCurrentFilter('All');
        }} role="button">All</button>
        {categoryList.map(l => (
          <button className={cx(Styles.tab, { [Styles.active]: currentFilter === l })} onClick={() => filter(l)} role="button">{l}</button>
        ))}
      </div>
      <div className={Styles.grid}>
        {filteredWorks.map(item => <WorkItem item={item} />)}
      </div>
    </div>
  );
}

export default Works;
