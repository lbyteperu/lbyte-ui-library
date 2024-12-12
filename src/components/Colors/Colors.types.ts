import { ReactNode } from "react";

export interface ColorsProps {
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "gray";
  tone?:
    | "lightest"
    | "lighter"
    | "light"
    | "regular-light"
    | "regular"
    | "regular-dark"
    | "dark"
    | "darker"
    | "darkest";
  opacity?: "lighter" | "light" | "main" | "dark" | "darker";
  shadow?: "small" | "medium" | "large";
  children?: ReactNode;
  title: string;
}
