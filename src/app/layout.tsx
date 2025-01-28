import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lazy Load Server Components Example",
  description: "Just a proof of concept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
