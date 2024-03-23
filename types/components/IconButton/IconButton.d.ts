import React, { ReactNode, ButtonHTMLAttributes } from "react";
export type IconButtonSize = "small" | "medium" | "large" | "x-large";
export type ButtonStyleColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "IconButton";
export type IconButtonProps = {
  size?: IconButtonSize;
  outline?: boolean;
  color: ButtonStyleColor;
  icon?: ReactNode;
  quiet?: boolean;
};
export type IconButtonHTMLAttributesProps = ButtonHTMLAttributes<HTMLElement> &
  IconButtonProps;
/**
 * Default icon button
 */
declare const IconButton: ({
  size,
  outline,
  color,
  icon,
  quiet,
  onClick,
}: IconButtonHTMLAttributesProps) => React.JSX.Element;
export default IconButton;
