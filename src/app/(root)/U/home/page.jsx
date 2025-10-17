"use client";

import React, { useState, useEffect } from "react";
import "@/lib/i18n"; // Correct import path for i18n.jsx!
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/user/Navbar"), { ssr: false });
import { FaCarSide, FaBus, FaPlane, FaIdCard } from "react-icons/fa";
import Link from "next/link";
import WhyChooseZipRide from "@/components/user/home/ServiceSection";
import ServiceExperience from "@/components/user/home/home3";
import Testimonials from "@/components/user/home/home4";
import DownloadAppSection from "@/components/user/home/home5";
import Footer from "@/components/user/footer/page";
// import HeroBanner from "./components/home1";
import LanguageSwitcher from "@/components/user/LanguageSwitcher";
import HomePageSection from "@/components/user/shedule";
import OurServicesSection from "@/components/user/home/ourservises";
import HeroSection from "@/components/user/home/home1";

const HomePage = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-yellow-50 text-dark-text relative">
      {/* Fixed Navbar */}
      <header>
        <Navbar />
      </header>
      <section>
        <HeroSection />
      </section>
      <section>
        <OurServicesSection/>
      </section>
      <section>
        <HomePageSection/>
      </section>
      <section>
        <WhyChooseZipRide />
      </section>
      <section>
        <ServiceExperience />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <DownloadAppSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
