import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import About from "@/components/About";
import Process from "@/components/Process";
import FeaturedProperties from "@/components/FeaturedProperties";
import ServicePackages from "@/components/ServicePackages";
import Partners from "@/components/Partners";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Hero />
      <Partners />
      <FeaturedProperties />
      <WhyChooseUs />
      <Services />
      <Statistics />
      <Testimonials />
      <About />
      <Process />
      <ServicePackages />
    </>
  );
};

export default Index;
