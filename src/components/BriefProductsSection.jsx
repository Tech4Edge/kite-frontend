import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaFire, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import kite_img from "../assets/products/kite.jpeg";
import burq_img from "../assets/products/BurqDetergent.jpeg";
import glow_img from "../assets/kiteglow.jpg";

const BriefProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const featuredProducts = [
    {
      id: "kite-matches",
      title: "Kite Safety Matches",
      shortDescription:
        "Pakistan's #1 safety match brand with over 50 years of excellence. Damp-proof technology and international safety standards.",
      image: kite_img,
      color: "#ED028C",
      icon: <FaFire className="text-4xl" />,
    },
    {
      id: "olympia",
      title: "Olympia Safety Matches",
      shortDescription:
        "Trusted local brand of safety matches with premium quality standards. Damp-proof technology ensures reliable performance.",
      image: kite_img,
      color: "#ED028C",
      icon: <FaFire className="text-4xl" />,
    },
    {
      id: "party",
      title: "Party Safety Matches",
      shortDescription:
        "Popular local brand known for reliable performance and quality. Consistent ignition in all weather conditions.",
      image: kite_img,
      color: "#ED028C",
      icon: <FaFire className="text-4xl" />,
    },
    {
      id: "tanga",
      title: "Tanga Safety Matches",
      shortDescription:
        "Trusted local brand manufactured with premium quality standards. Known for reliable performance across all sizes.",
      image: kite_img,
      color: "#ED028C",
      icon: <FaFire className="text-4xl" />,
    },
    {
      id: "bird",
      title: "Bird Safety Matches",
      shortDescription:
        "Trusted local brand known for quality and reliability. Manufactured with premium standards ensuring consistent performance.",
      image: kite_img,
      color: "#ED028C",
      icon: <FaFire className="text-4xl" />,
    },
    {
      id: "kite-glow",
      title: "Kite Glow Detergent",
      shortDescription:
        "Triple Enzyme technology for tough stain removal and color protection. Premium cleaning power.",
      image: glow_img,
      color: "#00AEEF",
      icon: <FaLayerGroup className="text-4xl" />,
    },
    {
      id: "burq-action",
      title: "BURQ Action Detergent",
      shortDescription:
        "Colour Guard technology for vibrant colors and powerful cleaning. Safe for skin and fabrics.",
      image: burq_img,
      color: "#00AEEF",
      icon: <FaLayerGroup className="text-4xl" />,
    },
    {
      id: "vero",
      title: "Vero Detergent",
      shortDescription:
        "Natural ingredients for excellent cleaning and color safety. Long-lasting and cost-effective solution.",
      image: "https://via.placeholder.com/400x500/00AEEF/FFFFFF?text=Vero+Detergent",
      color: "#00AEEF",
      icon: <FaLayerGroup className="text-4xl" />,
    },
    {
      id: "dish-wash-bar",
      title: "Kite Dish Wash Bar",
      shortDescription:
        "Extra strength dish wash bar with premium lemon fragrance. Gentle on hands, tough on grease.",
      image: "https://via.placeholder.com/400x500/059669/FFFFFF?text=Dish+Wash+Bar",
      color: "#059669",
      icon: <FaLayerGroup className="text-4xl" />,
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-white to-[#F9F9F9]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#00AEEF] text-lg font-semibold mb-2 uppercase tracking-wide">
            Our Products
          </h2>
          <h3 className="text-[#222222] text-3xl md:text-4xl font-bold mb-4">
            Premium Quality Products You Can Trust
          </h3>
          <div className="w-24 h-1 bg-[#ED028C] mx-auto mb-6"></div>
          <p className="text-[#666666] text-base max-w-2xl mx-auto">
            Discover our range of premium FMCG products trusted by households and
            businesses across Pakistan and 40+ countries worldwide.
          </p>
        </motion.div>

        {/* Products Slider */}
        <div className="mb-8 relative px-12 md:px-22">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            navigation
            // pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="products-swiper"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Link
                  to={`/products/${product.id}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden  border-2 border-[#E0E0E0] hover:border-[#00AEEF] transform hover:-translate-y-1 block h-full"
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className="absolute top-3 right-3 px-2 py-1 rounded-full text-white text-xs font-semibold shadow-lg"
                      style={{ backgroundColor: product.color }}
                    >
                      {product.id === "kite-matches" || 
                       product.id === "olympia" || 
                       product.id === "party" || 
                       product.id === "tanga" || 
                       product.id === "bird"
                        ? "Matches"
                        : product.id === "dish-wash-bar"
                        ? "Dish Wash"
                        : "Detergent"}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <div className="mr-3" style={{ color: product.color }}>
                        {product.icon}
                      </div>
                      <h4 className="text-[#222222] text-lg font-bold group-hover:text-[#00AEEF] transition-colors line-clamp-1">
                        {product.title}
                      </h4>
                    </div>

                    <p className="text-[#666666] text-sm mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>

                    {/* View Details Link */}
                    <div className="flex items-center text-[#00AEEF] font-semibold text-sm group-hover:text-[#ED028C] transition-colors">
                      <span className="mr-2">View Details</span>
                      <FaArrowRight className="transform group-hover:translate-x-1 transition-transform text-xs" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00AEEF] to-[#0095CC] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>View All Products</span>
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .products-swiper :global(.swiper-button-next),
        .products-swiper :global(.swiper-button-prev) {
          color: #00AEEF;
          background: white;
          border: 2px solid #E0E0E0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          top: 50%;
          transform: translateY(-50%);
          margin-top: 0;
        }

        .products-swiper :global(.swiper-button-next) {
          right: -60px;
        }

        .products-swiper :global(.swiper-button-prev) {
          left: 60px;
        }

        @media (max-width: 1024px) {
          .products-swiper :global(.swiper-button-next) {
            right: -50px;
          }

          .products-swiper :global(.swiper-button-prev) {
            left: -50px;
          }
        }

        @media (max-width: 768px) {
          .products-swiper :global(.swiper-button-next),
          .products-swiper :global(.swiper-button-prev) {
            display: none;
          }
        }

        .products-swiper :global(.swiper-button-next:hover),
        .products-swiper :global(.swiper-button-prev:hover) {
          background: #00AEEF;
          color: white;
          border-color: #00AEEF;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 174, 239, 0.3);
        }

        .products-swiper :global(.swiper-button-next:after),
        .products-swiper :global(.swiper-button-prev:after) {
          font-size: 18px;
          font-weight: bold;
        }

        .products-swiper :global(.swiper-pagination) {
          position: relative;
          bottom: auto !important;
          margin-top: 24px;
        }

        .products-swiper :global(.swiper-pagination-bullet) {
          background: #E0E0E0;
          opacity: 1;
          width: 12px;
          height: 12px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }

        .products-swiper :global(.swiper-pagination-bullet-active) {
          background: #00AEEF;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default BriefProductsSection;
