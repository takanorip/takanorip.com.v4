import { h } from 'preact';
import Button from '../Button/index';
import Experience from '../Experience/index';
import Activity from '../Activity/index';
import Styles from './styles.module.css';

const Main = () => {
  return (
    <main className={Styles.main}>
      <div>
        <p className={Styles.keyText}>I'm <span className={Styles.blue}>takanorip</span>.<br />Design Engineer.</p>
        <p className={Styles.subText}>I'm interested in systemizing the design and implementation of UI.</p>
      </div>
      <section className={Styles.section}>
        <h2 className={Styles.title}>About me</h2>
        <div className={Styles.text}>
          <p><span className={Styles.blue}>takanorip / 大木尊紀 / Takanori Oki</span>です。日本在住のUIデザイナー/フロントエンドエンジニアです。WebとUIが好きで、デザインと開発の両面からUIに関わっています。</p>
          <p>現在は classNameDo のUIデザイナーとしてビデオチャットアプリのUIデザインやデザインガイドラインの構築などを行ったり、副業フロントエンドエンジニアとしてReactのアプリケーション開発をしたりしています。</p>
          <p>UIやWebフロントエンド全般に興味があります。特にウェブフォント、Web Components、 Figmaが好きで、様々なツールを開発したり記事を書いたりしています。最近はデザインと実装をつなぐシステムにも興味があり、デザインシステムの構築や実装にも取り組んでいます。</p>
          <p>イベントやカンファレンスへの登壇や本の執筆なども積極的に行っています。登壇や執筆、副業などお気軽にご相談ください。</p>
        </div>
      </section>
      <section className={Styles.section}>
        <h2 className={Styles.title}>Featured works</h2>
        <div className={Styles.buttonWrapper}><Button to="/works">View all works</Button></div>
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
