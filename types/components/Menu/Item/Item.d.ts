import React from "react";
export type ItemProps = {
    content: string;
    rounded?: boolean;
};
declare const Item: ({ content, rounded }: ItemProps) => React.JSX.Element;
export default Item;
