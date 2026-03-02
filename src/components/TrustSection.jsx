import {
  FaCheckCircle,
  FaHandshake,
  FaCertificate,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: <FaCheckCircle className="text-5xl text-[#00AEEF]" />,
      title: "Over 50 Years of Excellence",
      description:
        "Manufacturing excellence since the 1970s with a proven track record of quality and reliability.",
    },
    {
      icon: <FaHandshake className="text-5xl text-[#ED028C]" />,
      title: "Trusted Partnerships",
      description:
        "Long-standing relationships with international brands and financial institutions across the globe.",
    },
    {
      icon: <FaCertificate className="text-5xl text-[#00AEEF]" />,
      title: "Internationally Certified",
      description: "Multiple certification including ISO 9001, UKAS, IAF",
    },
    {
      icon: <FaGlobe className="text-5xl text-[#ED028C]" />,
      title: "Global Reach",
      description:
        "Exporting to over 40 countries across Europe, Asia, and Africa.",
    },
  ];

  const achievements = [
    {
      number: "50+",
      label: "Years Manufacturing",
      highlight: "Since 1974",
    },
    {
      number: "10,000+",
      label: "Employees",
      highlight: "Nationwide",
    },
    {
      number: "40+",
      label: "Export Countries",
      highlight: "Global Presence",
    },
    {
      number: "#1",
      label: "Match Exporter",
      highlight: "Pakistan",
    },
  ];

  const clients = [
    {
      name: "Angel",
      logo: "https://via.placeholder.com/150x80/FFFFFF/666666?text=ANGEL",
    },
    {
      name: "Blédina",
      logo: "https://via.placeholder.com/150x80/FFFFFF/666666?text=BLEDINA",
    },
    {
      name: "Colgate",
      logo: "https://via.placeholder.com/150x80/FFFFFF/666666?text=COLGATE",
    },
    {
      name: "Danone",
      logo: "https://via.placeholder.com/150x80/FFFFFF/666666?text=DANONE",
    },
    {
      name: "Johnson & Johnson",
      logo: "https://via.placeholder.com/150x80/FFFFFF/666666?text=J&J",
    },
    {
      name: "SC Johnson",
      logo: "https://via.placeholder.com/150x80/FFFFFF/666666?text=SC+JOHNSON",
    },
    {
      name: "Tiger Head",
      logo: "https://via.placeholder.com/150x80/FFFFFF/666666?text=TIGER+HEAD",
    },
    {
      name: "Compal",
      logo: "https://via.placeholder.com/150x80/FFFFFF/666666?text=COMPAL",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#00AEEF] text-lg font-semibold mb-2 uppercase tracking-wide">
            Why Choose Us
          </h2>
          <h3 className="text-[#222222] text-4xl md:text-5xl font-bold mb-6">
            A Legacy of Trust & Excellence
          </h3>
          <div className="w-24 h-1 bg-[#ED028C] mx-auto mb-8"></div>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            Mohsin Match Factory and Kite brand - largely self-financed with an
            impeccable record. Our commitment to quality, innovation, and
            ethical business practices has made us a trusted partner for
            businesses and households worldwide.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="card-hover bg-gradient-to-br from-white to-[#FFEFF9] p-8 rounded-2xl border-2 border-[#E0E0E0] text-center group"
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h4 className="text-[#222222] text-xl font-bold mb-4">
                {point.title}
              </h4>
              <p className="text-[#666666] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        {/* <div className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] rounded-3xl p-12 mb-20">
          <h3 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
            Our Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-white text-4xl md:text-5xl font-bold mb-3">
                  {achievement.number}
                </div>
                <div className="text-white text-lg font-semibold mb-2">
                  {achievement.label}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wide">
                  {achievement.highlight}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Trusted Partners */}
        {/* <div>
          <div className="text-center mb-12">
            <h3 className="text-[#222222] text-3xl md:text-4xl font-bold mb-4">
              Trusted by Leading Brands
            </h3>
            <p className="text-[#666666] text-lg max-w-3xl mx-auto">
              Our relations of partnership with established international brands testify to our loyalty 
              and the quality of our service. When we establish a partnership, we are fully committed!
            </p>
          </div> */}

        {/* Client Logos Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-[#E0E0E0] hover:border-[#FF8ACE] hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))} */}
        {/* </div>  */}
        {/* </div> */}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-[#222222] text-3xl font-bold mb-6">
            Ready to Partner with Excellence?
          </h3>
          <p className="text-[#666666] text-lg mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied partners who trust Kite brand for
            quality, reliability, and innovation in FMCG products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#00AEEF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0095CC] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            >
              Get in Touch
            </Link>
            <Link
              to="/products"
              className="bg-transparent border-2 border-[#00AEEF] text-[#00AEEF] px-8 py-4 rounded-full font-semibold hover:bg-[#00AEEF] hover:text-white transition-all duration-300 active:scale-95"
            >
              Explore Our Brands
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
