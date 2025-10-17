"use client";
import React from "react";

const FeatureCards = ({ cards }) => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 text-center">
      {cards.map((card, index) => (
        <div key={index} className="rounded-lg overflow-hidden bg-transparant shadow-lg text-black">
          <img src={card.image} alt={card.title} className="h-45 w-full object-cover" />
          <div className="p-4">
            <div className="font-semibold mb-1">{card.title}</div>
            <div className="text-gray-600 text-sm">{card.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
