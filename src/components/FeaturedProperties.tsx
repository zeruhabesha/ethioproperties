import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import ScrollAnimation from "./ScrollAnimation";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const properties = [
  {
    id: 1,
    title: "Luxury Penthouse at Bole Atlas",
    location: "Bole Atlas, Addis Ababa",
    price: "ETB 28,500,000",
    beds: 4,
    baths: 4,
    sqft: 380,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    type: "Penthouse"
  },
  {
    id: 2,
    title: "Modern Villa in CMC",
    location: "CMC, Addis Ababa",
    price: "ETB 52,000,000",
    beds: 6,
    baths: 5,
    sqft: 750,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    type: "Villa"
  },
  {
    id: 3,
    title: "Executive Office Complex",
    location: "Kazanchis Business District",
    price: "ETB 22,800,000",
    beds: 0,
    baths: 3,
    sqft: 200,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    type: "Commercial"
  }
];

const FeaturedProperties = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50 dark:bg-background/50">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation animation="fadeIn">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 md:mb-12">
            <div>
              <span className="text-secondary font-semibold mb-2 block tracking-wider uppercase text-xs sm:text-sm">
                {t('properties.exclusive') || 'Exclusive Collection'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                {t('properties.featured') || 'Featured Properties'}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                {t('properties.featured.desc') || 'Discover our handpicked selection of premium properties, each offering exceptional quality and prime locations across Ethiopia\'s most desirable areas.'}
              </p>
            </div>
            <Link to="/properties">
              <Button variant="outline" className="mt-4 sm:mt-6 md:mt-0 w-full sm:w-auto group border-primary/20 hover:border-primary hover:scale-105 transition-all duration-200">
                {t('properties.view.all') || 'View All Properties'}
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((property, index) => (
            <div key={property.id} className={`animate-slide-up [animation-delay:${index * 150}ms]`}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
