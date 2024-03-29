import React, { ReactElement } from "react";
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
declare const Header: ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => React.JSX.Element;
export default Header;
