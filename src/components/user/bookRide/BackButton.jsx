"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const BackButton = ({ label }) => {
  return (
    <Link
      href="/"
      className="absolute top-20 left-3 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
      aria-label={label}
    >
      <ArrowLeftIcon className="w-6 h-6" />
    </Link>
  );
};

export default BackButton;
