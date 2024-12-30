import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Credmate",
  description: "Credmate Admin Panel",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
