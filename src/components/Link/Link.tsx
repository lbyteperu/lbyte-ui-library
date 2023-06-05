import classList from "classnames";
import React, { ReactNode } from "react";
import styles from "./Link.module.css";

export type LinkProps = {
  children?: ReactNode;
  href?: string;
};

/**
 * Default button
 */
const Link = ({
  children,
  href,
}: LinkProps) => {

  const linkClassname = classList(styles.link);

  return (
    <a href={href} role="link" className={linkClassname}>
      {children}
    </a>
  );
  
};

export default Link;
