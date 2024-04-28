import classList from "classnames";
import React, { ReactNode, InputHTMLAttributes } from "react";
import styles from "./TextInput.module.css";

export type TextInputColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";

type TextInputProps = {
  children?: ReactNode;
};

export type InputHTMLAttributesProps = InputHTMLAttributes<HTMLElement> &
  TextInputProps;

export type TextInputSize = "small" | "medium" | "large";

/**
 * Default button
 */
const TextInput = ({
  color,
  size,
  value,
  onClick,
  type,
  id,
}: InputHTMLAttributesProps) => {
  const inputClassName = classList(
    styles.base,
    styles[`${color}`],
    size && styles[`${size}`],
  );

  return (
    <input
      type={type ? type : "text"}
      role="text"
      className={inputClassName}
      defaultValue={value}
      onClick={onClick}
      id={id}
      placeholder="testing"
    />
  );
};

export default TextInput;
