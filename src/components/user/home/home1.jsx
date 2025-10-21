"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const carRef = useRef(null);
  const autoRef = useRef(null);
  const bikeRef = useRef(null);
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const { t, ready } = useTranslation();

  const [fields, setFields] = useState({ from: "", to: "" });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Swap with animation
  const handleSwap = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    
    setIsAnimating(true);
    
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      }
    });

    // Animate inputs sliding out and swapping
    tl.to([fromInputRef.current, toInputRef.current], {
      x: (index) => index === 0 ? 100 : -100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    })
    .call(() => {
      // Swap the values in the middle of animation
      setFields(({ from, to }) => ({ from: to, to: from }));
    })
    .to([fromInputRef.current, toInputRef.current], {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

 useEffect(() => {
  if (!isMounted) return;

  const elements = [carRef.current, autoRef.current, bikeRef.current].filter(Boolean);
  if (elements.length === 0) return;

  gsap.fromTo(
    elements,
    { opacity: 0, y: 60, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, stagger: 0.25, duration: 1.2, ease: "power4.out" }
  );
}, [isMounted]);


  // Prevent hydration mismatch by not rendering translations until mounted
  if (!isMounted || !ready) {
    return (
      <div className="text-center pt-24 pb-16 md:pt-28 md:pb-28 relative overflow-hidden">
        <div className="h-[350px] md:h-[420px] lg:h-[500px]" />
      </div>
    );
  }

  return (
    <div className="text-center pt-24 pb-16 md:pt-23 md:pb-28 relative overflow-hidden">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight   text-black px-4">
        {t("hero.bookRide")}
      </h1>
      <p className="text-base sm:text-lg md:text-md text-gray-600 mb-10 px-4">
        {t("hero.oneStopSolution")}
      </p>

      {/* Animated Vehicles */}
      <div className="relative flex justify-center items-center h-[350px] md:h-[420px] lg:h-[500px]">
        <img
          ref={autoRef}
          src="/home/recar (2).png"
          alt={t("hero.auto")}
          className="absolute left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] -top-[80px] md:-top-[96px] w-[180px] sm:w-[250px] md:w-[320px] lg:w-[380px] h-auto object-contain"
        />
        <img
          ref={carRef}
          src="/home/recar (1).png"
          alt={t("hero.car")}
          className="absolute left-1/2 transform -translate-x-1/2 z-10 w-[400px] sm:w-[550px] md:w-[700px] lg:w-[750px] -top-[220px] md:-top-[300px] h-auto object-contain"
        />
        <img
          ref={bikeRef}
          src="/home/recar (3).png"
          alt={t("hero.bike")}
          className="absolute right-[5%] sm:right-[10%] md:right-[15%] lg:right-[18%] -top-[100px] md:-top-[160px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-auto object-contain"
        />

        {/* Form */}
        <div className="absolute bottom-[-40px] sm:bottom-[-60px] md:bottom-[115px] left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-30 px-4">
          <div className="bg-primary p-3 rounded-xl shadow-form">
            <form className="relative flex flex-col md:flex-row bg-yellow-200/20 p-4 rounded-lg gap-3 items-center">

              {/* From Input */}
              <input
                ref={fromInputRef}
                type="text"
                value={fields.from}
                onChange={e => setFields(f => ({ ...f, from: e.target.value }))}
                placeholder={t("hero.enterLocation")}
                className="bg-white flex-grow p-4 border border-gray-300 rounded-lg focus:outline-none text-black shadow-lg w-full"
              />

              {/* Swap Button */}
              <button
                type="button"
                onClick={handleSwap}
                disabled={isAnimating}
                aria-label="Swap"
                className="flex justify-center items-center bg-white rounded-full shadow-md p-2 mx-2 hover:bg-yellow-100 transition disabled:opacity-50"
              >
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 32 32" 
                  fill="none"
                >
                  <path
                    d="M6 12h14l-4-4"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26 20H12l4 4"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* To Input */}
              <input
                ref={toInputRef}
                type="text"
                value={fields.to}
                onChange={e => setFields(f => ({ ...f, to: e.target.value }))}
                placeholder={t("hero.enterDestination")}
                className="bg-white flex-grow p-4 border border-gray-300 rounded-lg focus:outline-none text-black shadow-lg w-full"
              />

              {/* Go Ride button */}
              <Link
                href="/U/profile/account"
                className="w-full md:w-auto px-8 py-4 bg-yellow-200 text-black font-bold rounded-lg hover:bg-yellow-400 transition duration-300 text-center shadow-lg whitespace-nowrap"
              >
                {t("hero.goRide")}
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;