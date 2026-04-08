import HeroCarousel from "./HeroCarousel";
import BriefProductsSection from "./BriefProductsSection";
import AboutSection from "./AboutSection";
import BriefExport from "./BriefExport";
import BrandsShowcaseSection from "./BrandsShowcaseSection";
import MatchMakingSection from "./MatchMakingSection";
import CertificationsSlider from "./CertificationsSlider";
import TrustSection from "./TrustSection";

const HomePageContent = () => {
  return (
    <>
      <HeroCarousel />
      <BriefProductsSection />
      <AboutSection />
      <BriefExport />
      <BrandsShowcaseSection />
      <MatchMakingSection />
      <CertificationsSlider />
      <TrustSection />
    </>
  );
};

export default HomePageContent;
