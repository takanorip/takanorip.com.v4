import { h } from 'preact';
import Styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={Styles.footer}>&copy; {new Date().getFullYear()} office takanorip</footer>
  );
}

export default Footer;
