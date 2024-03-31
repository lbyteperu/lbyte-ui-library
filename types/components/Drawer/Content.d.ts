import React from "react";
export type ModalProps = {
    onClose: () => void;
};
declare const Content: ({ onClose }: ModalProps) => React.JSX.Element;
export default Content;
