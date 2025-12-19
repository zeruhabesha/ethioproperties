import { ArrowUpRight, MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const properties = [
  {
    id: 1,
    title: "Skyline Penthouse",
    location: "Dubai Marina",
    price: "$2,450,000",
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: project1,
    featured: true
  },
  {
    id: 2,
    title: "Garden Villa",
    location: "Emirates Hills",
    price: "$5,800,000",
    beds: 6,
    baths: 5,
    sqft: 8500,
    image: project2,
    featured: false
  },
  {
    id: 3,
    title: "Waterfront Apartment",
    location: "Palm Jumeirah",
    price: "$1,850,000",
    beds: 3,
    baths: 2,
    sqft: 2400,
    image: project3,
    featured: false
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-minimal text-primary mb-4 block">Featured Listings</span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground text-architectural">
              Premium Properties
            </h2>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0 group">
            View All Properties
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={property.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {property.featured && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-2xl font-serif text-background">{property.price}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                {property.location}
              </div>
              
              <h3 className="text-xl font-serif text-foreground mb-3">{property.title}</h3>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  {property.beds} Beds
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  {property.baths} Baths
                </div>
                <div className="flex items-center gap-1">
                  <Square className="w-4 h-4" />
                  {property.sqft.toLocaleString()} sqft
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
