import type { FunctionalComponent } from 'preact';
import { h } from 'preact';
import Button from '../Button/index';
import Experience from '../Experience/index';
import Activity from '../Activity/index';
import WorkItem from '../WorkItem/index';
import Aside from '../Aside/index';
import ArrowRight from '../Svg/ArrowRight';
import Styles from './styles.module.css';

const Main: FunctionalComponent = ({ works }) => {
  const featuredWorks = works.filter(item => item.isFeatured);

  return (
    <main className={Styles.main}>
      <div>
        <p className={Styles.keyText}>I'm <span className={Styles.blue}>takanorip</span>.<br />Design Engineer.</p>
        <p className={Styles.subText}>Systemizing the design and implementation of UI.</p>
      </div>
      <section className={Styles.section}>
        <h2 className={Styles.title}>About me</h2>
        <div className={Styles.aside}>
          <Aside />
        </div>
        <div className={Styles.text}>
          <p>I'm a design engineer living in Japan, I love web and UI, and I'm involved in UI from both design and development sides.</p>
          <p>I'm interested in UI and web frontend in general. I'm particularly interested in web fonts, web components, and Figma, and I've been developing various tools and writing articles about them. Recently, I'm also interested in technologies that connect design and development, and I'm working on building and implementing design systems.</p>
          <p>I am also actively involved in speaking at events and conferences, and writing books. Please feel free to contact me for speaking engagements, writing, or side projects.</p>
        </div>
      </section>
      <section className={Styles.section}>
        <h2 className={Styles.title}>Featured works</h2>
        <div className={Styles.works}>
          {featuredWorks.map(item => <WorkItem className={Styles.workItem} item={item} />)}
        </div>
        <div className={Styles.buttonWrapper}>
          <Button className={Styles.button} to="/works" icon={<ArrowRight />}>View all works</Button>
        </div>
      </section>
      <div className={Styles.subGrid}>
        <section className={Styles.subSection}>
          <h2 className={Styles.title}>Activity</h2>
          <Activity />
        </section>
        <section className={Styles.subSection}>
          <h2 className={Styles.title}>Experience</h2>
          <Experience />
        </section>
      </div>
    </main>
  );
}

export default Main;
