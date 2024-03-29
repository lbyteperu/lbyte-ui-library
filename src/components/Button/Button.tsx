import classList from "classnames";
import React, { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";

type ButtonProps = {
  children?: ReactNode;
  value?: string;
  outline?: boolean;
  color: ButtonColor;
  size?: ButtonSize;
  wrap?: boolean;
  quiet?: boolean;
};

export type ButtonHTMLAttributesProps = ButtonHTMLAttributes<HTMLElement> &
  ButtonProps;

export type ButtonSize = "small" | "medium" | "large";

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
