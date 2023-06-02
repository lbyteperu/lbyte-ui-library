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
  id?: string;
  anchor?: boolean;
  autoFocus?: boolean;
  children?: ReactNode;
  value?: string;
  circled?: boolean;
  dataFsExclude?: boolean;
  disabled?: boolean;
  quiet?: boolean;
  filled?: boolean;
  inverted?: boolean;
  buttonTag?: ButtonTag;
  "aria-haspopup"?: boolean;
  styleColor?: ButtonStyleColor;
  size?: ButtonSize;
  wrap?: boolean;
  href?: string;
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
  href,
}: ButtonProps) => {
  const buttonClassName = classList(
    styleColor === "link" ? "" : styles.base,
    styles[`${styleColor}`],
    styles[`storybook-button--${size}`],
    wrap ? styles["wrap"] : styles["no-wrap"]
  );

  return buttonTag === "link" ? (
    <a href={href} role="button" className={buttonClassName}>
      {children}
    </a>
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
