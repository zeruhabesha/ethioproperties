import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Move, MapPin, Heart } from "lucide-react";
import InteractiveCard from "./InteractiveCard";
import ScrollAnimation from "./ScrollAnimation";
import LazyImage from "./LazyImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import PropertyDetailsModal from "./PropertyDetailsModal";

interface PropertyProps {
    image: string;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    sqft: number;
    type: string;
}

const PropertyCard = ({ image, title, location, price, beds, baths, sqft, type }: PropertyProps) => {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <ScrollAnimation animation="slideUp" className="h-full">
            <InteractiveCard
                hoverEffect="lift"
                className="group overflow-hidden border-none shadow-lg rounded-2xl bg-white dark:bg-card h-full"
                as="div"
            >
                <div className="relative h-64 overflow-hidden">
                    <LazyImage
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        showSkeleton={true}
                        skeletonClassName="rounded-t-2xl"
                    />
                    <div className="absolute top-4 left-4">
                        <Badge className="bg-primary hover:bg-primary text-white border-none px-3 py-1 text-xs uppercase tracking-wider animate-slide-right">
                            {type}
                        </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                        <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white text-white hover:text-red-500 transition-all duration-200 hover:scale-110 active:scale-95"
                            aria-label={t('property.favorite') || 'Add to favorites'}
                        >
                            <Heart className="w-5 h-5" />
                        </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <Button
                            className="w-full bg-secondary hover:bg-secondary/90 text-white hover:scale-105 active:scale-95 transition-all duration-200"
                            aria-label={`${t('property.view') || 'View details for'} ${title}`}
                            onClick={() => setIsModalOpen(true)}
                        >
                            {t('property.view') || 'View Details'}
                        </Button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">{title}</h3>
                            <div className="flex items-center text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-1 text-primary" />
                                <span className="text-sm">{location}</span>
                            </div>
                        </div>
                        <p className="text-xl font-bold text-secondary animate-glow">{price}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gradient-to-br dark:from-amber-900/30 dark:to-yellow-900/20 hover:bg-primary/10 dark:hover:from-amber-800/40 dark:hover:to-yellow-800/30 transition-colors duration-200">
                            <Bed className="w-5 h-5 text-gray-400 mb-1 group-hover:text-primary transition-colors duration-200" />
                            <span className="text-sm font-semibold">{beds} <span className="text-xs font-normal text-muted-foreground">{t('property.beds') || 'Beds'}</span></span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gradient-to-br dark:from-amber-900/30 dark:to-yellow-900/20 hover:bg-primary/10 dark:hover:from-amber-800/40 dark:hover:to-yellow-800/30 transition-colors duration-200">
                            <Bath className="w-5 h-5 text-gray-400 mb-1 group-hover:text-primary transition-colors duration-200" />
                            <span className="text-sm font-semibold">{baths} <span className="text-xs font-normal text-muted-foreground">{t('property.baths') || 'Baths'}</span></span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gradient-to-br dark:from-amber-900/30 dark:to-yellow-900/20 hover:bg-primary/10 dark:hover:from-amber-800/40 dark:hover:to-yellow-800/30 transition-colors duration-200">
                            <Move className="w-5 h-5 text-gray-400 mb-1 group-hover:text-primary transition-colors duration-200" />
                            <span className="text-sm font-semibold">{sqft} <span className="text-xs font-normal text-muted-foreground">m²</span></span>
                        </div>
                    </div>
                </div>
            </InteractiveCard>

            {/* Property Details Modal */}
            <PropertyDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                property={{
                    id: 0,
                    image,
                    title,
                    location,
                    price,
                    beds,
                    baths,
                    sqft,
                    type
                }}
            />
        </ScrollAnimation>
    );
};

export default PropertyCard;
