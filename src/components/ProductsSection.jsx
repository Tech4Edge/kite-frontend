import { FaFire, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import kite_img from "../assets/products/kite.jpeg"
import burq_img from "../assets/products/BurqDetergent.jpeg"
import glow_img from "../assets/kiteglow.jpg"


const ProductsSection = () => {
  // Flatten products to show individual items
  const allProducts = [
    {
      id: "safety-matches",
      category: "Safety Matches",
      title: "Safety Matches - Pakistan's #1 Brand",
      icon: <FaFire className="text-5xl text-[#ED028C]" />,
      description:
        "Pakistan's largest safety match manufacturer and exporter since 1995. Over 50 years of manufacturing excellence with Kite brand leading exports to 40+ countries worldwide.",
      shortDescription:
        "Premium quality safety matches with damp-proof technology and international safety standards.",
      image: kite_img,
      color: "#ED028C",
      features: [
        "Light in rain, reliable always",
        "Damp proof",
        "Best brand",
        "Extra sticks",
        "Carborised and damp proof",
      ],
      brands: [
        { name: "Kite", category: "Premium - Local Brand" },
        { name: "Bird", category: "Local Brand" },
        { name: "Olympia", category: "Local Brand" },
        { name: "Party", category: "Local Brand" },
        { name: "Tanga", category: "Local Brand" },
        { name: "Simba", category: "Export Brand" },
        { name: "Football", category: "Export Brand" },
        { name: "Al Moallam", category: "Export Brand" },
        { name: "ReD MaC", category: "Export Brand" },
        { name: "T-Match", category: "Export Brand" },
        { name: "Wood Flower", category: "Export Brand" },
        { name: "Al Karama", category: "Export Brand" },
        { name: "The Goose", category: "Export Brand" },
        { name: "Ziynat", category: "Export Brand" },
        { name: "Al Felaji", category: "Export Brand" },
        { name: "Magia bunicii", category: "Export Brand" },
        { name: "Zebra", category: "Export Brand" },
        { name: "Zippy", category: "Export Brand" },
      ],
      sizes: [
        { size: "LARGE", avgSticks: 58, matchesPerCotton : 500 },
        { size: "CLASSIC", avgSticks: 45, matchesPerCotton : 500 },
        { size: "REGULAR", avgSticks: 42, matchesPerCotton : 1000 },
        { size: "SMALL", avgSticks: 32 ,matchesPerCotton: 1000 },
      ]
      ,
      facilities: [
        {
          name: "Mohsin Match Factory",
          location: "Peshawar - Established 1974",
          note: "Earliest private sector match manufacturer in KPK",
        },
        {
          name: "Mohsin Enterprises",
          location: "Hayatabad, Peshawar - Established 1990",
          note: "Group's 2nd match manufacturing unit",
        },
        {
          name: "A.J Match Factory",
          location: "Sheikhupura, Lahore - Established 2006",
          note: "Group's 3rd match manufacturing unit",
        },
      ],
    },
    {
      id: "kite-glow",
      category: "Detergents",
      title: "Kite Glow Detergent",
      icon: <FaLayerGroup className="text-5xl text-[#00AEEF]" />,
      description:
        "Flagship brand launched in March 2025 with Triple Enzyme technology. Premium cleaning power with fabric care protection.",
      shortDescription:
        "Triple Enzyme technology for tough stain removal and color protection.",
      image: glow_img,
      color: "#00AEEF",
      tagline: "کائٹ گلو لائے... بہتر پروخوشبو، بہترین صفائی!",
      features: [
        "Tough stains removed easily)",
        "Fabric care protection)",
        "Color protection)",
      ],
      skus: [
        { size: "2 KG", packing: 6, price: 511.5 },
        { size: "1 KG", packing: 12, price: 269.7 },
        { size: "500 GM", packing: 24, price: 139.5 },
        { size: "RS.99", packing: 48, price: 92.07 },
        { size: "RS.50", packing: 96, price: 46.5 },
        { size: "RS.20", packing: 96, price: 18.6 },
        { size: "RS.10", packing: 144, price: 9.3 },
      ],
    },
    {
      id: "burq-action",
      category: "Detergents",
      title: "BURQ Action Detergent",
      icon: <FaLayerGroup className="text-5xl text-[#00AEEF]" />,
      description:
        "Premium detergent with Colour Guard technology for color protection. Maintains color brightness while providing excellent cleaning power.",
      shortDescription:
        "Colour Guard technology for vibrant colors and powerful cleaning.",
      image: burq_img,
      color: "#00AEEF",
      tagline: "دلچ کا صفائی یا صرف برق ایکشن لائیا",
      features: [
        "رنگوں کی چمک پہلے (Color brightness maintained)",
        "بامومبدگی جلد کے عمروں (Skin safety formula)",
        "کپڑوں کے رنگوں کی حفاظت (Color protection)",
      ],
      skus: [
        { size: "2.3 KG", packing: 6, price: 464.07 },
        { size: "1 KG", packing: 12, price: 213.9 },
        { size: "RS.99", packing: 24, price: 92.07 },
        { size: "RS.50", packing: 48, price: 46.5 },
        { size: "RS.20", packing: 96, price: 18.6 },
        { size: "RS.10", packing: 204, price: 9.3 },
      ],
    },
    {
      id: "vero-detergent",
      category: "Detergents",
      title: "Vero Detergent",
      icon: <FaLayerGroup className="text-5xl text-[#00AEEF]" />,
      description:
        "Premium cleaning powder with natural ingredients. Excellent cleaning power that's safe for colors and long-lasting.",
      shortDescription:
        "Natural ingredients for excellent cleaning and color safety.",
      image: "https://via.placeholder.com/400x500/00AEEF/FFFFFF?text=Vero+Detergent",
      color: "#00AEEF",
      tagline: "کپڑوں کو دین نئی نیک پہترین بحت کے ساتھ",
      features: [
        "بہترین صفائی (Excellent cleaning)",
        "رنگین کے لیے محفوظ (Safe for colors)",
        "کم کے زیادہ چلے (Long lasting)",
      ],
      skus: [
        { size: "20 KG", packing: 4, price: null },
        { size: "5 KG", packing: 4, price: null },
      ],
    },
    {
      id: "dish-wash-bar",
      category: "Dish Wash",
      title: "Kite Dish Wash Bar",
      icon: <FaLayerGroup className="text-5xl text-[#059669]" />,
      description:
        "Premium lemon fragrance with slow dissolution - beats market leaders. Perfect for sparkling clean dishes with powerful grease removal.",
      shortDescription:
        "Extra strength dish wash bar with premium lemon fragrance.",
      image: "https://via.placeholder.com/400x500/059669/FFFFFF?text=Dish+Wash+Bar",
      color: "#059669",
      tagline: "جہاں صفائی، وہاں کائٹ ڈش واش بار",
      features: [
        "لیموں کی خوشبو کی سانحہ (Premium lemon fragrance)",
        "چکنائی کا دشمن (Tough on grease)",
        "کم کے زیادہ چلے (Long lasting)",
        "ہاتھوں کے لیے نرم (Gentle on hands)",
      ],
      skus: [
        { size: "SUPER BAR", packing: 36, price: 44.63 },
        { size: "LONG BAR", packing: 36, price: 35.91 },
        { size: "LARGE BAR", packing: 36, price: 17.96 },
        { size: "REGULAR BAR", packing: 48, price: 8.98 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F9F9F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#E0E0E0] hover:border-[#00AEEF] transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg"
                  style={{ backgroundColor: product.color }}
                >
                  {product.category}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4" style={{ color: product.color }}>
                    {product.icon}
                  </div>
                  <h3 className="text-[#222222] text-xl font-bold group-hover:text-[#00AEEF] transition-colors">
                    {product.title}
                  </h3>
                </div>

                <p className="text-[#666666] text-sm mb-4 line-clamp-3">
                  {product.shortDescription}
                </p>

                {/* Features Preview */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-4">
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

                {/* View Details Button */}
                <div className="flex items-center text-[#00AEEF] font-semibold group-hover:text-[#ED028C] transition-colors">
                  <span className="mr-2">View Details</span>
                  <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
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
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
