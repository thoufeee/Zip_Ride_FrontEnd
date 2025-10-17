"use client";
import React from "react";

const FeaturesList = ({ features }) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-4 my-8 text-black">
      {features.map((feature, index) => (
        <div className="flex-1 text-center px-2" key={index}>
          {feature.icon}
          <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
