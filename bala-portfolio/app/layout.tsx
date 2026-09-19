import type { Metadata } from "next";
import { Urbanist, Google_Sans_Flex, Caveat, Jost } from "next/font/google";
import "./globals.css";
import bgGrid from "@/public/assets/bg_grid.jpg"

const urbanist = Urbanist({
  variable: "--font-latin-urbanist",
  subsets: ["latin"],
})

const sansFlex = Google_Sans_Flex({
  variable: "--font-google-sansflex",
  subsets: ["latin"],
  adjustFontFallback: false,
  fallback: ["system-ui", "arial"],
})

const caveat = Caveat({
  variable: "--font-latin-caveat",
  subsets: ["latin"]
})

const jost = Jost({
  variable: "--font-latin-jost",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Flutter MobileApp developer Portfolio",
  description: "Frontend-end Mobile app developer portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${sansFlex.variable} ${caveat.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${bgGrid.src})`, backgroundBlendMode: "lighten"}}>{children}</body>
    </html>
  );
}
