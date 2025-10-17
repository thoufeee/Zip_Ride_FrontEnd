"use client";

import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/user/Navbar";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const vehicles = [
  {
    name: "car",
    seats: 4,
    price: 350,
    oldPrice: 480,
    descriptionKey: "chooseVehicle.carDesc",
    altKey: "chooseVehicle.carAlt",
  },
  {
    name: "auto",
    seats: 4,
    price: 240,
    oldPrice: 350,
    descriptionKey: "chooseVehicle.autoDesc",
    altKey: "chooseVehicle.autoAlt",
  },
  {
    name: "bike",
    seats: 2,
    price: 130,
    oldPrice: 250,
    descriptionKey: "chooseVehicle.bikeDesc",
    altKey: "chooseVehicle.bikeAlt",
  },
];

const ChooseVehicle = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const closeModal = () => setSelectedVehicle(null);

  // Navigate to ridestatus page
  const handleConfirm = () => {
    closeModal(); // close modal first
    router.push("/U/ride");
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
        <Navbar />
      </div>

      {/* Page content */}
      <div className="relative min-h-screen bg-white flex flex-col md:flex-row pt-20 px-4 sm:px-10 overflow-hidden gap-6">
        {/* Decorative circles */}
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 z-0"></div>

        {/* Vehicle selection (left) */}
        <div className="relative flex-1 max-w-lg z-10">
          <h1 className="text-4xl font-bold mb-2 mt-5 text-black">{t("chooseVehicle.title")}</h1>
          <p className="text-lg text-gray-500 mb-7">{t("chooseVehicle.subtitle")}</p>

          <div className="flex flex-col gap-4">
            {vehicles.map((v) => (
              <div
                key={v.name}
                onClick={() => setSelectedVehicle(v)}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl shadow cursor-pointer transform transition duration-300 hover:scale-105 ${
                  v.name === "car"
                    ? "bg-[#FFFED9] hover:bg-[#FFE87A]"
                    : v.name === "auto"
                    ? "bg-[#FFFED9] hover:bg-[#FFF2C2]"
                    : "bg-[#FFFED9] hover:bg-[#FFF1B8]"
                }`}
              >
                <img
                  src={`/vehicles/${v.name}.png`}
                  alt={t(v.altKey)}
                  className="w-20 h-16 object-contain ml-2 mr-3"
                />
                <div className="flex-1 flex flex-col ml-1">
                  <span className="text-2xl font-bold text-black flex items-center gap-2">
                    {t(`chooseVehicle.${v.name}`)}
                    <UserIcon className="w-4 h-4" />
                    <span className="text-lg font-bold text-black">{v.seats}</span>
                  </span>
                  <span className="text-base text-black font-normal leading-tight mt-1">
                    {t(v.descriptionKey)}
                  </span>
                </div>
                <div className="flex flex-col items-end text-black">
                  <span className="text-2xl font-extrabold">₹{v.price}</span>
                  <span className="text-md text-gray-400 font-semibold line-through mt-2">₹{v.oldPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section (right) */}
        <div className="relative flex-1 flex justify-center items-start z-10">
          <div
            className="rounded-3xl overflow-hidden shadow-lg bg-gray-100"
            style={{ width: 520, height: 510 }}
          >
            <div className="text-gray-400 italic mt-64 ml-48">{t("chooseVehicle.mapPlaceholder")}</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 text-black">
          <div className="bg-[#FAF8E4] rounded-3xl p-6 max-w-md w-full relative shadow-lg">
            {/* Close button */}
            <button onClick={closeModal} className="absolute top-4 right-4 text-black hover:text-gray-700">
              ✕
            </button>

            {/* Vehicle Summary */}
            <div className="flex items-center mb-4">
              <img
                src={`/vehicles/${selectedVehicle.name}.png`}
                alt={t(selectedVehicle.altKey)}
                className="w-20 h-16 object-contain mr-4"
              />
              <div>
                <h2 className="font-bold text-xl">{t(`chooseVehicle.${selectedVehicle.name}`)}</h2>
                <p className="text-sm text-gray-700">{t(selectedVehicle.descriptionKey)}</p>
              </div>
            </div>

            {/* Fare Breakdown */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">{t("chooseVehicle.fareBreakdown")}</h3>
              <div className="flex justify-between text-black font-semibold text-sm">
                <span>{t("chooseVehicle.baseFare")}</span>
                <span>₹50</span>
              </div>
              <div className="flex justify-between text-black font-semibold text-sm">
                <span>{t("chooseVehicle.distance")} (5 KM)</span>
                <span>₹{selectedVehicle.price}</span>
              </div>
              <div className="flex justify-between text-black font-semibold text-sm mt-1">
                <span>{t("chooseVehicle.total")}</span>
                <span>₹{selectedVehicle.price + 50}</span>
              </div>
            </div>

            {/* Confirm & Book Ride Button */}
            <button
              onClick={handleConfirm}
              className="w-full bg-yellow-200 hover:bg-yellow-400 py-3 rounded-full font-bold mt-3"
            >
              {t("chooseVehicle.confirmBook")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChooseVehicle;
