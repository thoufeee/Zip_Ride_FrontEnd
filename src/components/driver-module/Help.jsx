"use client";

import { useState, useEffect } from "react";
import {
  HelpCircle,
  Ticket,
  MessageSquare,
  AlertCircle,
  DollarSign,
  Flag,
  X,
  Send,
} from "lucide-react";

export default function HelpCentrePage() {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [reportMessage, setReportMessage] = useState("");

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setIsReportOpen(false);
    };
    if (isReportOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isReportOpen]);

  useEffect(() => {
    document.body.style.overflow = isReportOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isReportOpen]);

  const handleSendReport = () => {
    if (!reportMessage.trim()) return;
    alert("Your issue has been submitted successfully!");
    setReportMessage("");
    setIsReportOpen(false);
  };

  return (
    <div className="min-h-screen font-poppins text-amber-950 bg-white p-4">
      {/* === Header === */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-1">Help Centre</h1>
        <p className="text-gray-600">Find answers and get support</p>
      </div>

      {/* === Quick Help Buttons === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button className="bg-yellow-50 rounded-xl p-6 flex flex-col items-center justify-center shadow hover:bg-yellow-100 transition">
          <HelpCircle className="mb-2 text-amber-800" size={40} />
          <span className="text-lg font-semibold mb-1">FAQs</span>
        </button>

        <button className="bg-yellow-50 rounded-xl p-6 flex flex-col items-center justify-center shadow hover:bg-yellow-100 transition">
          <Ticket className="mb-2 text-amber-800" size={40} />
          <span className="text-lg font-semibold mb-1">Ticket System</span>
        </button>

        <button className="bg-yellow-50 rounded-xl p-6 flex flex-col items-center justify-center shadow hover:bg-yellow-100 transition">
          <MessageSquare className="mb-2 text-amber-800" size={40} />
          <span className="text-lg font-semibold mb-1">Live Chat</span>
        </button>
      </div>

      {/* === Report Section === */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Report an issue</h2>
        <p className="text-gray-600 mb-6">Having trouble? Let us know</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-yellow-50 rounded-lg flex items-center p-4 gap-4 shadow">
            <AlertCircle className="text-amber-800" size={32} />
            <div>
              <div className="font-semibold">User Misbehaviour</div>
              <div className="text-xs text-gray-500">
                Report inappropriate behaviour
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg flex items-center p-4 gap-4 shadow">
            <DollarSign className="text-amber-800" size={32} />
            <div>
              <div className="font-semibold">Payment issue</div>
              <div className="text-xs text-gray-500">
                Report payment related issue
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setIsReportOpen(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-2xl flex items-center gap-2 text-lg shadow transition"
          >
            <Flag size={20} />
            Report an issue
          </button>
        </div>
      </div>

      {/* === Report Modal === */}
      {isReportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsReportOpen(false)}
          />
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg z-10 p-5 mx-4 flex flex-col h-[400px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 p-3 rounded-full shadow-lg">
              <Flag className="text-white w-6 h-6" />
            </div>

            <div className="flex items-center justify-between mt-6 mb-4">
              <h2 className="text-xl font-semibold text-amber-900">
                Report an Issue
              </h2>
              <button
                onClick={() => setIsReportOpen(false)}
                className="p-1 rounded hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            <textarea
              value={reportMessage}
              onChange={(e) => setReportMessage(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg p-3 text-sm resize-none focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Describe the issue you faced..."
            />

            <div className="flex justify-end mt-4">
              <button
                onClick={handleSendReport}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Send size={16} />
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
