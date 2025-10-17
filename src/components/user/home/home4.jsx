// "use client";

// import { useEffect, useRef } from "react";
// import { Star } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const testimonials = [
//   {
//     name: "Anjali R.",
//     rating: 5,
//     text: "ZipRide makes my daily commute super easy! The drivers are friendly and always on time.",
//     avatar: "https://i.pravatar.cc/100?img=1",
//   },
//   {
//     name: "Rohit M.",
//     rating: 4,
//     text: "Smooth rides, clean vehicles, and great pricing. Totally worth it!",
//     avatar: "https://i.pravatar.cc/100?img=2",
//   },
//   {
//     name: "Sneha K.",
//     rating: 5,
//     text: "Love the app experience! Booking a ride has never been this simple.",
//     avatar: "https://i.pravatar.cc/100?img=3",
//   },
//   {
//     name: "Vikram D.",
//     rating: 4,
//     text: "Very professional drivers and seamless payments. Highly recommended!",
//     avatar: "https://i.pravatar.cc/100?img=4",
//   },
//   {
//     name: "Divya S.",
//     rating: 5,
//     text: "Comfortable, quick, and reliable — ZipRide is my go-to travel partner!",
//     avatar: "https://i.pravatar.cc/100?img=5",
//   },
// ];

// export default function Testimonials() {
//   const sectionRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const container = containerRef.current;

//     // Calculate the total scroll distance
//     const scrollDistance = container.scrollWidth - window.innerWidth;

//     // Create horizontal scroll animation
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: () => `+=${scrollDistance * 1.5}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//       },
//     });

//     tl.to(container, {
//       x: -scrollDistance,
//       ease: "none",
//     });

//     // Animate each card on entry
//     const cards = container.querySelectorAll(".testimonial-card");
//     cards.forEach((card, i) => {
//       gsap.from(card, {
//         opacity: 0,
//         scale: 0.8,
//         y: 100,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "left 90%",
//           end: "left 50%",
//           containerAnimation: tl,
//           toggleActions: "play none none reverse",
//         },
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="bg-yellow-50 py-16 overflow-hidden relative h-screen flex items-center">
//       {/* Header - Fixed Position */}
//       <div className="absolute top-16 left-0 right-0 text-center z-10 px-4">
//         <h2 className="text-5xl font-extrabold text-black font-sans mb-3">
//           What Our Riders Say
//         </h2>
//         <p className="text-gray-700 text-lg font-sans">
//           Real stories from riders who love their ZipRide experience
//         </p>
//       </div>

//       {/* Horizontal scroll container */}
//       <div
//         ref={containerRef}
//         className="flex gap-8 pl-8 pr-8 items-center"
//         style={{ width: "max-content" }}
//       >
//         {testimonials.map((t, i) => (
//           <div
//             key={i}
//             className="testimonial-card flex-none w-80 bg-transparant rounded-2xl shadow-2xl p-8 flex flex-col transform hover:scale-105 transition-transform duration-300"
//             style={{
//               marginTop: i % 2 === 0 ? "-2rem" : "2rem",
//             }}
//           >
//             {/* Avatar & Info */}
//             <div className="flex items-center mb-5">
//               <img
//                 src={t.avatar}
//                 alt={t.name}
//                 className="w-16 h-16 rounded-full object-cover  shadow-lg"
//               />
//               <div className="ml-4">
//                 <h3 className="font-bold text-black text-lg">{t.name}</h3>
//                 <div className="flex text-yellow-500 mt-1">
//                   {Array.from({ length: t.rating }).map((_, i2) => (
//                     <Star key={i2} size={10} fill="currentColor" />
//                   ))}
//                   {t.rating < 5 &&
//                     Array.from({ length: 5 - t.rating }).map((_, i2) => (
//                       <Star key={i2 + t.rating} size={10} />
//                     ))}
//                 </div>
//               </div>
//             </div>

//             {/* Review */}
//             <p className="text-base text-gray-700 font-sans leading-relaxed flex-grow">
//               {t.text}
//             </p>

//           </div>
//         ))}

       
//       </div>

    
//     </section>
//   );
// }




// "use client";

// import { useEffect, useRef } from "react";
// import { Star } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useTranslation } from "react-i18next";

// gsap.registerPlugin(ScrollTrigger);

// const testimonialsData = [
//   {
//     name: "Anjali R.",
//     rating: 5,
//     textKey: "testimonials.anjali",
//     avatar: "https://i.pravatar.cc/100?img=1",
//   },
//   {
//     name: "Rohit M.",
//     rating: 4,
//     textKey: "testimonials.rohit",
//     avatar: "https://i.pravatar.cc/100?img=2",
//   },
//   {
//     name: "Sneha K.",
//     rating: 5,
//     textKey: "testimonials.sneha",
//     avatar: "https://i.pravatar.cc/100?img=3",
//   },
//   {
//     name: "Vikram D.",
//     rating: 4,
//     textKey: "testimonials.vikram",
//     avatar: "https://i.pravatar.cc/100?img=4",
//   },
//   {
//     name: "Divya S.",
//     rating: 5,
//     textKey: "testimonials.divya",
//     avatar: "https://i.pravatar.cc/100?img=5",
//   },
// ];

// export default function Testimonials() {
//   const sectionRef = useRef(null);
//   const containerRef = useRef(null);
//   const { t } = useTranslation();

//   useEffect(() => {
//     const section = sectionRef.current;
//     const container = containerRef.current;

//     const scrollDistance = container.scrollWidth - window.innerWidth;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: () => `+=${scrollDistance * 1.5}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//       },
//     });

