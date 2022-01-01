import { h, FunctionComponent, ComponentChildren } from 'preact';
import Styles from './styles.module.css';

type Props = {
  to: string;
  icon: ComponentChildren;
};

const Button: FunctionComponent<Props> = ({ to, children, icon }) => {
  return <a className={Styles.button} href={to}>{children}{icon}</a>;
}

export default Button;
