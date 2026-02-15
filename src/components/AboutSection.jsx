import { FaUsers, FaIndustry, FaGlobeAsia, FaAward } from 'react-icons/fa';
import chairman from "../assets/people/chairman.jpeg"
import ceo from "../assets/people/ceo.jpg"
import aziz_group_logo from "../assets/aj_logo.png"

const AboutSection = () => {
  const leaders = [
    {
      id: 1,
      name: 'Mr. Mohsin Aziz',
      title: 'Chairman',
      image: chairman,
      bio: 'Senator in the Senate of Pakistan (2021-2027 & 2015-2021). Chairman of the Senate Standing Committee on Power. Former Director on the Board of the State Bank of Pakistan (2 terms), board member at HBL and PPL. Chairman of APTMA (2 terms) and President of Sarhad Chamber of Commerce & Industry.',
    },
    {
      id: 2,
      name: 'Mr. Afan Aziz',
      title: 'CEO',
      image: ceo,
      bio: 'Leads the Textile and Real Estate Divisions. Graduate of the London School of Economics (First Class Honours). Honorary Consul of South Korea for KPK. Member of UNICEF Pakistan Advisory Council. President of Sarhad Chamber (2011-12), Vice President of APTMA.',
    },
    {
      id: 3,
      name: 'Mr. Waleed Elahi',
      title: 'Managing Director - FMCG',
      image: 'https://via.placeholder.com/400x400/6B7280/FFFFFF?text=MD',
      bio: 'Over 20 years in Marketing, Sales, and Distribution. MD of FMCG Division for 10 years. Graduate of University of Wisconsin-Madison; MBA from LUMS (Bronze Medalist). Previous experience with Pakistan Tobacco Company.',
    },
  ];

  const stats = [
    {
      icon: <FaUsers className="text-5xl text-[#00AEEF]" />,
      number: '10,000+',
      label: 'Employees',
    },
    {
      icon: <FaIndustry className="text-5xl text-[#ED028C]" />,
      number: '100,000+',
      label: 'Spindles',
    },
    {
      icon: <FaGlobeAsia className="text-5xl text-[#00AEEF]" />,
      number: '40+',
      label: 'Export Countries',
    },
    {
      icon: <FaAward className="text-5xl text-[#ED028C]" />,
      number: '80+',
      label: 'Years Legacy',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#00AEEF] text-lg font-semibold mb-2 uppercase tracking-wide">
            About Us
          </h2>
          <h3 className="text-[#222222] text-4xl md:text-5xl font-bold mb-6">
            Aziz Group of Industries
          </h3>
          <img src={aziz_group_logo} className='w-50 h-50 mx-auto mt-3 mb-6' alt="Aziz Group of Industries" />
          <div className="w-24 h-1 bg-[#ED028C] mx-auto mb-8"></div>
        </div>

        {/* Company Description */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#FFEFF9] to-white p-8 md:p-12 rounded-2xl border-2 border-[#FF8ACE] shadow-lg hover:shadow-2xl transition-all duration-300">
            <p className="text-[#222222] text-lg leading-relaxed mb-6">
              Aziz Group is a <span className="font-bold text-[#00AEEF]">long-established, well-reputed, and multi-diversified</span> business 
              concern of Pakistan. Started in the <span className="font-bold">1940s</span> with commodity trading, 
              the group ventured into manufacturing in the early sixties by setting up an ice factory and cold storage.
            </p>
            <p className="text-[#222222] text-lg leading-relaxed mb-6">
              The group now comprises a textile spinning mill with over <span className="font-bold text-[#00AEEF]">100,000 spindles</span>, 
              the <span className="font-bold text-[#ED028C]">largest safety match manufacturing operation in Pakistan</span>, 
              a laminated board division, a particle board unit, cold storage, and real estate projects in Islamabad.
            </p>
            <p className="text-[#666666] text-lg leading-relaxed">
              The group is largely self-financed and has an <span className="font-bold">impeccable record</span> with 
              financial institutions of Pakistan. We are one of the largest employers in Khyber Pakhtunkhwa, 
              with operations across three major cities.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border-2 border-[#E0E0E0] hover:border-[#FF8ACE] hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-[#222222] text-3xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-[#666666] text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-[#222222] text-3xl md:text-4xl font-bold mb-4">
              Our Leadership
            </h3>
            <p className="text-[#666666] text-lg max-w-3xl mx-auto">
              Meet the visionary leaders driving Aziz Group's success across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-2xl overflow-hidden border-2 border-[#E0E0E0] hover:border-[#FF8ACE] hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /> */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white text-2xl font-bold mb-1 drop-shadow-lg">
                      {leader.name}
                    </h4>
                    <p className="text-[#00AEEF] text-lg font-semibold drop-shadow-lg">
                      {leader.title}
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-[#FFEFF9]">
                  <p className="text-[#666666] leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-[#00AEEF] to-[#0095CC] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Our Mission & Vision
          </h3>
          <p className="text-white/95! text-lg max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            We are committed to excellence in manufacturing and distribution, providing quality products and 
            services while contributing to the economic development of Pakistan. Our vision is to remain a 
            trusted partner for international brands and to continue expanding our presence across diverse 
            industries, always maintaining our core values of integrity, innovation, and social responsibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