//     tl.to(container, {
//       x: -scrollDistance,
//       ease: "none",
//     });

//     const cards = container.querySelectorAll(".testimonial-card");
//     cards.forEach((card, i) => {
//       gsap.from(card, {
//         opacity: 50,
//         scale: 1,
//         y: 100,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "left 90%",
//           end: "left 50%",
//           containerAnimation: tl,
//           toggleActions: "play none none reverse",
//         },
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-yellow-50 py-16 overflow-hidden relative h-screen flex items-center"
//     >
//       <div className="absolute top-16 left-0 right-0 text-center z-10 px-4">
//         <h2 className="text-5xl font-extrabold text-black font-sans mb-3">
//           {t("testimonials.header")}
//         </h2>
//         <p className="text-gray-700 text-lg font-sans">
//           {t("testimonials.subheader")}
//         </p>
//       </div>

//       <div
//         ref={containerRef}
//         className="flex gap-8 pl-8 pr-8 items-center"
//         style={{ width: "max-content" }}
//       >
//         {testimonialsData.map((tData, i) => (
//           <div
//             key={i}
//             className="testimonial-card flex-none w-80 bg-transparant rounded-2xl shadow-2xl p-8 flex flex-col transform hover:scale-105 transition-transform duration-300"
//             style={{
//               marginTop: i % 2 === 0 ? "-2rem" : "2rem",
//             }}
//           >
//             <div className="flex items-center mb-5">
//               <img
//                 src={tData.avatar}
//                 alt={tData.name}
//                 className="w-16 h-16 rounded-full object-cover  shadow-lg"
//               />
//               <div className="ml-4">
//                 <h3 className="font-bold text-black text-lg">{tData.name}</h3>
//                 <div className="flex text-yellow-500 mt-1">
//                   {Array.from({ length: tData.rating }).map((_, i2) => (
//                     <Star key={i2} size={10} fill="currentColor" />
//                   ))}
//                   {tData.rating < 5 &&
//                     Array.from({ length: 5 - tData.rating }).map((_, i2) => (
//                       <Star key={i2 + tData.rating} size={10} />
//                     ))}
//                 </div>
//               </div>
//             </div>

