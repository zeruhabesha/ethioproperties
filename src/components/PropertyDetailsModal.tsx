import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Bed, Bath, Move, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PropertyDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    property: {
        id: number;
        image: string;
        title: string;
        location: string;
        price: string;
        beds: number;
        baths: number;
        sqft: number;
        type: string;
        description?: string;
        amenities?: string[];
    };
}

const PropertyDetailsModal = ({ isOpen, onClose, property }: PropertyDetailsModalProps) => {
    const { t } = useLanguage();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // For now, we'll use the single image, but this structure supports multiple images
    const images = [property.image];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const defaultDescription = `This stunning ${property.type.toLowerCase()} offers ${property.beds} bedrooms and ${property.baths} bathrooms across ${property.sqft}m² of beautifully designed living space. Located in the prestigious ${property.location}, this property represents an exceptional opportunity for discerning buyers seeking luxury and convenience.`;

    const defaultAmenities = [
        'Modern Kitchen',
        'Spacious Living Areas',
        'High-Quality Finishes',
        'Secure Parking',
        'Prime Location',
        'Natural Lighting',
        'Contemporary Design',
        'Quality Construction'
    ];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
                {/* Image Gallery */}
                <div className="relative h-64 sm:h-80 md:h-96 bg-gray-100 dark:bg-gray-800">
                    <img
                        src={images[currentImageIndex]}
                        alt={property.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Image Navigation - Only show if multiple images */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-800" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-800" />
                            </button>

                            {/* Image Counter */}
                            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                                {currentImageIndex + 1} / {images.length}
                            </div>
                        </>
                    )}

                    {/* Property Type Badge */}
                    <div className="absolute top-4 left-4">
                        <Badge className="bg-primary hover:bg-primary text-white border-none px-3 py-1 text-xs uppercase tracking-wider">
                            {property.type}
                        </Badge>
                    </div>
                </div>

                {/* Accessible Header for Screen Readers */}
                <DialogHeader className="sr-only">
                    <DialogTitle>{property.title}</DialogTitle>
                    <DialogDescription>
                        Property details for {property.title} located in {property.location}
                    </DialogDescription>
                </DialogHeader>

                {/* Content */}
                <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                            {property.title}
                        </h2>
                        <div className="flex items-center text-muted-foreground mb-4">
                            <MapPin className="w-4 h-4 mr-1 text-primary" />
                            <span className="text-sm sm:text-base">{property.location}</span>
                        </div>
                        <p className="text-3xl sm:text-4xl font-bold text-secondary">
                            {property.price}
                        </p>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-gray-800">
                            <Bed className="w-6 h-6 text-primary mb-2" />
                            <span className="text-lg font-bold">{property.beds}</span>
                            <span className="text-xs text-muted-foreground">{t('property.beds') || 'Beds'}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-gray-800">
                            <Bath className="w-6 h-6 text-primary mb-2" />
                            <span className="text-lg font-bold">{property.baths}</span>
                            <span className="text-xs text-muted-foreground">{t('property.baths') || 'Baths'}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-gray-800">
                            <Move className="w-6 h-6 text-primary mb-2" />
                            <span className="text-lg font-bold">{property.sqft}</span>
                            <span className="text-xs text-muted-foreground">m²</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-foreground mb-3">Description</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {property.description || defaultDescription}
                        </p>
                    </div>

                    {/* Amenities */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-foreground mb-3">Amenities & Features</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {(property.amenities || defaultAmenities).map((amenity, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                    <span className="text-sm text-foreground">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border">
                        <Button className="flex-1 h-12" size="lg">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                        </Button>
                        <Button variant="outline" className="flex-1 h-12" size="lg">
                            <Mail className="w-4 h-4 mr-2" />
                            Send Inquiry
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PropertyDetailsModal;
