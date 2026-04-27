import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaFire, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import "swiper/css";
import "swiper/css/navigation";

const placeholderImage =
  "https://via.placeholder.com/400x500/E0E0E0/666666?text=Product";

const ProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [allProducts, setAllProducts] = useState([]);
  const canNavigate = allProducts.length > 1;
  const canLoop = allProducts.length > 1;

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProducts();
        const visible = data
          .filter((p) => p.showInProductsPage !== false)
          .sort((a, b) => (b.displayOrder ?? 0) - (a.displayOrder ?? 0));
        setAllProducts(visible);
      } catch {
        setAllProducts([]);
      }
    };
    load();
  }, []);

  const getIcon = (product) => {
    if (product.iconType === "fire") return <FaFire className="text-5xl" />;
    return <FaLayerGroup className="text-5xl" />;
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white via-[#F9F9F9] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#00AEEF] text-lg font-semibold mb-2 uppercase tracking-wide">
            Our Products
          </h2>
          <h3 className="text-[#222222] text-4xl md:text-5xl font-bold mb-6">
            Kite Brand - Quality Products You Can Trust
          </h3>
          <div className="w-24 h-1 bg-[#ED028C] mx-auto mb-8"></div>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            With over 50 years of manufacturing excellence, Kite brand delivers
            premium FMCG products that meet international quality standards.
            From detergents to safety matches and dish wash bars - trusted by
            households and businesses across Pakistan and 40+ countries
            worldwide.
          </p>
        </motion.div>

        {/* Products Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            navigation={canNavigate}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={canLoop}
            speed={900}
            grabCursor={canNavigate}
            className="products-page-swiper px-1 md:px-14 py-2"
          >
            {[...allProducts].reverse().map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <Link
                  to={`/products/${product.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#E0E0E0] hover:border-[#00AEEF] transform hover:-translate-y-2 block h-[500px] sm:h-[520px] flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative h-56 sm:h-60 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src={
                        product.image || product.images?.[0] || placeholderImage
                      }
                      alt={product.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg"
                      style={{ backgroundColor: product.color }}
                    >
                      {product.category || product.productType || "Product"}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="mr-4" style={{ color: product.color }}>
                        {getIcon(product)}
                      </div>
                      <h3 className="text-[#222222] text-xl font-bold group-hover:text-[#00AEEF] transition-colors line-clamp-2">
                        {product.title}
                      </h3>
                    </div>

                    <p className="text-[#666666] text-sm mb-4 line-clamp-3 min-h-[60px]">
                      {product.description}
                    </p>

                    {/* Features Preview */}
                    {product.features && product.features.length > 0 && (
                      <div className="mb-4 min-h-[52px]">
                        <ul className="space-y-1">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-[#666666] text-xs"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0"
                                style={{ backgroundColor: product.color }}
                              ></span>
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-auto">
                      {/* View Details Button */}
                      <div className="flex items-center text-[#00AEEF] font-semibold group-hover:text-[#ED028C] transition-colors">
                        <span className="mr-2">View Details</span>
                        <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Interested in Kite Brand Products?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto drop-shadow-md">
            Contact us for product inquiries, bulk orders, private labeling
            services, or export opportunities for Kite detergents, matches, and
            dish wash products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#00AEEF] px-8 py-4 rounded-full font-semibold hover:bg-[#F9F9F9] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              Request Quote
            </Link>
            <a
              href="https://wa.me/+923008592829"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#00AEEF] transition-all duration-300 active:scale-95"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .products-page-swiper :global(.swiper-button-next),
        .products-page-swiper :global(.swiper-button-prev) {
          color: #00aeef;
          background: white;
          border: 2px solid #e0e0e0;
          width: 46px;
          height: 46px;
          border-radius: 9999px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
        }

        .products-page-swiper .swiper-button-next:hover,
        .products-page-swiper .swiper-button-prev:hover {
          background: #00aeef;
          border-color: #00aeef;
          color: #ffffff;
          transform: scale(1.08);
        }

        .products-page-swiper .swiper-button-next:after,
        .products-page-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .products-page-swiper .swiper-button-next,
          .products-page-swiper .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;
