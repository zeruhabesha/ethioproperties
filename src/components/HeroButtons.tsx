import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroButtons = () => {
    const { t } = useLanguage();

    return (
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up [animation-delay:600ms]">
            <Link to="/properties">
                <Button
                    size="lg"
                    className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95 transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                >
                    {t('hero.cta')}
                </Button>
            </Link>
            <Link to="/about">
                <Button
                    size="lg"
                    className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl text-base sm:text-lg font-semibold bg-white text-primary hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                    {t('hero.learn')}
                </Button>
            </Link>
        </div>
    );
};

export default HeroButtons;
