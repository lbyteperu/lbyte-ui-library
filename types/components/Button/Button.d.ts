import React, { ReactNode, ButtonHTMLAttributes } from "react";
export type ButtonColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
type ButtonProps = {
    children?: ReactNode;
    value?: string;
    outline?: boolean;
    color: ButtonColor;
    size?: ButtonSize;
    wrap?: boolean;
    quiet?: boolean;
};
export type ButtonHTMLAttributesProps = ButtonHTMLAttributes<HTMLElement> & ButtonProps;
export type ButtonSize = "small" | "medium" | "large";
/**
 * Default button
 */
declare const Button: ({ children, color, size, wrap, outline, quiet, onClick, }: ButtonHTMLAttributesProps) => React.JSX.Element;
export default Button;
