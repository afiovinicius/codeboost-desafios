import React from "react";

import { TypeRenderComponentStyle } from "@/types";

export const RenderComponentStyle = ({
  asElement,
  asStyle,
  children,
}: TypeRenderComponentStyle) => {
  let computedStyle = "";

  if (typeof asStyle === "function") {
    computedStyle = asStyle();
  } else {
    computedStyle = asStyle;
  }

  return React.createElement(asElement, { className: computedStyle }, children);
};
