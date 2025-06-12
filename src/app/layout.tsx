import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "광덕방범대",
  description: "광덕독스 - 광덕방범대에 오신걸 환영합니다.",
  openGraph: {
    images: "https://gwangdeok-docs.netlify.app/og-image.png",
    type: "website",
    locale: "ko_KR",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
