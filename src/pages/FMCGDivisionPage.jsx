import { FaFire, FaGlobeAsia, FaDollarSign, FaIndustry } from 'react-icons/fa';
import fmgc_img from "../assets/matches_hero.jpg"


const FMCGDivisionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20" style={{backgroundImage: `url(${fmgc_img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-black/50 p-4 filter backdrop-blur-xs rounded-xl">
            <h1 className="text-white! text-4xl md:text-6xl font-bold mb-6">FMCG Division</h1>
            <p className="text-white! text-xl md:text-2xl mb-4">Pakistan's Largest Match Manufacturer</p>
            <p className="text-white! text-lg md:text-xl max-w-3xl mx-auto">
              Exporting premium quality safety matches to over 40 countries worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6 text-center">
              Leading Match Manufacturer & Exporter
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <p className="text-lg text-[#666666] leading-relaxed mb-6">
                The group has the largest match manufacturing operation and also the largest exporter of safety matches. 
                With exports worth over $100 million annually, we supply premium quality safety matches to Europe, Asia, 
                and Africa.
              </p>
              <p className="text-lg text-[#666666] leading-relaxed">
                Our commitment to quality and innovation has made us a trusted partner for retailers and distributors 
                worldwide. We are also setting up a state-of-the-art lighter manufacturing facility to expand our product 
                portfolio.
              </p>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#00AEEF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDollarSign className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">$100M+ Exports</h3>
              <p className="text-[#666666]">
                Annual export value to international markets
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#00AEEF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobeAsia className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">40+ Countries</h3>
              <p className="text-[#666666]">
                Global presence across Europe, Asia & Africa
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#0095CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaIndustry className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">Largest in Pakistan</h3>
              <p className="text-[#666666]">
                Leading match manufacturing operation
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#00AEEF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFire className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">Premium Quality</h3>
              <p className="text-[#666666]">
                International safety and quality standards
              </p>
            </div>
          </div>

          {/* Product Brands */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8 text-center">
              Our Match Brands
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#00AEEF] to-[#0095CC] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Kite</h3>
                <p className="text-lg text-white!">
                  Our flagship brand known for reliability and quality across international markets
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#0095CC] to-[#007BA7] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Olympia</h3>
                <p className="text-lg text-white!">
                  Premium safety matches for discerning customers worldwide
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#0095CC] to-[#007BA7] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Tanga</h3>
                <p className="text-lg text-white!">
                  Trusted quality matches for everyday use
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#007BA7] to-[#006688] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Bird</h3>
                <p className="text-lg text-white!">
                  Reliable and affordable safety matches
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#007BA7] to-[#006688] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Party</h3>
                <p className="text-lg text-white!">
                  Special occasion matches with premium quality
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#005577] to-[#004466] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">& More</h3>
                <p className="text-lg text-white!">
                  Wide range of brands for diverse market needs
                </p>
              </div>
            </div>
          </div>

          {/* Manufacturing Excellence */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8 text-center">
              Manufacturing Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-4">Advanced Technology</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li className="flex items-start">
                    <span className="text-[#ED028C] mr-2 font-bold">▸</span>
                    <span>State-of-the-art match manufacturing equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ED028C] mr-2 font-bold">▸</span>
                    <span>Automated production lines for consistency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ED028C] mr-2 font-bold">▸</span>
                    <span>Quality control at every production stage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ED028C] mr-2 font-bold">▸</span>
                    <span>International safety standards compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#222222] mb-4">Global Reach</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li className="flex items-start">
                    <span className="text-[#00AEEF] mr-2 font-bold">▸</span>
                    <span>Export to Europe, Asia, and Africa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00AEEF] mr-2 font-bold">▸</span>
                    <span>Established distribution networks worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00AEEF] mr-2 font-bold">▸</span>
                    <span>Trusted by major retailers and distributors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00AEEF] mr-2 font-bold">▸</span>
                    <span>Continuous market expansion initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Expansion */}
          <div className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] rounded-xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Future Expansion
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Lighter Manufacturing Facility</h3>
              <p className="text-lg leading-relaxed text-white!">
                We are currently setting up a state-of-the-art lighter manufacturing facility to diversify our product 
                portfolio and meet growing market demand. This expansion will further strengthen our position as a 
                leading FMCG manufacturer in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Our FMCG Products?
          </h2>
          <p className="text-xl text-white! mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our match brands and export opportunities
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#00AEEF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FMCGDivisionPage;
