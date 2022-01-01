import { h } from 'preact';
import Styles from './styles.css';

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Jeanine White
      <small className={Styles.byline}>🚀 Built by Astro</small>
    </footer>
  );
}
export default Footer;
