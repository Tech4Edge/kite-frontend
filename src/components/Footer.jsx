import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import mohsin_enterprises from "../assets/mohsin_enterprises_logo.jpeg"
import AJMatch from "../assets/divisions/ajmatch.png"
import MohsinEnterprises from "../assets/divisions/MohsinEnterprises.png"
import MohsinMatch from "../assets/divisions/MohsinMatch.png"
import PremierBoards from "../assets/divisions/PremierBoards.png"

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Export', href: '/export' },
  ];

  const companyLogos = [
    {
      name: 'A.J Match Factory',
      logo: AJMatch,
      alt: 'Mohsin Match Factory'
    },
    {
      name: 'Mohsin Enterprises - Hayatabad, Peshawar',
      logo: MohsinEnterprises,
      alt: 'Mohsin Enterprises'
    },
    {
      name: 'Mohsin Match Factory - Peshawar',
      logo: MohsinMatch,
      alt: 'Kite Brand'
    },
    {
      name: 'Premier Boards - Sheikhupura, Lahore',
      logo: PremierBoards,
      alt: 'FMCG Division'
    },
  ];

  const contactInfo = [
    {
      title: 'FMCG Division - Kite Brand',
      address: 'Industrial Estate, Old Jamrud Road, Peshawar, Pakistan',
      phone: '+92-(0)91-5815056, 5815057',
      email: 'fd@kitematchpk.com'
    },
    {
      title: 'A.J Match Factory',
      address: 'Sheikhupura, Punjab, Pakistan',
      phone: '+92-(0)423-7332711-12',
      email: 'match.export@azizgrp.com'
    },
  ];

  return (
    <footer className="bg-[#222222] text-white">
      {/* Company Logos Section */}
      <div className="bg-[#1a1a1a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {companyLogos.map((company, index) => (
              <div 
                key={index}
                className="bg-white hover:bg-white/60 p-4 rounded-lg transition-all duration-300 w-full flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="h-15! opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00AEEF]">Kite Brand</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Pakistan's most trusted FMCG brand under Mohsin Match Factory. Premium detergents, safety matches, 
              and dish wash products - over 50 years of manufacturing excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/kitematchpk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#00AEEF] p-3 rounded-full transition-all duration-300 active:scale-90"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/kitematch/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#00AEEF] p-3 rounded-full transition-all duration-300 active:scale-90"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00AEEF]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-[#00AEEF] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3 group-hover:bg-[#0095CC] transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-[#00AEEF]">Contact Us</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-white font-bold mb-3">{info.title}</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <FaMapMarkerAlt className="text-[#00AEEF] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-white/80">{info.address}</span>
                    </li>
                    <li className="flex items-center">
                      <FaPhone className="text-[#00AEEF] mr-3 flex-shrink-0" />
                      <a href={`tel:${info.phone.replace(/[^0-9+]/g, '')}`} className="text-white/80 hover:text-[#00AEEF] transition-colors">
                        {info.phone}
                      </a>
                    </li>
                    <li className="flex items-center">
                      <FaEnvelope className="text-[#00AEEF] mr-3 flex-shrink-0" />
                      <a href={`mailto:${info.email}`} className="text-white/80 hover:text-[#00AEEF] transition-colors">
                        {info.email}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <p className="text-white/60 text-sm">
                <strong className="text-white">Website:</strong> www.azizgrp.com
              </p>
            </div>
            <div>
              <p className="text-white/60 text-sm">
                <strong className="text-white">Social:</strong> @kitematch
              </p>
            </div>
            <div>
              <p className="text-white/60 text-sm">
                <strong className="text-white">Email:</strong> fd@kitematchpk.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Kite Brand - Aziz Group of Industries. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-white/60 hover:text-[#00AEEF] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-[#00AEEF] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
