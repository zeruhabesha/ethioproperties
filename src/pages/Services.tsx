import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home, Building2, Wrench, DollarSign, Users, Compass } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Sales & Leasing",
      description: "Whether you're buying your dream home or looking to rent, we offer a wide range of residential options including apartments, villas, and condominiums."
    },
    {
      icon: Building2,
      title: "Commercial Real Estate",
      description: "We help businesses find the perfect office space, retail location, or warehouse to support their growth and operations."
    },
    {
      icon: Wrench,
      title: "Property Management",
      description: "End-to-end management services for property owners, including tenant screening, maintenance, rent collection, and legal compliance."
    },
    {
      icon: DollarSign,
      title: "Property Valuation",
      description: "Accurate and reliable property valuation services for buyers, sellers, and financial institutions."
    },
    {
      icon: Users,
      title: "Investment Consultancy",
      description: "Expert advice on real estate investment opportunities in Ethiopia, ensuring high returns and asset security."
    },
    {
      icon: Compass,
      title: "Legal Assistance",
      description: "Comprehensive legal support for all real estate transactions, ensuring a smooth and hassle-free process."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your needs. From finding your dream home to managing your investments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 flex-grow">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-card border border-border/50 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Need a Custom Service?</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8">
            Contact us today to discuss your specific requirements. Our team is ready to provide personalized solutions.
          </p>
          <a href="/contact" className="inline-block bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-gray-100 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;