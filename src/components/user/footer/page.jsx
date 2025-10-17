// "use client";
// import { Instagram, Linkedin, Facebook } from "lucide-react";
// import { useTranslation } from "react-i18next";

// export default function Footer() {
//   const { t } = useTranslation();

//   return (
//     <footer className="bg-yellow-100  text-black  border-t border-gray-300">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Logo / Company Name */}
//         <div>
//           <h2 className="text-3xl font-extrabold mb-4 tracking-tight">ZipRide</h2>
//           <p className="text-sm mb-6">
//             {t("footer.companyDescription")}
//           </p>

//           {/* Social Icons */}
//           <div className="flex items-center space-x-4 mt-2 ">
//             <a href="#" aria-label="Instagram">
//               <Instagram className="w-5 h-5 hover:scale-110 transition-transform" />
//             </a>
//             <a href="#" aria-label="LinkedIn">
//               <Linkedin className="w-5 h-5 hover:scale-110 transition-transform" />
//             </a>
//             <a href="#" aria-label="Facebook">
//               <Facebook className="w-5 h-5 hover:scale-110 transition-transform" />
//             </a>
//           </div>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-xl font-bold mb-3">{t("footer.company")}</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">{t("footer.aboutUs")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.careers")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.newsroom")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.investors")}</a></li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-xl font-bold mb-3">{t("footer.services")}</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">{t("footer.bookRide")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.driveWithZipRide")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.businessRides")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.zipPassMembership")}</a></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h3 className="text-xl font-bold mb-3">{t("footer.support")}</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">{t("footer.helpCenter")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.safetyGuidelines")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.reportAnIssue")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.contactSupport")}</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Travel / Features */}
//       <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-4">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div>
//           <h3 className="text-xl font-bold mb-3">{t("footer.travelFeatures")}</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">{t("footer.rideTracker")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.multipleVehicleTypes")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.rewardsOffers")}</a></li>
//             <li><a href="#" className="hover:underline">{t("footer.realTimeGPS")}</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* App Badges */}
//       <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-6 justify-left pb-8">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//           alt={t("footer.googlePlayAlt")}
//           className="h-12 cursor-pointer"
//         />
//         <img
//           src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//           alt={t("footer.appStoreAlt")}
//           className="h-12 cursor-pointer"
//         />
//       </div>

//       {/* Copyright */}
//       <div className="text-center border-t border-gray-300 py-4 text-sm text-black">
//         © {new Date().getFullYear()} ZipRide. {t("footer.allRightsReserved")}
//       </div>
//     </footer>
//   );
// }




// "use client";

// import React, { useState, useEffect } from "react";
// import { Instagram, Linkedin, Facebook } from "lucide-react";
// import { useTranslation } from "react-i18next";

// export default function Footer() {
//   const { t } = useTranslation();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <footer className="bg-yellow-100 text-black border-t border-gray-300">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Logo / Company Name */}
//         <div>
//           <h2 className="text-3xl font-extrabold mb-4 tracking-tight">ZipRide</h2>
//           <p className="text-sm mb-6" suppressHydrationWarning>
//             {isClient ? t("footer.companyDescription") : "Loading..."}
//           </p>

//           {/* Social Icons */}
//           <div className="flex items-center space-x-4 mt-2">
//             <a href="#" aria-label="Instagram">
//               <Instagram className="w-5 h-5 hover:scale-110 transition-transform" />
//             </a>
//             <a href="#" aria-label="LinkedIn">
//               <Linkedin className="w-5 h-5 hover:scale-110 transition-transform" />
//             </a>
//             <a href="#" aria-label="Facebook">
//               <Facebook className="w-5 h-5 hover:scale-110 transition-transform" />
//             </a>
//           </div>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-xl font-bold mb-3" suppressHydrationWarning>
//             {isClient ? t("footer.company") : "Loading..."}
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.aboutUs") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.careers") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.newsroom") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.investors") : "..."}</a></li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-xl font-bold mb-3" suppressHydrationWarning>
//             {isClient ? t("footer.services") : "Loading..."}
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.bookRide") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.driveWithZipRide") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.businessRides") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.zipPassMembership") : "..."}</a></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h3 className="text-xl font-bold mb-3" suppressHydrationWarning>
//             {isClient ? t("footer.support") : "Loading..."}
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.helpCenter") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.safetyGuidelines") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.reportAnIssue") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.contactSupport") : "..."}</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Travel / Features */}
//       <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-4">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div>
//           <h3 className="text-xl font-bold mb-3" suppressHydrationWarning>
//             {isClient ? t("footer.travelFeatures") : "Loading..."}
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.rideTracker") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.multipleVehicleTypes") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.rewardsOffers") : "..."}</a></li>
//             <li><a href="#" className="hover:underline">{isClient ? t("footer.realTimeGPS") : "..."}</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* App Badges */}
//       <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-6 justify-left pb-8">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//           alt={isClient ? t("footer.googlePlayAlt") : "Google Play Store"}
//           className="h-12 cursor-pointer"
//           suppressHydrationWarning
//         />
//         <img
//           src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//           alt={isClient ? t("footer.appStoreAlt") : "Apple App Store"}
//           className="h-12 cursor-pointer"
//           suppressHydrationWarning
//         />
//       </div>

