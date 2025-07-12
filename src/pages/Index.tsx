import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <HeroSection />
      <SolutionSection />
      <CallToAction />
    </div>
  );
};

export default Index;
