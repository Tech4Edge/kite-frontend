import { FaGlobeAsia, FaShippingFast, FaCertificate, FaHandshake, FaFileContract, FaAward, FaCheckCircle } from 'react-icons/fa';
import world_map_export_destinations from '../assets/export_map.jpg';
import export_shipping_container from '../assets/export_container.jpg';

const ExportSection = () => {
  const exportCountries = {
    'Europe': {
      countries: ['Germany', 'France', 'Spain', 'Italy', 'Greece'],
      icon: '🇪🇺',
      color: '#00AEEF'
    },
    'Middle East': {
      countries: ['Saudi Arabia', 'Turkey', 'Egypt'],
      icon: '🕌',
      color: '#ED028C'
    },
    'Africa': {
      countries: ['South Africa', 'Kazakhstan'],
      icon: '🌍',
      color: '#00AEEF'
    },
    'Asia': {
      countries: ['Afghanistan', 'and more...'],
      icon: '🌏',
      color: '#ED028C'
    }
  };

  const exportServices = [
    {
      icon: <FaShippingFast className="text-5xl text-white" />,
      title: 'Complete Logistics',
      description: 'End-to-end shipping solutions including container booking, cargo handling, and delivery tracking to over 40 countries.',
      points: ['Sea freight management', 'Air cargo services', 'Door-to-door delivery', 'Real-time tracking']
    },
    {
      icon: <FaFileContract className="text-5xl text-white" />,
      title: 'Documentation Support',
      description: 'Full assistance with export documentation, permits, certificates of origin, and regulatory compliance.',
      points: ['Export licenses', 'Customs clearance', 'Certificate of origin', 'Phytosanitary certificates']
    },
    {
      icon: <FaCertificate className="text-5xl text-white" />,
      title: 'Quality Certifications',
      description: 'All products come with international quality certifications meeting global standards and buyer requirements.',
      points: ['ISO certified', 'Lab test reports', 'Quality assurance', 'Compliance certificates']
    },
    {
      icon: <FaHandshake className="text-5xl text-white" />,
      title: 'Partnership Programs',
      description: 'Long-term partnerships with dedicated account managers, competitive pricing, and flexible payment terms.',
      points: ['Dedicated support', 'Flexible terms', 'Volume discounts', 'Private labeling']
    }
  ];

  const statistics = [
    { number: '40+', label: 'Export Countries', sublabel: 'Global Reach' },
    { number: '30+', label: 'Years Experience', sublabel: 'Since 1995' },
    { number: '#1', label: 'Match Exporter', sublabel: 'In Pakistan' },
    { number: '100%', label: 'Quality Assured', sublabel: 'Certified Products' }
  ];

  const achievements = [
    'Pakistan\'s largest safety match exporter',
    'Exporting since 1995 with established presence',
    'Premium quality products trusted internationally',
    'State-of-the-art manufacturing facilities',
    'Comprehensive export support services',
    'Competitive pricing with flexible terms'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#00AEEF] text-lg font-semibold mb-2 uppercase tracking-wide">
            Global Reach
          </h2>
          <h3 className="text-[#222222] text-4xl md:text-5xl font-bold mb-6">
            Export Excellence Worldwide
          </h3>
          <div className="w-24 h-1 bg-[#ED028C] mx-auto mb-8"></div>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            Since 1995, Aziz Group has been Pakistan's largest safety match exporter, serving markets 
            across Europe, Asia, Africa, and the Middle East with premium quality products.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#00AEEF] to-[#0095CC] p-8 rounded-2xl text-center text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl font-bold mb-2 drop-shadow-lg">{stat.number}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-white/80">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Export Countries */}
        <div className="mb-20">
          <h3 className="text-[#222222] text-3xl font-bold text-center mb-12">
            Our Global Presence
          </h3>
          
          {/* Map Placeholder */}
          <div className="relative h-96 bg-gray-500 rounded-3xl border-2 border-gray-400 flex items-center justify-center mb-12 overflow-hidden group">
            <img src={world_map_export_destinations} alt="Global Export Map" className="w-full h-full object-cover object-center" />
          </div>

          {/* Countries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(exportCountries).map(([region, data]) => (
              <div
                key={region}
                className="bg-white p-6 rounded-xl border-2 border-[#E0E0E0] hover:border-[#FF8ACE] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">{data.icon}</div>
                <h4 className="text-[#222222] text-xl font-bold mb-4 text-center" style={{color: data.color}}>
                  {region}
                </h4>
                <ul className="space-y-2">
                  {data.countries.map((country, idx) => (
                    <li key={idx} className="flex items-center text-[#666666]">
                      <span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: data.color}}></span>
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Export Services */}
        <div className="mb-20">
          <h3 className="text-[#222222] text-3xl font-bold text-center mb-12">
            Comprehensive Export Services
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {exportServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#00AEEF] to-[#0095CC] rounded-2xl p-8 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 drop-shadow-md">{service.title}</h4>
                    <p className="text-white/95! leading-relaxed mb-4">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-6">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-white/90">
                      <FaCheckCircle className="mr-3 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-[#222222] text-3xl font-bold text-center mb-12">
            Why Choose Aziz Group for Export?
          </h3>
          
          <div className="bg-white rounded-2xl border-2 border-[#E0E0E0] p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <FaAward className="text-2xl text-[#ED028C] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-[#666666] font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#ED028C] to-[#d4027a] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
                Ready to Start Exporting with Us?
              </h3>
              <p className="text-white/95! text-lg leading-relaxed mb-8 drop-shadow-md">
                Join our network of international partners and benefit from our extensive export 
                experience, reliable logistics, and commitment to quality. We handle everything 
                from documentation to delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:fd@kitematchpk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#ED028C] px-8 py-4 rounded-full font-semibold hover:bg-[#F9F9F9] transition-all duration-300 shadow-lg active:scale-95"
                >
                  Email Us
                </a>
                <a
                  href="tel:+92915815056"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#ED028C] transition-all duration-300 active:scale-95"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="h-80 bg-gray-500 rounded-2xl flex items-center justify-center border-2 border-gray-400">
              <img src={export_shipping_container} alt="Export Shipping Container" className="w-full h-full object-cover object-center" />
              {/* <div className="text-center">
                <FaShippingFast className="text-8xl text-white mx-auto mb-4 drop-shadow-lg" />
                <p className="text-white font-medium text-lg mb-2">📷 Export Shipping Container Image</p>
                <p className="text-sm text-white/70">Image: export-shipping-container.jpg</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-white rounded-2xl border-2 border-[#E0E0E0] p-8">
          <h4 className="text-[#222222] text-2xl font-bold mb-6 text-center">Export Department Contact</h4>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-[#666666]"><strong className="text-[#222222]">Email:</strong> fd@kitematchpk.com</p>
            </div>
            <div>
              <p className="text-[#666666]"><strong className="text-[#222222]">Phone:</strong> +92-(0)91-5815056, 5815057</p>
            </div>
            <div>
              <p className="text-[#666666]"><strong className="text-[#222222]">Website:</strong> www.azizgrp.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportSection;
