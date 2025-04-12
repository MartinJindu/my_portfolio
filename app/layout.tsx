import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NavbarApp from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const outfit = Outfit({
  weight: ["200", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chijindu Okpalanweze",
  description: "Chijindu Okpanalweze Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-gray-900 text-white scroll-smooth scrollbar-hide "
    >
      <body
        className={`${outfit.className} antialiased  flex flex-col mx-auto `}
      >
        <nav>
          <NavbarApp />
        </nav>

        <main className="min-h-screen w-full   ">
          {children}
          <Toaster position="top-center" richColors />
        </main>

        <Footer />
      </body>
    </html>
  );
}
