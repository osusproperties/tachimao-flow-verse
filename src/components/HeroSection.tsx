import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Interactive3DScene from "./Interactive3DScene";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 25% 25%, hsl(213 100% 50% / 0.3) 0%, transparent 50%),
                       radial-gradient(circle at 75% 75%, hsl(263 85% 65% / 0.3) 0%, transparent 50%)`
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl float-animation"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary/10 blur-xl float-animation" style={{animationDelay: '1s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 glow-hover">
          <Sparkles className="w-4 h-4 text-neon-blue" />
          <span className="text-sm font-medium">Founded 2022 • Tech Innovation Leader</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground to-neon-blue bg-clip-text text-transparent leading-tight">
          Tachimao
        </h1>
        
        {/* Tagline */}
        <h2 className="text-2xl lg:text-4xl font-semibold mb-8 text-muted-foreground">
          One System. <span className="text-primary glow-primary">Zero Headaches.</span>
        </h2>
        
        {/* Description */}
        <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Transform your business with cutting-edge technology solutions. 
          We optimize workflows, implement intelligent systems, and automate processes 
          that drive real results.
        </p>
        
        {/* Interactive 3D Scene */}
        <div className="my-12">
          <Interactive3DScene />
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 bg-primary hover:bg-primary-glow glow-hover pulse-glow interactive group"
        >
          Let's Talk
          <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
        </Button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm text-muted-foreground mb-2">Discover Our Solutions</p>
          <ArrowDown className="w-6 h-6 mx-auto scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;