import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import textile_img from "../assets/textile_hero.jpg"
import match_img from "../assets/matches_hero.jpg"

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: 'Textile Division',
      subtitle: 'A.J Textile Mills Ltd. - Over 100,000 Spindles',
      description: 'One of Pakistan\'s largest spinning mills with state-of-the-art ring spinning and Murata vortex spinning technology.',
      image: textile_img,
      link: '/textile-division',
    },
    {
      id: 2,
      title: 'FMCG Division',
      subtitle: 'The group has the largest match manufacturing operation and also the largest exporter of safety matches.',
      description: 'Premium quality safety matches manufactured with the latest technology. Brands: Kite, Olympia, Tanga, Bird, Party, and more.',
      image: match_img,
      link: '/fmcg-division',
    },
    {
      id: 3,
      title: 'Board Division',
      subtitle: 'The group has a sizable production of MDF, Particle Board and Lamination of boards.',
      description: 'High-quality MDF, particle board, and lamination products for diverse applications across Pakistan.',
      image: textile_img,
      link: '/board-division',
    },
    {
      id: 4,
      title: 'Real Estate Division',
      subtitle: 'The group has started a real estate project with the name of AJ Tower at Gulberg Green Islamabad.',
      description: 'Premium mixed-use developments with sustainable and innovative design including AJ Towers and AJ Corporate Avenue.',
      image: match_img,
      link: '/real-estate',
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
          <Link to={slide.link}>
            <div className="relative h-[600px] md:h-[700px] w-full cursor-pointer">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 hover:from-black/70 hover:to-black/40 transition-all duration-300" />
              </div>

              {/* Content with Enhanced Text Shadows */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-3xl">
                  <h1 className="text-white! text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-[0_6px_12px_rgba(0,0,0,0.9)]">
                    {slide.title}
                  </h1>
                  <h2 className="text-white! text-xl md:text-2xl font-semibold mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                    {slide.subtitle}
                  </h2>
                  <p className="text-white! text-lg md:text-xl mb-8 max-w-2xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-[#00AEEF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0095CC] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 inline-block">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
      </Swiper>

      <style jsx>{`
        .hero-swiper :global(.swiper-button-next),
        .hero-swiper :global(.swiper-button-prev) {
          color: #00AEEF;
          background: rgba(255, 255, 255, 0.95);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .hero-swiper :global(.swiper-button-next:hover),
        .hero-swiper :global(.swiper-button-prev:hover) {
          background: #FFEFF9;
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
          background: #00AEEF;
          opacity: 1;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
