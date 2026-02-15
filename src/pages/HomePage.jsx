import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import BriefPromotion from '../components/BriefPromotion';
import BriefExport from '../components/BriefExport';
import MatchMakingSection from '../components/MatchMakingSection';
import CertificationsSlider from '../components/CertificationsSlider';
import TrustSection from '../components/TrustSection';

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <BriefPromotion />
      <BriefExport />
      <MatchMakingSection />
      <CertificationsSlider />
      <TrustSection />
    </>
  );
};

export default HomePage;
