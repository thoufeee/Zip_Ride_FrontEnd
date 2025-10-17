"use client";

import { ArrowLeft, Car } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotificationPage({ onBack }) {
  const notifications = [
    { id: 1, message: "Driver accepted your ride", time: "10:30 AM" },
    { id: 2, message: "Your driver has arrived", time: "10:40 AM" },
    { id: 3, message: "Driver accepted your ride", time: "1:00 PM" },
    { id: 4, message: "Your driver has arrived", time: "1:10 PM" },
  ];

  const router = useRouter();
  return (
    <div className="min-h-screen   p-6 font-poppins text-amber-950">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => router.push("/D/dashboard")}
          className="p-2 rounded-full hover:bg-yellow-50 transition"
        >
          <ArrowLeft className="w-5 h-5 text-yellow-600" />
        </button>
        <h1 className="text-2xl font-bold text-yellow-700">Notifications</h1>
      </div>

      {/* Notification Cards */}
      <div className="space-y-4 max-w-4xl mx-auto w-full">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="flex items-center gap-4 bg-yellow-50 rounded-2xl p-4 shadow-md hover:shadow-lg transition"
          >
            <div className="bg-yellow-300 p-3 rounded-full">
              <Car size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{note.message}</p>
              <p className="text-gray-500 text-sm">{note.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
