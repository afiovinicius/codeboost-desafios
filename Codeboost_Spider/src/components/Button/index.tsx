import { VariantProps } from "tailwind-variants";

import { RenderComponentStyle } from "@/functions";

import { StyledBodyButton } from "./styles";

type ButtonVariants = VariantProps<typeof StyledBodyButton>;

interface ButtonProps
  extends ButtonVariants,
    Partial<Omit<HTMLButtonElement, "children" | "style">> {
  children: React.ReactNode;
}

export const Button = ({ children, size, styles, className }: ButtonProps) => {
  return RenderComponentStyle({
    asElement: "button",
    asStyle: StyledBodyButton({
      size,
      styles,
      className,
    }),
    children,
  });
};
