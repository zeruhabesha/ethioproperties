import { Building2, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-bold block leading-none">Ethio Core</span>
                <span className="text-xs text-gray-400 tracking-widest">PROPERTY</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.description') || 'Your trusted partner in finding the perfect property in Ethiopia. We bridge the gap between dream homes and reality with premium services.'}
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.quick.links') || 'Quick Links'}</h4>
            <ul className="space-y-4">
              {[
                { key: 'nav.home', fallback: 'Home' },
                { key: 'nav.properties', fallback: 'Properties' },
                { key: 'nav.about', fallback: 'About Us' },
                { key: 'nav.contact', fallback: 'Contact' }
              ].map((item) => (
                <li key={item.key}>
                  <a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                    {t(item.key) || item.fallback}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.property.types') || 'Property Types'}</h4>
            <ul className="space-y-4">
              {[
                { key: 'footer.types.apartments', fallback: 'Apartments' },
                { key: 'footer.types.villas', fallback: 'Villas' },
                { key: 'footer.types.offices', fallback: 'Offices' },
                { key: 'footer.types.commercial', fallback: 'Commercial' },
                { key: 'footer.types.land', fallback: 'Land' }
              ].map((item) => (
                <li key={item.key}>
                  <a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                    {t(item.key) || item.fallback}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('contact.title')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span className="text-gray-400">{t('contact.location')}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-gray-400">{t('footer.phone') || '+251 91 123 4567'}</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-gray-400">{t('footer.email') || 'info@ethiocoreproperty.com'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Ethio Core Property. {t('footer.rights')}
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy') || 'Privacy Policy'}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms') || 'Terms of Service'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
