import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import "@/app/globals.css"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Tait van Strien",
  description: "Personal website for Tait van Strien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
