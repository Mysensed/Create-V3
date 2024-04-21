import { StoreProvider } from "./StoreProvider";
import Sidebar from "@/components/navigation/Sidebar";
import Header from "@/components/navigation/Header";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/ui/theme-provider";


import "./styles/globals.css";
import styles from "./styles/layout.module.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sprinbok create",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head />
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <section className={`flex min-h-screen w-full flex-col bg-muted/40 ${styles.container}`}>
              
              <Sidebar />

              <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header />
                
                <main className={`grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ${styles.main}`}>
                  {children}
                </main>
                
                <Toaster />
              </div>
              
            </section>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}


