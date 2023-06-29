import React, { ReactNode, useState } from "react";
import styles from "./MenuMobile.module.css";
import { MenuGridIcon } from "../Icons";
import IconButton from "../IconButton";
import Drawer from "../Drawer/Drawer";

export type MenuMobileProps = {
  children?: ReactNode;
};

const MenuMobile = ({ children }: MenuMobileProps) => {
  const [open, setOpen] = useState(true);
  return (
    <menu className={styles.menu}>
      <IconButton
        color="secondary"
        type="button"
        outline
        quiet
        size="medium"
        icon={<MenuGridIcon size="medium" />}
        onClick={() => setOpen((prevState) => !prevState)}
      />
      <Drawer
        open={open}
        mountOnEnter
        unmountOnExit
        setOpen={setOpen}
        appearFrom="left"
      />
    </menu>
  );
};

export default MenuMobile;
