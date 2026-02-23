import { FaFire, FaLayerGroup } from 'react-icons/fa';
import premier_boards from "../assets/products/PremierFormicaBoards.jpeg"
import BurqDetergent from "../assets/products/BurqDetergent.jpeg"
import kite from "../assets/products/kite.jpeg"

const ProductsSection = () => {
  const products = [
    {
      id: 'matches',
      title: 'Safety Matches - Pakistan\'s #1 Brand',
      icon: <FaFire className="text-6xl text-[#ED028C]" />,
      description: 'Pakistan\'s largest safety match manufacturer and exporter since 1995. Over 50 years of manufacturing excellence with Kite brand leading exports to 40+ countries worldwide.',
      features: [
        'بل میں روشن، دربیہ استعمال (Light in rain, reliable always)',
        'نمی سے محفوظ (Damp proof)',
        'بہترین برانڈ (Best brand)',
        'اضافی تیلیاں (Extra sticks)',
        'Carborised and damp proof',
        'Different striking surfaces (Dotted, Full Brush Coated, Plain Strip)',
        'International safety standards'
      ],
      brands: [
        { name: 'Kite', category: 'Premium - Local Brand' },
        { name: 'Bird', category: 'Local Brand' },
        { name: 'Olympia', category: 'Local Brand' },
        { name: 'Party', category: 'Local Brand' },
        { name: 'Tanga', category: 'Local Brand' },
        { name: 'Shrimp', category: 'Export Brand' },
        { name: 'Helicopter', category: 'Export Brand' },
        { name: 'Sunflower', category: 'Export Brand' },
        { name: 'Chinook', category: 'Export Brand' }
      ],
      sizes: [
        { size: 'LARGE', avgSticks: 58 },
        { size: 'CLASSIC', avgSticks: 45 },
        { size: 'REGULAR', avgSticks: 42 },
        { size: 'SMALL', avgSticks: 32 }
      ],
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
      id: 'detergents',
      title: 'Detergents - Premium Cleaning Solutions',
      icon: <FaLayerGroup className="text-6xl text-[#00AEEF]" />,
      description: 'Premium detergent brands featuring advanced cleaning technology. BURQ Action with Color Guard, Kite Glow with Triple Enzyme technology, and Vero with powerful stain removal - trusted by households across Pakistan.',
      products: [
        {
          name: 'BURQ Action',
          tagline: 'دلچ کا صفائی یا صرف برق ایکشن لائیا',
          description: 'Premium detergent with Colour Guard technology for color protection',
          features: [
            'رنگوں کی چمک پہلے (Color brightness maintained)',
            'بامومبدگی جلد کے عمروں (Skin safety formula)',
            'کپڑوں کے رنگوں کی حفاظت (Color protection)'
          ],
          skus: [
            { size: '2.3 KG', packing: 6, price: 464.07 },
            { size: '1 KG', packing: 12, price: 213.90 },
            { size: 'RS.99', packing: 24, price: 92.07 },
            { size: 'RS.50', packing: 48, price: 46.50 },
            { size: 'RS.20', packing: 96, price: 18.60 },
            { size: 'RS.10', packing: 204, price: 9.30 }
          ]
        },
        {
          name: 'Kite Glow',
          tagline: 'کائٹ گلو لائے... بہتر پروخوشبو، بہترین صفائی!',
          description: 'Flagship brand launched in March 2025 with Triple Enzyme technology',
          features: [
            'شادی کی دھوئین و ضرورت آسانی سے (Tough stains removed easily)',
            'کپڑوں کی نگہداشت کے لیے (Fabric care protection)',
            'کپڑوں کے رنگوں کا تحفظ (Color protection)'
          ],
          skus: [
            { size: '2 KG', packing: 6, price: 511.50 },
            { size: '1 KG', packing: 12, price: 269.70 },
            { size: '500 GM', packing: 24, price: 139.50 },
            { size: 'RS.99', packing: 48, price: 92.07 },
            { size: 'RS.50', packing: 96, price: 46.50 },
            { size: 'RS.20', packing: 96, price: 18.60 },
            { size: 'RS.10', packing: 144, price: 9.30 }
          ]
        },
        {
          name: 'Vero Detergent',
          tagline: 'کپڑوں کو دین نئی نیک پہترین بحت کے ساتھ',
          description: 'Premium cleaning powder with natural ingredients',
          features: [
            'بہترین صفائی (Excellent cleaning)',
            'رنگین کے لیے محفوظ (Safe for colors)',
            'کم کے زیادہ چلے (Long lasting)'
          ],
          skus: [
            { size: '20 KG', packing: 4, price: null },
            { size: '5 KG', packing: 4, price: null }
          ]
        }
      ],
      services: 'Private labeling and toll manufacturing services available with minimal variation',
      image: BurqDetergent
    },
    {
      id: 'dishwash',
      title: 'Dish Wash Bar - Extra Strength',
      icon: <FaLayerGroup className="text-6xl text-[#059669]" />,
      description: 'Kite Dish Wash Bar with premium lemon fragrance and slow dissolution - beats market leaders. Perfect for sparkling clean dishes with powerful grease removal.',
      products: [
        {
          name: 'Kite Dish Wash Bar',
          tagline: 'جہاں صفائی، وہاں کائٹ ڈش واش بار',
          description: 'Premium lemon fragrance with slow dissolution',
          features: [
            'لیموں کی خوشبو کی سانحہ (Premium lemon fragrance)',
            'چکنائی کا دشمن (Tough on grease)',
            'کم کے زیادہ چلے (Long lasting)',
            'ہاتھوں کے لیے نرم (Gentle on hands)'
          ],
          skus: [
            { size: 'SUPER BAR', packing: 36, price: 44.63 },
            { size: 'LONG BAR', packing: 36, price: 35.91 },
            { size: 'LARGE BAR', packing: 36, price: 17.96 },
            { size: 'REGULAR BAR', packing: 48, price: 8.98 }
          ]
        }
      ],
      services: 'Bulk orders and private labeling available',
      image: BurqDetergent
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
                      <h4 className="text-[#222222] text-xl font-bold mb-3">Product Features:</h4>
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
                      <h4 className="text-[#222222] text-xl font-bold mb-3">Available Sizes:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gradient-to-r from-[#ED028C] to-[#d4027a] text-white">
                            <tr>
                              <th className="px-6 py-3 text-left">SIZE</th>
                              <th className="px-6 py-3 text-center">AVG STICKS PER BOX</th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.sizes.map((size, idx) => (
                              <tr key={idx} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-3 font-bold text-[#222222]">{size.size}</td>
                                <td className="px-6 py-3 text-center text-[#666666]">{size.avgSticks}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-[#222222] text-xl font-bold mb-3">Our Match Brands:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {product.brands.map((brand, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] text-white px-4 py-3 rounded-lg font-semibold">
                            <span className="text-lg">{brand.name}</span>
                            <span className="text-sm opacity-90 ml-2">({brand.category})</span>
                          </div>
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

                {/* Detergent and Dish Wash Products */}
                {(product.id === 'detergents' || product.id === 'dishwash') && (
                  <>
                    <div className="space-y-6 mb-6">
                      {product.products.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border-2 border-[#E0E0E0] hover:border-[#FF8ACE] transition-all duration-300">
                          <h4 className="text-[#222222] text-2xl font-bold mb-2">{item.name}</h4>
                          {item.tagline && (
                            <p className="text-[#00AEEF] font-semibold mb-2 italic text-lg">{item.tagline}</p>
                          )}
                          <p className="text-[#666666] mb-3">{item.description}</p>
                          
                          <div className="mb-4">
                            <h5 className="text-[#222222] font-bold mb-2">Key Features:</h5>
                            <ul className="space-y-2">
                              {item.features.map((feature, fidx) => (
                                <li key={fidx} className="flex items-center text-[#666666]">
                                  <span className="w-2 h-2 bg-[#ED028C] rounded-full mr-3"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {item.skus && (
                            <div className="mt-4">
                              <h5 className="text-[#222222] font-bold mb-3">Available Sizes & Pricing:</h5>
                              <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                  <thead className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] text-white">
                                    <tr>
                                      <th className="px-4 py-2 text-left">SKU</th>
                                      <th className="px-4 py-2 text-center">Packing/Flexi</th>
                                      <th className="px-4 py-2 text-right">TP/Unit (Rs.)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {item.skus.map((sku, sidx) => (
                                      <tr key={sidx} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-2 font-semibold text-[#222222]">{sku.size}</td>
                                        <td className="px-4 py-2 text-center text-[#666666]">{sku.packing}</td>
                                        <td className="px-4 py-2 text-right text-[#00AEEF] font-bold">
                                          {sku.price ? sku.price.toFixed(2) : 'Contact for pricing'}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] text-white p-6 rounded-xl">
                      <p className="font-semibold text-lg">💼 {product.services}</p>
                    </div>
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
