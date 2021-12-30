import { h } from 'preact';
import Styles from './styles.module.scss';

const Button = ({ children }) => {
  return <span className={Styles.button}>{children}</span>;
}

export default Button;
