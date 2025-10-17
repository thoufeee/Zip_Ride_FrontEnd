"use client";

import { useState } from "react";
import { User, Bell } from "lucide-react"; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useRouter } from "next/navigation";
// import Withdraw from "./components/Withdraw";
// import Notification from "./components/Notification";
// import RideCard from "./components/RideCard";

export default function Home() {
  const [isOnline, setIsOnline] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const hasUnreadNotifications = true; 
  const handleToggle = () => setIsOnline((prev) => !prev);

  const router = useRouter();

  const earningsData = [
    { day: "Mon", earnings: 500 },
    { day: "Tue", earnings: 1200 },
    { day: "Wed", earnings: 900 },
    { day: "Thu", earnings: 1500 },
    { day: "Fri", earnings: 800 },
    { day: "Sat", earnings: 2000 },
    { day: "Sun", earnings: 1700 },
  ];

  const rideData = [
    { name: "Completed", value: 80 },
    { name: "Cancelled", value: 10 },
    { name: "Ongoing", value: 10 },
  ];

  const COLORS = ["#facc15", "#f87171", "#60a5fa"];
 
  if (showWithdraw) return <Withdraw onBack={() => setShowWithdraw(false)} />;
  if (showNotification) return <Notification onBack={() => setShowNotification(false)} />;

  return (
    <div className="relative min-h-screen bg-gray-50 p-6">
       

      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold text-amber-950 mb-6">Driver Dashboard</h1>

      {/* Profile & Online Status */}
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
            <User size={28} className="text-white" />
          </div>
          <div>
            <p className="font-semibold text-black">John Doe</p>
            <p className="text-sm text-gray-600">Driver Profile</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`font-semibold ${
              isOnline ? "text-green-600" : "text-red-500"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isOnline}
              onChange={handleToggle}
            />
            <div className="w-14 h-7 bg-red-500 peer-focus:outline-none rounded-full peer-checked:bg-green-500 transition-colors"></div>
            <span className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-7"></span>
          </label>
        </div>
      </div>

      {/* Earnings Summary */}
            <h2 className="pb-4 text-lg text-amber-950 font-semibold">Earnings Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
                <p className="text-sm text-black">Today Earnings</p>
                <p className="text-2xl font-bold text-amber-950">₹120</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
                <p className="text-sm text-black">This Week</p>
                <p className="text-2xl font-bold text-amber-950">₹5,900</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg shadow flex items-center justify-between">
                <div>
                  <p className="text-sm text-black">Balance</p>
                  <p className="text-2xl font-bold text-amber-950">₹12,000</p>
                </div>
                <button
                  onClick={() => router.push("/D/withdraw")}
                  className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-3 py-1 rounded"
                >
                  Withdraw
                </button>
              </div>
            </div>

       {/* Charts Section */}
            <h2 className="pb-3 text-lg text-amber-950 font-semibold">Graph Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Line Chart - Earnings Trend */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-amber-950 mb-3">Weekly Earnings Trend</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="earnings"
                      stroke="#facc15"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart - Ride Summary */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-amber-950 mb-3">Ride Summary</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={rideData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                      label
                    >
                      {rideData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
    </div>
  );
}
