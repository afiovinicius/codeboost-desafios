import { TypeLayoutRoot } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form"
};

export default function RootLayout({ children }: TypeLayoutRoot) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
