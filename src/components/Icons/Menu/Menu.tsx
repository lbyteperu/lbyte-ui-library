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

const Menu = ({ size }: IconProps) => {
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
        d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
        fill="currentColor"
      />
      <path
        d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
        fill="currentColor"
      />
      <path
        d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Menu;
