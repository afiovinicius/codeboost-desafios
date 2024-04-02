import { tv } from "tailwind-variants";

import { RenderComponentStyle } from "@/functions";

const StyledSection = tv({
  base: "text-cyan-800 text-[4.8rem] w-full text-center",
  variants: {
    color: {
      one: "bg-slate-500",
      two: "bg-slate-600",
    },
  },
});

export const SectionRender = StyledSection;

export const SectionRenderTwo = RenderComponentStyle({
  asElement: "section",
  asStyle: StyledSection.base,
});

export const SectionRenderThree = RenderComponentStyle({
  asElement: "section",
  asStyle: StyledSection.base,
});
