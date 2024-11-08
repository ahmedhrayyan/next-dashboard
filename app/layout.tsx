import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({
  variable: "--font-inter",
  weight: "variable",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Next Dashboard",
    default: "Next Dashboard",
  },
  description: "Next.js dashboard assessment to join Quran Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className="min-h-[100vh]">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
