import classList from "classnames";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
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
  type?: "button" | "submit" | "reset";
  "aria-haspopup"?: boolean;
  styleColor?: "primary" | "secondary" | "success";
};

/**
 * Default button
 */
const Button = ({ children, styleColor }: ButtonProps) => {
  const buttonClassName = classList(styles.base, styles[`${styleColor}`]);

  return <button className={buttonClassName}>{children}</button>;
};

export default Button;