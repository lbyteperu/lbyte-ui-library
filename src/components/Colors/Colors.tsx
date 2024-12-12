import classList from "classnames";
import React from "react";
import styles from "./Colors.module.css";
import { ColorsProps } from "./Colors.types";

export type ColorsHTMLProps = ColorsProps;

const Colors = ({
  color,
  tone,
  children,
  title,
  opacity,
  shadow,
}: ColorsHTMLProps) => {
  const baseClassName = classList(
    styles.base,
    shadow && styles[`shadow-${shadow}`],
  );
  const colorsClassName = classList(
    styles.colorCode,
    color && styles[`${color}`],
    tone && styles[`${color}-${tone}`],
    opacity && styles[`${opacity}`],
    opacity && styles[`opacity-${opacity}`],
  );
  return (
    <>
      <div className={baseClassName}>
        <div className={colorsClassName}>{children}</div>
        <div className={styles.content}>{title}</div>
      </div>
    </>
  );
};

export default Colors;
