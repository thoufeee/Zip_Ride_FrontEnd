"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import OTPInput from "@/components/user/otp/OTPInput";
import axios from "@/api/axios";
export default function VerifyOtp() {
  const { t } = useTranslation();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const code = otp.join("");
  const mobile = localStorage.getItem("mobile");

  if (code.length < 6 || otp.includes("")) {
    alert("Please enter complete OTP");
    return;
  }

  try {
    const res = await axios.post("axios/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile, otp: code }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    // ✅ Save JWT token
    localStorage.setItem("token", data.token);
    alert("OTP verified and JWT stored!");
    router.push("/dashboard");
  } catch (err) {
    alert("Invalid OTP");
    console.error(err);
  }
};


  const handleResend = () => {
    setTimer(59);
    setOtp(Array(6).fill(""));
    alert(t("verifyOtp.newOtpSent"));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>

      <Link
        href="/"
        className="absolute top-5 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
        aria-label={t("verifyOtp.back")}
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </Link>

      <div className="z-10 text-center w-80">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t("verifyOtp.enterVerificationCode")}</h1>
        <p className="text-sm text-gray-500 mb-8">{t("verifyOtp.sentCodeInfo")}</p>

        <form onSubmit={handleSubmit}>
          <OTPInput otp={otp} setOtp={setOtp} />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-xl hover:bg-yellow-500 transition-all shadow-md"
          >
            {t("verifyOtp.continue")}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          {t("verifyOtp.codeExpires")}{" "}
          <span className="font-semibold text-gray-800">00:{timer.toString().padStart(2, "0")}</span>
        </p>

        {timer === 0 && (
          <p className="mt-2 text-sm text-gray-700">
            {t("verifyOtp.didntReceive")}{" "}
            <button onClick={handleResend} className="text-yellow-500 font-semibold hover:underline">
              {t("verifyOtp.resendCode")}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
