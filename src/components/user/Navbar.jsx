// "use client";
// import { useEffect, useState, useRef } from "react";
// import Link from "next/link";
// import { UserCircleIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";

// export default function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [langDropdownOpen, setLangDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const { t } = useTranslation();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) setIsLoggedIn(true);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setLangDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//   };

//   function handleLanguageChange(lang) {
//     // Use global i18next instance for language switching
//     if (typeof i18next.changeLanguage === "function") {
//       i18next.changeLanguage(lang);
//     }
//     setLangDropdownOpen(false);
//   }

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#1e1e1e] text-white py-3 shadow-md z-50 text-xs">
//       <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 sm:px-10">
//         {/* Logo */}
//         <Link
//           href="/U/home"
//           className="text-2xl font-bold text-yellow-400 hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(250,204,21,0.8)] transition-all duration-300"
//         >
//           ZipRide
//         </Link>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex space-x-10 text-sm font-medium">
//           <Link href="/book" className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
//             {t("navbar.bookRide")}
//             <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//           <Link href="/drive" className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
//             {t("navbar.driver")}
//             <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//           <Link href="/about" className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
//             {t("navbar.about")}
//             <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//         </div>

//         {/* Language Switch */}
//         <div className="relative" ref={dropdownRef}>
//           <button
//             onClick={() => setLangDropdownOpen((v) => !v)}
//             className="flex items-center focus:outline-none"
//             aria-label="Change language"
//           >
//             <GlobeAltIcon className="h-6 w-6 text-white ml-130" />
//             <span className="sr-only">Change Language</span>
//           </button>
//           {langDropdownOpen && (
//             <div className="absolute top-9 right-0 bg-[#232323] border border-gray-700 rounded-md shadow-xl text-sm min-w-[80px] z-20">
//               <button
//                 className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${i18next.language === "en" ? "text-yellow-400" : "text-gray-200"}`}
//                 onClick={() => handleLanguageChange("en")}
//               >
//                 EN
//               </button>
//               <button
//                 className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${i18next.language === "hi" ? "text-yellow-400" : "text-gray-200"}`}
//                 onClick={() => handleLanguageChange("hi")}
//               >
//                 HI
//               </button>
//               <button
//                 className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${i18next.language === "ml" ? "text-yellow-400" : "text-gray-200"}`}
//                 onClick={() => handleLanguageChange("ml")}
//               >
//                 ML
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Right Side */}
//         <Link href="/help" className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
//           {t("navbar.help")}
//           <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//         </Link>
//         {isLoggedIn ? (
//           <div className="relative group">
//             <button className="flex items-center space-x-2 bg-gray-800 px-4 py-1.5 rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-300">
//               <UserCircleIcon className="h-6 w-6 text-yellow-400" />
//               <span className="font-medium">{t("navbar.profile")}</span>
//             </button>
//             <div className="absolute right-0 hidden group-hover:block mt-2 bg-[#2c2c2c] text-sm rounded-md shadow-lg w-44 border border-gray-700">
//               <Link href="/profile" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-300 transition-colors">
//                 {t("navbar.viewProfile")}
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-yellow-300 transition-colors"
//               >
//                 {t("navbar.logout")}
//               </button>
//             </div>
//           </div>
//         ) : (
//           <Link
//             href="/auth/signup"
//             className="bg-yellow-400 text-black font-semibold px-5 py-1.5 rounded-full hover:bg-yellow-500 hover:scale-105 hover:shadow-[0_0_8px_rgba(250,204,21,0.6)] transition-all duration-300"
//           >
//             {t("navbar.login")}
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// }






"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { UserCircleIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // <-- Add this
  const dropdownRef = useRef(null);
  const { t } = useTranslation();

  // Initialize client-side state after hydration
  useEffect(() => {
    setIsMounted(true);
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  function handleLanguageChange(lang) {
    if (typeof i18next.changeLanguage === "function") {
      i18next.changeLanguage(lang);
    }
    setLangDropdownOpen(false);
  }

  // Don't render until after hydration
  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 w-full bg-[#1e1e1e] text-white py-3 shadow-md z-50 text-xs">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 sm:px-10">
          <Link href="/U/home" className="text-2xl font-bold text-yellow-400">
            ZipRide
          </Link>
          <div className="flex-1"></div>
          <GlobeAltIcon className="h-6 w-6 text-white" />
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1e1e1e] text-white py-3 shadow-md z-50 text-xs">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 sm:px-10">
        {/* Logo */}
        <Link
          href="/U/home"
          className="text-2xl font-bold text-yellow-400 hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(250,204,21,0.8)] transition-all duration-300"
        >
          ZipRide
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          <Link href="/book" className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
            {t("navbar.bookRide")}
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/drive" className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
            {t("navbar.driver")}
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
            {t("navbar.about")}
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Language Switch */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setLangDropdownOpen((v) => !v)}
            className="flex items-center focus:outline-none"
            aria-label="Change language"
          >
            <GlobeAltIcon className="h-6 w-6 text-white ml-130" />
            <span className="sr-only">Change Language</span>
          </button>
          {langDropdownOpen && (
            <div className="absolute top-9 right-0 bg-[#232323] border border-gray-700 rounded-md shadow-xl text-sm min-w-[80px] z-20">
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${i18next.language === "en" ? "text-yellow-400" : "text-gray-200"}`}
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </button>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${i18next.language === "hi" ? "text-yellow-400" : "text-gray-200"}`}
                onClick={() => handleLanguageChange("hi")}
              >
                HI
              </button>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 ${i18next.language === "ml" ? "text-yellow-400" : "text-gray-200"}`}
                onClick={() => handleLanguageChange("ml")}
              >
                ML
              </button>
            </div>
          )}
        </div>

        {/* Right Side */}
        <Link href="/U/help" className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
          {t("navbar.help")}
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        {isLoggedIn ? (
          <div className="relative group">
            <button className="flex items-center space-x-2 bg-gray-800 px-4 py-1.5 rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-300">
              <UserCircleIcon className="h-6 w-6 text-yellow-400" />
              <span className="font-medium">{t("navbar.profile")}</span>
            </button>
            <div className="absolute right-0 hidden group-hover:block mt-2 bg-[#2c2c2c] text-sm rounded-md shadow-lg w-44 border border-gray-700">
              <Link href="/U/profile" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-300 transition-colors">
                {t("navbar.viewProfile")}
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-yellow-300 transition-colors"
              >
                {t("navbar.logout")}
              </button>
            </div>
          </div>
        ) : (
          <Link
            href="/signup"
            className="bg-yellow-400 text-black font-semibold px-5 py-1.5 rounded-full hover:bg-yellow-500 hover:scale-105 hover:shadow-[0_0_8px_rgba(250,204,21,0.6)] transition-all duration-300"
          >
            {t("navbar.login")}
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;