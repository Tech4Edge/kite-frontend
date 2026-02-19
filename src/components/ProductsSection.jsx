import { FaFire, FaIndustry, FaTshirt, FaLayerGroup } from 'react-icons/fa';
import premier_boards from "../assets/products/PremierFormicaBoards.jpeg"
import BurqDetergent from "../assets/products/BurqDetergent.jpeg"
import kite from "../assets/products/kite.jpeg"

const ProductsSection = () => {
  const products = [
    {
      id: 'detergents',
      title: 'Kite Detergents - Premium Cleaning Solutions',
      icon: <FaLayerGroup className="text-6xl text-[#00AEEF]" />,
      description: 'Kite Glow detergent, launched in March 2025, features triple enzyme technology for exceptional cleaning power, superior stain removal, fabric care, and affordability - setting the standard for excellence in the detergent industry.',
      products: [
        {
          name: 'Kite Glow',
          tagline: 'Exceptional cleaning power, superior stain removal, fabric care',
          description: 'Premium flagship brand launched in March 2025',
          features: ['Triple enzyme technology', 'Long-lasting freshness', 'Fabric protection', 'Affordable pricing']
        },
        {
          name: 'BURQ Action',
          tagline: 'Color protection and deep cleaning',
          description: 'Mid-tier segment with advanced powder technology',
          features: ['Color protection', 'Skin safety formula', 'Minimal variation', 'Value for money']
        },
        {
          name: 'Kite Dish Wash Bar',
          tagline: 'Premium fragrance that beats market leaders',
          description: 'Rapid market growth with advanced cleaning formula',
          features: ['Premium lemon fragrance', 'Slow water dissolution', 'Beats market leaders', 'Competitive pricing']
        }
      ],
      services: 'Private labeling and toll manufacturing services available with minimal variation',
      image: BurqDetergent
    },
    {
      id: 'matches',
      title: 'Kite Safety Matches - Pakistan\'s #1 Brand',
      icon: <FaFire className="text-6xl text-[#ED028C]" />,
      description: 'Pakistan\'s largest safety match manufacturer and exporter since 1995. Over 50 years of manufacturing excellence with Kite brand leading exports to 40+ countries worldwide.',
      features: [
        'Carborised and damp proof',
        'Different striking surfaces (Dotted, Full Brush Coated, Plain Strip)',
        'International safety standards',
        'Sizes: Small (26), Regular (32, 42), Classic (45), Large (56 sticks)'
      ],
      brands: ['Kite (Premium)', 'Simba (Export)', 'Chinook (Export)', 'Helicopter (Export)', 'Olympia', 'Tanga', 'Bird', 'Party'],
      facilities: [
        {
          name: 'Mohsin Match Factory',
          location: 'Peshawar - Established 1974',
          note: 'Earliest private sector match manufacturer in KPK'
        },
        {
          name: 'Mohsin Enterprises',
          location: 'Hayatabad, Peshawar - Established 1990',
          note: 'Group\'s 2nd match manufacturing unit'
        },
        {
          name: 'A.J Match Factory',
          location: 'Sheikhupura, Lahore - Established 2006',
          note: 'Group\'s 3rd match manufacturing unit'
        }
      ],
      image: kite
    },
    {
      id: 'textile',
      title: 'A.J Textile Mills Limited',
      icon: <FaTshirt className="text-6xl text-[#00AEEF]" />,
      description: 'One of the largest spinning mills in Pakistan with over 100,000 spindles, utilizing state-of-the-art ring spinning and Murata vortex spinning technology.',
      features: [
        '100% Cotton Yarn',
        'Combed & Carded Yarn',
        'Melange Yarn',
        'Compact Yarn',
        'Ring spinning and Murata vortex spinning',
        'Two doubling units'
      ],
      capacity: 'Over 100,000 spindles',
      technology: 'Latest Murata vortex spinning technology with in-house facilities',
      location: 'Plot No 209, Industrial Estate, Gadoon Amazai, Swabi, Pakistan',
      image: 'textile-products.jpg'
    },
    {
      id: 'board',
      title: 'Premier Formica - Board Division',
      icon: <FaIndustry className="text-6xl text-[#ED028C]" />,
      description: 'High-quality MDF, particle board, and lamination products for diverse applications across Pakistan.',
      products: [
        'MDF Boards - Premium quality medium density fiberboard',
        'Particle Board (Chipboard) - Cost-effective solutions',
        'Laminated Boards - Fashionable range of colors',
        'Custom Sizes - Tailored to your requirements'
      ],
      features: [
        'Latest production technology',
        'Diverse color options',
        'Quality assurance',
        'Custom specifications available'
      ],
      location: '92-E, Industrial Estate, Jamrud Road, Peshawar, Pakistan',
      image: premier_boards
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F9F9F9]">
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
            With over 50 years of manufacturing excellence, Kite brand delivers premium FMCG products that meet international 
            quality standards. From detergents to safety matches and dish wash bars - trusted by households and businesses across Pakistan and 40+ countries worldwide.
          </p>
        </div>

        {/* Products */}
        {products.map((product, index) => (
          <div 
            key={product.id} 
            id={product.id}
            className={`mb-20 ${index % 2 === 0 ? 'scroll-mt-24' : 'scroll-mt-24'}`}
          >
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="mr-6">
                    {product.icon}
                  </div>
                  <h3 className="text-[#222222] text-3xl md:text-4xl font-bold">
                    {product.title}
                  </h3>
                </div>

                <p className="text-[#666666] text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Match Products */}
                {product.id === 'matches' && (
                  <>
                    <div className="mb-6">
                      <h4 className="text-[#222222] text-xl font-bold mb-3">Product Specifications:</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-[#666666]">
                            <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-[#222222] text-xl font-bold mb-3">Our Brands:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.brands.map((brand, idx) => (
                          <span key={idx} className="bg-[#00AEEF] text-white px-4 py-2 rounded-full font-semibold text-sm">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#FFEFF9] to-white p-6 rounded-xl border-2 border-[#FF8ACE]">
                      <h4 className="text-[#222222] text-xl font-bold mb-4">Manufacturing Facilities:</h4>
                      {product.facilities.map((facility, idx) => (
                        <div key={idx} className="mb-3 last:mb-0">
                          <p className="text-[#222222] font-semibold">{facility.name}</p>
                          <p className="text-[#666666] text-sm">{facility.location}</p>
                          <p className="text-[#00AEEF] text-sm italic">{facility.note}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Detergent Products */}
                {product.id === 'detergents' && (
                  <>
                    <div className="space-y-6 mb-6">
                      {product.products.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border-2 border-[#E0E0E0] hover:border-[#FF8ACE] transition-all duration-300">
                          <h4 className="text-[#222222] text-2xl font-bold mb-2">{item.name}</h4>
                          {item.tagline && (
                            <p className="text-[#00AEEF] font-semibold mb-2 italic">"{item.tagline}"</p>
                          )}
                          <p className="text-[#666666] mb-3">{item.description}</p>
                          <ul className="space-y-2">
                            {item.features.map((feature, fidx) => (
                              <li key={fidx} className="flex items-center text-[#666666]">
                                <span className="w-2 h-2 bg-[#ED028C] rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] text-white p-6 rounded-xl">
                      <p className="font-semibold text-lg">💼 {product.services}</p>
                    </div>
                  </>
                )}

                {/* Textile Products */}
                {product.id === 'textile' && (
                  <>
                    <div className="bg-gradient-to-br from-[#00AEEF]/10 to-[#FFEFF9] p-6 rounded-xl border-2 border-[#00AEEF] mb-6">
                      <p className="text-[#222222] text-xl font-bold mb-2">Capacity: {product.capacity}</p>
                      <p className="text-[#666666]">{product.technology}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-[#222222] text-xl font-bold mb-3">Product Range:</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-[#666666]">
                            <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3 mt-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-[#666666]">
                      <strong className="text-[#222222]">Location:</strong> {product.location}
                    </p>
                  </>
                )}

                {/* Board Products */}
                {product.id === 'board' && (
                  <>
                    <div className="mb-6">
                      <h4 className="text-[#222222] text-xl font-bold mb-3">Product Lines:</h4>
                      <ul className="space-y-3">
                        {product.products.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-[#ED028C] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-[#666666]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-[#FFEFF9] to-white p-6 rounded-xl border-2 border-[#FF8ACE] mb-6">
                      <h4 className="text-[#222222] text-xl font-bold mb-3">Key Features:</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-[#666666]">
                            <span className="w-2 h-2 bg-[#ED028C] rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-[#666666]">
                      <strong className="text-[#222222]">Location:</strong> {product.location}
                    </p>
                  </>
                )}
              </div>

              {/* Image Placeholder */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative z-10 text-center p-8">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-2xl" />
                  </div>
              </div>
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#00AEEF] to-[#0095CC] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Interested in Kite Brand Products?
          </h3>
          <p className="text-text-white-90 text-lg mb-8 max-w-3xl mx-auto drop-shadow-md">
            Contact us for product inquiries, bulk orders, private labeling services, or export opportunities for Kite detergents, matches, and dish wash products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-[#00AEEF] px-8 py-4 rounded-full font-semibold hover:bg-[#F9F9F9] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            >
              Request Quote
            </a>
            <a
              href="tel:+92915815056"
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
