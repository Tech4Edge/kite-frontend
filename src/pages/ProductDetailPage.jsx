import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaFire,
  FaLayerGroup,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { getProduct } from "../services/api";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getProduct(id);
        setProduct(data);
        const firstVariant =
          data?.variants?.[0]?.name ||
          data?.sizes?.[0]?.size ||
          data?.skus?.[0]?.size ||
          "";
        setSelectedVariant(firstVariant);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const icon =
    product?.iconType === "fire"
      ? <FaFire className="text-6xl" />
      : <FaLayerGroup className="text-6xl" />;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#F9F9F9]">
        <p className="text-[#666666]">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#F9F9F9]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#222222] mb-4">
            Product Not Found
          </h2>
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

  const sizeOrSkuOptions = [
    ...(product.variants || []).map((v) => v.name),
    ...(product.sizes || []).map((s) => s.size),
    ...(product.skus || []).map((s) => s.size),
  ].filter(Boolean);

  const getSelectedPrice = () => {
    const variant = (product.variants || []).find((v) => v.name === selectedVariant);
    if (variant?.price != null) return Number(variant.price);
    const sku = (product.skus || []).find((s) => s.size === selectedVariant);
    if (sku?.price != null) return Number(sku.price);
    return 0;
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        orderContext: {
          type: "product",
          id: product.id,
          title: product.title,
          selectedOption: selectedVariant,
          totalPrice: getSelectedPrice(),
        },
      },
    });
  };

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

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="sticky top-24 h-fit"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#E0E0E0]">
              <img
                src={product.image || product.images?.[0] || "https://via.placeholder.com/600x700/E0E0E0/666666?text=Product"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="mr-4" style={{ color: product.color }}>
                {icon}
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
              <h3 className="text-2xl font-bold text-[#222222] mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {(product.features || []).map((feature, idx) => (
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

            {(sizeOrSkuOptions.length > 0 || product.variants?.length > 0) && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#222222] mb-3">Select Variant</h3>
                <div className="flex flex-wrap gap-2">
                  {sizeOrSkuOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedVariant(opt)}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold ${
                        selectedVariant === opt
                          ? "bg-[#00AEEF] text-white border-[#00AEEF]"
                          : "bg-white text-[#222222] border-[#E0E0E0] hover:border-[#00AEEF]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4">
              {getSelectedPrice() > 0 && (
                <p className="text-2xl font-bold text-[#00AEEF]">
                  Rs {getSelectedPrice().toLocaleString()}
                </p>
              )}
              <button
                type="button"
                onClick={handleBuyNow}
                className="px-7 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#00AEEF] to-[#0095CC] hover:shadow-lg hover:shadow-[#00AEEF]/30 transition-all"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        </div>

        {/* Additional Information Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-12"
        >
          {/* Sizes/SKUs Table */}
          {(product.sizes?.length || product.skus?.length || product.variants?.length) && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#E0E0E0]">
              <h3 className="text-2xl font-bold text-[#222222] mb-6">
                {product.sizes?.length
                  ? "Available Sizes"
                  : "Available Sizes & Pricing"}
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
                      {product.sizes?.length ? (
                        <>
                          <th className="px-6 py-4 text-left">SIZE</th>
                          <th className="px-6 py-4 text-center">
                            AVG STICKS PER BOX
                          </th>
                          <th className="px-6 py-4 text-center">
                            MATCHES PER COTTON
                          </th>
                        </>
                      ) : product.skus?.length ? (
                        <>
                          <th className="px-6 py-4 text-left">SKU</th>
                          <th className="px-6 py-4 text-left">GRAMAGE</th>
                          <th className="px-6 py-4 text-center">
                            Packing/Flexi
                          </th>
                          <th className="px-6 py-4 text-right">
                            Retail Price (Rs.)
                          </th>
                        </>
                      ) : (
                        <>
                          <th className="px-6 py-4 text-left">VARIANT</th>
                          <th className="px-6 py-4 text-left">DETAIL</th>
                          <th className="px-6 py-4 text-center">Packing</th>
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
                        <td className="px-6 py-4 text-[#666666]">
                          {sku.gramage}
                        </td>
                        <td className="px-6 py-4 text-center text-[#666666]">
                          {sku.packing}
                        </td>
                        <td
                          className="px-6 py-4 text-right font-bold"
                          style={{ color: product.color }}
                        >
                          {sku.price
                            ? `Rs. ${sku.price.toFixed(2)}`
                            : "Contact for pricing"}
                        </td>
                      </tr>
                    ))}
                    {product.variants?.map((variant, idx) => (
                      <tr
                        key={idx}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-bold text-[#222222]">
                          {variant.name}
                        </td>
                        <td className="px-6 py-4 text-[#666666]">
                          {variant.detail || "-"}
                        </td>
                        <td className="px-6 py-4 text-center text-[#666666]">
                          {variant.packing || "-"}
                        </td>
                        <td
                          className="px-6 py-4 text-right font-bold"
                          style={{ color: product.color }}
                        >
                          {variant.price != null
                            ? `Rs. ${Number(variant.price).toFixed(2)}`
                            : "Contact for pricing"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Brands (for matches) */}
          {product.brands?.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#E0E0E0]">
              <h3 className="text-2xl font-bold text-[#222222] mb-6">
                Our Match Brands
              </h3>
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
          {product.facilities?.length > 0 && (
            <div className="bg-gradient-to-br from-[#FFEFF9] to-white rounded-2xl shadow-lg p-8 border-2 border-[#FF8ACE]">
              <h3 className="text-2xl font-bold text-[#222222] mb-6">
                Manufacturing Facilities
              </h3>
              <div className="space-y-4">
                {product.facilities.map((facility, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl border border-[#E0E0E0]"
                  >
                    <p className="text-[#222222] font-bold text-lg mb-2">
                      {facility.name}
                    </p>
                    <p className="text-[#666666] mb-1">{facility.location}</p>
                    <p className="text-[#00AEEF] text-sm italic">
                      {facility.note}
                    </p>
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
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#00AEEF] to-[#0095CC] rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Interested in {product.title}?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto drop-shadow-md">
            Contact us for product inquiries, bulk orders, private labeling
            services, or export opportunities.
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
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
