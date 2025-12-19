import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & CEO",
    bio: "With over 20 years in luxury real estate, Alexandra leads our vision for exceptional property experiences.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    name: "Marcus Williams",
    role: "Chief Investment Officer",
    bio: "Marcus brings deep expertise in property investment strategies and portfolio management.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Sofia Rodriguez",
    role: "Head of Acquisitions",
    bio: "Sofia's keen eye for emerging opportunities has driven our most successful property acquisitions.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  },
  {
    name: "David Park",
    role: "Director of Operations",
    bio: "David ensures seamless execution across all our property development and management projects.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Emma Thompson",
    role: "Client Relations Director",
    bio: "Emma's dedication to client success has built lasting relationships with our premium clientele.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    name: "James Mitchell",
    role: "Legal Counsel",
    bio: "James provides expert guidance on all legal matters related to property transactions and compliance.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <span className="text-minimal text-primary mb-4 block">Our Team</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 text-architectural">
            Meet the Experts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our team combines decades of experience with a passion for 
            delivering exceptional results in every property endeavor.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <a href="#" className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <span className="text-minimal text-primary">{member.role}</span>
                <h3 className="text-xl font-serif text-foreground mt-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-minimal text-primary mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 text-architectural">
                Building Dreams Since 2010
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Own Property was founded with a simple mission: to transform the 
                  way people experience real estate. What started as a boutique 
                  agency has grown into a full-service property company.
                </p>
                <p>
                  Our journey has been marked by countless successful transactions, 
                  award-winning developments, and most importantly, satisfied clients 
                  who have trusted us with their property dreams.
                </p>
                <p>
                  Today, we continue to push boundaries, embracing innovation while 
                  staying true to our core values of integrity, excellence, and 
                  client-first service.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-8 rounded-lg text-center">
                <span className="text-4xl font-serif text-primary">14+</span>
                <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div className="bg-background p-8 rounded-lg text-center">
                <span className="text-4xl font-serif text-primary">500+</span>
                <p className="text-sm text-muted-foreground mt-2">Properties Sold</p>
              </div>
              <div className="bg-background p-8 rounded-lg text-center">
                <span className="text-4xl font-serif text-primary">50+</span>
                <p className="text-sm text-muted-foreground mt-2">Team Members</p>
              </div>
              <div className="bg-background p-8 rounded-lg text-center">
                <span className="text-4xl font-serif text-primary">$2B+</span>
                <p className="text-sm text-muted-foreground mt-2">Total Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
