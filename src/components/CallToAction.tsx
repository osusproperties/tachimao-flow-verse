import { ArrowRight, Mail, Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 20% 80%, hsl(213 100% 50% / 0.4) 0%, transparent 50%),
                       radial-gradient(circle at 80% 20%, hsl(263 85% 65% / 0.4) 0%, transparent 50%),
                       radial-gradient(circle at 40% 40%, hsl(195 100% 75% / 0.2) 0%, transparent 50%)`
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-2xl float-animation"></div>
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-secondary/10 blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-neon-blue/10 blur-xl float-animation" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Ready to Transform Your Business?
        </h2>
        
        <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
          Join hundreds of companies that have streamlined their operations with Tachimao. 
          Let's discuss how we can eliminate your business headaches.
        </p>
        
        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="glass-card p-6 glow-hover interactive group cursor-pointer">
            <Mail className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground">hello@tachimao.com</p>
          </Card>
          
          <Card className="glass-card p-6 glow-hover interactive group cursor-pointer">
            <Phone className="w-8 h-8 text-secondary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
          </Card>
          
          <Card className="glass-card p-6 glow-hover interactive group cursor-pointer">
            <MessageCircle className="w-8 h-8 text-neon-blue mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground">Available 24/7</p>
          </Card>
          
          <Card className="glass-card p-6 glow-hover interactive group cursor-pointer">
            <Calendar className="w-8 h-8 text-neon-purple mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Book a Call</h3>
            <p className="text-sm text-muted-foreground">15-min consultation</p>
          </Card>
        </div>
        
        {/* Main CTA */}
        <div className="space-y-6">
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 bg-primary hover:bg-primary-glow glow-hover pulse-glow interactive group"
          >
            Let's Talk - It's Free
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-muted-foreground">
            No commitment required • Free consultation • Custom solution design
          </p>
        </div>
        
        {/* Company Info */}
        <div className="mt-16 pt-8 border-t border-glass-border/30">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary glow-primary"></div>
              <span>Founded 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary glow-primary"></div>
              <span>100+ Successful Implementations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-blue glow-primary"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;