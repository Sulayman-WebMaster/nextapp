import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "Built with Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster position="top-right" />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}