import Image from "next/image";
import { FaTag, FaClock, FaLock, FaGlobe } from "react-icons/fa";

// "Why Choose ZipRide?" Section
const WhyChooseZipRide = () => (
  <section className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 py-20 bg-yellow-50 rounded-3xl mt-12 shadow-lg overflow-hidden">
    {/* Left Content */}
    <div className="flex-1 mb-12 md:mb-0 md:mr-8 z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
        Why Choose ZipRide?
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        We are redefining the way you travel with safe, affordable, and reliable rides
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Affordable Pricing */}
        <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
          <span className="bg-yellow-200 p-3 rounded-xl">
            <FaTag className="text-yellow-400 text-3xl" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-black mb-1">Affordable Pricing</h3>
            <p className="text-gray-700 text-base">
              Transparent fares with no hidden charges
            </p>
          </div>
        </div>
        {/* Quick & Reliable */}
        <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
          <span className="bg-yellow-200 p-3 rounded-xl">
            <FaClock className="text-yellow-400 text-3xl" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-black mb-1">Quick & Reliable</h3>
            <p className="text-gray-700 text-base">
              Get a ride in less than 5 minutes
            </p>
          </div>
        </div>
        {/* Safe Rides */}
        <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
          <span className="bg-yellow-200 p-3 rounded-xl">
            <FaLock className="text-yellow-400 text-3xl" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-black mb-1">Safe Rides</h3>
            <p className="text-gray-700 text-base">
              Verified drivers, real-time tracking, 24/7 support
            </p>
          </div>
        </div>
        {/* Wide Coverage */}
        <div className="flex items-start space-x-4 bg-yellow-100 rounded-lg p-4">
          <span className="bg-yellow-200 p-3 rounded-xl">
            <FaGlobe className="text-yellow-400 text-3xl" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-black mb-1">Wide Coverage</h3>
            <p className="text-gray-700 text-base">
              Available across multiple cities
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Right Image */}
    <div className="flex-1 flex justify-center items-center z-10">
      <div className="rounded-2xl overflow-hidden shadow-xl w-[340px] h-[340px] md:w-[380px] md:h-[320px] bg-white flex items-center justify-center">
        <Image
          src="/image.jpg" // Place your image in the /public folder or use the correct import path
          alt="ZipRide Promo"
          width={380}
          height={320}
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
    {/* Yellow decorative background circle */}
    <div className="absolute -top-16 -left-28 w-[600px] h-[600px] bg-yellow-100 rounded-full blur-2xl opacity-60 z-0"></div>
  </section>
);

export default WhyChooseZipRide;
