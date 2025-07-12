import { ArrowRight, Bot, FileText, TrendingUp, Zap, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import crmDashboard from "@/assets/crm-dashboard.jpg";
import invoiceAutomation from "@/assets/invoice-automation.jpg";
import aiChatbot from "@/assets/ai-chatbot.jpg";
import propertyAutomation from "@/assets/property-automation.jpg";

interface SolutionProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  reverse?: boolean;
}

const SolutionCard = ({ title, description, features, image, icon: Icon, reverse = false }: SolutionProps) => {
  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}>
            <div className="flex items-center gap-3">
              <div className="p-3 glass-card glow-hover">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold">{title}</h3>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary glow-primary"></div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="group interactive">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Image */}
          <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="glass-card p-1 glow-hover interactive">
              <img 
                src={image} 
                alt={title}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/20 blur-lg float-animation"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-secondary/20 blur-lg float-animation" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const solutions = [
    {
      title: "CRM with AI-Powered Lead Scoring",
      description: "Transform your sales process with intelligent lead scoring that identifies high-value prospects automatically. Our AI analyzes behavior patterns, engagement metrics, and historical data to prioritize your pipeline.",
      features: [
        "Automated lead qualification and scoring",
        "Predictive analytics for conversion probability", 
        "Real-time customer journey tracking",
        "Integration with existing sales tools"
      ],
      image: crmDashboard,
      icon: TrendingUp,
      reverse: false
    },
    {
      title: "Automated Invoicing",
      description: "Streamline your billing process with smart automation that generates, sends, and tracks invoices effortlessly. Reduce manual work while ensuring accuracy and faster payments.",
      features: [
        "Smart invoice generation from project data",
        "Automated payment reminders and follow-ups",
        "Multi-currency and tax compliance",
        "Integration with accounting systems"
      ],
      image: invoiceAutomation,
      icon: FileText,
      reverse: true
    },
    {
      title: "Sales Offer Generation",
      description: "Create compelling, personalized proposals in minutes with our intelligent document generation system. Dynamic templates adapt to client needs and industry requirements.",
      features: [
        "Dynamic proposal templates",
        "Client-specific customization",
        "Pricing optimization algorithms",
        "Digital signature integration"
      ],
      image: invoiceAutomation,
      icon: Zap,
      reverse: false
    },
    {
      title: "AI Agents for Client Interaction",
      description: "Deploy intelligent conversational agents that handle customer inquiries, qualify leads, and provide 24/7 support. Natural language processing ensures human-like interactions.",
      features: [
        "Natural language conversation flows",
        "Multi-channel deployment (web, chat, voice)",
        "Lead qualification and appointment booking",
        "Seamless handoff to human agents"
      ],
      image: aiChatbot,
      icon: Bot,
      reverse: true
    },
    {
      title: "Property & Inventory Automation",
      description: "Manage assets with precision using IoT integration, automated tracking, and predictive maintenance. Real-time visibility across all locations and inventory levels.",
      features: [
        "Real-time asset tracking and monitoring",
        "Predictive maintenance scheduling",
        "Automated reorder points and procurement",
        "Multi-location inventory synchronization"
      ],
      image: propertyAutomation,
      icon: Building,
      reverse: false
    }
  ];

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      {solutions.map((solution, index) => (
        <SolutionCard key={index} {...solution} />
      ))}
    </div>
  );
};

export default SolutionSection;