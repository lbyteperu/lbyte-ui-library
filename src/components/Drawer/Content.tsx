import React from "react";
import styles from './Content.module.css'

export type ModalProps = {
  onClose: any;
};

const Content =({ onClose }: ModalProps) => {
  return (
    <div className={styles.content}>
      <div>
        <div>I'm a modal dialog</div>
        <button
          onClick={() => {
            onClose(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Content;