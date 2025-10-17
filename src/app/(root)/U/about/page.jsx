"use client";
import React from "react";
import Navbar from "@/components/user/Navbar";
import FeaturesList from "@/components/user/about/FeaturesList";
import FeatureCards from "@/components/user/about/FeatureCards";

import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <img src={"/about/car.png"} className="w-15 ml-25" alt={t("story.features.findRideAlt")} />,
      title: t("story.features.findRide.title"),
      desc: t("story.features.findRide.desc"),
    },
    {
      icon: <img src={"/about/customer-service.png"} className="w-15 ml-28" alt={t("story.features.connectDriverAlt")} />,
      title: t("story.features.connectDriver.title"),
      desc: t("story.features.connectDriver.desc"),
    },
    {
      icon: <img src={"/about/way.png"} className="w-15 ml-27" alt={t("story.features.enjoyJourneyAlt")} />,
      title: t("story.features.enjoyJourney.title"),
      desc: t("story.features.enjoyJourney.desc"),
    },
  ];

  const cards = [
    {
      image: "/about/3D map.jpg",
      title: t("story.cards.navigateCity.title"),
      desc: t("story.cards.navigateCity.desc"),
    },
    {
      image: "/about/about(3).png",
      title: t("story.cards.lowFare.title"),
      desc: t("story.cards.lowFare.desc"),
    },
    {
      image: "/about/about(4).png",
      title: t("story.cards.spotSpeed.title"),
      desc: t("story.cards.spotSpeed.desc"),
    },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="bg-yellow-50 min-h-screen">
        <Link
          href="/U/home"
          className="absolute top-28 left-4 z-30 p-2 bg-white rounded-full hover:bg-gray-100 shadow transition"
          aria-label={t("help.back")}
        >
          <ArrowLeftIcon className="w-6 h-6 text-black" />
        </Link>
        <div className="relative h-56 md:h-100 bg-gray-800 flex items-center justify-center">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-90 shadow-2xl"
            src="/about/about(1).png"
            alt={t("story.topBannerAlt")}
          />
          <div className="relative z-10 px-4 text-center">
            <h1 className="text-white font-extrabold text-2xl md:text-4xl mb-2">
              {t("story.topBanner.title1")}
              <br />
              {t("story.topBanner.title2")} <span className="text-yellow-400"> ZipRide</span>
            </h1>
            <p className="text-gray-100">
              {t("story.topBanner.subtitle")}
              <br className="hidden md:block" />
            </p>
          </div>
        </div>
        <section className="max-w-4xl mx-auto bg-yellow-50 rounded-xl shadow-lg p-8 mt-[-40px] relative z-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">{t("story.ourStoryTitle")}</h2>
          <p className="text-gray-700 mb-2">{t("story.ourStory.paragraph1")}</p>
          <p className="text-gray-700 mb-2">{t("story.ourStory.paragraph2")}</p>
          <p className="text-gray-700">{t("story.ourStory.paragraph3")}</p>
        </section>

        <FeaturesList features={features} />

        <FeatureCards cards={cards} />
      </div>
    </>
  );
};

export default AboutPage;
