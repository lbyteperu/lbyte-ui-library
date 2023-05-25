import React, { ReactNode } from "react";
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
declare const Button: ({ children, styleColor }: ButtonProps) => React.JSX.Element;
export default Button;
