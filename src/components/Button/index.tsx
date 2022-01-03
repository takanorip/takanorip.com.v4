import { h, FunctionComponent, ComponentChildren } from 'preact';
import cx from 'classnames';
import Styles from './styles.module.css';

type Props = {
  to: string;
  icon: ComponentChildren;
  className: string;
};

const Button: FunctionComponent<Props> = ({ to, children, icon, className }) => {
  return <a className={cx(Styles.button, className)} href={to}>{children}{icon}</a>;
}

export default Button;
