import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaFire, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getProducts } from "../services/api";

const placeholderImage = "https://via.placeholder.com/400x500/E0E0E0/666666?text=Product";

const BriefProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProducts();
        const visible = data
          .filter((p) => p.showOnLanding !== false)
          .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
        setFeaturedProducts(visible);
      } catch {
        setFeaturedProducts([]);
      }
    };
    load();
  }, []);

  const getIcon = (product) => {
    if (product.iconType === "fire") return <FaFire className="text-4xl" />;
    return <FaLayerGroup className="text-4xl" />;
  };

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
        <div className="mb-8 relative px-0 md:px-14">
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
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-[#E0E0E0] hover:border-[#00AEEF] transform hover:-translate-y-1 block"
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src={product.image || product.images?.[0] || placeholderImage}
                      alt={product.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain p-2 sm:p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className="absolute top-3 right-3 px-2 py-1 rounded-full text-white text-xs font-semibold shadow-lg"
                      style={{ backgroundColor: product.color }}
                    >
                      {product.category || product.productType || "Product"}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <div className="mr-3" style={{ color: product.color }}>
                        {getIcon(product)}
                      </div>
                      <h4 className="text-[#222222] text-lg font-bold group-hover:text-[#00AEEF] transition-colors line-clamp-1">
                        {product.title}
                      </h4>
                    </div>

                    <p className="text-[#666666] text-sm mb-4 line-clamp-2">
                      {product.description}
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
          right: 8px;
        }

        .products-swiper :global(.swiper-button-prev) {
          left: 8px;
        }

        @media (max-width: 1024px) {
          .products-swiper :global(.swiper-button-next) {
            right: 8px;
          }

          .products-swiper :global(.swiper-button-prev) {
            left: 8px;
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
