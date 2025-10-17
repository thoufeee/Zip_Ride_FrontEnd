"use client";
import { Phone, Mic, Volume2, X } from "lucide-react";

export default function CallModal({ driver, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm text-center p-6 relative border border-gray-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-3">
            <span className="text-3xl text-gray-500">👤</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{driver.name}</h2>
          <p className="text-xs text-gray-500">Passenger</p>
          <p className="text-blue-500 text-sm mt-1 font-medium">● Calling...</p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-5">
          <button className="bg-yellow-100 hover:bg-yellow-200 text-gray-800 font-medium px-5 py-2.5 rounded-lg border border-yellow-300 flex items-center gap-2 transition">
            <Mic className="w-4 h-4" />
            <span>Mute</span>
          </button>
          <button className="bg-yellow-100 hover:bg-yellow-200 text-gray-800 font-medium px-5 py-2.5 rounded-lg border border-yellow-300 flex items-center gap-2 transition">
            <Volume2 className="w-4 h-4" />
            <span>Speaker</span>
          </button>
        </div>

        {/* End Call */}
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white font-medium w-full py-2.5 rounded-lg flex justify-center items-center gap-2 transition"
        >
          <Phone className="w-4 h-4" />
          <span>End Call</span>
        </button>
      </div>
    </div>
  );
}
