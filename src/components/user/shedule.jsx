"use client"; // Important when using hooks in the app directory

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function HomePageSection() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/sheduledride"); // Make sure this route/page exists
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-yellow-50 py-20 px-4">
      {/* Background circles */}
      <div className="absolute top-3 left-0 w-[200px] h-[200px] bg-yellow-100 rounded-full opacity-60 z-0"></div>
      <div className="absolute right-0 w-[450px] h-[450px] bg-yellow-100 rounded-full opacity-60 z-0"></div>

      {/* Left Side - Image */}
      <div className="relative z-10 mb-12 md:mb-0 md:mr-8 w-full md:w-1/2 flex justify-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md bg-white flex items-center justify-center backdrop-blur-sm">
          <Image
            src="/shedule.png"
            alt="Schedule your ride"
            width={600}
            height={360}
            className="object-cover w-full h-full mix-blend-multiply"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="relative z-10 bg-yellow-50/40 rounded-3xl shadow-2xl p-8 max-w-lg w-full md:w-1/2 backdrop-blur-sm transform -translate-x-5 md:-translate-x-30">
        <h3 className="text-xl font-medium text-black mb-2">Schedule later</h3>
        <h2 className="text-2xl font-semibold mb-6 text-black">Schedule your ride</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-black">Pickup Location</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21c-8-7-8-10-8-13a8 8 0 0116 0c0 3-0 6-8 13zm0-7a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black"
                  placeholder="Enter pickup location"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black">Destination</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21c-8-7-8-10-8-13a8 8 0 0116 0c0 3-0 6-8 13zm0-7a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black"
                  placeholder="Enter destination"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-black">Date</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
                <input
                  type="date"
                  className="w-full py-2 pl-10 pr-4 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black">Time</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                <input
                  type="time"
                  className="w-full py-2 pl-10 pr-4 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-3xl bg-yellow-200 text-black font-semibold text-lg hover:bg-yellow-400 transition "
          >
            Schedule Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default HomePageSection;