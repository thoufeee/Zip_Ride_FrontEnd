"use client";

import Sidebar from "@/components/driver-module/Sidebar"; 
import Topbar from "@/components/driver-module/Topbar"

export default function DriverLayout({ children }) {
  return (
    <div className="flex h-screen w-full"> 
      {/* Add width wrapper for Sidebar */}
      <div className="w-64 flex-shrink-0">  
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        {/* <Topbar /> */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}