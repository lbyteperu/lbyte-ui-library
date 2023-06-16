import classList from "classnames";
import React, { ReactNode } from "react";
import styles from "./MenuMobile.module.css";
import { MenuGridIcon } from "../Icons";
import IconButton from "../IconButton";
// import Modal, { useModal } from "../Modal";

export type MenuMobileProps = {
  children?: ReactNode;
};

const MenuMobile = ({ children }: MenuMobileProps) => {

  return (
    <menu className={styles.menu}>
      <IconButton
        color="secondary"
        type="button"
        outline
        quiet
        size="medium"
        icon={<MenuGridIcon size="medium" />}
      />
    </menu>
  );
};

export default MenuMobile;
