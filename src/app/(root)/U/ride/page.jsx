"use client";
import React, { useState } from "react";
import {
  ArrowLeftIcon,
  StarIcon as StarOutlineIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Navbar from "@/components/user/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPhoneVolume } from "react-icons/fa";
import { VolumeOff } from "lucide-react";
import { useTranslation } from "react-i18next";
import CancelRideModal from "@/components/user/cancel";

/* ------------------------- RIDE STATUS DATA -------------------------- */
const statusSteps = [
  { label: "driverArriving.driverAccepted", time: "10:22 PM", active: true },
  { label: "driverArriving.driverArrived", active: false },
  { label: "driverArriving.tripStarted", active: false },
  { label: "driverArriving.tripEnded", active: false },
];

/* ------------------------- FEEDBACK MODAL -------------------------- */
const FeedbackModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm text-black">
      <div className="bg-[#FFFDE9] rounded-3xl w-[360px] p-8 flex flex-col items-center shadow-[7px_7px_0_0_rgba(0,0,0,0.12)] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black z-20"
          aria-label={t("driverArriving.modal.close")}
        >
          ✕
        </button>
        <h1 className="text-3xl font-bold mb-2 text-center">{t("driverArriving.feedback.title")}</h1>
        <p className="text-sm text-gray-600 mb-6 text-center">{t("driverArriving.feedback.subtitle")}</p>
        <div className="mb-3 font-bold text-lg text-center">{t("driverArriving.feedback.question")}</div>
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon
              key={i}
              onClick={() => setRating(i)}
              className={`w-10 h-10 mx-1 cursor-pointer ${
                i <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
              aria-label={`${t("driverArriving.feedback.rate")} ${i} ${t("driverArriving.feedback.stars")}`}
            />
          ))}
        </div>
        <div className="font-bold mb-2 text-center">{t("driverArriving.feedback.addMore")}</div>
        <textarea
          placeholder={t("driverArriving.feedback.placeholder")}
          className="w-full min-h-[80px] p-2 rounded-xl bg-[#FFF7C7] focus:outline-none mb-4"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Link
          href={"/U/review"}
          className="bg-[#FFE98A] hover:bg-yellow-300 rounded-lg w-full py-3 font-semibold text-center"
        >
          {t("driverArriving.feedback.submit")}
        </Link>
      </div>
    </div>
  );
};

/* ------------------------- CALL MODAL -------------------------- */
const CallModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm text-black">
      <div className="bg-[#FFFDE9] rounded-3xl w-[320px] p-6 flex flex-col items-center shadow-[7px_7px_0_0_rgba(0,0,0,0.12)] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          aria-label={t("driverArriving.modal.close")}
        >
          ✕
        </button>
        <div className="bg-gray-300 rounded-full w-24 h-24 flex items-center justify-center mb-4">
          <UserCircleIcon className="h-12 w-12 text-black" />
        </div>
        <h2 className="text-xl font-bold mb-1">{t("driverArriving.callModal.name")}</h2>
        <p className="text-sm text-gray-600 mb-1">{t("driverArriving.callModal.role")}</p>
        <p className="text-xs text-blue-500 mb-6 animate-pulse">{t("driverArriving.callModal.calling")}</p>

        <div className="flex gap-4 mb-6 w-full justify-center">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-24 py-3 rounded-lg flex items-center justify-center gap-2 ${
              isMuted ? "bg-yellow-200" : "bg-blue-200"
            }`}
          >
            <VolumeOff />
            <span className="font-semibold text-sm">{isMuted ? t("driverArriving.callModal.muted") : t("driverArriving.callModal.mute")}</span>
          </button>

          <button
            onClick={() => setIsSpeakerOn(!isSpeakerOn)}
            className={`w-24 py-3 rounded-lg flex items-center justify-center gap-2 ${
              isSpeakerOn ? "bg-yellow-200" : "bg-blue-200"
            }`}
          >
            <FaPhoneVolume />
            <span className="font-semibold text-sm">{isSpeakerOn ? t("driverArriving.callModal.on") : t("driverArriving.callModal.speaker")}</span>
          </button>
        </div>

        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white w-full rounded-lg py-3 font-semibold flex items-center justify-center gap-2"
        >
          <PhoneIcon className="w-5 h-5 rotate-45" />
          {t("driverArriving.callModal.endCall")}
        </button>
      </div>
    </div>
  );
};

