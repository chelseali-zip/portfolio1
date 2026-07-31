import { Nav } from "@/components/Nav";
import { RouteScrollTop } from "@/components/RouteScrollTop";
import { SmoothScroll } from "@/components/SmoothScroll";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HY Product Design Portfolio",
  description:
    "A product design portfolio focused on UX, interaction design, design systems, and AI-powered experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <RouteScrollTop />
        <Nav />
        {children}
      </body>
    </html>
  );
}
