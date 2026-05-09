import AISearchHero from "@/components/ai-search/AISearchHero";
import LocalBrandAdvantage from "@/components/ai-search/LocalBrandAdvantage";
import SignalLayers from "@/components/ai-search/SignalLayers";
import ExamplesCarousel from "@/components/ai-search/ExamplesCarousel";
import Tier3Summary from "@/components/ai-search/Tier3Summary";
import AISearchFinalCTA from "@/components/ai-search/AISearchFinalCTA";

const Divider = () => <div className="section-divider-gradient" />;

const AISearch = () => {
  return (
    <>
      <AISearchHero />
      <Divider />
      <LocalBrandAdvantage />
      <Divider />
      <SignalLayers />
      <Divider />
      <ExamplesCarousel />
      <Divider />
      <Tier3Summary />
      <AISearchFinalCTA />
    </>
  );
};

export default AISearch;
