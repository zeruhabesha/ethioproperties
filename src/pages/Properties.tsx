import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// Enhanced property data with more realistic Ethiopian properties
const allProperties = [
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
    },
    {
        id: 4,
        title: "Sarbet Premium Apartments",
        location: "Sarbet, Addis Ababa",
        price: "ETB 15,200,000",
        beds: 3,
        baths: 2,
        sqft: 145,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
        type: "Apartment"
    },
    {
        id: 5,
        title: "Bishoftu Lakeside Retreat",
        location: "Bishoftu Lake Area",
        price: "ETB 42,500,000",
        beds: 5,
        baths: 4,
        sqft: 580,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=1000",
        type: "Villa"
    },
    {
        id: 6,
        title: "Industrial Warehouse Complex",
        location: "Kality Industrial Zone",
        price: "ETB 75,000,000",
        beds: 0,
        baths: 4,
        sqft: 2500,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
        type: "Industrial"
    },
    {
        id: 7,
        title: "Luxury Condominium",
        location: "4 Kilo, Addis Ababa",
        price: "ETB 18,900,000",
        beds: 2,
        baths: 2,
        sqft: 125,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000",
        type: "Condo"
    },
    {
        id: 8,
        title: "Boutique Hotel Property",
        location: "Piazza, Addis Ababa",
        price: "ETB 95,000,000",
        beds: 12,
        baths: 15,
        sqft: 1200,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
        type: "Commercial"
    },
    {
        id: 9,
        title: "Garden Villa Estate",
        location: "Old Airport, Addis Ababa",
        price: "ETB 38,700,000",
        beds: 4,
        baths: 3,
        sqft: 420,
        image: "https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?auto=format&fit=crop&q=80&w=1000",
        type: "Villa"
    }
];

const Properties = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            {/* Hero Header with Image Background */}
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">{t('nav.properties') || 'Premium Properties'}</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up [animation-delay:200ms]">
                            {t('properties.description') || 'Discover our exclusive collection of luxury properties across Ethiopia\'s most prestigious locations. Each property represents the pinnacle of modern living and investment opportunity.'}
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Property Listings */}
            <section className="py-16 px-6 flex-grow bg-gray-50/50 dark:bg-gray-900/50">
                <div className="container mx-auto">
                    <ScrollAnimation animation="fadeIn">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">{t('properties.featured') || 'Featured Properties'}</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                {t('properties.featured.desc') || 'Each property in our portfolio has been carefully selected for its exceptional quality, prime location, and investment potential.'}
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProperties.map((property, index) => (
                            <div key={property.id} className={`animate-slide-up [animation-delay:${index * 100}ms]`}>
                                <PropertyCard {...property} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-secondary"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <ScrollAnimation animation="fadeIn">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {t('properties.cta.title') || 'Can\'t Find What You\'re Looking For?'}
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            {t('properties.cta.desc') || 'Our team of experts can help you find the perfect property that matches your specific needs and budget.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="px-8 py-3 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200"
                            >
                                {t('contact.title')}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200"
                            >
                                {t('properties.schedule') || 'Schedule a Viewing'}
                            </Button>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Properties;
