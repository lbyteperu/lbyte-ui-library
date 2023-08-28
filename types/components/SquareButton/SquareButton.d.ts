import React, { ReactNode, ButtonHTMLAttributes } from "react";
export type SquareButtonSize = "small" | "medium" | "large" | "x-large";
export type ButtonStyleColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "SquareButton";
export type SquareButtonProps = {
    size?: SquareButtonSize;
    outline?: boolean;
    color: ButtonStyleColor;
    icon?: ReactNode;
    quiet?: boolean;
    className?: string;
};
export type SquareButtonHTMLAttributesProps = ButtonHTMLAttributes<HTMLElement> & SquareButtonProps;
/**
 * Default icon button
 */
declare const SquareButton: ({ size, outline, color, icon, quiet, onClick, className, }: SquareButtonHTMLAttributesProps) => React.JSX.Element;
export default SquareButton;
