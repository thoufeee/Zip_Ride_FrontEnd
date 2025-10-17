"use client";
import { useState } from "react";
import { Wallet } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Earnings({ onWithdraw }) {
  const [earnings] = useState({
    today: 120,
    week: 5900,
    balance: 12000,
  });

  const history = [
    { id: 1, name: "Profile", route: "Kozhikode → Kannur", amount: 500 },
    { id: 2, name: "Profile", route: "Kozhikode → Kannur", amount: 680 },
    { id: 3, name: "Profile", route: "Kozhikode → Kannur", amount: 239 },
    { id: 4, name: "Profile", route: "Kozhikode → Kannur", amount: 500 },
    { id: 5, name: "Profile", route: "Kozhikode → Kannur", amount: 500 },
  ];

  const router = useRouter();
  return (
    <div className="text-amber-950 p-6">
      <h1 className="text-3xl font-bold mb-6">Earnings</h1>

      {/* Earnings Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-2xl font-bold">₹{earnings.today}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">This Week</p>
          <p className="text-2xl font-bold">₹{earnings.week}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Balance</p>
            <p className="text-2xl font-bold">₹{earnings.balance}</p>
          </div>
          <button
            onClick={() => router.push("/D/withdraw")}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm"
          >
            <Wallet className="w-4 h-4" />
            Withdraw
          </button>
        </div>
      </div>

      {/* History Section */}
      <h2 className="text-xl font-semibold mb-4">History</h2>
      <div className="space-y-3">
        {history.map((ride) => (
          <div
            key={ride.id}
            className="flex items-center justify-between bg-yellow-50 p-3 rounded-lg shadow-sm hover:shadow transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-300 rounded-full" />
              <div>
                <p className="font-medium text-black">{ride.name}</p>
                <p className="text-sm text-gray-600">{ride.route}</p>
              </div>
            </div>
            <p className="text-green-600 font-semibold">+ ₹{ride.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
