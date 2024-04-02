import type { Metadata } from "next";

import { TypeLayoutsProvider } from "@/types";

import { mohave, roboto } from "@/functions";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "CodeBoost Spider",
    template: "CodeBoost <|> $%",
  },
  description: "Projeto desafio do codeboost.",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }: TypeLayoutsProvider) {
  return (
    <html lang="en">
      <body className={`${mohave.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
