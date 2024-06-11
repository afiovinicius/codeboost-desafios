import type { Metadata } from "next";

import { TypeLayoutRoot } from "@/types";

import { mohave, roboto } from "@/functions";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "CodeBoost Spider",
    template: "CodeBoost | %s",
  },
  description: "Projeto desafio do codeboost.",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }: TypeLayoutRoot) {
  return (
    <html lang="en">
      <body className={`${mohave.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
