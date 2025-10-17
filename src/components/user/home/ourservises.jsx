"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const services = [
  {
    img: "/images/services(car).png",
    altKey: "car_alt",
    descKey: "car_description",
    defaultAlt: "Car service",
    defaultDesc: "Car service description"
  },
  {
    img: "/images/services(bus).png",
    altKey: "bus_alt",
    descKey: "bus_description",
    defaultAlt: "Bus service",
    defaultDesc: "Bus service description"
  },
  {
    img: "/images/services(airport).png",
    altKey: "plane_alt",
    descKey: "plane_description",
    defaultAlt: "Plane service",
    defaultDesc: "Plane service description"
  },
  {
    img: "/images/services(Driver).png",
    altKey: "driver_alt",
    descKey: "driver_description",
    defaultAlt: "Driver service",
    defaultDesc: "Driver service description"
  }
];

function OurServicesSection() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="pt-1 pb-8 bg-yellow-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-black transform translate-y-5 md:-translate-y-20" suppressHydrationWarning>
          {isClient ? t("our_services") : "Loading..."}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-transparent rounded-2xl shadow-md flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-transparent p-4 rounded-full mb-6">
                <img
                  src={service.img}
                  alt={isClient ? t(service.altKey, service.defaultAlt) : service.defaultAlt}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <p className="text-base text-gray-700" suppressHydrationWarning>
                {isClient ? t(service.descKey, service.defaultDesc) : service.defaultDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;
