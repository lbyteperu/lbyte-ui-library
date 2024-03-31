import React, { ReactNode, ButtonHTMLAttributes } from "react";
export type InputButtonColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
type InputButtonProps = {
    children?: ReactNode;
    outline?: boolean;
    color?: InputButtonColor;
    size?: InputButtonSize;
    wrap?: boolean;
    quiet?: boolean;
};
export type InputButtonHTMLAttributesProps = ButtonHTMLAttributes<HTMLElement> & InputButtonProps;
export type InputButtonSize = "small" | "medium" | "large";
/**
 * Default button
 */
declare const InputButton: ({ color, size, wrap, value, outline, quiet, onClick, type, id, }: InputButtonHTMLAttributesProps) => React.JSX.Element;
export default InputButton;
