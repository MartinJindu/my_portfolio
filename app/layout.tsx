import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";

const outfit = Outfit({
  weight: ["200", "500"],
  subsets: ["latin"],
});

// Portfolio information
const portfolioInfo = {
  name: "Chijindu Okpalanweze",
  title: "Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. View my projects and skills.",
  url: process.env.NEXT_PUBLIC_URL,
  image: `${process.env.NEXT_PUBLIC_URL}/opengraph-image.png`,
  twitterHandle: "@MartinJindu",
  keywords: [
    "full stack developer",
    "react developer",
    "react native developer",
    "next.js developer",
    "typescript developer",
    "web developer portfolio",
    "software engineer",
    "frontend developer",
    "backend developer",
    "Chijindu Okpalanweze Portfolio",
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${portfolioInfo.name} | ${portfolioInfo.title}`,
    template: `%s | ${portfolioInfo.name}`,
  },
  description: portfolioInfo.description,

  authors: [{ name: portfolioInfo.name, url: portfolioInfo.url }],
  creator: portfolioInfo.name,

  keywords: portfolioInfo.keywords,
  publisher: "Chijindu Okpalanweze",
  applicationName: "Chijindu's Portfolio",

  // Canonical URL
  metadataBase: new URL(portfolioInfo.url as string),
  alternates: {
    canonical: "/",
  },

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioInfo.url,
    title: `${portfolioInfo.name} | ${portfolioInfo.title}`,
    description: portfolioInfo.description,
    siteName: `${portfolioInfo.name} Portfolio`,
    images: [
      {
        url: portfolioInfo.image,
        width: 1904,
        height: 928,
        alt: `${portfolioInfo.name} - ${portfolioInfo.title}`,
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: `${portfolioInfo.name} | ${portfolioInfo.title}`,
    description: portfolioInfo.description,
    creator: portfolioInfo.twitterHandle,
    images: [portfolioInfo.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
