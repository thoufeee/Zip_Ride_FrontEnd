// import Image from "next/image";

// const DownloadAppSection = () => (
//   <section className="bg-yellow-50 py-10 px-4 md:px-10">
//     <h2 className="text-4xl font-extrabold text-black text-center mb-2">
//       Download App from
//     </h2>
//     <p className="text-lg text-gray-700 text-center mb-12">
//       Download our mobile applications
//     </p>

//     <div className="flex flex-col md:flex-row items-center justify-center gap-12">
//       {/* Phone mockups */}
//       <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
//         <div className="w-full  md:w-auto max-w-[700px] relative">
//           <Image
//             src="/images/first.png"
//             alt="App Mockup 1"
//             width={6800} // intrinsic width
//             height={1030} // intrinsic height
//             className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[700px] h-auto object-contain transform translate-y-5 md:translate-y-15"
//           />
//         </div>

//         <div className="w-full md:w-auto max-w-[250px]">
//           <Image
//             src="/images/second.png"
//             alt="App Mockup 2"
//             width={280}
//             height={270}
//             className="w-[150px] sm:w-[200px] md:w-[250px] h-auto object-contain transform -translate-x-5 md:-translate-x-50 "
//           />
//         </div>
//       </div>

//       {/* Store buttons */}
//      <div className="flex flex-col gap-6 items-center md:items-start">
//   {/* Google Play Store */}
//   <a
//     href="https://play.google.com/store"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Image
//       src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//       alt="Get it on Google Play"
//       width={220}
//       height={66}
//       className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] 
//                  h-auto object-contain transform -translate-x-5 md:-translate-x-20 
//                  -translate-y-2 md:-translate-y-6"
//     />
//   </a>

//   {/* Apple App Store */}
//   <a
//     href="https://www.apple.com/app-store/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Image
//       src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//       alt="Download on the App Store"
//       width={220}
//       height={66}
//       className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] 
//                  h-auto object-contain transform -translate-x-5 md:-translate-x-20"
//     />
//   </a>
// </div>

//     </div>
//   </section>
// );

// export default DownloadAppSection;





// import Image from "next/image";
// import { useTranslation } from "react-i18next";

// const DownloadAppSection = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="bg-yellow-50 py-10 px-4 md:px-10">
//       <h2 className="text-4xl font-extrabold text-black text-center mb-2">
//         {t("downloadApp.title")}
//       </h2>
//       <p className="text-lg text-gray-700 text-center mb-12">
//         {t("downloadApp.description")}
//       </p>

//       <div className="flex flex-col md:flex-row items-center justify-center gap-12">
//         {/* Phone mockups */}
//         <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
//           <div className="w-full  md:w-auto max-w-[700px] relative">
//             <Image
//               src="/images/first.png"
//               alt={t("downloadApp.appMockup1Alt")}
//               width={6800}
//               height={1030}
//               className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[700px] h-auto object-contain transform translate-y-5 md:translate-y-15"
//             />
//           </div>

//           <div className="w-full md:w-auto max-w-[250px]">
//             <Image
//               src="/images/second.png"
//               alt={t("downloadApp.appMockup2Alt")}
//               width={280}
//               height={270}
//               className="w-[150px] sm:w-[200px] md:w-[250px] h-auto object-contain transform -translate-x-5 md:-translate-x-50 "
//             />
//           </div>
//         </div>

//         {/* Store buttons */}
//         <div className="flex flex-col gap-6 items-center md:items-start">
//           {/* Google Play Store */}
//           <a
//             href="https://play.google.com/store"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//               alt={t("downloadApp.googlePlayAlt")}
//               width={220}
//               height={66}
//               className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] 
//                         h-auto object-contain transform -translate-x-5 md:-translate-x-20 
//                         -translate-y-2 md:-translate-y-6"
//             />
//           </a>

//           {/* Apple App Store */}
//           <a
//             href="https://www.apple.com/app-store/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//               alt={t("downloadApp.appleStoreAlt")}
//               width={220}
//               height={66}
//               className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] 
//                         h-auto object-contain transform -translate-x-5 md:-translate-x-20"
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DownloadAppSection;






"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const DownloadAppSection = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-yellow-50 py-10 px-4 md:px-10">
      <h2
        className="text-4xl font-extrabold text-black text-center mb-2"
        suppressHydrationWarning
      >
        {isClient ? t("downloadApp.title") : "Loading..."}
      </h2>
      <p
        className="text-lg text-gray-700 text-center mb-12"
        suppressHydrationWarning
      >
        {isClient ? t("downloadApp.description") : "Loading..."}
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Phone mockups */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <div className="w-full md:w-auto max-w-[700px] relative">
            <Image
              src="/images/first.png"
              alt={isClient ? t("downloadApp.appMockup1Alt") : "App mockup 1"}
              width={6800}
              height={1030}
              className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[700px] h-auto object-contain transform translate-y-5 md:translate-y-15"
            />
          </div>

          <div className="w-full md:w-auto max-w-[250px]">
            <Image
              src="/images/second.png"
              alt={isClient ? t("downloadApp.appMockup2Alt") : "App mockup 2"}
              width={280}
              height={270}
              className="w-[150px] sm:w-[200px] md:w-[250px] h-auto object-contain transform -translate-x-5 md:-translate-x-50"
            />
          </div>
        </div>

        {/* Store buttons */}
        <div className="flex flex-col gap-6 items-center md:items-start">
          {/* Google Play Store */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt={isClient ? t("downloadApp.googlePlayAlt") : "Google Play Store badge"}
              width={220}
              height={66}
              className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] h-auto object-contain transform -translate-x-5 md:-translate-x-20 -translate-y-2 md:-translate-y-6"
            />
          </a>

          {/* Apple App Store */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt={isClient ? t("downloadApp.appleStoreAlt") : "Apple App Store badge"}
              width={220}
              height={66}
              className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] h-auto object-contain transform -translate-x-5 md:-translate-x-20"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