/* ------------------------- CHAT MODAL -------------------------- */
const ChatModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { sender: t("driverArriving.chatModal.me"), text: input, left: false }]);
      setInput("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-[420px] h-[600px] shadow-[8px_8px_0_0_rgba(0,0,0,0.12)] relative flex flex-col overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black z-20"
          aria-label={t("driverArriving.modal.close")}
        >
          ✕
        </button>
        <div className="bg-[#FFF7C7] text-black text-lg font-semibold px-5 py-3 flex items-center justify-center gap-3 shadow">
          {t("driverArriving.chatModal.title")}
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-6 mt-3">
          {messages.length === 0 ? (
            <div className="text-gray-400 text-center mt-20">{t("driverArriving.chatModal.noMessages")}</div>
          ) : (
            messages.map((msg, i) =>
              msg.left ? (
                <div key={i} className="flex items-start gap-3">
                  <UserCircleIcon className="w-10 h-10 text-gray-600" />
                  <div className="bg-[#FFF7C7] rounded-xl py-2 px-4 shadow text-sm text-black w-fit">{msg.text}</div>
                </div>
              ) : (
                <div key={i} className="flex justify-end">
                  <div className="bg-[#FFE98A] rounded-xl py-2 px-4 shadow text-sm text-black w-fit">{msg.text}</div>
                </div>
              )
            )
          )}
        </div>
        <form
          onSubmit={handleSend}
          className="flex items-center gap-3 px-5 py-3 bg-[#FFFBE2] border-t border-gray-200 rounded-full shadow-[0_-2px_6px_rgba(0,0,0,0.08)]"
        >
          <input
            type="text"
            placeholder={t("driverArriving.chatModal.inputPlaceholder")}
            className="flex-1 bg-transparent outline-none text-gray-700"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#FFE98A] text-yellow-900 rounded-full w-9 h-9 flex items-center justify-center shadow font-bold"
            aria-label={t("driverArriving.chatModal.send")}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};  
/* ------------------------- MAIN PAGE ------------------------- */
const DriverArriving = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-40 bg-white shadow-sm">
        <Navbar />
      </div>

      <div className="min-h-screen bg-white flex flex-col pt-20 relative">
        <Link
          href="/U/home"
          className="absolute top-24 left-3 z-30 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
          aria-label={t("driverArriving.back")}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>

        <div className="flex-1 flex items-center justify-center relative py-6 px-3">
          <div className="absolute -left-20 w-96 h-96 bg-yellow-100 rounded-full opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-30"></div>

          <div className="w-full max-w-6xl flex gap-7 justify-between z-10">
            <div className="flex flex-col">
              <div className="rounded-3xl overflow-hidden shadow-md ml-5 h-130 mb-20">
                <div className="relative w-[610px] h-[610px] bg-gray-100">
                  <input
                    className="absolute top-4 left-4 right-4 z-10 rounded-lg bg-white border border-gray-200 px-6 py-2 w-[320px] shadow text-lg focus:outline-none"
                    placeholder={t("driverArriving.whereTo")}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 flex-1">
              <div className="bg-[#FFFBDE] px-7 py-6 rounded-2xl shadow-xl flex flex-col">
                <div className="flex items-center mb-2">
                  <UserCircleIcon className="w-14 h-14 text-gray-400 bg-yellow-200 rounded-full mr-5" />
                  <div className="flex flex-col flex-1">
                    <span className="font-bold text-xl text-black">{t("driverArriving.driverArrivingMessage", { name: "Arun" })}</span>
                    <div className="flex items-center">
                      <span className="text-gray-700 text-sm mr-3">KL-10-W-4545</span>
                      <StarOutlineIcon className="w-4 h-4 text-[#FFD600]" />
                      <span className="text-[#FFD600] font-bold text-sm ml-1">4.5</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-3 mb-0.5">
                  <button
                    className="bg-[#FFEFA0] hover:bg-[#FFEF80] text-black font-semibold rounded-xl px-7 py-2 flex items-center shadow"
                    onClick={() => setIsChatOpen(true)}
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" /> {t("driverArriving.chat")}
                  </button>
                  <button
                    className="bg-[#FFEFA0] hover:bg-[#FFEF80] text-black font-semibold rounded-xl px-10 py-2 flex items-center shadow"
                    onClick={() => setIsCallOpen(true)}
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" /> {t("driverArriving.call")}
                  </button>
                  <button
                    className="bg-[#FFEFA0] hover:bg-[#FFEF80] text-black font-semibold rounded-xl px-5 py-2 flex items-center shadow"
                    onClick={() => setIsFeedbackOpen(true)}
                  >
                    {t("driverArriving.ratingReview")}
                  </button>
                </div>

                <button
                  className="bg-[#FEF7CE] hover:bg-[#FFEE99] font-bold text-black rounded-xl px-9 py-2 shadow mt-5"
                  onClick={() => setIsCancelOpen(true)}
                >
                  {t("driverArriving.rideCancel")}
                </button>
              </div>

              <div className="bg-[#FFFBDE] px-7 py-6 rounded-2xl shadow-xl flex flex-col">
                <div className="font-bold text-lg mb-4 text-black">{t("driverArriving.rideStatus")}</div>
                <ul>
                  {statusSteps.map((step, i) => (
                    <li key={i} className="flex items-center mb-4">
                      <span className={step.active ? "text-green-500 font-semibold" : "text-gray-700"}>
                        {step.active && (
                          <svg
                            className="inline mr-1 w-5 h-5"
                            fill="none"
                            stroke="#7DDA51"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" stroke="#7DDA51" strokeWidth="2" fill="none" />
                            <path strokeLinecap="round" strokeLinejoin="round" stroke="#7DDA51" d="M9 12l2 2 4-4" />
                          </svg>
                        )}
                        {t(step.label)}
                      </span>
                      {step.time && <span className="ml-3 text-gray-500 text-xs">{step.time}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
      <CallModal isOpen={isCallOpen} onClose={() => setIsCallOpen(false)} />
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <CancelRideModal isOpen={isCancelOpen} onClose={() => setIsCancelOpen(false)} />
    </>
  );
};

export default DriverArriving;
