"use client";

import { useState, ReactNode } from "react";

//* components
import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="lg:pl-[240px]">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="pt-[140px] lg:pt-[72px] px-4 lg:px-6 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
