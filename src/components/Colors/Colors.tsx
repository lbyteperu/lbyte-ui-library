import classList from "classnames";
import React from "react";
import styles from "./Colors.module.css";
import { ColorsProps } from "./Colors.types";

export type ColorsHTMLProps = ColorsProps;

const Colors = ({ color, tone, children, title, opacity }: ColorsHTMLProps) => {
  const colorsClassName = classList(
    styles.colorCode,
    color && styles[`${color}`],
    tone && styles[`primary-${tone}`],
    opacity && styles[`${opacity}`],
    opacity && styles[`opacity-${opacity}`],
  );
  return (
    <>
      <div className={styles.base}>
        <div className={colorsClassName}>{children}</div>
        <div className={styles.content}>{title}</div>
      </div>
    </>
  );
};

export default Colors;
