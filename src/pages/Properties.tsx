import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import DecorativePattern from "@/components/DecorativePattern";
import InteractiveCard from "@/components/InteractiveCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Search,
    MapPin,
    Bed,
    Bath,
    Square,
    Heart,
    ArrowRight,
    Filter,
    Home,
    Building,
    Briefcase,
    LandPlot
} from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced property data
const allProperties = [
    {
        id: 1,
        title: "Luxury Penthouse at Bole Atlas",
        location: "Bole Atlas, Addis Ababa",
        price: "ETB 28,500,000",
        beds: 4,
        baths: 4,
        area: "380 m²",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
        type: "Apartment",
        status: "For Sale"
    },
    {
        id: 2,
        title: "Modern Villa in CMC",
        location: "CMC, Addis Ababa",
        price: "ETB 52,000,000",
        beds: 6,
        baths: 5,
        area: "750 m²",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
        type: "Villa",
        status: "For Sale"
    },
    {
        id: 3,
        title: "Executive Office Complex",
        location: "Kazanchis",
        price: "ETB 22,800,000",
        beds: 0,
        baths: 3,
        area: "200 m²",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
        type: "Commercial",
        status: "For Rent"
    },
    {
        id: 4,
        title: "Sarbet Premium Apartments",
        location: "Sarbet, Addis Ababa",
        price: "ETB 15,200,000",
        beds: 3,
        baths: 2,
        area: "145 m²",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
        type: "Apartment",
        status: "For Sale"
    },
    {
        id: 5,
        title: "Bishoftu Lakeside Retreat",
        location: "Bishoftu Lake Area",
        price: "ETB 42,500,000",
        beds: 5,
        baths: 4,
        area: "580 m²",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=1000",
        type: "Villa",
        status: "For Sale"
    },
    {
        id: 6,
        title: "Industrial Warehouse",
        location: "Kality Industrial Zone",
        price: "ETB 75,000,000",
        beds: 0,
        baths: 4,
        area: "2500 m²",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
        type: "Commercial",
        status: "Lease"
    },
    {
        id: 7,
        title: "Luxury Condominium",
        location: "4 Kilo, Addis Ababa",
        price: "ETB 18,900,000",
        beds: 2,
        baths: 2,
        area: "125 m²",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000",
        type: "Apartment",
        status: "For Sale"
    },
    {
        id: 8,
        title: "Boutique Hotel Property",
        location: "Piazza, Addis Ababa",
        price: "ETB 95,000,000",
        beds: 12,
        baths: 15,
        area: "1200 m²",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
        type: "Commercial",
        status: "For Sale"
    },
    {
        id: 9,
        title: "Garden Villa Estate",
        location: "Old Airport, Addis Ababa",
        price: "ETB 38,700,000",
        beds: 4,
        baths: 3,
        area: "420 m²",
        image: "https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?auto=format&fit=crop&q=80&w=1000",
        type: "Villa",
        status: "For Sale"
    }
];

const Properties = () => {
    const { t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredProperties = allProperties.filter(property => {
        const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === "All" || property.type === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-primary/5">
                    <DecorativePattern variant="grid" opacity={0.05} />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 animate-fade-in-up">
                        {t('properties.exclusive')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up [animation-delay:200ms]">
                        {t('properties.title') || "Premium Listings"}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
                        {t('properties.description')}
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 px-6 sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-card/50 rounded-2xl border border-border/50 shadow-sm">
                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            <Input
                                placeholder={t('properties.search') || "Search properties..."}
                                className="pl-10 bg-background border-border/50 focus:border-secondary transition-colors"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar items-center">
                            <Filter className="w-4 h-4 text-muted-foreground mr-2 hidden md:block" />
                            {['All', 'Villa', 'Apartment', 'Commercial'].map((type) => (
                                <Button
                                    key={type}
                                    variant={filter === type ? "default" : "outline"}
                                    onClick={() => setFilter(type)}
                                    className={`rounded-full px-6 transition-all duration-300 ${filter === type
                                            ? 'bg-primary text-white shadow-md scale-105'
                                            : 'hover:border-secondary/50 hover:text-secondary'
                                        }`}
                                >
                                    {type}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="py-12 px-6 flex-grow relative">
                <DecorativePattern variant="dots" className="text-primary/5 right-0 bottom-0" />
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map((property, index) => (
                            <InteractiveCard
                                key={property.id}
                                hoverEffect="lift"
                                className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 flex flex-col h-full animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Section */}
                                <div className="relative h-64 overflow-hidden">
                                    <span className="absolute top-4 left-4 bg-secondary/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10 backdrop-blur-sm shadow-sm">
                                        {property.status}
                                    </span>
                                    <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-red-500 transition-all duration-300 z-10 backdrop-blur-md">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <p className="text-2xl font-bold">{property.price}</p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                {property.title}
                                            </h3>
                                            <div className="flex items-center text-muted-foreground text-sm">
                                                <MapPin className="w-3 h-3 mr-1" />
                                                {property.location}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50 mb-4">
                                        <div className="flex flex-col items-center text-center">
                                            <Bed className="w-4 h-4 text-secondary mb-1" />
                                            <span className="text-xs text-muted-foreground">{property.beds} {t('property.beds')}</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center border-l border-border/50">
                                            <Bath className="w-4 h-4 text-secondary mb-1" />
                                            <span className="text-xs text-muted-foreground">{property.baths} {t('property.baths')}</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center border-l border-border/50">
                                            <Square className="w-4 h-4 text-secondary mb-1" />
                                            <span className="text-xs text-muted-foreground">{property.area}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-2">
                                        <Link to={`/properties`}>
                                            <Button className="w-full bg-primary/5 hover:bg-primary text-primary hover:text-white border-none shadow-none hover:shadow-lg transition-all duration-300 group-hover:translate-x-1">
                                                {t('property.view')} <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </InteractiveCard>
                        ))}
                    </div>

                    {filteredProperties.length === 0 && (
                        <div className="text-center py-20 bg-card/30 rounded-3xl border border-dashed border-border/50">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{t('properties.notfound.title') || "No properties found"}</h3>
                            <p className="text-muted-foreground">{t('properties.notfound.desc') || "Try adjusting your search criteria"}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <DecorativePattern variant="geometric" opacity={0.1} />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {t('properties.cta.title')}
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t('properties.cta.desc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="px-8 py-6 text-lg bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                {t('contact.title')}
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
                            >
                                {t('properties.schedule')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Properties;
