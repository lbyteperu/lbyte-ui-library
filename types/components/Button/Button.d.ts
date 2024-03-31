import React, { ButtonHTMLAttributes } from "react";
import { ButtonProps } from "./Button.types";
export type ButtonHTMLAttributesProps = ButtonHTMLAttributes<HTMLElement> & ButtonProps;
/**
 * Default button
 */
declare const Button: ({ children, color, size, wrap, outline, quiet, onClick, }: ButtonHTMLAttributesProps) => React.JSX.Element;
export default Button;
