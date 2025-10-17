// import Image from "next/image";

// const ServiceExperience = () => (
//   <section className="bg-yellow-50 py-16 px-4">
//     <h2 className="text-4xl font-extrabold text-center mb-14 text-black">
//       Service and Experience
//     </h2>

//     <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-7xl mx-auto">
//       {/* Seamless Pickup */}
//       <div className="flex flex-col items-center max-w-xs text-center">
//         <div className="w-full h-48 mb-4 relative">
//           <Image
//             src="/images/picup.png"
//             alt="Seamless Pickup"
//             fill
//             className="rounded-2xl object-cover"
//           />
//         </div>
//         <h3 className="text-2xl font-bold text-black mb-2">Seamless Pickup</h3>
//         <p className="text-base text-gray-700">
//           Your ride meets you right at the curb, ready to start your journey.
//         </p>
//       </div>

//       {/* Friendly Communication */}
//       <div className="flex flex-col items-center max-w-xs text-center">
//         <div className="w-full h-48 mb-4 relative">
//           <Image
//             src="/images/good-driver.png"
//             alt="Friendly Communication"
//             fill
//             className="rounded-2xl object-cover"
//           />
//         </div>
//         <h3 className="text-2xl font-bold text-black mb-2">Friendly Communication</h3>
//         <p className="text-base text-gray-700">
//           Enjoy pleasant conversations and a comfortable ride with our friendly drivers.
//         </p>
//       </div>

//       {/* Effortless Airport Drop-off */}
//       <div className="flex flex-col items-center max-w-xs text-center">
//         <div className="w-full h-48 mb-4 relative">
//           <Image
//             src="/images/drop.png"
//             alt="Effortless Airport Drop-off"
//             fill
//             className="rounded-2xl object-cover"
//           />
//         </div>
//         <h3 className="text-2xl font-bold text-black mb-2">Effortless Airport Drop-off</h3>
//         <p className="text-base text-gray-700">
//           Arrive on time, right at the terminal. We’ll get you to your gate hassle-free.
//         </p>
//       </div>
//     </div>
//   </section>
// );

// export default ServiceExperience;




// import Image from "next/image";
// import { useTranslation } from "react-i18next";

// const ServiceExperience = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="bg-yellow-50 py-16 px-4">
//       <h2 className="text-4xl font-extrabold text-center mb-14 text-black">
//         {t("serviceExperience.title")}
//       </h2>

//       <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-7xl mx-auto">
//         {/* Seamless Pickup */}
//         <div className="flex flex-col items-center max-w-xs text-center">
//           <div className="w-full h-48 mb-4 relative">
//             <Image
//               src="/images/picup.png"
//               alt={t("serviceExperience.seamlessPickup.alt")}
//               fill
//               className="rounded-2xl object-cover"
//             />
//           </div>
//           <h3 className="text-2xl font-bold text-black mb-2">
//             {t("serviceExperience.seamlessPickup.title")}
//           </h3>
//           <p className="text-base text-gray-700">
//             {t("serviceExperience.seamlessPickup.description")}
//           </p>
//         </div>

//         {/* Friendly Communication */}
//         <div className="flex flex-col items-center max-w-xs text-center">
//           <div className="w-full h-48 mb-4 relative">
//             <Image
//               src="/images/good-driver.png"
//               alt={t("serviceExperience.friendlyCommunication.alt")}
//               fill
//               className="rounded-2xl object-cover"
//             />
//           </div>
//           <h3 className="text-2xl font-bold text-black mb-2">
//             {t("serviceExperience.friendlyCommunication.title")}
//           </h3>
//           <p className="text-base text-gray-700">
//             {t("serviceExperience.friendlyCommunication.description")}
//           </p>
//         </div>

//         {/* Effortless Airport Drop-off */}
//         <div className="flex flex-col items-center max-w-xs text-center">
//           <div className="w-full h-48 mb-4 relative">
//             <Image
//               src="/images/drop.png"
//               alt={t("serviceExperience.airportDropOff.alt")}
//               fill
//               className="rounded-2xl object-cover"
//             />
//           </div>
//           <h3 className="text-2xl font-bold text-black mb-2">
//             {t("serviceExperience.airportDropOff.title")}
//           </h3>
//           <p className="text-base text-gray-700">
//             {t("serviceExperience.airportDropOff.description")}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceExperience;






"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ServiceExperience = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-yellow-50 py-16 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-black" suppressHydrationWarning>
        {isClient ? t("serviceExperience.title") : "Loading..."}
      </h2>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-7xl mx-auto">
        {/* Seamless Pickup */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <div className="w-full h-48 mb-4 relative">
            <Image
              src="/images/picup.png"
              alt={isClient ? t("serviceExperience.seamlessPickup.alt") : "Seamless pickup"}
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2" suppressHydrationWarning>
            {isClient ? t("serviceExperience.seamlessPickup.title") : "Loading..."}
          </h3>
          <p className="text-base text-gray-700" suppressHydrationWarning>
            {isClient ? t("serviceExperience.seamlessPickup.description") : "Loading..."}
          </p>
        </div>

        {/* Friendly Communication */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <div className="w-full h-48 mb-4 relative">
            <Image
              src="/images/good-driver.png"
              alt={isClient ? t("serviceExperience.friendlyCommunication.alt") : "Friendly communication"}
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2" suppressHydrationWarning>
            {isClient ? t("serviceExperience.friendlyCommunication.title") : "Loading..."}
          </h3>
          <p className="text-base text-gray-700" suppressHydrationWarning>
            {isClient ? t("serviceExperience.friendlyCommunication.description") : "Loading..."}
          </p>
        </div>

        {/* Effortless Airport Drop-off */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <div className="w-full h-48 mb-4 relative">
            <Image
              src="/images/drop.png"
              alt={isClient ? t("serviceExperience.airportDropOff.alt") : "Airport drop-off"}
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2" suppressHydrationWarning>
            {isClient ? t("serviceExperience.airportDropOff.title") : "Loading..."}
          </h3>
          <p className="text-base text-gray-700" suppressHydrationWarning>
            {isClient ? t("serviceExperience.airportDropOff.description") : "Loading..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceExperience;
