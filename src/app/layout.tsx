import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Hans Jiang | Portfolio",
  metadataBase: new URL("https://hansjiang.com"), // TODO: Update with your actual domain
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Hans Jiang", url: "https://github.com/HansJiang105" },
    { name: "江哲宇", url: "https://github.com/HansJiang105" },
  ],
  description: "Hans Jiang's personal portfolio website, 江哲宇的个人网站",
  openGraph: {
    title: "Hans Jiang | Portfolio",
    description: "Hans Jiang's personal portfolio - Math & CS student at MIT, 江哲宇的个人网站",
    images: [
      {
        url: "/photo.jpeg",
        alt: "Hans Jiang's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
