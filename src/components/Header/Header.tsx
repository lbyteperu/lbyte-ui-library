import React from "react";
import classList from "classnames";
import Button from "../Button";
import styles from "./Header.module.css";
import { Menu, IconSizes } from "../Icons";
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
    <div className={styles.logo}>logo</div>
    <div className={styles.menu}>menu</div>
    <div className={styles.login}><Menu size={IconSizes.xLarge}/></div>
  </header>
);

export default Header;