//       {/* Copyright */}
//       <div className="text-center border-t border-gray-300 py-4 text-sm text-black">
//         © {new Date().getFullYear()} ZipRide.{" "}
//         <span suppressHydrationWarning>
//           {isClient ? t("footer.allRightsReserved") : "Loading..."}
//         </span>
//       </div>
//     </footer>
//   );
// }





"use client";

import React, { useState, useEffect } from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-yellow-100 text-black border-t border-gray-300">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-left">
        {/* Column 1 — Brand */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 tracking-tight text-yellow-400">
            ZipRide
          </h2>
          <p
            className="text-sm mb-6 leading-relaxed max-w-xs"
            suppressHydrationWarning
          >
            {isClient ? t("footer.companyDescription") : "Loading..."}
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-10 mt-6">
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt={isClient ? t("footer.googlePlayAlt") : "Google Play Store"}
              className="h-12 cursor-pointer hover:scale-105 transition-transform transform translate-y-5 md:translate-y-10"
              suppressHydrationWarning
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt={isClient ? t("footer.appStoreAlt") : "Apple App Store"}
              className="h-12 cursor-pointer hover:scale-105 transition-transform transform translate-y-5 md:translate-y-10"
              suppressHydrationWarning
            />
          </div>
        </div>

        {/* Column 2 — Company */}
        <div>
          <h3
            className="text-xl font-bold mb-4 text-yellow-400"
            suppressHydrationWarning
          >
            {isClient ? t("footer.company") : "Loading..."}
          </h3>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li><a href="#" className="hover:underline">{isClient ? t("footer.aboutUs") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.careers") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.newsroom") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.investors") : "..."}</a></li>
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div>
          <h3
            className="text-xl font-bold mb-4 text-yellow-400"
            suppressHydrationWarning
          >
            {isClient ? t("footer.services") : "Loading..."}
          </h3>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li><a href="#" className="hover:underline">{isClient ? t("footer.bookRide") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.driveWithZipRide") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.businessRides") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.zipPassMembership") : "..."}</a></li>
          </ul>
        </div>

        {/* Column 4 — Support */}
        <div>
          <h3
            className="text-xl font-bold mb-4 text-yellow-400"
            suppressHydrationWarning
          >
            {isClient ? t("footer.support") : "Loading..."}
          </h3>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li><a href="#" className="hover:underline">{isClient ? t("footer.helpCenter") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.safetyGuidelines") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.reportAnIssue") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.contactSupport") : "..."}</a></li>
          </ul>
        </div>

        {/* Column 5 — Travel Features */}
        <div>
          <h3
            className="text-xl font-bold mb-4 text-yellow-400"
            suppressHydrationWarning
          >
            {isClient ? t("footer.travelFeatures") : "Loading..."}
          </h3>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li><a href="#" className="hover:underline">{isClient ? t("footer.rideTracker") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.multipleVehicleTypes") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.rewardsOffers") : "..."}</a></li>
            <li><a href="#" className="hover:underline">{isClient ? t("footer.realTimeGPS") : "..."}</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center border-t border-black py-5 text-sm text-gray-800">
        © {new Date().getFullYear()} ZipRide.{" "}
        <span suppressHydrationWarning>
          {isClient ? t("footer.allRightsReserved") : "Loading..."}
        </span>
      </div>
    </footer>
  );
}
