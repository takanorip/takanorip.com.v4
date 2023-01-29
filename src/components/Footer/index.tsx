import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>&copy; {new Date().getFullYear()} office takanorip</footer>
  );
}

export default Footer;
