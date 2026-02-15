import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#00AEEF] to-[#0095CC] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl">Get in Touch with Aziz Group</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headquarters */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8 text-center">
              Headquarters
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex items-start mb-6">
                <div className="bg-[#00AEEF] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaBuilding className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#222222] mb-2">AJ Tower</h3>
                  <p className="text-lg text-[#666666]">
                    Gulberg Green, Islamabad, Pakistan
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <FaPhone className="text-[#ED028C] text-xl mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-1">Phone</h4>
                    <p className="text-[#666666]">+92 51 111 254 947</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-[#ED028C] text-xl mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#222222] mb-1">Email</h4>
                    <p className="text-[#666666]">info@azizgrp.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Offices */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8 text-center">
              Regional Offices
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Islamabad */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#00AEEF] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-2">Islamabad</h3>
                <p className="text-[#666666] mb-3">
                  AJ Tower, Gulberg Green
                </p>
                <p className="text-sm text-[#666666]">
                  <strong>Phone:</strong> +92 51 111 254 947
                </p>
              </div>

              {/* Lahore */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#0095CC] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-2">Lahore</h3>
                <p className="text-[#666666] mb-3">
                  Regional Office
                </p>
                <p className="text-sm text-[#666666]">
                  <strong>Phone:</strong> +92 42 111 254 947
                </p>
              </div>

              {/* Peshawar */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#00AEEF] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-2">Peshawar</h3>
                <p className="text-[#666666] mb-3">
                  Regional Office
                </p>
                <p className="text-sm text-[#666666]">
                  <strong>Phone:</strong> +92 91 111 254 947
                </p>
              </div>

              {/* Gadoon Swabi */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#0095CC] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-2">Gadoon Swabi</h3>
                <p className="text-[#666666] mb-3">
                  Manufacturing Facility
                </p>
                <p className="text-sm text-[#666666]">
                  <strong>Phone:</strong> +92 938 111 254
                </p>
              </div>
            </div>
          </div>

          {/* Divisions Contact */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8 text-center">
              Contact by Division
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#00AEEF] to-[#0095CC] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Textile Division</h3>
                <p className="text-white/90! mb-3">A.J Textile Mills Limited</p>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <FaEnvelope className="text-white/90! mr-2" />
                    <p className="text-white/90!">textile@azizgrp.com</p>
                  </p>
                  <p className="flex items-center text-white/90!">
                    <FaPhone className="mr-2 text-white/90!" />
                    +92 51 111 254 947 (Ext: 101)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0095CC] to-[#007BA7] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">FMCG Division</h3>
                <p className="text-white/90! mb-3">Match Manufacturing & Export</p>
                <div className="space-y-2">
                  <p className="flex items-center text-white/90!">
                    <FaEnvelope className="mr-2 text-white/90!" />
                    fmcg@azizgrp.com
                  </p>
                  <p className="flex items-center text-white/90!">
                    <FaPhone className="mr-2 text-white/90!" />
                    +92 51 111 254 947 (Ext: 102)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0095CC] to-[#007BA7] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Board Division</h3>
                <p className="mb-3 text-white/90!">MDF, Particle Board & Lamination</p>
                <div className="space-y-2">
                  <p className="flex items-center text-white/90!">
                    <FaEnvelope className="mr-2 text-white/90!" />
                    board@azizgrp.com
                  </p>
                  <p className="flex items-center text-white/90!">
                    <FaPhone className="mr-2 text-white/90!" />
                    +92 51 111 254 947 (Ext: 103)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#007BA7] to-[#006688] rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Real Estate Division</h3>
                <p className="mb-3 text-white/90!">Property Development & Management</p>
                <div className="space-y-2">
                  <p className="flex items-center text-white/90!">
                    <FaEnvelope className="mr-2 text-white/90!" />
                    realestate@azizgrp.com
                  </p>
                  <p className="flex items-center text-white/90!">
                    <FaPhone className="mr-2 text-white/90!" />
                    +92 51 111 254 947 (Ext: 104)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
              <div className="bg-[#00AEEF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Business Hours</h3>
              <div className="space-y-2 text-[#666666]">
                <p className="text-lg">
                  <strong className="text-[#222222]">Monday - Friday:</strong> 9:00 AM - 6:00 PM
                </p>
                <p className="text-lg">
                  <strong className="text-[#222222]">Saturday:</strong> 9:00 AM - 2:00 PM
                </p>
                <p className="text-lg">
                  <strong className="text-[#222222]">Sunday:</strong> Closed
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8 text-center">
              Find Us on the Map
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5867945!2d73.0853!3d33.6997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzU5LjAiTiA3M8KwMDUnMDcuMSJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aziz Group Location - Gulberg Green, Islamabad"
                className="w-full"
              ></iframe>
            </div>
            <p className="text-center text-[#666666] mt-4 text-sm">
              AJ Tower, Gulberg Green, Islamabad, Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#00AEEF] to-[#0095CC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-white! mb-8 max-w-2xl mx-auto">
            We're here to answer your questions and discuss how we can help you
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+92511112549477"
              className="inline-block bg-white text-[#00AEEF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            >
              <FaPhone className="inline mr-2" />
              Call Us Now
            </a>
            <a
              href="mailto:info@azizgrp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#00AEEF] transition-all duration-300 active:scale-95"
            >
              <FaEnvelope className="inline mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
