import { forwardRef } from "react";
import styles from "./Input.module.css";
import classNames from "classnames";

type OmittedInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "style">;

interface InputProps extends OmittedInputProps {
  border?: 'normal' | 'warning';
}

function InputComponent(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const { border = 'normal', ...rest } = props;

  const className = classNames(styles.Input, {
    [styles[border]]: true,
  });

  return <input ref={ref} className={className} {...rest} />;
}

const Input = forwardRef(InputComponent);

export type { InputProps };
export { Input };