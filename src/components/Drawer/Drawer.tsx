import classList from "classnames";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./Drawer.module.css";
import Content from "./Content";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import IconButton from "../IconButton/IconButton";
import { AddCircle } from "../Icons/AddCircle";

export type DrawerProps = {
  children?: React.ReactNode;
  open: boolean;
  className?: string;
  style?: React.CSSProperties;
  unmountOnExit?: boolean;
  mountOnEnter?: boolean;
  portalContainer?: Element | DocumentFragment;
  onClosed?: () => void;
  appearFrom?: "left" | "right" | "above" | "below";
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const TrasitionOptions: Record<string, CSSTransitionClassNames> = {
  left: {
    enter: styles.fromLeftEnter,
    enterActive: styles.fromLeftEnterActive,
    enterDone: styles.fromLeftEnterDone,
    exit: styles.fromLeftExit,
    exitActive: styles.fromLeftExitActive,
    exitDone: styles.fromLeftExitDone,
  },
  right: {
    enter: styles.fromRightEnter,
    enterActive: styles.fromRightEnterActive,
    enterDone: styles.fromRightEnterDone,
    exit: styles.fromRightExit,
    exitActive: styles.fromRightExitActive,
    exitDone: styles.fromRightExitDone,
  },
  above: {
    enter: styles.fromAboveEnter,
    enterActive: styles.fromAboveEnterActive,
    enterDone: styles.fromAboveEnterDone,
    exit: styles.fromAboveExit,
    exitActive: styles.fromAboveExitActive,
    exitDone: styles.fromAboveExitDone,
  },
  below: {
    enter: styles.fromBelowEnter,
    enterActive: styles.fromBelowEnterActive,
    enterDone: styles.fromBelowEnterDone,
    exit: styles.fromBelowExit,
    exitActive: styles.fromBelowExitActive,
    exitDone: styles.fromBelowExitDone,
  },
};

function Drawer({
  children,
  open,
  unmountOnExit,
  mountOnEnter,
  setOpen,
  portalContainer = document.body,
  appearFrom = "left",
}: DrawerProps) {
  const nodeRef = useRef(null);

  const { fromLeft, fromRight, fromAbove, fromBelow } = styles;
  const mainCss =
    appearFrom === "left"
      ? fromLeft
      : appearFrom === "right"
      ? fromRight
      : appearFrom === "above"
      ? fromAbove
      : appearFrom === "below"
      ? fromBelow
      : "left";

  return ReactDOM.createPortal(
    <CSSTransition
      in={open}
      nodeRef={nodeRef}
      timeout={300}
      classNames={TrasitionOptions[appearFrom]}
      unmountOnExit={unmountOnExit}
      mountOnEnter={mountOnEnter}
      onEnter={() => console.log("on enter")}
      onExited={() => console.log("on exited")}
    >
      <div ref={nodeRef} className={mainCss}>
        <IconButton
          color="primary"
          icon={<AddCircle size="small" />}
          size="small"
          onClick={() => setOpen && setOpen(false)}
        />
        <p>This alert message is being transitioned in and out of the DOM.</p>
      </div>
    </CSSTransition>,
    portalContainer
  );
}

export default Drawer;
