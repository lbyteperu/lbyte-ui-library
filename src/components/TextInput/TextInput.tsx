import classList from "classnames";
import React, { InputHTMLAttributes } from "react";
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

export type TextInputSize = "small" | "medium" | "large";

interface TextInputProps {
  color?: TextInputColor;
  placeholder?: string;
  fontSize?: TextInputSize;
  onClick?: () => void;
  value: string;
}

export type InputHTMLAttributesProps = InputHTMLAttributes<HTMLElement> &
  TextInputProps;

const TextInput = ({
  color,
  fontSize,
  value,
  onClick,
  placeholder,
}: InputHTMLAttributesProps) => {
  const inputClassName = classList(
    styles.base,
    styles[`${color}`],
    styles[`${fontSize}`],
  );
  const placeHolderDefault = "type something here...";
  const placeHolderInput = placeholder ? placeholder : placeHolderDefault;

  return (
    <input
      type="text"
      role="textbox"
      className={inputClassName}
      defaultValue={value}
      onClick={onClick}
      placeholder={placeHolderInput}
    />
  );
};

export default TextInput;
