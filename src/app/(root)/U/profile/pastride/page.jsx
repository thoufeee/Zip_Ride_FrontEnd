"use client";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Navbar from "@/components/user/Navbar";
import { useTranslation } from "react-i18next";
import { StarIcon } from "lucide-react";

export default function PastRides() {
  const { t } = useTranslation();

  const rides = [
    { name: "Alex Johnson", date: "Sep 15,2025, 10:30 AM", rating: 4.6, fare: "₹149" },
    { name: "Arun Das", date: "Sep 25,2025, 9:00 AM", rating: 3.8, fare: "₹220" },
    { name: "Micheal", date: "Oct 5,2025, 3:30 PM", rating: 4.8, fare: "₹158" }
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
        <Navbar />
      </div>

      {/* Add padding-top equal to Navbar height (e.g., 80px) */}
      <div className="relative min-h-screen bg-white py-0 px-0 md:px-10 overflow-hidden" style={{ paddingTop: "80px" }}>
        {/* BG Circles */}
        <div className="absolute top-2/3 left-0 w-1/2 h-72 bg-yellow-100 rounded-full opacity-40 -z-10" style={{ filter: "blur(10px)" }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-40 -z-10" style={{ filter: "blur(10px)" }} />

        {/* Header */}
        <div className="flex items-center pt-2 pb-3 px-6 relative z-10">
          <Link
            href="/U/profile/account"
            className="inline-flex items-center p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black mr-4"
            aria-label={t("pastRides.back")}
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </Link>
          <h2 className="text-3xl font-bold tracking-tight text-black">{t("pastRides.title")}</h2>
        </div>

        {/* Rides List */}
        <div className="flex flex-col gap-8 mt-2 px-4 md:px-0 relative z-10 text-black">
          {rides.map((ride, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-2xl bg-yellow-50 shadow-[3px_5px_0px_0px_rgba(169,169,169,0.16)] border border-gray-200 px-8 py-6"
              style={{ minWidth: 300 }}
            >
              {/* Ride Info */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* SVG icon for vehicle */}
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5a8.25 8.25 0 1115 0v.75A2.25 2.25 0 0117.25 22.5h-10.5A2.25 2.25 0 014.5 20.25v-.75z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">{ride.name}</div>
                  <div className="text-gray-500 text-sm">{ride.date}</div>
                  <div className="flex items-center text-xs mt-0.5 text-yellow-600">
                    <StarIcon className="h-3 w-3 mr-1 inline text-yellow-500 fill-yellow-400" />{ride.rating}
                  </div>
                </div>
              </div>

              {/* Fare */}
              <div className="text-[#FF2222] font-bold text-xl">{ride.fare}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
