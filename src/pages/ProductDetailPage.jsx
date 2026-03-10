import { useParams, Link } from "react-router-dom";
import { FaFire, FaLayerGroup, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import kite_img from "../assets/products/kite.jpeg"
import burq_img from "../assets/products/BurqDetergent.jpeg"
import glow_img from "../assets/kiteglow.jpg"

const ProductDetailPage = () => {
  const { id } = useParams();

  // Product data - same structure as ProductsSection
  const productsData = {
    "safety-matches": {
      id: "safety-matches",
      category: "Safety Matches",
      title: "Safety Matches - Pakistan's #1 Brand",
      icon: <FaFire className="text-6xl text-[#ED028C]" />,
      description:
        "Pakistan's largest safety match manufacturer and exporter since 1995. Over 50 years of manufacturing excellence with Kite brand leading exports to 40+ countries worldwide.",
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
        // { name: "Simba", category: "Export Brand" },
        // { name: "Football", category: "Export Brand" },
        // { name: "Al Moallam", category: "Export Brand" },
        // { name: "ReD MaC", category: "Export Brand" },
        // { name: "T-Match", category: "Export Brand" },
        // { name: "Wood Flower", category: "Export Brand" },
        // { name: "Al Karama", category: "Export Brand" },
        // { name: "The Goose", category: "Export Brand" },
        // { name: "Ziynat", category: "Export Brand" },
        // { name: "Al Felaji", category: "Export Brand" },
        // { name: "Magia bunicii", category: "Export Brand" },
        // { name: "Zebra", category: "Export Brand" },
        // { name: "Zippy", category: "Export Brand" },
      ],
      sizes: [
        { size: "LARGE", avgSticks: 58, matchesPerCotton : 500 },
        { size: "CLASSIC", avgSticks: 45, matchesPerCotton : 500 },
        { size: "REGULAR", avgSticks: 42, matchesPerCotton : 1000 },
        { size: "SMALL", avgSticks: 32 ,matchesPerCotton: 1000 },
      ],
      facilities: [
        {
          name: "Mohsin Match Factory Private Limited",
          location: "Hayatabad, Peshawar - Established 1974",
          note: "Earliest private sector match manufacturer in KPK",
        },
        {
          name: "Mohsin Enterprises Private Limited",
          location: "Hayatabad, Peshawar - Established 1990",
          note: "Group's 2nd match manufacturing unit",
        },
        {
          name: "A.J Match Factory Private Limited",
          location: "Sheikhupura, Lahore - Established 2006",
          note: "Group's 3rd match manufacturing unit",
        },
      ],
    },
    "kite-glow": {
      id: "kite-glow",
      category: "Detergents",
      title: "Kite Glow Detergent",
      icon: <FaLayerGroup className="text-6xl text-[#00AEEF]" />,
      description:
        "Flagship brand launched in March 2025 with Triple Enzyme technology. Premium cleaning power with fabric care protection and color preservation.",
      image: glow_img,
      color: "#00AEEF",
      tagline: "کائٹ گلو لائے... بہتر پروخوشبو، بہترین صفائی!",
      features: [
        "شادی کی دھوئین و ضرورت آسانی سے (Tough stains removed easily)",
        "کپڑوں کی نگہداشت کے لیے (Fabric care protection)",
        "کپڑوں کے رنگوں کا تحفظ (Color protection)",
        "Triple Enzyme technology for superior cleaning",
        "Long-lasting freshness",
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
      services:
        "Private labeling and toll manufacturing services available with minimal variation",
    },
    "burq-action": {
      id: "burq-action",
      category: "Detergents",
      title: "BURQ Action Detergent",
      icon: <FaLayerGroup className="text-6xl text-[#00AEEF]" />,
      description:
        "Premium detergent with Colour Guard technology for color protection. Maintains color brightness while providing excellent cleaning power. Safe for skin and fabrics.",
      image: burq_img,
      color: "#00AEEF",
      tagline: "دلچ کا صفائی یا صرف برق ایکشن لائیا",
      features: [
        "رنگوں کی چمک پہلے (Color brightness maintained)",
        "بامومبدگی جلد کے عمروں (Skin safety formula)",
        "کپڑوں کے رنگوں کی حفاظت (Color protection)",
        "Colour Guard technology",
        "Powerful stain removal",
      ],
      skus: [
        { size: "2.3 KG", packing: 6, price: 464.07 },
        { size: "1 KG", packing: 12, price: 213.9 },
        { size: "RS.99", packing: 24, price: 92.07 },
        { size: "RS.50", packing: 48, price: 46.5 },
        { size: "RS.20", packing: 96, price: 18.6 },
        { size: "RS.10", packing: 204, price: 9.3 },
      ],
      services:
        "Private labeling and toll manufacturing services available with minimal variation",
    },
    "vero-detergent": {
      id: "vero-detergent",
      category: "Detergents",
      title: "Vero Detergent",
      icon: <FaLayerGroup className="text-6xl text-[#00AEEF]" />,
      description:
        "Premium cleaning powder with natural ingredients. Excellent cleaning power that's safe for colors and long-lasting. Trusted by households across Pakistan.",
      image: "https://via.placeholder.com/600x700/00AEEF/FFFFFF?text=Vero+Detergent",
      color: "#00AEEF",
      tagline: "کپڑوں کو دین نئی نیک پہترین بحت کے ساتھ",
      features: [
        "بہترین صفائی (Excellent cleaning)",
        "رنگین کے لیے محفوظ (Safe for colors)",
        "کم کے زیادہ چلے (Long lasting)",
        "Natural ingredients",
        "Cost-effective solution",
      ],
      skus: [
        { size: "20 KG", packing: 4, price: null },
        { size: "5 KG", packing: 4, price: null },
      ],
      services:
        "Private labeling and toll manufacturing services available with minimal variation",
    },
    "dish-wash-bar": {
      id: "dish-wash-bar",
      category: "Dish Wash",
      title: "Kite Dish Wash Bar",
      icon: <FaLayerGroup className="text-6xl text-[#059669]" />,
      description:
        "Premium lemon fragrance with slow dissolution - beats market leaders. Perfect for sparkling clean dishes with powerful grease removal. Gentle on hands while tough on grease.",
      image: "https://via.placeholder.com/600x700/059669/FFFFFF?text=Dish+Wash+Bar",
      color: "#059669",
      tagline: "جہاں صفائی، وہاں کائٹ ڈش واش بار",
      features: [
        "لیموں کی خوشبو کی سانحہ (Premium lemon fragrance)",
        "چکنائی کا دشمن (Tough on grease)",
        "کم کے زیادہ چلے (Long lasting)",
        "ہاتھوں کے لیے نرم (Gentle on hands)",
        "Slow dissolution technology",
      ],
      skus: [
        { size: "SUPER BAR", packing: 36, price: 44.63 },
        { size: "LONG BAR", packing: 36, price: 35.91 },
        { size: "LARGE BAR", packing: 36, price: 17.96 },
        { size: "REGULAR BAR", packing: 48, price: 8.98 },
      ],
      services: "Bulk orders and private labeling available",
    },
  };

  const product = productsData[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#F9F9F9]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#222222] mb-4">Product Not Found</h2>
          <Link
            to="/products"
            className="text-[#00AEEF] hover:text-[#ED028C] font-semibold"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F9F9F9] to-white">
      {/* Hero Section */}
      <div
        className="relative py-16"
        style={{
          background: `linear-gradient(135deg, ${product.color}15 0%, ${product.color}05 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center text-[#666666] hover:text-[#00AEEF] mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="sticky top-24 h-fit">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#E0E0E0]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center mb-6">
              <div className="mr-4" style={{ color: product.color }}>
                {product.icon}
              </div>
              <div>
                <div
                  className="inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-2"
                  style={{ backgroundColor: product.color }}
                >
                  {product.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-2">
                  {product.title}
                </h1>
              </div>
            </div>

            {product.tagline && (
              <p
                className="text-xl font-semibold mb-6 italic"
                style={{ color: product.color }}
              >
                {product.tagline}
              </p>
            )}

            <p className="text-[#666666] text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheckCircle
                      className="mr-3 mt-1 flex-shrink-0"
                      style={{ color: product.color }}
                    />
                    <span className="text-[#666666]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Information Sections */}
        <div className="space-y-12">
          {/* Sizes/SKUs Table */}
          {(product.sizes || product.skus) && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#E0E0E0]">
              <h3 className="text-2xl font-bold text-[#222222] mb-6">
                {product.sizes ? "Available Sizes" : "Available Sizes & Pricing"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr
                      className="text-white"
                      style={{
                        background: `linear-gradient(135deg, ${product.color} 0%, ${product.color}dd 100%)`,
                      }}
                    >
                      {product.sizes ? (
                        <>
                          <th className="px-6 py-4 text-left">SIZE</th>
                          <th className="px-6 py-4 text-center">AVG STICKS PER BOX</th>
                          <th className="px-6 py-4 text-center">MATCHES PER COTTON</th>
                        </>
                      ) : (
                        <>
                          <th className="px-6 py-4 text-left">SKU</th>
                          <th className="px-6 py-4 text-center">Packing/Flexi</th>
                          <th className="px-6 py-4 text-right">Retail Price (Rs.)</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {product.sizes?.map((size, idx) => (
                      <tr
                        key={idx}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-bold text-[#222222]">
                          {size.size}
                        </td>
                        <td className="px-6 py-4 text-center text-[#666666]">
                          {size.avgSticks}
                        </td>
                        <td className="px-6 py-4 text-center text-[#666666]">
                          {size.matchesPerCotton}
                        </td>
                      </tr>
                    ))}
                    {product.skus?.map((sku, idx) => (
                      <tr
                        key={idx}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-bold text-[#222222]">
                          {sku.size}
                        </td>
                        <td className="px-6 py-4 text-center text-[#666666]">
                          {sku.packing}
                        </td>
                        <td className="px-6 py-4 text-right font-bold" style={{ color: product.color }}>
                          {sku.price ? `Rs. ${sku.price.toFixed(2)}` : "Contact for pricing"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Brands (for matches) */}
          {product.brands && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#E0E0E0]">
              <h3 className="text-2xl font-bold text-[#222222] mb-6">Our Match Brands</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.brands.map((brand, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border-2 border-[#E0E0E0] hover:border-[#00AEEF] transition-colors"
                  >
                    <span className="text-lg font-semibold text-[#222222]">
                      {brand.name}
                    </span>
                    <span className="block text-sm text-[#666666] mt-1">
                      {brand.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Facilities (for matches) */}
          {product.facilities && (
            <div className="bg-gradient-to-br from-[#FFEFF9] to-white rounded-2xl shadow-lg p-8 border-2 border-[#FF8ACE]">
              <h3 className="text-2xl font-bold text-[#222222] mb-6">
                Manufacturing Facilities
              </h3>
              <div className="space-y-4">
                {product.facilities.map((facility, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-[#E0E0E0]">
                    <p className="text-[#222222] font-bold text-lg mb-2">
                      {facility.name}
                    </p>
                    <p className="text-[#666666] mb-1">{facility.location}</p>
                    <p className="text-[#00AEEF] text-sm italic">{facility.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services */}
          {product.services && (
            <div
              className="rounded-2xl p-8 text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${product.color} 0%, ${product.color}dd 100%)`,
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Additional Services</h3>
              <p className="text-lg">{product.services}</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#00AEEF] to-[#0095CC] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Interested in {product.title}?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto drop-shadow-md">
            Contact us for product inquiries, bulk orders, private labeling services, or
            export opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#00AEEF] px-8 py-4 rounded-full font-semibold hover:bg-[#F9F9F9] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
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
    </div>
  );
};

export default ProductDetailPage;
