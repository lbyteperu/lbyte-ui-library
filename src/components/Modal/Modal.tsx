import classList from "classnames";
import React, { forwardRef, ReactNode, ComponentPropsWithRef } from "react";
import styles from "./Modal.module.css";
import { MenuIcon } from "../Icons";
import Button from "../Button";

type ModalProps = ComponentPropsWithRef<"dialog"> & {
  onClose: () => void;
  children: ReactNode;
};

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, onClose, ...resProps }, ref) => {
    return (
      <dialog ref={ref} {...resProps}>
        <Button color="primary" onClick={onClose}>&times;</Button>
        {children}
      </dialog>
    );
  }
);

export function useModal() {
  const ref = React.useRef<HTMLDialogElement>(null);
  const onOpen = () => ref.current?.showModal();
  const onClose = () => {
    ref!.current!.className = "close";
    setTimeout(() => {
      ref!.current!.close();
      ref!.current!.className = "";
    }, 300); // matching css animation timing
  };

  return { ref, onOpen, onClose };
}


export default Modal;
