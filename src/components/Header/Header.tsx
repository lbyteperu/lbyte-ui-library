import React from "react";
import styles from "./Header.module.css";
import { MenuIcon, IconSizes } from "../Icons";
export type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <MenuIcon size={IconSizes.xLarge} />
    </div>
    <div className={styles.menu}>menu</div>
    <div className={styles.login}>
      <MenuIcon size={IconSizes.xLarge} />
    </div>
  </header>
);

export default Header;
