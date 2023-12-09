import type { Metadata } from "next";

import { TypeLayoutsProvider } from "@/types";

import { mohave } from "@/functions";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "CodeBoost Spider",
    template: "CodeBoost <|> $%",
  },
  description: "Projeto desafio do codeboost process.",
  icons: "/favicon.png",
};

export default function RootLayout({ children }: TypeLayoutsProvider) {
  return (
    <html lang="en">
      <body className={mohave.className}>{children}</body>
    </html>
  );
}
