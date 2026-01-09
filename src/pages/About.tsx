import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, History, Award } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import InteractiveCard from "@/components/InteractiveCard";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Image Background */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Fixed Image Background - Clipped to Section */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/city.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgb(26 54 93 / 0.9), rgb(26 54 93 / 0.9), rgb(26 54 93 / 0.9))'
            }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollAnimation animation="fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">{t('about.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up [animation-delay:200ms]">
              {t('about.desc1')}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <ScrollAnimation animation="slideRight">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">{t('about.philosophy')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.desc2')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.philosophy.desc')}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft">
              <InteractiveCard hoverEffect="lift" className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Office"
                  className="w-full h-full object-cover"
                />
              </InteractiveCard>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slideUp">
            <div className="grid md:grid-cols-3 gap-8">
              <InteractiveCard hoverEffect="lift" className="p-8 bg-white dark:bg-card rounded-2xl shadow-lg border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('why.title')}</h3>
                <p className="text-muted-foreground">
                  {t('why.item1')}
                </p>
              </InteractiveCard>

              <InteractiveCard hoverEffect="lift" className="p-8 bg-white dark:bg-card rounded-2xl shadow-lg border border-border/50">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                  <History className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('serve.title')}</h3>
                <p className="text-muted-foreground">
                  {t('serve.item1')}
                </p>
              </InteractiveCard>

              <InteractiveCard hoverEffect="lift" className="p-8 bg-white dark:bg-card rounded-2xl shadow-lg border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('why.item5')}</h3>
                <p className="text-muted-foreground">
                  {t('why.item2')}
                </p>
              </InteractiveCard>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Section with Gradient Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">{t('serve.label')}</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                {t('serve.item2')} {t('serve.item3')} {t('serve.item4')}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp">
            <div className="flex justify-center">
              <InteractiveCard hoverEffect="lift" className="group text-center max-w-sm">
                <GlassmorphismCard
                  blur="md"
                  opacity={0.1}
                  className="p-8 rounded-2xl border border-white/20"
                >
                  <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
                      alt="Melat Dereje"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Melat Dereje</h3>
                  <p className="text-secondary text-base">Managing Director & Founder</p>
                </GlassmorphismCard>
              </InteractiveCard>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;