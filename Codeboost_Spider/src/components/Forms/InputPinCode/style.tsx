import { tv } from "tailwind-variants";

export const StyledBodyInputCodePin = tv({
  base: "w-fit h-14 p-2 justify-center items-center gap-2 inline-flex",
  slots: {
    inputPin:
      "w-10 h-10 p-2 rounded border border-#ADC3A9 justify-center items-center inline-flex text-center text-#ADC3A9  text-lg font-normal font-roboto tracking-tight",
  },
});

export const BodyInputCodePin = StyledBodyInputCodePin;
