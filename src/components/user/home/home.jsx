import Image from "next/image";
import { FaTag, FaClock, FaLock, FaGlobe } from "react-icons/fa";

const WhyChooseZipRide = () => (
  <section className="relative flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 bg-yellow-50 rounded-3xl mt-10 sm:mt-12 shadow-lg overflow-hidden">
    {/* Decorative Background Circle */}
    <div className="absolute -top-20 -left-32 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-yellow-100 rounded-full blur-3xl opacity-60 z-0" />

    {/* Left Content */}
    <div className="flex-1 mb-12 lg:mb-0 lg:mr-10 z-10 text-center lg:text-left px-2">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-black mb-4 leading-snug">
        Why Choose <span className="text-yellow-500">ZipRide?</span>
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
        We are redefining the way you travel with safe, affordable, and reliable rides.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Affordable Pricing */}
        <div className="flex items-start space-x-3 sm:space-x-4 bg-yellow-100 rounded-xl p-4 sm:p-5 hover:scale-[1.02] transition-transform">
          <span className="bg-yellow-200 p-2 sm:p-3 rounded-xl flex-shrink-0">
            <FaTag className="text-yellow-500 text-xl sm:text-2xl md:text-3xl" />
          </span>
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1">
              Affordable Pricing
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-snug">
              Transparent fares with no hidden charges.
            </p>
          </div>
        </div>

        {/* Quick & Reliable */}
        <div className="flex items-start space-x-3 sm:space-x-4 bg-yellow-100 rounded-xl p-4 sm:p-5 hover:scale-[1.02] transition-transform">
          <span className="bg-yellow-200 p-2 sm:p-3 rounded-xl flex-shrink-0">
            <FaClock className="text-yellow-500 text-xl sm:text-2xl md:text-3xl" />
          </span>
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1">
              Quick & Reliable
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-snug">
              Get a ride in less than 5 minutes.
            </p>
          </div>
        </div>

        {/* Safe Rides */}
        <div className="flex items-start space-x-3 sm:space-x-4 bg-yellow-100 rounded-xl p-4 sm:p-5 hover:scale-[1.02] transition-transform">
          <span className="bg-yellow-200 p-2 sm:p-3 rounded-xl flex-shrink-0">
            <FaLock className="text-yellow-500 text-xl sm:text-2xl md:text-3xl" />
          </span>
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1">
              Safe Rides
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-snug">
              Verified drivers, real-time tracking, 24/7 support.
            </p>
          </div>
        </div>

        {/* Wide Coverage */}
        <div className="flex items-start space-x-3 sm:space-x-4 bg-yellow-100 rounded-xl p-4 sm:p-5 hover:scale-[1.02] transition-transform">
          <span className="bg-yellow-200 p-2 sm:p-3 rounded-xl flex-shrink-0">
            <FaGlobe className="text-yellow-500 text-xl sm:text-2xl md:text-3xl" />
          </span>
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1">
              Wide Coverage
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-snug">
              Available across multiple cities.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center items-center z-10">
      <div className="rounded-2xl overflow-hidden shadow-xl w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] bg-white flex items-center justify-center">
        <Image
          src="/image.jpg"
          alt="ZipRide Promo"
          width={400}
          height={340}
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
    </div>
  </section>
);

export default WhyChooseZipRide;
