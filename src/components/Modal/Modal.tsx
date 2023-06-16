import classList from "classnames";
import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";
import styles from "./Modal.module.css";
import { MenuIcon } from "../Icons";
import Button from "../Button";

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Modal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const nodeRef = useRef(null);

  return (
    <>
      <Transition nodeRef={nodeRef} in={true} timeout={duration}>
        {isOpen && (
          <div className={styles.modal} role="dialog">
            {"testing content asd jasldf asjdf lkasdj flasd"}
            <button>testing</button>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Modal;
