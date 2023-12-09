import { tv } from "tailwind-variants";

export const StyledBodyButton = tv({
  base: "text-light rounded-[3.2rem] text-center text-base font-medium font-['Roboto Flex'] leading-normal",
  variants: {
    size: {
      sm: "px-[2.4rem] py-[0.8rem] max-h-10",
      md: "px-[3.2rem] py-[1.4rem] max-h-12",
      lg: "px-[4rem] py-[1.6rem] ",
    },
    styles: {
      solid: "bg-oSolid ",
      outline: " border-2 border-borderGrey",
    },
  },
});
