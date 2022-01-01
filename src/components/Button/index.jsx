import { h } from 'preact';
import Styles from './styles.css';

const Button = ({ children }) => {
  return <span className={Styles.button}>{children}</span>;
}

export default Button;
