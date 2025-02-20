import { forwardRef } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

type OmittedButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style">;

interface ButtonProps extends OmittedButtonProps {
  background?: 'normal' | 'warning';
}

function ButtonComponent(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const { children, background = 'normal', ...rest } = props;

  const className = classNames(styles.Button, {
    [styles[background]]: true,
  });

  return <button ref={ref} className={className} {...rest}>{children}</button>;
}

const Button = forwardRef(ButtonComponent);

export type { ButtonProps };
export { Button };
