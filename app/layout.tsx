import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uzumaki",
  description:
    "A research hub in Japan to solve Ethereum's most critical problems",
  openGraph: {
    title: "Uzumaki",
    description:
      "A research hub in Japan to solve Ethereum's most critical problems",
    url: "https://uzumaki.house",
    siteName: "Uzumaki",
    type: "website",
    images: {
      url: "/opengraph-image.jpg",
      type: "image/jpg",
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    type: "website",
    title: "Uzumaki",
    description:
      "A research hub in Japan to solve Ethereum's most critical problems",
    url: "https://uzumaki.house",
    card: "summary_large_image",
    images: {
      url: "/opengraph-image.jpg",
      type: "image/jpg",
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>{/* Additional meta tags can be added here if necessary */}</head>
      <body
        className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
