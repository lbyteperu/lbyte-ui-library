import classList from "classnames";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonStyleColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";

export type ButtonType = "button" | "submit" | "reset";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  id?: string;
  anchor?: boolean;
  autoFocus?: boolean;
  children?: ReactNode;
  circled?: boolean;
  dataFsExclude?: boolean;
  disabled?: boolean;
  quiet?: boolean;
  filled?: boolean;
  inverted?: boolean;
  type?: ButtonType;
  "aria-haspopup"?: boolean;
  styleColor?: ButtonStyleColor;
  size?: ButtonSize;
  wrap?: boolean;
};

/**
 * Default button
 */
const Button = ({ children, styleColor, size, wrap }: ButtonProps) => {
  const buttonClassName = classList(
    styleColor === "link" ? "" : styles.base,
    styles[`${styleColor}`],
    styles[`storybook-button--${size}`],
    wrap ? styles["wrap"] : styles["no-wrap"]
  );

  return <button className={buttonClassName}>{children}</button>;
};

export default Button;
