import React from "react";
import styles from "./Content.module.css";

export type ModalProps = {
  onClose: () => void;
};

const Content = () => {
  return (
    <div className={styles.content}>
      <div>
        <div>I`&apos;`m a modal dialog</div>
        <button>Close</button>
      </div>
    </div>
  );
};

export default Content;
