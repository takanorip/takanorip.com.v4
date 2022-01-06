import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import cx from 'classnames';
import WorkItem from '../../components/WorkItem/index';
import Styles from './styles.module.css';

const Works = ({ works }) => {
  const categoryList = ['Design', 'Development', 'Speaking', 'Writing'];
  const [animate, setAnimate] = useState(false);
  const [filteredWorks, setFilteredWorks] = useState(works);
  const [currentFilter, setCurrentFilter] = useState('All');

  useEffect(() => {
    setAnimate(false);
    if (currentFilter === 'All') {
      setFilteredWorks(works);
    } else {
      const fw = works.filter(w => w.category.includes(currentFilter));
      setFilteredWorks(fw);
    }
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentFilter]);

  return (
    <div className={Styles.works}>
      <div className={Styles.tabOverflow}>
        <div className={Styles.tabWrapper}>
          <button className={cx(Styles.tab, { [Styles.active]: currentFilter === 'All' })} onClick={() => {
            setFilteredWorks(works);
            setCurrentFilter('All');
          }} role="button">All</button>
          {categoryList.map(l => (
            <button className={cx(Styles.tab, { [Styles.active]: currentFilter === l })} onClick={() => setCurrentFilter(l)} role="button">{l}</button>
          ))}
        </div>
      </div>
      <div className={cx(Styles.grid, { [Styles.animate]: animate })}>
        {filteredWorks.map(item => <WorkItem className={Styles.item} item={item} />)}
      </div>
    </div>
  );
}

export default Works;
