import { FaLinkedin, FaBuilding, FaUniversity, FaAward, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';
import chairmanImg from '../assets/people/chairman.jpeg';
import ceoImg from '../assets/people/ceo.jpg';
import waleedImg from '../assets/people/waleed.jpg';
import azizgrp from "../assets/azizgrp.jpg";

// Import new components
import HeroSection from '../components/about/HeroSection';
import CompanyOverview from '../components/about/CompanyOverview';
import FounderSection from '../components/about/FounderSection';
import MissionVisionValues from '../components/about/MissionVisionValues';
import Timeline from '../components/about/Timeline';
import LeaderProfile from '../components/about/LeaderProfile';
import MembershipAchievements from '../components/about/MembershipAchievements';

const AboutUsPage = () => {
  const timeline = [
    { year: '1974', event: 'Mohsin Match Factory - Earliest Private Sector Manufacturing plant in KPK' },
    { year: '1990', event: 'Mohsin Enterprises - Group 2nd Match Manufacturing Unit' },
    { year: '1995', event: 'Started Exporting Safety Matches - Pakistan\'s Largest Exporter' },
    { year: '2006', event: 'AJ Match - Group 3rd Match Manufacturing unit in Sheikhupura' },
    { year: '2025', event: 'Kite Glow Detergent Launch - Premium Detergent with Triple Enzyme Technology' },
    { year: '2025', event: 'Kite Dish Wash Bar - Rapid Market Growth with Premium Formula' },
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

  const managingDirectorPositions = [
    { icon: FaUniversity, title: 'University of Wisconsin-Madison', description: 'Graduate of the University of Wisconsin-Madison' },
    { icon: FaUniversity, title: 'LUMS', description: 'MBA Degree from LUMS, awarded the Bronze Medal' },
    { icon: FaBuilding, title: 'Pakistan Tobacco Company', description: 'Over 20 years of experience in Marketing, Sales, and Distribution' },
    { icon: FaChartLine, title: 'FMCG Leadership', description: 'Leading FMCG Division with focus on consumer needs and sustainable growth' },
    { icon: FaHandshake, title: 'Strategic Vision', description: 'Built business on deep market understanding and operational excellence' },
    { icon: FaUsers, title: 'Quality Commitment', description: 'Uncompromising commitment to quality and consistent performance' },
  ];

  const companies = [
    'Mohsin Match Factory (Pvt.) Limited - Est. 1974',
    'Mohsin Enterprises (Pvt.) Limited - Est. 1990',
    'A.J Match (Pvt.) Limited - Est. 2006',
    'FMCG Division - Kite Brand (Detergents, Matches, Dish Wash)',
    'A.J Textile Mills Limited',
    'Premier Formica Industries Limited',
    'Premier Chipboard Pvt Limited',
    'Premier MDF'
  ];

  const chairmanMessage = [
    "We at Aziz group of Industries have over several generations consistently followed the principles of hard work, commitment and perseverance, and these efforts by the grace of Allah have been rewarded for the organizations within the group which have been going from strength to strength, achieving a consistent and sturdy growth over the past several decades.",
    "Our group's core principles are based on our traditional family values of fairness, honesty, trust and commitment handed down to us by the founder of our group, my father Haji Aziz ur Rehman. These values coupled with the desire to change and innovate has led to a formulating sustainable business environment.",
    "As successful entrepreneurs and good corporate citizens, we hope to continue playing a positive role in the economic development of our society, our community and above all our beloved country Pakistan."
  ];

  const ceoMessage = [
    "We at Aziz Group of Industries believe in striving to achieve the very best, by learning from others and challenging ourselves to struggle for excellence. We strongly believe in attention to details and to evolve our organization for the advancement of all stakeholders by innovating and improving our systems, services and quality of our products.",
    "Our journey started in the 1950's. Now Alhamdullilah the group comprises the largest safety match manufacturing operation in Pakistan, one of the largest textile-spinning mills in the country, a sizable particle and MDF board division, cold storages and a multipurpose real estate project in Islamabad.",
    "Today each of our businesses are cultivating a spirit of enterprise starting with the management on to all stakeholders, aspiring to achieve our vision of being a positive agent of change in our community and helping achieve new goals across a multitude of facets of life."
  ];

  const managingDirectorMessage = [
    "Mr. Waleed brings with a strong academic background and over 20 years of hands-on experience in Marketing, Sales, and Distribution. He is a graduate of the University of Wisconsin–Madison and holds an MBA Degree from LUMS, where he was awarded the Bronze Medal. Mr. Waleed's professional journey includes valuable experience with Pakistan Tobacco Company, which played a key role in shaping the structured operations, brand building, and market execution.",
    "For the past 10 years, Mr. Waleed is serving as Managing Director – FMCG Division, leading the Kite brand with a clear focus on consumer needs, product quality, and sustainable growth. Our flagship Kite Glow detergent, launched in March 2025, has rapidly gained market recognition for its exceptional cleaning power. Kite Dish Wash Bar and Kite Safety Matches continue to strengthen our position as Pakistan's most trusted FMCG brand.",
    "Mr. Waleed's strategic vision emphasizes that sustainable success in the FMCG sector is built on deep market understanding, operational excellence, and an uncompromising commitment to quality. With 10,000+ employees and presence in 40+ countries, the Kite brand continues to deliver trusted everyday products to households and businesses across Pakistan and internationally."
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection backgroundImage={azizgrp} />

      {/* Company Overview */}
      <CompanyOverview companies={companies} />

      {/* Founder Section */}
      <FounderSection />

      {/* Mission & Vision */}
      <MissionVisionValues />

      {/* Timeline */}
      <Timeline timeline={timeline} />

      {/* Chairman Section */}
      <LeaderProfile
        name="Mr. Mohsin Aziz"
        title="Chairman"
        image={chairmanImg}
        message={chairmanMessage}
        positions={chairmanPositions}
        backgroundColor="bg-white"
        imagePosition="left"
        accentColor="#00AEEF"
      />

      {/* CEO Section */}
      <LeaderProfile
        name="Mr. Afan Aziz"
        title="Chief Executive Officer"
        image={ceoImg}
        message={ceoMessage}
        positions={ceoPositions}
        backgroundColor="bg-gray-50"
        imagePosition="right"
        accentColor="#ED028C"
      />

      {/* Managing Director FMCG Division Section */}
      <LeaderProfile
        name="Mr. Waleed Elahi"
        title="Managing Director - FMCG Division"
        image={waleedImg}
        message={managingDirectorMessage}
        positions={managingDirectorPositions}
        backgroundColor="bg-white"
        imagePosition="left"
        accentColor="#FF8ACE"
      />

      {/* Membership & Achievements */}
      <MembershipAchievements />
    </div>
  );
};

export default AboutUsPage;
