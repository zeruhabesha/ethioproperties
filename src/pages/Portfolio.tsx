import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Skyline Residence",
    category: "Residential",
    location: "Dubai Marina",
    year: "2024",
    image: project1,
    description: "A luxurious 4-bedroom penthouse with panoramic city views and modern amenities."
  },
  {
    id: 2,
    title: "Urban Loft Collection",
    category: "Commercial",
    location: "Business Bay",
    year: "2023",
    image: project2,
    description: "Contemporary office spaces designed for the modern entrepreneur."
  },
  {
    id: 3,
    title: "Coastal Villa",
    category: "Residential",
    location: "Palm Jumeirah",
    year: "2024",
    image: project3,
    description: "Beachfront luxury living with private pool and direct beach access."
  },
  {
    id: 4,
    title: "The Metropolitan",
    category: "Mixed Use",
    location: "Downtown Dubai",
    year: "2023",
    image: project1,
    description: "A mixed-use development combining retail, office, and residential spaces."
  },
  {
    id: 5,
    title: "Garden Estates",
    category: "Residential",
    location: "Emirates Hills",
    year: "2024",
    image: project2,
    description: "Exclusive gated community with landscaped gardens and premium finishes."
  },
  {
    id: 6,
    title: "Innovation Hub",
    category: "Commercial",
    location: "DIFC",
    year: "2023",
    image: project3,
    description: "State-of-the-art tech campus fostering creativity and collaboration."
  }
];

const Portfolio = () => {
  return (
    <div className="bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <span className="text-minimal text-primary mb-4 block">Our Work</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 text-architectural">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our portfolio of exceptional properties and developments
            that showcase our commitment to quality and innovation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-minimal text-primary">{project.category}</span>
                    <h3 className="text-xl font-serif text-foreground mt-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{project.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">{project.location}</span>
                    <p className="text-xs text-muted-foreground mt-1">{project.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
