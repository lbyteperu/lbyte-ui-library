import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  value?: string;
  outline?: boolean;
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  size?: "small" | "medium" | "large";
  wrap?: boolean;
  quiet?: boolean;
}
