import { useState } from "react";
import { Button, Input } from "../atoms";
import styles from "./ConfirmInput.module.css";

interface ConfirmInputProps {
  value: string;
  onChange?: (value: string) => void;
}

function ConfirmInput(props: ConfirmInputProps) {
  const { value: initialValue, onChange } = props;

  const [value, setValue] = useState(initialValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);

    onChange?.(event.target.value);
  }

  return (
    <div className={styles.ConfirmInput}>
      <Input type="text" border="warning" value={value} onChange={handleChange} />
      <Button>Confirm</Button>
    </div>
  )
}

export type { ConfirmInputProps };
export { ConfirmInput };