import { Mohave, Roboto } from "next/font/google";

export const mohave = Mohave({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mohave",
  weight: ["400", "500", "600", "700"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});
