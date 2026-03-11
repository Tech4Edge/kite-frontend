import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaShoppingCart, FaCheckCircle, FaGift } from "react-icons/fa";

const PromotionsPackagesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const packages = [
    {
      id: "pkg-long-bar",
      title: "Long Bar Carton",
      category: "Bulk Cartons",
      image: null, // Add image path here, e.g., "../assets/packages/long-bar-carton.jpg"
      items: [
        {
          product: "Kite Dish Wash Long Bar Carton (36 pcs)",
          quantity: 1,
          price: 1440,
        },
      ],
      totalQuantity: 1,
      totalPrice: 1440,
    },
    {
      id: "pkg-super-bar",
      title: "Super Bar Carton",
      category: "Bulk Cartons",
      image: null, // Add image path here, e.g., "../assets/packages/super-bar-carton.jpg"
      items: [
        {
          product: "Kite Dish Wash Super Bar Carton (36 pcs)",
          quantity: 1,
          price: 1800,
        },
      ],
      totalQuantity: 1,
      totalPrice: 1800,
    },
    {
      id: "pkg-safety-match",
      title: "Safety Match Carton",
      category: "Bulk Cartons",
      image: null, // Add image path here, e.g., "../assets/packages/safety-match-carton.jpg"
      items: [
        {
          product: "Kite Safety Match Large Size Carton (500 match boxes)",
          quantity: 1,
          price: 3500,
        },
      ],
      totalQuantity: 1,
      totalPrice: 3500,
    },
    {
      id: "pkg-economical",
      title: "Economical Package",
      category: "Combo Packages",
      image: null, // Add image path here, e.g., "../assets/packages/economical-package.jpg"
      items: [
        {
          product: "Kite Glow 1 kg",
          quantity: 2,
          price: 290,
        },
        {
          product: "Kite Super Bar",
          quantity: 1,
          price: 60,
        },
      ],
      totalQuantity: 3,
      totalPrice: 640,
    },
    {
      id: "pkg-saafai",
      title: "Saafai Package",
      category: "Combo Packages",
      image: null, // Add image path here, e.g., "../assets/packages/saafai-package.jpg"
      items: [
        {
          product: "Kite Glow 1 kg",
          quantity: 3,
          price: 290,
        },
        {
          product: "Kite Super Bar",
          quantity: 2,
          price: 50,
        },
      ],
      totalQuantity: 5,
      totalPrice: 970,
    },
    {
      id: "pkg-monthly-rashan",
      title: "Monthly Rashan Package",
      category: "Combo Packages",
      image: null, // Add image path here, e.g., "../assets/packages/monthly-rashan-package.jpg"
      items: [
        {
          product: "Kite Glow 1 Kg",
          quantity: 3,
          price: 290,
        },
        {
          product: "Kite Super Bar",
          quantity: 2,
          price: 50,
        },
        {
          product: "Kite Large Gross",
          quantity: 1,
          price: 350,
        },
      ],
      totalQuantity: 6,
      totalPrice: 1320,
    },
    {
      id: "pkg-detergent-super-saver",
      title: "Detergent Super Saver Package",
      category: "Combo Packages",
      image: null, // Add image path here, e.g., "../assets/packages/detergent-super-saver.jpg"
      items: [
        {
          product: "Kite Glow 1 Kg",
          quantity: 5,
          price: 290,
        },
      ],
      totalQuantity: 5,
      totalPrice: 1450,
    },
    {
      id: "pkg-supar-saafai",
      title: "Supar Saafai Package",
      category: "Combo Packages",
      image: null, // Add image path here, e.g., "../assets/packages/supar-saafai-package.jpg"
      items: [
        {
          product: "Kite Glow 1 Kg",
          quantity: 5,
          price: 290,
        },
        {
          product: "Kite Super Bar",
          quantity: 2,
          price: 50,
        },
      ],
      totalQuantity: 7,
      totalPrice: 1550,
    },
    {
      id: "pkg-family-saver",
      title: "Family Saver Package",
      category: "Combo Packages",
      image: null, // Add image path here, e.g., "../assets/packages/family-saver-package.jpg"
      items: [
        {
          product: "Kite Glow 1 Kg",
          quantity: 5,
          price: 290,
        },
        {
          product: "Kite Super Bar",
          quantity: 2,
          price: 60,
        },
        {
          product: "Kite Large Gross",
          quantity: 1,
          price: 350,
        },
      ],
      totalQuantity: 8,
      totalPrice: 1920,
    },
  ];


  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <FaGift className="text-[#ED028C] text-2xl" />
            <h2 className="text-[#00AEEF] text-lg font-semibold uppercase tracking-wider">
              Exclusive Offers
            </h2>
          </div>
          <h3 className="text-[#222222] text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Special Packages & Promotions
          </h3>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#ED028C]"></div>
            <div className="w-2 h-2 bg-[#ED028C] rounded-full"></div>
            <div className="w-24 h-0.5 bg-[#ED028C]"></div>
            <div className="w-2 h-2 bg-[#ED028C] rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#ED028C]"></div>
          </div>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto leading-relaxed">
            Carefully curated packages designed to provide exceptional value for families and businesses. 
            Discover savings with our thoughtfully assembled combinations.
          </p>
        </motion.div>

        {/* Packages - Clean Sections */}
        <div className="space-y-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Package Title - At the top, smaller */}
              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
                  {pkg.title}
                </h3>
              </div>

              {/* Content Layout - Image Left, Details Right */}
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Image Section - Left */}
                <div className="lg:w-2/5">
                  <div className="relative h-72 lg:h-80 bg-gradient-to-br from-[#F9F9F9] to-[#F0F0F0] rounded-lg overflow-hidden border border-[#E0E0E0]">
                    {pkg.image ? (
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FaGift className="text-7xl text-[#999999]" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Section - Right */}
                <div className="lg:w-3/5 flex flex-col justify-between">
                  {/* Package Items - Better styled */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-[#222222] mb-5">What's Included:</h4>
                    <div className="space-y-4">
                      {pkg.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-4 p-3 rounded-lg bg-[#F9F9F9] hover:bg-[#F5F5F5] transition-colors"
                        >
                          <div className="mt-0.5 flex-shrink-0">
                            <FaCheckCircle className="text-[#ED028C] text-lg" />
                          </div>
                          <div className="flex-1">
                            <p className="text-[#222222] font-medium text-base leading-relaxed">
                              {item.product}
                            </p>
                            <p className="text-[#666666] text-sm mt-1.5">
                              Quantity: <span className="font-semibold">{item.quantity}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Package Summary & CTA */}
                  <div className="pt-6 border-t border-[#E0E0E0]">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      <div>
                        <div className="mb-3">
                          <span className="text-[#666666] text-base">Total Items: </span>
                          <span className="text-[#222222] font-bold text-lg">
                            {pkg.totalQuantity} {pkg.totalQuantity === 1 ? 'item' : 'items'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#666666] text-base">Package Price: </span>
                          <span className="text-[#00AEEF] text-3xl font-bold">
                            {formatPrice(pkg.totalPrice)}
                          </span>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] text-white px-8 py-3.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00AEEF]/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                        <FaShoppingCart className="text-sm" />
                        <span>Order Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider between sections (except last) */}
              {index < packages.length - 1 && (
                <div className="mt-16 pt-16 border-t border-[#E0E0E0]"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsPackagesSection;
