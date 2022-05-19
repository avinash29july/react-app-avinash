import React from "react";
import styles from './InputText.module.scss';

const InputText = React.forwardRef((props: { id: string; label: string; name: string; ref: React.LegacyRef<HTMLInputElement>; }, ref: React.LegacyRef<HTMLInputElement>) => {
  const inputLabelElement = <label htmlFor={props.id} className={styles.label}>{props.label}</label>;
  const inputElement = <input type="text" name={props.name} className={styles.input} ref={ref} id={props.id} autoComplete="off" />;
  return (
    <>
      {inputLabelElement}
      {inputElement}
    </>
  );
});

export default InputText;
