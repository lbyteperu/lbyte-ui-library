import React, { ReactNode } from "react";
export type MenuProps = {
    items: string[];
    children?: ReactNode;
};
declare const Menu: ({ items, children }: MenuProps) => React.JSX.Element;
export default Menu;
