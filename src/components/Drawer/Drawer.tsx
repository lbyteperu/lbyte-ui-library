import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./Drawer.module.css";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import IconButton from "../IconButton/IconButton";
import { CloseIcon } from "../Icons";

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

const trasitionOptions: Record<string, CSSTransitionClassNames> = {
  fromLeft: {
    enter: styles.fromLeftEnter,
    enterActive: styles.fromLeftEnterActive,
    enterDone: styles.fromLeftEnterDone,
    exit: styles.fromLeftExit,
    exitActive: styles.fromLeftExitActive,
    exitDone: styles.fromLeftExitDone,
  },
  fromRight: {
    enter: styles.fromRightEnter,
    enterActive: styles.fromRightEnterActive,
    enterDone: styles.fromRightEnterDone,
    exit: styles.fromRightExit,
    exitActive: styles.fromRightExitActive,
    exitDone: styles.fromRightExitDone,
  },
  fromAbove: {
    enter: styles.fromAboveEnter,
    enterActive: styles.fromAboveEnterActive,
    enterDone: styles.fromAboveEnterDone,
    exit: styles.fromAboveExit,
    exitActive: styles.fromAboveExitActive,
    exitDone: styles.fromAboveExitDone,
  },
  fromBelow: {
    enter: styles.fromBelowEnter,
    enterActive: styles.fromBelowEnterActive,
    enterDone: styles.fromBelowEnterDone,
    exit: styles.fromBelowExit,
    exitActive: styles.fromBelowExitActive,
    exitDone: styles.fromBelowExitDone,
  },
};

function Drawer({
  open = false,
  unmountOnExit,
  mountOnEnter,
  setOpen,
  portalContainer = document.body,
  appear = "fromLeft",
}: DrawerProps) {
  const nodeRef = useRef(null);

  return ReactDOM.createPortal(
    <CSSTransition
      in={open}
      nodeRef={nodeRef}
      timeout={300}
      classNames={trasitionOptions[appear]}
      unmountOnExit={unmountOnExit}
      mountOnEnter={mountOnEnter}
      onEnter={() => console.log("on enter")}
      onExited={() => console.log("on exited")}
    >
      <div ref={nodeRef} className={styles[appear]}>
        <IconButton
          color="primary"
          icon={<CloseIcon size="small" />}
          size="small"
          onClick={() => setOpen && setOpen(false)}
        />
        <p>This alert message is being transitioned in and out of the DOM.</p>
      </div>
    </CSSTransition>,
    portalContainer,
  );
}

export default Drawer;
