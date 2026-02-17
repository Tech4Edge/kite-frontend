import { FaLinkedin, FaBuilding, FaUniversity, FaAward } from 'react-icons/fa';
import chairmanImg from '../assets/people/chairman.jpeg';
import ceoImg from '../assets/people/ceo.jpg';

const AboutUsPage = () => {
  const timeline = [
    { year: '1950s', event: 'Started with trading of commodities' },
    { year: '1960', event: 'Aziz Ice Factory and Cold Storage' },
    { year: '1974', event: 'Mohsin Match Factory - Earliest Private Sector Manufacturing plant in KPK' },
    { year: '1981', event: 'Premier Formica' },
    { year: '1990', event: 'Mohsin Enterprises - Group 2nd Match Manufacturing Unit' },
    { year: '1992', event: 'AJ Textile Started with 15,000 spindles' },
    { year: '1997', event: 'Added 15,000 spindles' },
    { year: '2003', event: 'Added 2,000 spindles & 5 MW Power Plant' },
    { year: '2004', event: 'Premier Chipboard - Started particle board unit' },
    { year: '2006', event: 'AJ Match - Group 3rd Match Manufacturing unit in Sheikhupura' },
    { year: '2016', event: '2 MVS Production Started & 10,000 Spindle added' },
    { year: '2019', event: 'Addition of 20,000 spindles, 4.2 MW, 1 MW Solar & 2 MVS Machines' },
    { year: '2019', event: 'Premier MDF - Purchased MDF Manufacturing Plant' },
    { year: '2020', event: 'AJ Tower - Excavation Started' },
  ];

  const chairmanPositions = [
    { icon: FaBuilding, title: 'Senate', description: 'Senator for two terms, Senate of Pakistan, the Upper House of the Parliament. (2021-2027 & 2015 to 2021)' },
    { icon: FaBuilding, title: 'Senate Power Committee', description: 'Chairman Senate Standing Committee on Power' },
    { icon: FaUniversity, title: 'State Bank of Pakistan', description: 'Board member of State Bank of Pakistan (2 terms)' },
    { icon: FaBuilding, title: 'HBL', description: 'Board member of HBL' },
    { icon: FaAward, title: 'APTMA', description: 'Chairman APTMA (2 terms)' },
    { icon: FaBuilding, title: 'Provincial Assembly', description: 'Provincial Minister (Provincial Assembly Of Khyber Pakhtunkhwa) in 2002' },
    { icon: FaBuilding, title: 'PPL', description: 'Board member Pakistan Petroleum Limited' },
    { icon: FaBuilding, title: 'SCCI', description: 'President Sarhad Chamber of Commerce & Industry' },
  ];

  const ceoPositions = [
    { icon: FaUniversity, title: 'LSE', description: 'Graduate of the London School of Economics (with 1st class Honors)' },
    { icon: FaBuilding, title: 'Honorary Consul', description: 'Honorary Consul of South Korea for KPK' },
    { icon: FaAward, title: 'UNICEF', description: 'Member of the UNICEF Pakistan Advisory Council (UPAC)' },
    { icon: FaBuilding, title: 'EO', description: 'President & Founding Member of EO (Entrepreneur Organization) Islamabad Chapter' },
    { icon: FaBuilding, title: 'Agha Khan Cultural Service', description: 'Board Member of Agha Khan Cultural Service' },
    { icon: FaAward, title: 'YPO', description: 'Member of Young Presidents Organization (YPO)' },
    { icon: FaBuilding, title: 'SNGPL', description: 'Board member SNGPL' },
    { icon: FaBuilding, title: 'SCCI', description: 'President Sarhad Chamber of Commerce & Industry' },
    { icon: FaAward, title: 'APTMA', description: 'Vice-Chairman APTMA' },
    { icon: FaUniversity, title: 'NTU', description: 'Board member National Textile University' },
    { icon: FaUniversity, title: 'IM Sciences', description: 'Board member IM Sciences University Peshawar' },
  ];

  const companies = [
    'A.J Textile Mills Limited',
    'Mohsin Match Factory (Pvt.) Limited',
    'A.J Match (Pvt.) Limited',
    'Premier Formica Industries Limited',
    'Premier Chipboard Pvt Limited',
    'Aziz Ice factory and Cold Storage',
    'Premier MDF',
    'A.J Towers'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00AEEF] to-[#0095CC] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Aziz Group
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              A long-established, well-reputed, and multi-diversified business concern of Pakistan since the 1950s
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#666666] leading-relaxed">
                <p>
                  Aziz group is a long-established, well-reputed, and multi-diversified business concern of Pakistan. It started in the 50s with the trading of commodities and after having established its name in trading, the group ventured into Manufacturing in the early sixties by setting up an ice factory & cold storage.
                </p>
                <p>
                  Now the group comprises a well-reputed textile-spinning mill, the largest safety match manufacturing operation in Pakistan, a laminate board (Formica) unit, a particle board (chipboard) unit, a cold storage, and a Real Estate Business.
                </p>
                <p>
                  The group is largely self-financed and has an impeccable record with the financial institutions of Pakistan with sales over USD 100 million, exporting to Europe, Asia & Africa.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#FFEFF9] to-white p-8 md:p-12 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#222222] mb-6">Our Companies</h3>
              <ul className="space-y-3">
                {companies.map((company, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[#00AEEF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#666666]">{company}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">
              Our Founder
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Our founder late <strong className="text-[#222222]">Haji Aziz-ur-rehman</strong>, or (Aziz Jan) as he was popularly known, was a man of great virtue, character and principle. His teachings, to this date, are a guiding principle of our group.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#00AEEF] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00AEEF] to-[#0095CC] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl text-white font-bold">M</span>
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Mission</h3>
              <p className="text-[#666666] leading-relaxed">
                To build the Company on sound value systems, being steadfast on all commitments and striving to achieve excellence in productivity, quality and efficiency, creating an ecosystem that encourages positivity amongst all stakeholders and is a harbinger for growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#ED028C] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ED028C] to-[#FF8ACE] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl text-white font-bold">V</span>
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Vision</h3>
              <p className="text-[#666666] leading-relaxed">
                To be an agent of positive change for the stakeholders and community by pursuing ethical and sustainable values.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#FF8ACE] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8ACE] to-[#FFEFF9] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl text-[#ED028C] font-bold">V</span>
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4">Values</h3>
              <p className="text-[#666666] leading-relaxed">
                Commitment, Integrity, Honesty, Nurture, Care, Respect, Innovate & Excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#00AEEF]"
              >
                <span className="inline-block bg-gradient-to-r from-[#00AEEF] to-[#0095CC] text-white font-bold px-4 py-2 rounded-full text-sm mb-3">
                  {item.year}
                </span>
                <p className="text-[#666666] leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={chairmanImg} 
                  alt="Mr. Mohsin Aziz - Chairman"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#00AEEF] to-[#0095CC] text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="font-bold">Chairman</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
                Mr. Mohsin Aziz
              </h2>
              <p className="text-xl text-[#00AEEF] font-semibold mb-6">Chairman</p>
              <div className="space-y-4 text-[#666666] leading-relaxed mb-8">
                <p>
                  We at Aziz group of Industries have over several generations consistently followed the principles of hard work, commitment and perseverance, and these efforts by the grace of Allah have been rewarded for the organizations within the group which have been going from strength to strength, achieving a consistent and sturdy growth over the past several decades.
                </p>
                <p>
                  Our group's core principles are based on our traditional family values of fairness, honesty, trust and commitment handed down to us by the founder of our group, my father Haji Aziz ur Rehman. These values coupled with the desire to change and innovate has led to a formulating sustainable business environment.
                </p>
                <p>
                  As successful entrepreneurs and good corporate citizens, we hope to continue playing a positive role in the economic development of our society, our community and above all our beloved country Pakistan.
                </p>
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Key Positions</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {chairmanPositions.map((position, index) => {
                  const Icon = position.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-200 hover:border-[#00AEEF] transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="text-[#00AEEF] text-xl flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#222222] text-sm mb-1">{position.title}</h4>
                          <p className="text-xs text-[#666666] leading-relaxed">{position.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
                Mr. Afan Aziz
              </h2>
              <p className="text-xl text-[#00AEEF] font-semibold mb-6">Chief Executive Officer</p>
              <div className="space-y-4 text-[#666666] leading-relaxed mb-8">
                <p>
                  We at Aziz Group of Industries believe in striving to achieve the very best, by learning from others and challenging ourselves to struggle for excellence. We strongly believe in attention to details and to evolve our organization for the advancement of all stakeholders by innovating and improving our systems, services and quality of our products.
                </p>
                <p>
                  Our journey started in the 1950's. Now Alhamdullilah the group comprises the largest safety match manufacturing operation in Pakistan, one of the largest textile-spinning mills in the country, a sizable particle and MDF board division, cold storages and a multipurpose real estate project in Islamabad.
                </p>
                <p>
                  Today each of our businesses are cultivating a spirit of enterprise starting with the management on to all stakeholders, aspiring to achieve our vision of being a positive agent of change in our community and helping achieve new goals across a multitude of facets of life.
                </p>
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">Key Positions</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {ceoPositions.map((position, index) => {
                  const Icon = position.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#ED028C] transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="text-[#ED028C] text-xl flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#222222] text-sm mb-1">{position.title}</h4>
                          <p className="text-xs text-[#666666] leading-relaxed">{position.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="relative">
                <img 
                  src={ceoImg} 
                  alt="Mr. Afan Aziz - CEO"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#ED028C] to-[#FF8ACE] text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="font-bold">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership & Achievements */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#00AEEF] to-[#0095CC] text-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Membership</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>All Pakistan Textile Mills Association (APTMA)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>The Federation of Pakistan Chambers of Commerce and Industry (FPCCI)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Sarhad Chamber of Commerce and Industry (SCCI)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Match Manufacturers Association</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#ED028C] to-[#FF8ACE] text-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Largest Employer</h3>
              <p className="mb-6 leading-relaxed">
                The group is largely self-financed and has an impeccable record with the financial institutions of Pakistan with sales over USD 100 million. Exporting to Europe, Asia & Africa.
              </p>
              <p className="leading-relaxed">
                We are one of the largest employers in the province of Khyber Pakhtunkhwa, with operational setup across 4 major cities of Pakistan: Lahore, Islamabad, Peshawar and Gadoon Swabi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
