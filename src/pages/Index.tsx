import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import About from "@/components/About";
import Process from "@/components/Process";
import FeaturedProperties from "@/components/FeaturedProperties";
import ServicePackages from "@/components/ServicePackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-background">
        <FeaturedProperties />
        <WhyChooseUs />
        <Services />
        <Statistics />
        <Testimonials />
      </div>

      {/* Sticky About Section */}
      <div className="sticky top-0 z-0">
        <About />
      </div>

      <div className="relative z-10 bg-background">
        <Process />
        <ServicePackages />
      </div>
    </>
  );
};

export default Index;
