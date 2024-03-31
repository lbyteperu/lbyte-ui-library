import React, { ReactNode } from "react";
export type LinkSize = "small" | "medium" | "large";
export type ButtonStyleColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
export type LinkProps = {
    children?: ReactNode;
    href: string;
    size?: LinkSize;
    outline?: boolean;
    styleColor: ButtonStyleColor;
};
/**
 * Default button
 */
declare const Link: ({ children, href, size, outline, styleColor }: LinkProps) => React.JSX.Element;
export default Link;
