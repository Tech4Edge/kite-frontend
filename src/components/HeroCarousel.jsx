import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  EffectCube,
  EffectCreative,
  EffectCards,
} from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      title: "Safety Matches",
      subtitle:
        "Pakistan's Most Trusted Match Brands - Over 50 Years of Excellence",
      description:
        "Export Brands: Shrimp, Helicopter, Sunflower, Chinook | Local Brands: Kite, Bird, Olympia, Party, Tanga - Premium quality safety matches manufactured with the latest technology.",
      image: hero2,
      link: "/products",
      gradient: "from-blue-900/50 via-blue-800/30 to-transparent",
      accentColor: "#1E3A8A",
    },
    {
      id: 2,
      title: "Burq Detergent Action",
      subtitle: "Color Guard - Deep Clean with Powerful Action",
      description:
        "Powerful stain removal with color protection technology. Keeps your clothes looking new, wash after wash.",
      image: hero4,
      link: "/products",
      gradient: "from-orange-900/50 via-orange-700/30 to-transparent",
      accentColor: "#EA580C",
    },
    {
      id: 3,
      title: "Kite Dishwash Bar",
      subtitle: "Extra Strength - Sparkling Clean Dishes",
      description:
        "Powerful cleaning with natural lemon freshness. Gentle on hands, tough on grease. The perfect choice for sparkling dishes.",
      image: hero3,
      link: "/products",
      gradient: "from-green-800/50 via-green-600/30 to-transparent",
      accentColor: "#059669",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> */}

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
            rotate: [0, 0, -15],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
            rotate: [0, 0, 15],
          },
        }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] w-full overflow-hidden">
              {/* Background Image - Full Cover */}
              <div className="absolute inset-0">
                <Link to={slide.link} className="block w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  </Link>
                {/* Subtle Gradient Overlay for Text Readability */}
                {/* <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" /> */}
              </div>

              {/* Decorative Elements - Hidden for cleaner look */}
              {/* <div className="absolute top-20 right-10 w-64 h-64 border-2 border-white/10 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-32 left-10 w-48 h-48 border-2 border-white/10 rounded-full animate-spin-slow-reverse"></div> */}

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-20">
                <div className="max-w-3xl space-y-6 animate-fade-in-up">
                  {/* Decorative Line */}
                  {/* <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent animate-pulse"></div>
                    <span className="text-white text-sm font-bold tracking-[0.3em] uppercase drop-shadow-lg">
                      Trusted Quality Since 1975
                    </span>
                  </div> */}

                  {/* Title with Glowing Effect */}
                  {/* <h1
                    className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-[1.1] tracking-tight"
                    style={{
                      textShadow: `0 0 30px ${slide.accentColor}40, 0 10px 40px rgba(0,0,0,0.9), 0 5px 15px rgba(0,0,0,0.8)`,
                      animation: "glow 2s ease-in-out infinite alternate",
                    }}
                  >
                    {slide.title}
                  </h1> */}

                  {/* Subtitle with Glass Effect */}
                  {/* <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 leading-relaxed">
                      {slide.subtitle}
                    </h2>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div> */}

                  {/* CTA Button with Premium Design */}
                  {/* <div className="flex flex-wrap gap-4 mt-8">
                      
                      <button
                        onClick={() => navigate(slide.link)}
                        className="group relative overflow-hidden bg-gradient-to-r from-primary to-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl transition-all duration-500 hover:shadow-primary/50 hover:scale-105 active:scale-95"
                        style={{
                          boxShadow: `0 10px 40px ${slide.accentColor}40`,
                        }}
                      > */}
                  {/* Button Shine Effect */}
                  {/* <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        <span className="relative flex items-center gap-3">
                          View Products
                          <svg
                            className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </button>

                  
                  
                      <button
                      onClick={() => navigate("/contact")}
                      className="group backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95">
                        <span className="flex items-center gap-3">
                          Contact Us
                          <svg
                            className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                      </button>
                    </div> */}
                </div>
              </div>

              {/* Bottom Accent Line */}
              {/* <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{ backgroundColor: slide.accentColor }}
              ></div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1.1) translateX(0) translateY(0);
          }
          100% {
            transform: scale(1.2) translateX(-20px) translateY(-20px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          from {
            text-shadow:
              0 0 20px rgba(0, 174, 239, 0.3),
              0 10px 40px rgba(0, 0, 0, 0.9);
          }
          to {
            text-shadow:
              0 0 40px rgba(0, 174, 239, 0.6),
              0 10px 40px rgba(0, 0, 0, 0.9);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite alternate;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Swiper Navigation Buttons - Premium Design */
        .hero-swiper :global(.swiper-button-next),
        .hero-swiper :global(.swiper-button-prev) {
          color: white;
          background: rgba(0, 174, 239, 0.2);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .hero-swiper :global(.swiper-button-next:hover),
        .hero-swiper :global(.swiper-button-prev:hover) {
          background: rgba(0, 174, 239, 0.8);
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.15);
          box-shadow: 0 12px 48px rgba(0, 174, 239, 0.4);
        }

        .hero-swiper :global(.swiper-button-next:after),
        .hero-swiper :global(.swiper-button-prev:after) {
          font-size: 22px;
          font-weight: bold;
        }

        /* Pagination - Modern Glass Design */
        .hero-swiper :global(.swiper-pagination) {
          bottom: 20px !important;
          z-index: 30;
        }

        .hero-swiper :global(.swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          opacity: 1;
          width: 14px;
          height: 14px;
          margin: 0 6px !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-swiper :global(.swiper-pagination-bullet-active) {
          background: linear-gradient(135deg, #00aeef, #0095cc);
          border-color: rgba(0, 174, 239, 0.8);
          width: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 174, 239, 0.6);
        }

        .hero-swiper :global(.swiper-pagination-bullet:hover) {
          transform: scale(1.2);
          border-color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