//             <p className="text-base text-gray-700 font-sans leading-relaxed flex-grow">
//               {t(tData.textKey)}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  { name: "Anjali R.", rating: 5, textKey: "testimonials.anjali", avatar: "https://i.pravatar.cc/100?img=1" },
  { name: "Rohit M.", rating: 4, textKey: "testimonials.rohit", avatar: "https://i.pravatar.cc/100?img=2" },
  { name: "Sneha K.", rating: 5, textKey: "testimonials.sneha", avatar: "https://i.pravatar.cc/100?img=3" },
  { name: "Vikram D.", rating: 4, textKey: "testimonials.vikram", avatar: "https://i.pravatar.cc/100?img=4" },
  { name: "Divya S.", rating: 5, textKey: "testimonials.divya", avatar: "https://i.pravatar.cc/100?img=5" },
  { name: "Varun c.", rating: 3, textKey: "testimonials.divya", avatar: "https://i.pravatar.cc/100?img=2" },
  { name: "Amal p.", rating: 4, textKey: "testimonials.divya", avatar: "https://i.pravatar.cc/100?img=4" },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // use gsap.context to scope selectors and make cleanup easier in React
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = containerRef.current;
      if (!section || !container) return;

      // helper that (re)initializes the ScrollTrigger/timeline based on current sizes
      const init = () => {
        // kill any existing ScrollTrigger instances first
        ScrollTrigger.getAll().forEach((st) => st.kill());

        // measure scroll distance (how much container must translate left)
        const scrollDistance = Math.max(0, container.scrollWidth - window.innerWidth);

        // If no horizontal overflow, no need to pin/animate
        if (scrollDistance === 0) {
          // ensure container is at x:0
          gsap.set(container, { x: 0 });
          return;
        }

        // main horizontal timeline pinned to the section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.round(scrollDistance * 1.2)}`, // slightly longer for breathing room
            scrub: 1.2, // smooth following of scroll
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // move the container left by scrollDistance
        tl.to(container, {
          x: -scrollDistance,
          ease: "power2.inOut",
        });

        // animate the individual cards' entrance tied to the container timeline
        const cards = container.querySelectorAll(".testimonial-card");
        cards.forEach((card) => {
          // fromTo gives explicit start -> end properties for consistency
          gsap.fromTo(
            card,
            { opacity: 0.85, y: 60, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "left 95%",
                end: "left 60%",
                containerAnimation: tl,
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Force a refresh after init so ScrollTrigger has correct geometry
        ScrollTrigger.refresh();
      }; // init

      // initialize once
      init();

      // re-init on resize (debounced)
      let resizeTimer = null;
      const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          init();
        }, 120);
      };
      window.addEventListener("resize", onResize);

      // also re-init after images inside container finish loading (so scrollWidth is accurate)
      const imgs = container.querySelectorAll("img");
      let imagesToLoad = imgs.length;
      if (imagesToLoad === 0) {
        // nothing to wait for
      } else {
        imgs.forEach((img) => {
          if (img.complete) {
            imagesToLoad -= 1;
          } else {
            img.addEventListener(
              "load",
              () => {
                imagesToLoad -= 1;
                if (imagesToLoad <= 0) {
                  // small delay to ensure layout settled
                  setTimeout(() => init(), 60);
                }
              },
              { once: true }
            );
            img.addEventListener(
              "error",
              () => {
                imagesToLoad -= 1;
                if (imagesToLoad <= 0) {
                  setTimeout(() => init(), 60);
                }
              },
              { once: true }
            );
          }
        });
        if (imagesToLoad <= 0) {
          setTimeout(() => init(), 60);
        }
      }

      // cleanup for event listeners when context reverts
      return () => {
        window.removeEventListener("resize", onResize);
        clearTimeout(resizeTimer);
      };
    }, sectionRef); // scope to sectionRef node

    // cleanup: revert gsap.context which also kills associated ScrollTriggers
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-yellow-50 py-16 overflow-hidden relative h-screen flex items-center"
    >
      <div className="absolute top-16 left-0 right-0 text-center z-10 px-4">
        <h2 className="text-5xl font-extrabold text-black font-sans mb-3" suppressHydrationWarning>
          {isClient ? t("testimonials.header") : "Loading..."}
        </h2>
        <p className="text-gray-700 text-lg font-sans" suppressHydrationWarning>
          {isClient ? t("testimonials.subheader") : "Loading..."}
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex gap-8 pl-8 pr-8 items-center will-change-transform"
        style={{ width: "max-content" }}
      >
        {testimonialsData.map((tData, i) => (
          <div
            key={i}
            className="testimonial-card flex-none w-80 bg-transparant rounded-2xl shadow-lg p-8 flex flex-col transform hover:scale-105 transition-transform duration-300"
            style={{ marginTop: i % 2 === 0 ? "-2rem" : "2rem" }}
          >
            <div className="flex items-center mb-5">
              <img
                src={tData.avatar}
                alt={tData.name}
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div className="ml-4">
                <h3 className="font-bold text-black text-lg">{tData.name}</h3>
                <div className="flex text-yellow-500 mt-1">
                  {Array.from({ length: 5 }).map((_, i2) => (
                    <Star key={i2} size={12} fill={i2 < tData.rating ? "currentColor" : "none"} />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-base text-gray-700 font-sans leading-relaxed flex-grow" suppressHydrationWarning>
              {isClient ? t(tData.textKey) : "Loading..."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
