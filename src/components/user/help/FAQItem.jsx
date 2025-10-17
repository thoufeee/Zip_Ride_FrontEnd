"use client";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const FAQItem = ({ text }) => {
  return (
    <div className="flex items-center bg-[#FEF9E2] rounded-2xl px-6 py-4 text-lg font-medium shadow-none text-black">
      <FaQuestionCircle className="text-[#edd875] text-2xl mr-4" />
      {text}
    </div>
  );
};

export default FAQItem;
