import { FaGift, FaAward, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BriefPromotion = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#00AEEF] to-[#0095CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Special Offers & Promotions
          </h2>
          <p className="text-white/90! text-lg max-w-3xl mx-auto">
            Take advantage of our competitive pricing and special packages designed for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <FaGift className="text-5xl text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Bulk Orders</h3>
            <p className="text-white/90!">
              Special discounts available for large quantity orders. Perfect for wholesalers and distributors.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <FaAward className="text-5xl text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
            <p className="text-white/90!">
              Internationally certified products meeting the highest quality standards at competitive prices.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <FaHandshake className="text-5xl text-white mx-auto mb-4" />
            <h3 className=" text-2xl font-bold mb-3">Custom Solutions</h3>
            <p className="text-white/90!">
              Tailored packaging and private labeling services for your brand requirements.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-block bg-white text-[#00AEEF] px-8 py-4 rounded-full font-semibold hover:bg-[#F9F9F9] transition-all duration-300 shadow-lg"
          >
            View All Products & Offers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BriefPromotion;
