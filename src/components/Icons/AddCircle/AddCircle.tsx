import React from "react";

export enum IconSizes {
  xxSmall = "xxSmall",
  xSmall = "xSmall",
  small = "small",
  large = "large",
  xLarge = "xLarge",
  xxLarge = "xxLarge",
}

enum NumberSize {
  xxSmall = "8",
  xSmall = "16",
  small = "24",
  large = "32",
  xLarge = "40",
  xxLarge = "48",
}

export type IconProps = {
  width?: string;
  height?: string;
  size: IconSizes;
};

const AddCircle = ({ size }: IconProps) => {
  const sizeSVG =
    size === IconSizes.xxSmall
      ? NumberSize.xxSmall
      : size === IconSizes.xSmall
      ? NumberSize.xSmall
      : size === IconSizes.small
      ? NumberSize.small
      : size === IconSizes.large
      ? NumberSize.large
      : size === IconSizes.xLarge
      ? NumberSize.xLarge
      : size === IconSizes.xxLarge
      ? NumberSize.xxLarge
      : NumberSize.small;
  return (
    <svg
      width={sizeSVG}
      height={sizeSVG}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AddCircle;
