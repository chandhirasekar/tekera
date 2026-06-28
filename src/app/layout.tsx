import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tekera | Authorized Tekla Training Center in Tamil Nadu",
  description: "Achieve a successful career as a Tekla Structures expert by training at the Tekera Training Center, where we assist you to secure a valuable job placement. Over 180+ placements.",
  keywords: ["Tekla training Tamil Nadu", "Tekla Structures course", "structural steel detailing training", "BIM modeler courses", "Tekla certification India"],
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
