import React from "react";
import styles from "./Header.module.css";
import { MenuIcon } from "../Icons";
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
      <MenuIcon width={32} height={32}/>
    </div>
    <div className={styles.menu}>menu</div>
    <div className={styles.login}>
      <MenuIcon width={32} height={32} />
    </div>
  </header>
);

export default Header;
