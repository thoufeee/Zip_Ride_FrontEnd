// import Image from "next/image";
// import { FaTag, FaClock, FaLock, FaGlobe } from "react-icons/fa";

// const WhyChooseZipRide = () => (
//   <section className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 py-20 bg-yellow-50 rounded-3xl mt-12 overflow-hidden">
//     {/* Left Content */}
//     <div className="flex-1 mb-12 md:mb-0 md:mr-8 z-10">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
//         Why Choose ZipRide?
//       </h2>
//       <p className="text-lg text-gray-600 mb-10">
//         We are redefining the way you travel with safe, affordable, and reliable rides
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {/* Affordable Pricing */}
//         <div className="flex items-start space-x-4 bg-yellow-100 rounded-2xl p-4  ">
//           <span className="bg-yellow-200/60 p-3 rounded-xl">
//             <FaTag className="text-yellow-400 text-3xl" />
//           </span>
//           <div>
//             <h3 className="text-xl font-bold text-black mb-1">Affordable Pricing</h3>
//             <p className="text-gray-700 text-base">
//               Transparent fares with no hidden charges
//             </p>
//           </div>
//         </div>

//         {/* Quick & Reliable */}
//         <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
//           <span className="bg-yellow-200/60 p-3 rounded-xl">
//             <FaClock className="text-yellow-400 text-3xl" />
//           </span>
//           <div>
//             <h3 className="text-xl font-bold text-black mb-1">Quick & Reliable</h3>
//             <p className="text-gray-700 text-base">
//               Get a ride in less than 5 minutes
//             </p>
//           </div>
//         </div>

//         {/* Safe Rides */}
//         <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
//           <span className="bg-yellow-200/60 p-3 rounded-xl">
//             <FaLock className="text-yellow-400 text-3xl" />
//           </span>
//           <div>
//             <h3 className="text-xl font-bold text-black mb-1">Safe Rides</h3>
//             <p className="text-gray-700 text-base">
//               Verified drivers, real-time tracking, 24/7 support
//             </p>
//           </div>
//         </div>

//         {/* Wide Coverage */}
//         <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
//           <span className="bg-yellow-200/60 p-3 rounded-xl">
//             <FaGlobe className="text-yellow-400 text-3xl" />
//           </span>
//           <div>
//             <h3 className="text-xl font-bold text-black mb-1">Wide Coverage</h3>
//             <p className="text-gray-700 text-base">
//               Available across multiple cities
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Right Image */}
//     <div className="flex-1 flex justify-center items-center z-10">
//       <div className="rounded-2xl overflow-hidden shadow-xl w-[340px] h-[340px] md:w-[380px] md:h-[320px] bg-white flex items-center justify-center">
//         <Image
//           src="/images/girl.png"
//           alt="ZipRide Promo"
//           width={380}
//           height={320}
//           className="object-cover rounded-2xl"
//           loading="lazy"
//           priority={false}
//         />
//       </div>
//     </div>

//     {/* Decorative background circle */}
//     <div className="absolute top-3 left-0 w-[200px] h-[200px] bg-yellow-100 rounded-full  opacity-60 z-0"></div>
//     <div className="absolute  right-0 w-[450px] h-[450px] bg-yellow-100 rounded-full  opacity-60 z-0"></div>
//   </section>
// );

// export default WhyChooseZipRide;





// import Image from "next/image";
// import { FaTag, FaClock, FaLock, FaGlobe } from "react-icons/fa";
// import { useTranslation } from "react-i18next";

// const WhyChooseZipRide = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 py-20 bg-yellow-50 rounded-3xl mt-12 overflow-hidden ">
//       {/* Left Content */}
//       <div className="flex-1 mb-12 md:mb-0 md:mr-8 z-10">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
//           {t("whyChooseZipRide.title")}
//         </h2>
//         <p className="text-lg text-gray-600 mb-10">
//           {t("whyChooseZipRide.description")}
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Affordable Pricing */}
//           <div className="flex items-start space-x-4 bg-yellow-100 rounded-2xl p-4  ">
//             <span className="bg-yellow-200/60 p-3 rounded-xl">
//               <FaTag className="text-yellow-400 text-3xl" />
//             </span>
//             <div>
//               <h3 className="text-xl font-bold text-black mb-1">
//                 {t("whyChooseZipRide.affordablePricing.title")}
//               </h3>
//               <p className="text-gray-700 text-base">
//                 {t("whyChooseZipRide.affordablePricing.description")}
//               </p>
//             </div>
//           </div>

//           {/* Quick & Reliable */}
//           <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
//             <span className="bg-yellow-200/60 p-3 rounded-xl">
//               <FaClock className="text-yellow-400 text-3xl" />
//             </span>
//             <div>
//               <h3 className="text-xl font-bold text-black mb-1">
//                 {t("whyChooseZipRide.quickReliable.title")}
//               </h3>
//               <p className="text-gray-700 text-base">
//                 {t("whyChooseZipRide.quickReliable.description")}
//               </p>
//             </div>
//           </div>

//           {/* Safe Rides */}
//           <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
//             <span className="bg-yellow-200/60 p-3 rounded-xl">
//               <FaLock className="text-yellow-400 text-3xl" />
//             </span>
//             <div>
//               <h3 className="text-xl font-bold text-black mb-1">
//                 {t("whyChooseZipRide.safeRides.title")}
//               </h3>
//               <p className="text-gray-700 text-base">
//                 {t("whyChooseZipRide.safeRides.description")}
//               </p>
//             </div>
//           </div>

