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

export type ButtonTag = "link" | "button" | "input" | "submit" | "reset";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  children?: ReactNode;
  value?: string;
  outline?: boolean;
  buttonTag?: ButtonTag;
  styleColor: ButtonStyleColor;
  size?: ButtonSize;
  wrap?: boolean;
};

/**
 * Default button
 */
const Button = ({
  children,
  styleColor,
  size,
  wrap,
  buttonTag,
  value,
  outline,
}: ButtonProps) => {
  const buttonClassName = classList(
    styles.base,
    styles[`${styleColor}`],
    styles[`storybook-button--${size}`],
    wrap ? styles["wrap"] : styles["no-wrap"],
    outline && styles[`outline-${styleColor}`],
    outline && styles['outline'],
  );

  return buttonTag === "link" ? (
    <button className={buttonClassName} role="button">
      {children}
    </button>
  ) : buttonTag === "button" ? (
    <button className={buttonClassName} role="button">
      {children}
    </button>
  ) : buttonTag === "input" ? (
    <input
      type="button"
      role="button"
      className={buttonClassName}
      value={value}
    />
  ) : buttonTag === "submit" ? (
    <input
      type="submit"
      value={value}
      role="button"
      className={buttonClassName}
    />
  ) : buttonTag === "reset" ? (
    <input
      type="reset"
      value={value}
      role="button"
      className={buttonClassName}
    />
  ) : null;
};

export default Button;
