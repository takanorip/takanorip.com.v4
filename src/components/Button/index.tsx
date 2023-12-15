import { FC, ReactNode } from "react";
import cx from "classnames";
import styles from "./styles.module.css";

type Props = {
  to: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

const Button: FC<Props> = ({ to, children, icon, className }) => {
  return (
    <a className={cx(styles.button, className)} href={to}>
      {children}
      {icon}
    </a>
  );
};

export default Button;
