import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Vengatesh Plotfolio",
  description:
    "Victor Vengatesh Plotfolio — an immersive Japanese-temple journey through AI, ML, software, and creative technology.",
  applicationName: "Victor Vengatesh Plotfolio",
  authors: [{ name: "M. Victor Vengatesh" }],
  creator: "M. Victor Vengatesh",
  openGraph: {
    title: "Victor Vengatesh Plotfolio",
    description:
      "Explore M. Victor Vengatesh's AI/ML work through an immersive Japanese-temple experience.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
