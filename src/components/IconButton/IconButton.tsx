import classList from "classnames";
import React, { ReactNode } from "react";
import styles from "./IconButton.module.css";

export type IconButtonSize = "small" | "medium" | "large";

export type ButtonStyleColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "IconButton"

export type IconButtonProps = {
  children?: ReactNode
  href?: string
  size?: IconButtonSize
  outline?: boolean
  styleColor: ButtonStyleColor
  icon?: ReactNode
  quiet?: boolean
};

/**
 * Default button
 */
const IconButton = ({ children, href, size, outline, styleColor, icon, quiet }: IconButtonProps) => {
  const IconButtonClassname = classList(
    styles.base,
    styles[`${styleColor}`],
    styles[`storybook-button--${size}`],
    outline && styles[`outline-${styleColor}`],
    outline && styles["outline"],
    quiet && styles["quiet"]
  );

  return (
    <button className={IconButtonClassname} role="button">
      {icon}
    </button>
  );
};

export default IconButton;