//           {/* Wide Coverage */}
//           <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
//             <span className="bg-yellow-200/60 p-3 rounded-xl">
//               <FaGlobe className="text-yellow-400 text-3xl" />
//             </span>
//             <div>
//               <h3 className="text-xl font-bold text-black mb-1">
//                 {t("whyChooseZipRide.wideCoverage.title")}
//               </h3>
//               <p className="text-gray-700 text-base">
//                 {t("whyChooseZipRide.wideCoverage.description")}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="flex-1 flex justify-center items-center z-10 transform -translate-y-5 md:translate-y-18">
//   <div className="rounded-2xl overflow-hidden shadow-2xl w-[480px] h-[200px] md:w-[500px] md:h-[300px] bg-white flex items-center justify-center">
//     <Image
//       src="/images/girl.png"
//       alt={t("whyChooseZipRide.promoAlt")}
//       width={600} 
//       height={120} 
//       className="object-cover rounded-2xl w-full h-full shadow-xl"
//       loading="lazy"
//       priority={false}
//     />
//   </div>
// </div>



//       {/* Decorative background circle */}
//       <div className="absolute top-3 left-0 w-[200px] h-[200px] bg-yellow-100 rounded-full  opacity-60 z-0"></div>
//       <div className="absolute  right-0 w-[450px] h-[450px] bg-yellow-100 rounded-full  opacity-60 z-0"></div>
//     </section>
//   );
// };

// export default WhyChooseZipRide;






"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTag, FaClock, FaLock, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhyChooseZipRide = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 py-20 bg-yellow-50 rounded-3xl mt-12 overflow-hidden ">
      {/* Left Content */}
      <div className="flex-1 mb-12 md:mb-0 md:mr-8 z-10 transform -translate-x-5 md:translate-x-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4" suppressHydrationWarning>
          {isClient ? t("whyChooseZipRide.title") : "Loading..."}
        </h2>
        <p className="text-lg text-gray-600 mb-10" suppressHydrationWarning>
          {isClient ? t("whyChooseZipRide.description") : "Loading description..."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Affordable Pricing */}
          <div className="flex items-start space-x-4 bg-yellow-100 rounded-2xl p-4">
            <span className="bg-yellow-200/60 p-3 rounded-xl">
              <FaTag className="text-yellow-400 text-3xl" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-black mb-1" suppressHydrationWarning>
                {isClient ? t("whyChooseZipRide.affordablePricing.title") : "Loading..."}
              </h3>
              <p className="text-gray-700 text-base" suppressHydrationWarning>
                {isClient ? t("whyChooseZipRide.affordablePricing.description") : "Loading..."}
              </p>
            </div>
          </div>

          {/* Quick & Reliable */}
          <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
            <span className="bg-yellow-200/60 p-3 rounded-xl">
              <FaClock className="text-yellow-400 text-3xl" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-black mb-1" suppressHydrationWarning>
                {isClient ? t("whyChooseZipRide.quickReliable.title") : "Loading..."}
              </h3>
              <p className="text-gray-700 text-base" suppressHydrationWarning>
                {isClient ? t("whyChooseZipRide.quickReliable.description") : "Loading..."}
              </p>
            </div>
          </div>

          {/* Safe Rides */}
          <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
            <span className="bg-yellow-200/60 p-3 rounded-xl">
              <FaLock className="text-yellow-400 text-3xl" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-black mb-1" suppressHydrationWarning>
                {isClient ? t("whyChooseZipRide.safeRides.title") : "Loading..."}
              </h3>
              <p className="text-gray-700 text-base" suppressHydrationWarning>
                {isClient ? t("whyChooseZipRide.safeRides.description") : "Loading..."}
              </p>
            </div>
          </div>

          {/* Wide Coverage */}
          <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
            <span className="bg-yellow-200/60 p-3 rounded-xl">
              <FaGlobe className="text-yellow-400 text-3xl" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-black mb-1" suppressHydrationWarning>
                {isClient ? t("whyChooseZipRide.wideCoverage.title") : "Loading..."}
              </h3>
              <p className="text-gray-700 text-base" suppressHydrationWarning>
                {isClient ? t("whyChooseZipRide.wideCoverage.description") : "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center z-10 transform -translate-y-5 md:translate-y-18">
        <div className="rounded-2xl overflow-hidden shadow-2xl w-[480px] h-[200px] md:w-[500px] md:h-[300px] bg-white flex items-center justify-center">
          <Image
            src="/images/girl.png"
            alt={isClient ? t("whyChooseZipRide.promoAlt") : "Promo Image"}
            width={600}
            height={120}
            className="object-cover rounded-2xl w-full h-full shadow-xl"
            loading="lazy"
            priority={false}
          />
        </div>
      </div>

      {/* Decorative background circles */}
      <div className="absolute top-3 left-0 w-[200px] h-[200px] bg-yellow-100 rounded-full opacity-60 z-0"></div>
      <div className="absolute right-0 w-[450px] h-[450px] bg-yellow-100 rounded-full opacity-60 z-0"></div>
    </section>
  );
};

export default WhyChooseZipRide;
