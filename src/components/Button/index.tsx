import { h, FunctionComponent } from 'preact';
import Styles from './styles.module.css';

type Props = {
  to: string;
};

const Button: FunctionComponent<Props> = ({ to, children }) => {
  return <a className={Styles.button} href={to}>{children}</a>;
}

export default Button;
