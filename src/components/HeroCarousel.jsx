import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import textile_img from "../assets/textile_hero.jpg";
import match_img from "../assets/matches_hero.jpg";
import real_estate_img from "../assets/real_estate_hero.jpeg";
import board_img from "../assets/board_hero.jpeg";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Textile Division",
      subtitle: "A.J Textile Mills Ltd. - Over 100,000 Spindles",
      description:
        "One of Pakistan's largest spinning mills with state-of-the-art ring spinning and Murata vortex spinning technology.",
      image: textile_img,
      link: "/textile-division",
    },
    {
      id: 2,
      title: "FMCG Division",
      subtitle:
        "The group has the largest match manufacturing operation and also the largest exporter of safety matches.",
      description:
        "Premium quality safety matches manufactured with the latest technology. Brands: Kite, Olympia, Tanga, Bird, Party, and more.",
      image: match_img,
      link: "/fmcg-division",
    },
    {
      id: 3,
      title: "Board Division",
      subtitle:
        "The group has a sizable production of MDF, Particle Board and Lamination of boards.",
      description:
        "High-quality MDF, particle board, and lamination products for diverse applications across Pakistan.",
      image: board_img,
      link: "/board-division",
    },
    {
      id: 4,
      title: "Real Estate Division",
      subtitle:
        "The group has started a real estate project with the name of AJ Tower at Gulberg Green Islamabad.",
      description:
        "Premium mixed-use developments with sustainable and innovative design including AJ Towers and AJ Corporate Avenue.",
      image: real_estate_img,
      link: "/real-estate",
    },
  ];

  return (
    <section id="home" className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 hover:from-black/70 hover:to-black/40 transition-all duration-300" />
              </div>

              {/* Content with Enhanced Text Shadows */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-3xl">
                  <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 leading-tight drop-shadow-[0_6px_12px_rgba(0,0,0,0.9)]">
                    {slide.title}
                  </h1>
                  <h2 className="text-text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                    {slide.subtitle}
                  </h2>
                  <p className="text-text-white text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-8 max-w-2xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] line-clamp-3">
                    {slide.description}
                  </p>
                  <Link to={slide.link}>
                    <div className="flex flex-wrap gap-2 sm:gap-4 cursor-pointer">
                      <span className="bg-primary text-text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 inline-block">
                        Learn More
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .hero-swiper :global(.swiper-button-next),
        .hero-swiper :global(.swiper-button-prev) {
          color: #00aeef;
          background: rgba(255, 255, 255, 0.95);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .hero-swiper :global(.swiper-button-next:hover),
        .hero-swiper :global(.swiper-button-prev:hover) {
          background: #ffeff9;
          transform: scale(1.1);
        }

        .hero-swiper :global(.swiper-button-next:after),
        .hero-swiper :global(.swiper-button-prev:after) {
          font-size: 20px;
        }

        .hero-swiper :global(.swiper-pagination-bullet) {
          background: white;
          opacity: 0.6;
          width: 12px;
          height: 12px;
        }

        .hero-swiper :global(.swiper-pagination-bullet-active) {
          background: #00aeef;
          opacity: 1;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
