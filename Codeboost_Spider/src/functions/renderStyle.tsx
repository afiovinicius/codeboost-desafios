import React from "react";

import { TypeRenderComponentStyle } from "@/types";

export const RenderComponentStyle = ({
  asElement,
  asStyle,
  children,
}: TypeRenderComponentStyle) => {
  const computedStyle =
    typeof asStyle === "function" ? (asStyle as () => string)() : asStyle;
  return React.createElement(asElement, { className: computedStyle }, children);
};
