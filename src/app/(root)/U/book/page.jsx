"use client";
import React from "react";
import Navbar from "@/components/user/Navbar";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import BackButton from "@/components/user/bookRide/BackButton";
import RideForm from "@/components/user/bookRide/RideForm";

export default function Page() {
  const { t } = useTranslation();

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
        <Navbar />
      </div>

      {/* Add top padding equal to Navbar height */}
      <div className="pt-20 min-h-screen bg-white relative flex flex-col md:flex-row items-center justify-center px-6 py-10 ">
        {/* Back Arrow */}
        <BackButton label={t("rideBooking.back")} />

        {/* Background Circles */}
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10"></div>

        {/* Left Section */}
        <div className="flex flex-col justify-center w-full md:w-1/3 px-4 md:pl-10 mb-10 md:mb-0">
          {/* Page Title */}
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{t("rideBooking.title")}</h1>
            <p className="text-gray-500 mt-2">{t("rideBooking.subtitle")}</p>
          </div>

          <RideForm t={t} />

          {/* Confirm Button */}
          <Link
            href="/U/vehicles"
            className="bg-[#F6E7B4] hover:bg-[#e3d69f] text-gray-800 font-semibold rounded-full px-8 py-3 shadow-lg mt-8 flex items-center justify-center transition-all duration-200"
          >
            {t("rideBooking.selectVehicle")}
            <span className="ml-3 text-xl">→</span>
          </Link>

          {/* Info Text */}
          <p className="text-gray-600 text-sm mt-6">{t("rideBooking.infoText")}</p>
        </div>

        {/* Right Section (Map) */}
        <div className="flex-1 h-[80vh] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-200 flex justify-center items-center">
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 italic text-sm">{t("rideBooking.mapPlaceholder")}</span>
          </div>
        </div>
      </div>
    </>
  );
}

