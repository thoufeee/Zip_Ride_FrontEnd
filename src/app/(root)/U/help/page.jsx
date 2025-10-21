"use client";
import React, { useState } from "react";
import Navbar from "@/components/user/Navbar";
import FAQItem from "@/components/user/help/FAQItem";
import IssueItem from "@/components/user/help/IssueItem";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const HelpSupport = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const faq = [
    t("help.faq1"),
    t("help.faq2"),
    t("help.faq3"),
    t("help.faq4"),
    t("help.faq5"),
    t("help.faq6"),
  ];

  const commonIssues = [
    t("help.issue1"),
    t("help.issue2"),
    t("help.issue3"),
    t("help.issue4"),
    t("help.issue5"),
    t("help.issue6"),
  ];

  const filteredFAQ = faq.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const filteredIssues = commonIssues.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-40 bg-white shadow-sm">
        <Navbar />
      </header>

      <div className="min-h-screen bg-[#FFFDE9] flex flex-col p-0 items-center relative pt-24 text-black">
        <Link
          href="/U/home"
          className="absolute top-28 left-4 z-30 p-2 bg-white rounded-full hover:bg-gray-100 shadow transition"
          aria-label={t("help.back")}
        >
          <ArrowLeftIcon className="w-6 h-6 text-black" />
        </Link>

        <h1 className="text-4xl font-extrabold text-center mt-10">{t("help.title")}</h1>

        <div className="w-full flex justify-center mt-8 mb-6">
          <div className="flex items-center w-[90%] max-w-lg bg-[#FCF7DA] rounded-xl px-5 py-3 shadow text-gray-500">
            <svg
              className="h-5 w-5 mr-3"
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="9" cy="9" r="7" stroke="#d6be6b" strokeWidth="2" />
              <path
                d="M16 16L13.5 13.5"
                stroke="#d6be6b"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent outline-none placeholder-gray-400 text-base flex-1 text-black"
              placeholder={t("help.searchPlaceholder")}
            />
          </div>
        </div>

        <div className="w-full max-w-4xl px-2">
          <h2 className="text-xl font-bold mt-4 mb-4">{t("help.faqTitle")}</h2>

          {filteredFAQ.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {filteredFAQ.map(item => (
                <FAQItem key={item} text={item} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mb-8">{t("help.noFaqs")}</p>
          )}

          <h2 className="text-xl font-bold mb-4">{t("help.commonIssuesTitle")}</h2>

          {filteredIssues.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {filteredIssues.map(item => (
                <IssueItem key={item} text={item} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mb-8">{t("help.noIssues")}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-2">
            <div className="bg-[#FEF9E2] rounded-2xl p-6 shadow flex flex-col items-start">
              <div className="font-bold text-lg mb-1">{t("help.raiseComplaintTitle")}</div>
              <p className="text-gray-500 mb-5 text-base">{t("help.raiseComplaintDesc")}</p>
              <button className="bg-[#f7e6a3] rounded-xl px-6 py-2 text-black font-bold shadow text-base">
                {t("help.raiseComplaintButton")}
              </button>
            </div>
            <div className="bg-[#f7e6a3] rounded-2xl p-6 shadow flex flex-col items-start">
              <div className="font-bold text-lg mb-1">{t("help.contactSupportTitle")}</div>
              <p className="text-gray-600 mb-5 text-base">{t("help.contactSupportDesc")}</p>
              <button className="bg-[#FEF9E2] rounded-xl px-6 py-2 text-black font-bold shadow text-base">
                {t("help.contactSupportButton")}
              </button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpSupport;
