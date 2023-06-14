import classList from "classnames";
import React, { ReactNode } from "react";
import styles from "./MenuMobile.module.css";
import { MenuGridIcon } from "../Icons";
import IconButton from "../IconButton";
import Modal, { useModal } from "../Modal";

export type MenuMobileProps = {
  children?: ReactNode;
};

const MenuMobile = ({ children }: MenuMobileProps) => {
  const { ref, onOpen, onClose } = useModal();

  return (
    <menu className={styles.menu}>
      <IconButton
        color="secondary"
        type="button"
        outline
        quiet
        size="medium"
        icon={<MenuGridIcon size="medium" />}
        onClick={onOpen}
      />
      <Modal ref={ref} onClose={onClose}>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
      </Modal>
    </menu>
  );
};

export default MenuMobile;
