import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "Digital Solutions for Every Business";
let description = "Solve your problems with ButterBeer.io ";
let ogimage = "https://firebasestorage.googleapis.com/v0/b/digifybiz-899f5.appspot.com/o/OGimage.jpg?alt=media&token=930605e0-d8d6-4f3e-9675-40c3efd1c6b9";
let sitename = "ButterBeer.io";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.butterbeer.io'),
  title,
  description,
  icons: {
    icon: "/digify-favicon.png",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://butter-beer.vercel.app",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#17181C] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
