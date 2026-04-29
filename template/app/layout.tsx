import "./globals.css";
import "@av-digital/components/styles";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <title>Template</title>
      <body>{children}</body>
    </html>
  );
}
