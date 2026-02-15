import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import inditex from '../assets/certificates/inditex.png';
import shirt from '../assets/certificates/shirt.png';
import primark from '../assets/certificates/primark.png';
import confidence from '../assets/certificates/confidence.png';
import organic from '../assets/certificates/organic.png';
import world from '../assets/certificates/world.png';
import bci from '../assets/certificates/bci.png';
import oeko from '../assets/certificates/oeko.png';
import cotton from '../assets/certificates/cotton.png';
import cotton_africa from '../assets/certificates/cotton_africa.png';
import blended from '../assets/certificates/blended.png';

const CertificationsSlider = () => {
  const certifications = [
    {
      id: 1,
      title: 'Inditex',
      image: inditex,
      bgColor: '#8B1538',
    },
    {
      id: 2,
      title: 'shirt',
      image: shirt,
      bgColor: '#00AEEF',
    },
    ,
    {
      id: 3,
      title: 'primark',
      image: primark,
      bgColor: '#4CAF50',
    },
    {
      id: 4,
      title: 'confidence',
      image: confidence,
      bgColor: '#00BCD4',
    },
    {
      id: 5,
      title: 'organic',
      image: organic,
      bgColor: '#FF9800',
    },
    {
      id: 6,
      title: 'world',
      image: world,
      bgColor: '#4CAF50',
    },
    {
      id: 7,
      title: 'bci',
      image: bci,
      bgColor: '#8BC34A',
    },
    {
      id: 8,
      title: 'oeko',
      image: oeko,
      bgColor: '#003366',
    },
    {
      id: 9,
      title: 'cotton',
      image: cotton,
      bgColor: '#8B1538',
    },
    {
      id: 10,
      title: 'cotton_africa',
      image: cotton_africa,
      bgColor: '#4CAF50',
    },
    {
      id:11,
      title: 'blended',
      image: blended,
      bgColor: '#003366',
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#00AEEF] text-lg font-semibold mb-2 uppercase tracking-wide">
            Quality Assurance
          </h2>
          <h3 className="text-[#222222] text-4xl md:text-5xl font-bold mb-6">
            Our Certifications
          </h3>
          <div className="w-24 h-1 bg-[#00AEEF] mx-auto mb-8"></div>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            We are proud to hold multiple international certifications that demonstrate our commitment 
            to quality, safety, sustainability, and ethical business practices.
          </p>
        </div>

        {/* Certifications Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="certifications-swiper pb-12"
        >
          {certifications.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#00AEEF] hover:shadow-xl transition-all duration-300 group h-full">
                <div className="relative overflow-hidden bg-white p-8">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          .certifications-swiper :global(.swiper-button-next),
          .certifications-swiper :global(.swiper-button-prev) {
            color: white;
            background: #00AEEF;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 2px solid #00AEEF;
          }

          .certifications-swiper :global(.swiper-button-next:hover),
          .certifications-swiper :global(.swiper-button-prev:hover) {
            background: #0095CC;
            border-color: #0095CC;
          }

          .certifications-swiper :global(.swiper-button-next:after),
          .certifications-swiper :global(.swiper-button-prev:after) {
            font-size: 18px;
          }

          .certifications-swiper :global(.swiper-pagination-bullet) {
            background: #666666;
            opacity: 0.4;
            width: 10px;
            height: 10px;
          }

          .certifications-swiper :global(.swiper-pagination-bullet-active) {
            background: #00AEEF;
            opacity: 1;
            width: 30px;
            border-radius: 5px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default CertificationsSlider;
