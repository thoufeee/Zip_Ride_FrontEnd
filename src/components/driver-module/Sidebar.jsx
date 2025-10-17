"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  Home,
  Car,
  DollarSign,
  History,
  Star,
  HelpCircle,
  LogOut,
  Edit2,
  Bell,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const navItems = [
    { name: "Dashboard", href: "/D/dashboard", icon: Home },
    { name: "Ride", href: "/D/ride", icon: Car },
    { name: "Earnings", href: "/D/earnings", icon: DollarSign },
    { name: "History", href: "/D/history", icon: History },
    { name: "Review", href: "/D/review", icon: Star },
    { name: "Help", href: "/D/help", icon: HelpCircle },
  ];

  return (
    <aside className="bg-yellow-50 w-64 h-screen p-5 flex flex-col justify-between border-r fixed top-0 left-0">
      <div>
        {/* Header with title and notification */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-yellow-600">ZipRide</h1>

          {/* Notification Icon */}
          <Link
            href="/D/notification"
            className={`relative p-2 rounded-full hover:bg-yellow-200 transition ${
              pathname === "/D/notification" ? "bg-yellow-400 text-white" : "text-gray-700"
            }`}
          >
            <Bell className="w-5 h-5" />
            {/* Notification Badge */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <User className="text-white w-5 h-5" />
            </div>

            {/* Edit Button */}
            <button 
            onClick={()=> router.push("/D/ProfileEdit")}
            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100">
              <Edit2 className="w-3 h-3 text-yellow-600" />
            </button>
          </div>

          <div>
            <p className="font-semibold text-sm text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Driver Profile</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 w-full text-left rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-yellow-400 text-white"
                    : "text-gray-700 hover:bg-yellow-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <button className="flex items-center gap-2 text-sm bg-red-500 text-white font-semibold hover:bg-red-600 px-3 py-2 rounded-lg">
        <LogOut size={16} /> Logout
      </button>
    </aside>
  );
}
