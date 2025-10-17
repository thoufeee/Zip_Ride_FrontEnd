"use client";

import { Bell } from "lucide-react";
import { useState } from "react";

export default function Topbar() {
  const [online, setOnline] = useState(false);

  return (
    <div className="flex items-center justify-between bg-[#fff9e6] p-4 shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
          JD
        </div>
        <div>
          <h3 className="text-sm font-semibold">John Doe</h3>
          <p className="text-xs text-gray-500">Driver Profile</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Bell className="text-gray-700" size={22} />
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{online ? "Online" : "Offline"}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={online}
              onChange={() => setOnline(!online)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
