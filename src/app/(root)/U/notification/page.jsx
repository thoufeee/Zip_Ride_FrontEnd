"use client";
import Navbar from "@/components/user/Navbar";
import NotificationItem from "@/components/user/notification/NotificationItem";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FaCar, FaBus } from "react-icons/fa";

export default function NotificationsPage() {
  const { t } = useTranslation();

  const notifications = [
    { message: t("notifications.driverAccepted"), time: "10:30 AM" },
    { message: t("notifications.driverArrived"), time: "10:40 AM" },
    { message: t("notifications.driverAccepted"), time: "1:00 PM" },
    { message: t("notifications.driverArrived"), time: "1:10 PM" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
        <Navbar />
      </div>
      <div className="min-h-screen bg-white relative pt-28 px-6 md:px-16 text-black">
        <div className="relative z-50 mb-6">
          <Link
            href="/U/home"
            className="inline-flex items-center p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
            aria-label={t("notifications.back")}
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </Link>
        </div>
        <div className="absolute -left-36 -top-20 w-[320px] h-[320px] bg-yellow-100 rounded-full blur-3xl opacity-30 z-0 flex items-center justify-center">
          <FaCar className="text-yellow-400 text-6xl opacity-70" />
        </div>
        <div className="absolute -right-10 -top-14 w-[600px] h-[520px] bg-yellow-100 rounded-full blur-3xl opacity-20 z-0 flex items-center justify-center">
          <FaBus className="text-yellow-400 text-8xl opacity-50" />
        </div>
        <h1 className="text-4xl font-bold text-center z-10 relative">
          {t("notifications.title")}
        </h1>
        <div className="mt-7 z-10">
          {notifications.map((notification, index) => (
            <NotificationItem
              key={index}
              message={notification.message}
              time={notification.time}
            />
          ))}
        </div>
      </div>
    </>
  );
}
