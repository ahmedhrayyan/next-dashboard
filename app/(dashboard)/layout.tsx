import { ReactNode } from "react";
import type { Metadata } from "next";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="min-h-[100vh]">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
