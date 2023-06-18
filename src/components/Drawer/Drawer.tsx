import classList from "classnames";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./Drawer.module.css";
import Button from "../Button";
import Content from "./Content"


const Drawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{...styles}}
        unmountOnExit
      >
        <>
          {isOpen &&
            createPortal(<Content onClose={setIsOpen} />, document.body)}
        </>
      </CSSTransition>
      <Button
        color="primary"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        test
      </Button>
    </div>
  );
};

export default Drawer;
