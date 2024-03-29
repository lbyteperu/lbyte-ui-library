import React, { ReactElement, useState } from "react";
import styles from "./Header.module.css";
import IconButton from "../IconButton";
import { MenuGridIcon } from "../Icons";
import Drawer from "../Drawer";
export type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  icon?: ReactElement;
}

const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  function handleIconButtonClick() {
    setOpenMenu(!openMenu);
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <IconButton
          color="secondary"
          icon={<MenuGridIcon height={32} width={32} />}
          size="medium"
          onClick={handleIconButtonClick}
        />
        <Drawer
          open={openMenu}
          setOpen={setOpenMenu}
          appear="fromLeft"
          mountOnEnter
          unmountOnExit
        />
      </div>
      <div className={styles.login}>
        <MenuGridIcon width={32} height={32} />
      </div>
    </header>
  );
};

export default Header;
