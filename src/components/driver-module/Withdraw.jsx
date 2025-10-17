"use client";

import { useState } from "react";
import { Clock, Plus, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WithdrawPage({ onBack }) {
  const [selected, setSelected] = useState("UPI");
  const [amount, setAmount] = useState("");
  const [activeTab, setActiveTab] = useState("withdraw"); // "withdraw" or "history"
  const router = useRouter();
  const accounts = [
    { id: "UPI", name: "UPI", number: "", logo: "", isUpi: true },
    {
      id: "SBI",
      name: "State Bank of India",
      number: "**** **** 1234",
      logo: "https://blog.mikelegal.com/wp-content/uploads/2021/11/SBI-Logo-scaled.jpeg",
      isUpi: false,
    },
    {
      id: "Paytm",
      name: "Paytm Wallet",
      number: "",
      logo: "https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg",
      isUpi: false,
    },
  ];

  const handleWithdraw = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (amount > 12000) {
      alert("Amount exceeds available balance");
      return;
    }
    alert(`Withdrawal request of ₹${amount} submitted successfully!`);
  };

  return (
    <div className="w-full mt-1">
      {/* ===== Page Header ===== */}
      <div className="flex items-center gap-3 mt-7 ">
        <button
          onClick={()=> router.push("/D/dashboard")}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <ArrowLeft className="text-gray-700 w-5 h-5" />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Withdraw
        </h1>
      </div>
 
      {activeTab === "withdraw" && (
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-md w-full">
          {/* ===== Balance Section ===== */}
          <div className="bg-[#f9fafc] p-5 md:p-6 rounded-lg flex justify-between items-center mb-5 shadow-sm">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Available Balance
              </p>
              <p className="text-2xl text-amber-950 md:text-3xl font-bold mt-1">
                ₹12,000
              </p>
            </div>

            <button
              onClick={() => setActiveTab("history")}
              className="bg-yellow-400 flex gap-2 items-center text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition"
            >
              <Clock size={20} />
              Transaction History
            </button>
          </div>

          {/*  Withdraw To Section */}
          <div>
            <h2 className="text-lg text-amber-950 font-semibold mb-4">
              Withdraw to
            </h2>

            <div className="space-y-3">
              {accounts.map((account) => (
                <label
                  key={account.id}
                  className={`flex justify-between cursor-pointer rounded-lg border p-4 ${
                    selected === account.id
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelected(account.id)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selected === account.id
                          ? "bg-yellow-400 border-yellow-400"
                          : "bg-white border-gray-400"
                      }`}
                    >
                      {selected === account.id && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>

                    {account.logo && (
                      <img
                        src={account.logo}
                        alt={account.name}
                        className="w-10 h-6 object-contain"
                      />
                    )}

                    <div className="flex flex-col">
                      <div className="text-sm font-semibold text-gray-700">
                        {account.name}
                      </div>
                      {account.number && (
                        <div className="text-xs text-gray-500">
                          {account.number}
                        </div>
                      )}
                    </div>
                  </div>

                  {account.isUpi && (
                    <div className="w-10 h-6 bg-yellow-400 rounded text-white flex items-center justify-center cursor-default font-bold text-xs">
                      UPI
                    </div>
                  )}
                </label>
              ))}
            </div>

            <button className="mt-3 text-yellow-400 cursor-pointer font-semibold text-sm flex items-center gap-1 hover:underline">
              <Plus size={16} />
              Add another bank account
            </button>

            <label htmlFor="amount" className="block mt-6 mb-2 font-semibold text-gray-700">
              Amount
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                ₹
              </span>
              <input
                id="amount"
                name="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-md border border-gray-300 pl-8 pr-3 py-2 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                min="1"
                max="12000"
              />
            </div>

            <div className="mt-2 text-sm text-gray-500">
              Minimum withdrawal: ₹100 • Maximum: ₹12,000
            </div>

            <button
              onClick={handleWithdraw}
              className="w-full mt-6 bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-500 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={!amount || amount <= 0}
            >
              Withdraw
            </button>
          </div>
        </div>
      )}

      {/* Transaction History Section  */}
      {activeTab === "history" && (
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Transaction History</h2>
            <button
              onClick={() => setActiveTab("withdraw")}
              className="text-yellow-400 font-semibold hover:underline"
            >
              Back to Withdraw
            </button>
          </div>

          {/* Example Transactions */}
          <div className="divide-y">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex justify-between py-3">
                <div>
                  <div className="font-semibold text-amber-950">Withdrawal ₹{(i + 1) * 1000}</div>
                  <div className="text-sm text-gray-500">Completed on 16-Oct-2025</div>
                </div>
                <div className="text-green-500 font-semibold">Success</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
