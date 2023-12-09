import { tv } from "tailwind-variants";

import { TypeLayoutsProvider } from "@/types";

import { RenderComponentStyle } from "@/functions";

const StyledSection = tv({
  base: "text-cyan-800 text-[4.8rem] w-full text-center",
});

export const SectionRender = ({ children }: TypeLayoutsProvider) => {
  return RenderComponentStyle({
    asElement: "section",
    asStyle: StyledSection,
    children,
  });
};
