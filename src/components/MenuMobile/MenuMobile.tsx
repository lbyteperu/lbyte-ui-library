import React, { ReactNode, useState } from "react";
import styles from "./MenuMobile.module.css";
import { MenuIcon } from "../Icons";
import SquareButton from "../SquareButton";
import Drawer from "../Drawer/Drawer";

export type MenuMobileProps = {
  children?: ReactNode;
};

const MenuMobile = ({ children }: MenuMobileProps) => {
  const [open, setOpen] = useState(true);
  return (
    <menu className={styles.menu}>
      <SquareButton
        color="secondary"
        type="button"
        outline
        quiet
        size="medium"
        icon={<MenuIcon size="medium" />}
        onClick={() => setOpen((prevState) => !prevState)}
        className={styles.squareButton}
      />
      <Drawer
        open={open}
        mountOnEnter
        unmountOnExit
        setOpen={setOpen}
        appear="fromLeft"
      />
    </menu>
  );
};

export default MenuMobile;
