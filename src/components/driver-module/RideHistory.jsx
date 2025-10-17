"use client";
import { useState } from "react";
import { MapPin, Calendar, Clock, IndianRupee, Filter } from "lucide-react";

export default function RideHistory() {
  const [filter, setFilter] = useState("week");
  const [dateRange, setDateRange] = useState("");

  const stats = {
    total: 124,
    cancelled: 8,
    earnings: 9875,
  };

  const rides = [
    {
      id: 1,
      name: "Amit Sharma",
      from: "Kozhikode",
      to: "Kannur",
      fare: 250,
      date: "2025-10-14",
      time: "10:30 AM",
      status: "Completed",
    },
    {
      id: 2,
      name: "Priya Verma",
      from: "Kozhikode",
      to: "Malappuram",
      fare: 300,
      date: "2025-10-12",
      time: "03:45 PM",
      status: "Cancelled",
    },
    {
      id: 3,
      name: "Rahul Nair",
      from: "Kozhikode",
      to: "Wayanad",
      fare: 480,
      date: "2025-10-11",
      time: "07:15 AM",
      status: "Completed",
    },
  ];

  return (
    <div className="text-amber-950 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Ride History</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Total Rides</p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Cancelled Rides</p>
          <p className="text-2xl font-bold text-red-500">{stats.cancelled}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Total Earnings</p>
          <p className="text-2xl font-bold text-green-600">₹{stats.earnings}</p>
        </div>
      </div>

      {/* Filtering Section */}
      <div className="bg-yellow-50 p-4 rounded-lg shadow mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-yellow-700 font-semibold">
          <Filter className="w-5 h-5" />
          <span>Filter Rides</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-yellow-300 bg-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>

          <input
            type="date"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border border-yellow-300 bg-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Ride List Section */}
      <h2 className="text-xl font-semibold mb-4">Past Rides</h2>
      <div className="space-y-3">
        {rides.map((ride) => (
          <div
            key={ride.id}
            className="flex justify-between items-start bg-yellow-50 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            {/* Profile + Ride Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-white">
                {ride.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-black">{ride.name}</p>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                  {ride.from} → {ride.to}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {ride.date}{" "}
                  <Clock className="w-4 h-4 ml-2" /> {ride.time}
                </p>
              </div>
            </div>

            {/* Fare + Status */}
            <div className="text-right">
              <p className="text-green-600 font-semibold flex items-center justify-end gap-1">
                <IndianRupee className="w-4 h-4" /> {ride.fare}
              </p>
              <p
                className={`text-sm font-medium mt-1 ${
                  ride.status === "Cancelled" ? "text-red-500" : "text-green-600"
                }`}
              >
                {ride.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
