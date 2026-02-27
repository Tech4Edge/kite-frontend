import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import efs from "../assets/certificates/efs.png";
import fbr from "../assets/certificates/fbr.png";
import iaf from "../assets/certificates/iaf.png";
import iso900 from "../assets/certificates/iso900.png";
import ps from "../assets/certificates/ps.png";
import secp from "../assets/certificates/secp.png";
import ukas from "../assets/certificates/ukas.png";

const CertificationsSlider = () => {
  const certifications = [
    {
      id: 1,
      title: "Export Excellence Score",
      image: efs,
      bgColor: "#00AEEF",
    },
    {
      id: 2,
      title: "Federal Board of Revenue",
      image: fbr,
      bgColor: "#4CAF50",
    },
    {
      id: 3,
      title: "International Accreditation Forum",
      image: iaf,
      bgColor: "#003366",
    },
    {
      id: 4,
      title: "ISO 9001",
      image: iso900,
      bgColor: "#FF9800",
    },
    {
      id: 5,
      title: "Pakistan Standards",
      image: ps,
      bgColor: "#4CAF50",
    },
    {
      id: 6,
      title: "SECP",
      image: secp,
      bgColor: "#00BCD4",
    },
    {
      id: 7,
      title: "UKAS Management Systems",
      image: ukas,
      bgColor: "#8B1538",
    },
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
            We are proud to hold multiple international certifications that
            demonstrate our commitment to quality, safety, sustainability, and
            ethical business practices.
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
              <div className="relative bg-white rounded-xl overflow-x-hidden border border-gray-200 hover:border-[#00AEEF] hover:shadow-xl transition-all duration-300 group h-full">
                <div className="relative overflow-hidden bg-white p-8">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          .certifications-swiper {
            padding-bottom: 40px;
          }

          .certifications-swiper :global(.swiper-button-next),
          .certifications-swiper :global(.swiper-button-prev) {
            color: white;
            background: #00aeef;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 2px solid #00aeef;
          }

          .certifications-swiper :global(.swiper-button-next:hover),
          .certifications-swiper :global(.swiper-button-prev:hover) {
            background: #0095cc;
            border-color: #0095cc;
          }

          .certifications-swiper :global(.swiper-button-next:after),
          .certifications-swiper :global(.swiper-button-prev:after) {
            font-size: 18px;
          }

          .swiper-pagination {
            bottom: -0px !important;
          }

          .certifications-swiper :global(.swiper-pagination-bullet) {
            background: #666666;
            opacity: 0.4;
            width: 10px;
            height: 10px;
          }

          .certifications-swiper :global(.swiper-pagination-bullet-active) {
            background: #00aeef;
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
