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
    title: "Uzumaki Research Hub",
    description:
      "A research hub in Japan to solve Ethereum's most critical problems.",
    url: "https://uzumaki.house", // Replace with your website URL
    siteName: "Uzumaki Research Hub",
    images: [
      {
        url: "https://private-user-images.githubusercontent.com/163550206/390667950-321f603f-6f77-4bb5-851b-9dd5bb7d59e9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // Replace with your OGP image URL
        width: 1200,
        height: 630,
        alt: "Uzumaki Research Hub",
      },
    ],
    type: "website",
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
