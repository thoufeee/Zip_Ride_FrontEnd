"use client";
import React from "react";
import { ArrowLeftIcon, UserCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Navbar from "@/components/user/Navbar";
import { useTranslation } from "react-i18next";

export default function RatingsReview() {
  const { t } = useTranslation();
  const reviews = [
    {
      id: 1,
      name: t("ratingsReview.profile"),
      detail: t("ratingsReview.detailedName"),
      text: t("ratingsReview.reviewText1"),
      rating: 4,
    },
    {
      id: 2,
      name: t("ratingsReview.profile"),
      detail: t("ratingsReview.detailedName"),
      text: t("ratingsReview.reviewText2"),
      rating: 4,
    },
    {
      id: 3,
      name: t("ratingsReview.profile"),
      detail: t("ratingsReview.detailedName"),
      text: t("ratingsReview.reviewText3"),
      rating: 4,
    },
    {
      id: 4,
      name: t("ratingsReview.profile"),
      detail: t("ratingsReview.detailedName"),
      text: t("ratingsReview.reviewText4"),
      rating: 4,
    },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-white px-6 py-4 font-sans pt-28 relative">
        {/* Back Arrow */}
        <Link
          href="/U/home"
          className="absolute top-6 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
          aria-label={t("ratingsReview.back")}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 text-center">{t("ratingsReview.title")}</h1>
        <h5 className="text-xs text-gray-900 text-center opacity-50 mb-6">{t("ratingsReview.subtitle")}</h5>

        {/* Quick Help */}
        <div className="mt-6">
          <h2 className="font-semibold text-gray-800 mb-2">{t("ratingsReview.quickHelpTitle")}</h2>
          <div className="bg-yellow-50 p-6 rounded-xl">
            <div className="flex items-start gap-6">
              <div>
                <h3 className="text-4xl font-bold text-gray-900">4.5</h3>
                <div className="flex items-center gap-1 mt-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">120 {t("ratingsReview.reviews")}</p>
              </div>

              {/* Rating Bars */}
              <div className="flex-1">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-700 w-3">{star}</span>
                    <div className="w-full bg-yellow-100 h-2 rounded-full">
                      <div
                        className="h-2 bg-yellow-400 rounded-full"
                        style={{
                          width:
                            star === 5
                              ? "80%"
                              : star === 4
                              ? "90%"
                              : star === 3
                              ? "70%"
                              : star === 2
                              ? "20%"
                              : "10%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Report an issue */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-gray-800">{t("ratingsReview.reportIssueTitle")}</h2>
            <a href="#" className="text-xs text-gray-500 font-medium">{t("ratingsReview.viewAll")}</a>
          </div>

          {reviews.map((review) => (
            <div key={review.id} className="bg-yellow-50 p-4 rounded-xl flex items-start gap-3 mb-3">
              <UserCircleIcon className="h-10 w-10 text-gray-600" />
              <div className="flex-1">
                <h3 className="font-semibold text-sm text-gray-800">{review.name}</h3>
                <p className="text-xs text-gray-500">{review.detail}</p>
                <p className="text-xs text-gray-700 mt-2 leading-5">{review.text}</p>
              </div>

              {/* Stars */}
              <div className="flex items-center text-yellow-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400" : "fill-none stroke-yellow-400"}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
