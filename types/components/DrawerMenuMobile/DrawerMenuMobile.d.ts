import React from "react";
export type DrawerMenuMobileProps = {
    children?: React.ReactNode;
    open?: boolean;
    className?: string;
    style?: React.CSSProperties;
    unmountOnExit?: boolean;
    mountOnEnter?: boolean;
    portalContainer?: Element | DocumentFragment;
    onClosed?: () => void;
    appearFrom?: "left" | "right" | "above" | "below";
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
declare function DrawerMenuMobile({ open, unmountOnExit, mountOnEnter, setOpen, portalContainer, appearFrom, }: DrawerMenuMobileProps): React.ReactPortal;
export default DrawerMenuMobile;
