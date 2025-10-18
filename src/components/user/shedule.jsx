"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function HomePageSection() {
  const router = useRouter();
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/U/shedule");
  };

  const translate = (key, fallback) => (isClient ? t(key) : fallback);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-yellow-50 py-16 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-yellow-100 rounded-full opacity-50 -z-10 blur-2xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-100 rounded-full opacity-50 -z-10 blur-2xl" />

      {/* Image Section */}
      <div className="relative z-10 flex justify-center w-full lg:w-1/2 mb-10 lg:mb-0 lg:mr-8">
        <div className="max-w-sm sm:max-w-md w-full rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
          <Image
            src="/shedule.png"
            alt={translate("homeSection.imageAlt", "Schedule your ride")}
            width={600}
            height={360}
            className="object-cover w-full h-full mix-blend-multiply"
            loading="lazy"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="relative z-10 bg-transparant rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full lg:w-1/2 backdrop-blur-md border border-yellow-100">
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
          {translate("homeSection.scheduleRide", "Schedule your ride")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Pickup & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="pickup"
                className="block mb-1 text-sm font-medium text-gray-800"
              >
                {translate("homeSection.pickup", "Pickup Location")}
              </label>
              <input
                id="pickup"
                name="pickup"
                type="text"
                placeholder={translate(
                  "homeSection.pickupPlaceholder",
                  "Enter pickup location"
                )}
                className="w-full rounded-md border border-yellow-300 bg-white py-2 px-3 text-gray-900 focus:ring-2 focus:ring-yellow-100 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="destination"
                className="block mb-1 text-sm font-medium text-gray-800"
              >
                {translate("homeSection.destination", "Destination")}
              </label>
              <input
                id="destination"
                name="destination"
                type="text"
                placeholder={translate(
                  "homeSection.destinationPlaceholder",
                  "Enter destination"
                )}
                className="w-full rounded-md border border-yellow-300 bg-white py-2 px-3 text-gray-900 focus:ring-2 focus:ring-yellow-100 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="date"
                className="block mb-1 text-sm font-medium text-gray-800"
              >
                {translate("homeSection.date", "Date")}
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="w-full rounded-md border border-yellow-300 bg-white py-2 px-3 text-gray-900 focus:ring-2 focus:ring-yellow-100 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block mb-1 text-sm font-medium text-gray-800"
              >
                {translate("homeSection.time", "Time")}
              </label>
              <input
                id="time"
                name="time"
                type="time"
                className="w-full rounded-md border border-yellow-300 bg-white py-2 px-3 text-gray-900 focus:ring-2 focus:ring-yellow-100 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-3xl bg-yellow-300 py-3 text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label={translate("homeSection.scheduleNow", "Schedule Now")}
          >
            {translate("homeSection.scheduleNow", "Schedule Now")}
          </button>
        </form>
      </div>
    </section>
  );
}
