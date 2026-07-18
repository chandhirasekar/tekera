import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tekera.in"),
  title: "Tekera | Authorized Tekla Training Center in Tamil Nadu",
  description: "Achieve a successful career as a Tekla Structures expert by training at the Tekera Training Center, where we assist you to secure a valuable job placement. Over 180+ placements.",
  keywords: ["Tekla training Tamil Nadu", "Tekla Structures course", "structural steel detailing training", "BIM modeler courses", "Tekla certification India"],
  openGraph: {
    title: "Tekera | Authorized Tekla Training Center in Tamil Nadu",
    description: "Achieve a successful career as a Tekla Structures expert by training at the Tekera Training Center, where we assist you to secure a valuable job placement. Over 180+ placements.",
    url: "https://www.tekera.in",
    siteName: "Tekera Training Center",
    images: [
      {
        url: "/Tek_Logo.png",
        width: 1200,
        height: 630,
        alt: "Tekera Training Center Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekera | Authorized Tekla Training Center in Tamil Nadu",
    description: "Achieve a successful career as a Tekla Structures expert by training at the Tekera Training Center, where we assist you to secure a valuable job placement. Over 180+ placements.",
    images: ["/Tek_Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-white text-gray-900 selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
