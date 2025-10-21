"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // or from "next-i18next"

const CancelRideModal = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();
  const reasons = [
    t("driverArriving.cancelRide.reason1"),
    t("driverArriving.cancelRide.reason2"),
    t("driverArriving.cancelRide.reason3"),
    t("driverArriving.cancelRide.reason4"),
  ];
  const [selected, setSelected] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm text-black">
      <div className="bg-[#FFFDE9] rounded-3xl w-[400px] p-6 flex flex-col items-center shadow-[8px_8px_0_0_rgba(0,0,0,0.12)] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          aria-label={t("driverArriving.modal.close")}
        >
          ✕
        </button>
        <h1 className="text-2xl font-bold mb-2 text-center">{t("driverArriving.cancelRide.title")}</h1>
        <p className="text-sm text-gray-600 text-center mb-6">{t("driverArriving.cancelRide.subtitle")}</p>
        <div className="flex flex-col gap-3 w-full">
          {reasons.map((reason, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelected(idx)}
              className={`w-full flex items-center rounded-2xl px-4 py-3 text-sm font-medium focus:outline-none ${
                selected === idx ? "bg-[#f7e6a3]" : "bg-[#fef9e2]"
              }`}
            >
              <span className="mr-3 flex items-center justify-center">
                <span
                  className={`inline-block w-6 h-6 rounded-full border-2 border-[#edd875] flex items-center justify-center`}
                  style={{ background: selected === idx ? "#FFFDE9" : "#FEF9E2" }}
                >
                  {selected === idx && <span className="block w-3 h-3 bg-[#edd875] rounded-full"></span>}
                </span>
              </span>
              {reason}
            </button>
          ))}
        </div>
        <div className="bg-[#FEF9E2] rounded-2xl mt-5 p-3 w-full text-sm text-black">
          {t("driverArriving.cancelRide.policy")}
        </div>
        <div className="flex gap-3 mt-6 w-full">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#f7e6a3] shadow font-bold">
            {t("driverArriving.cancelRide.keepRide")}
          </button>
          <button
            onClick={() => onConfirm && onConfirm(selected)}
            className="flex-1 py-3 rounded-xl bg-[#edd875] shadow font-bold"
          >
            {t("driverArriving.cancelRide.confirm")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelRideModal;
