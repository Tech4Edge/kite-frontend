import HeroCarousel from "./HeroCarousel";
import BriefProductsSection from "./BriefProductsSection";
import AboutSection from "./AboutSection";
import BriefPromotion from "./BriefPromotion";
import BriefExport from "./BriefExport";
import MatchMakingSection from "./MatchMakingSection";
import CertificationsSlider from "./CertificationsSlider";
import TrustSection from "./TrustSection";

const HomePageContent = () => {
  return (
    <>
      <HeroCarousel />
      <BriefProductsSection />
      <AboutSection />
      {/* <BriefPromotion /> */}
      <BriefExport />
      <MatchMakingSection />
      <CertificationsSlider />
      <TrustSection />
    </>
  );
};

export default HomePageContent;
