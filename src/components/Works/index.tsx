import { useState, useEffect } from "react";
import cx from "classnames";
import WorkItem from "../../components/WorkItem/index";
import styles from "./styles.module.css";

const Works = ({ works }) => {
  const categoryList = ["Design", "Development", "Speaking", "Writing"];
  const [animate, setAnimate] = useState(false);
  const [filteredWorks, setFilteredWorks] = useState(works);
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    setAnimate(false);
    if (currentFilter === "All") {
      setFilteredWorks(works);
    } else {
      const fw = works.filter((w) => w.category.includes(currentFilter));
      setFilteredWorks(fw);
    }
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentFilter]);

  return (
    <div className={styles.works}>
      <h1 className={styles.title}>Works</h1>
      <div className={styles.tabOverflow}>
        <div className={styles.tabWrapper}>
          <button
            className={cx(styles.tab, {
              [styles.active]: currentFilter === "All",
            })}
            onClick={() => {
              setFilteredWorks(works);
              setCurrentFilter("All");
            }}
            role="button"
          >
            All
          </button>
          {categoryList.map((l) => (
            <button
              className={cx(styles.tab, {
                [styles.active]: currentFilter === l,
              })}
              onClick={() => setCurrentFilter(l)}
              role="button"
              key={l}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <div className={cx(styles.grid, { [styles.animate]: animate })}>
        {filteredWorks.map((item) => (
          <WorkItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Works;
