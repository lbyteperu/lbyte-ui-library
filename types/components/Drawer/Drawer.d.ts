import React from "react";
export type DrawerProps = {
  children?: React.ReactNode;
  open?: boolean;
  className?: string;
  style?: React.CSSProperties;
  unmountOnExit?: boolean;
  mountOnEnter?: boolean;
  portalContainer?: Element | DocumentFragment;
  onClosed?: () => void;
  appear?: "fromLeft" | "fromRight" | "fromAbove" | "fromBelow";
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
declare function Drawer({
  children,
  open,
  unmountOnExit,
  mountOnEnter,
  setOpen,
  portalContainer,
  appear,
}: DrawerProps): React.ReactPortal;
export default Drawer;
