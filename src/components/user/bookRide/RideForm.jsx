"use client";
import React from "react";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

const RideForm = ({ t }) => {
  return (
    <div className="bg-[#FAF8F2] rounded-3xl shadow-md p-8 flex flex-col w-full">
      <div className="flex flex-col gap-6">
        <div className="bg-white flex items-center px-5 py-4 rounded-xl shadow-md">
          <MapPinIcon className="w-5 h-5 mr-3 text-gray-400" />
          <input
            type="text"
            placeholder={t("rideBooking.pickupPlaceholder")}
            className="outline-none bg-transparent flex-1 text-lg text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="bg-white flex items-center px-5 py-4 rounded-xl shadow-md">
          <MapPinIcon className="w-5 h-5 mr-3 text-gray-400" />
          <input
            type="text"
            placeholder={t("rideBooking.dropPlaceholder")}
            className="outline-none bg-transparent flex-1 text-lg text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="bg-white flex items-center px-5 py-4 rounded-xl shadow-md">
          <ClockIcon className="w-5 h-5 mr-3 text-gray-400" />
          <input
            type="time"
            placeholder={t("rideBooking.pickupTimePlaceholder")}
            className="outline-none bg-transparent flex-1 text-lg text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default RideForm;
