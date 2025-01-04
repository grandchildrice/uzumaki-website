import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteInfo } from "@/lib/blog-helper";
import { Metadata } from "next";
import { Env } from "@/const/env";
import { Site } from "@/const/site";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const databaseId = process.env.NOTION_DATABASE_ACTIVITY_ID;

  if (!databaseId) {
    throw new Error("Internal error.");
  }

  const site = await getSiteInfo(databaseId);

  const title = site.title == "Activity" ? Site.title : site.title;
  const description =
    site.title == "Activity" ? Site.description : site.description;

  const metadata: Metadata = {
    metadataBase: new URL(Env.BaseUrl),
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: site.url,
      siteName: site.title,
      locale: site.locale,
      type: "website",
    },
  };
  return metadata;
}

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
