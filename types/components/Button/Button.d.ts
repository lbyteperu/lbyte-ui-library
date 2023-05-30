import React, { ReactNode } from "react";
export type ButtonStyleColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
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
declare const Button: ({ children, styleColor, size, wrap }: ButtonProps) => React.JSX.Element;
export default Button;
