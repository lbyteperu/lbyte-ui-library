import classList from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export type ButtonHTMLAttributesProps = ButtonHTMLAttributes<HTMLElement> &
  ButtonProps;

/**
 * Default button
 */
const Button = ({
  children,
  color,
  size,
  wrap,
  outline,
  quiet,
  onClick,
}: ButtonHTMLAttributesProps) => {
  const buttonClassName = classList(
    styles.base,
    styles[`${color}`],
    size && styles[`${size}`],
    wrap && styles["wrap"],
    outline && styles[`outline-${color}`],
    outline && styles["outline"],
    quiet && styles["quiet"],
  );

  return (
    <button className={buttonClassName} role="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
