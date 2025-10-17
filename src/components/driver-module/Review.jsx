"use client";

import { User } from "lucide-react";

const ratingSummary = {
  average: 4.5,
  total: 120,
  distribution: [80, 30, 6, 3, 1],
};

const reviews = [
  {
    id: 1,
    name: "Profile",
    detail: "detailed name",
    text: "hello, I am satisfied with the drive, thank you, you are a good driver may god bless you",
    stars: 5,
  },
  {
    id: 2,
    name: "Profile",
    detail: "detailed name",
    text: "hello, I am satisfied with the drive, thank you, you are a good driver may god bless you",
    stars: 4,
  },
  {
    id: 3,
    name: "Profile",
    detail: "detailed name",
    text: "hello, I am satisfied with the drive, thank you, you are a good driver may god bless you",
    stars: 5,
  },
  {
    id: 4,
    name: "Profile",
    detail: "detailed name",
    text: "hello, I am satisfied with the drive, thank you, you are a good driver may god bless you",
    stars: 5,
  },
];

export default function RatingsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900  p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Ratings & Reviews</h1>
          <p className="text-gray-600 text-sm">See feedback from your riders</p>
        </div>
      </div>

      {/* Rating Summary */}
      <div className="bg-yellow-50 rounded-xl p-6 mb-6 shadow">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
          <div className="text-center md:text-left">
            <div className="text-6xl font-bold text-amber-800">
              {ratingSummary.average}
            </div>
            <div className="flex justify-center md:justify-start gap-1 text-yellow-400 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
              {ratingSummary.total} reviews
            </p>
          </div>

          <div className="flex-1 w-full">
            {ratingSummary.distribution.map((count, idx) => (
              <div key={idx} className="flex items-center gap-2 mb-1">
                <span className="w-6 text-xs text-gray-500">{5 - idx}</span>
                <div className="flex-1 bg-gray-200 rounded h-2 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-2"
                    style={{
                      width: `${
                        (count /
                          Math.max(...ratingSummary.distribution)) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rider Feedback */}
      <h2 className="text-lg font-semibold mb-3">Rider Feedback</h2>
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-yellow-50 p-4 rounded-lg shadow"
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <User className="text-white" size={20} />
            </div>

            <div className="flex-1">
              <p className="font-medium">{review.name}</p>
              <p className="text-xs text-gray-500">{review.detail}</p>
              <p className="mt-1 text-sm text-gray-700">{review.text}</p>
            </div>

            <div className="flex gap-1 items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < review.stars ? "text-yellow-400" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
