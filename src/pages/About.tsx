import { Target, History, Award, User, PenTool, CheckCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import InteractiveCard from "@/components/InteractiveCard";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import DecorativePattern from "@/components/DecorativePattern";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background selection:bg-primary/20">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary/5">
          <DecorativePattern variant="geometric" opacity={0.05} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollAnimation animation="fadeIn">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Architect & Delegated Manager
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Bridging Architecture <br /> & Asset Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up [animation-delay:200ms] leading-relaxed">
              I am not just a property manager; I am an architect who understands the soul of your building.
              My mission is to preserve your property's value through design-conscious management while
              maximizing your financial returns.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 relative">
        <DecorativePattern variant="dots" className="text-primary/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <ScrollAnimation animation="slideRight">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Why Delegate to an Architect?</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Management requires more than just collecting rent. It requires an eye for detail,
                    a knowledge of construction quality, and a strategy for aesthetic upkeep.
                  </p>
                  <p>
                    As your delegated manager, I bring a unique dual-perspective:
                    <strong className="text-foreground block mt-2">• The Architect's Eye:</strong> Ensuring maintenance enhances the property's longevity and beauty.
                    <strong className="text-foreground block mt-2">• The Manager's Efficiency:</strong> Handling tenants, legalities, and finances with professional rigor.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft">
              <InteractiveCard hoverEffect="lift" className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Architectural Detail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 z-20 text-white">
                  <p className="text-sm font-medium uppercase tracking-wider mb-2 text-secondary">Aesthetic Integrity</p>
                  <p className="text-xl font-bold">Preserving Design Value</p>
                </div>
              </InteractiveCard>
            </ScrollAnimation>
          </div>

          {/* Core Values / Features */}
          <ScrollAnimation animation="slideUp">
            <div className="grid md:grid-cols-3 gap-8">
              <InteractiveCard hoverEffect="lift" className="p-8 bg-card rounded-2xl shadow-lg border border-border/50 group">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <PenTool className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Design-Led Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We assess every property through an architectural lens, suggesting enhancements that increase desirability and rental yield.
                </p>
              </InteractiveCard>

              <InteractiveCard hoverEffect="lift" className="p-8 bg-card rounded-2xl shadow-lg border border-border/50 group">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">Total Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From financial reports to maintenance logs, you receive clear, regular updates. You retain control without the daily burden.
                </p>
              </InteractiveCard>

              <InteractiveCard hoverEffect="lift" className="p-8 bg-card rounded-2xl shadow-lg border border-border/50 group">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <User className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Client-Centric</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We curate tenants who respect quality design, ensuring a harmonious relationship between occupant and property.
                </p>
              </InteractiveCard>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Profile Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-primary z-0">
          <DecorativePattern variant="grid" opacity={0.1} className="text-white" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <ScrollAnimation animation="slideRight">
              <div className="relative group">
                <div className="absolute inset-0 bg-secondary rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl w-64 h-80 md:w-80 md:h-96 border-4 border-white/10">
                  <img
                    src="/image.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft">
              <div className="max-w-xl text-center md:text-left text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">My Commitment</h2>
                <p className="text-secondary text-xl font-medium mb-6">Architect & Delegated Manager</p>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  "I believe that a well-managed property is a preserved piece of art.
                  By delegating to me, you ensure your investment is not just occupied, but cherished."
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="/contact" className="px-8 py-3 bg-white text-primary rounded-full font-bold hover:bg-secondary hover:text-white transition-colors shadow-lg">
                    Start Delegation
                  </a>
                  <a href="/services" className="px-8 py-3 border-2 border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                    View Services
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;