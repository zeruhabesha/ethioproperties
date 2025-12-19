import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.packages': 'Packages',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Own Property',
    'hero.subtitle': 'Management',
    'hero.tagline': 'Caring for What You Own',
    'hero.description': 'Reliable and professional property management services designed for Ethiopian property owners at home and abroad.',
    'hero.cta': 'Get Started',
    'hero.learn': 'Learn More',
    
    // Services
    'services.label': 'OUR SERVICES',
    'services.title': 'Comprehensive Property Care',
    'services.residential.title': 'Residential Property Management',
    'services.residential.desc': 'We manage villas, apartments, condominiums, and residential compounds across Addis Ababa and surrounding areas.',
    'services.residential.item1': 'Tenant sourcing, screening & placement',
    'services.residential.item2': 'Lease preparation & renewals',
    'services.residential.item3': 'Rent collection & follow-up',
    'services.residential.item4': 'Routine property inspections',
    'services.residential.item5': 'Maintenance coordination',
    'services.residential.item6': 'Tenant communication & issue handling',
    
    'services.commercial.title': 'Commercial Property Management',
    'services.commercial.desc': 'Professional oversight for offices, retail spaces, and mixed-use buildings.',
    'services.commercial.item1': 'Commercial tenant management',
    'services.commercial.item2': 'Lease compliance monitoring',
    'services.commercial.item3': 'Facility supervision',
    'services.commercial.item4': 'Vendor and service provider coordination',
    'services.commercial.item5': 'Expense control & reporting',
    
    'services.maintenance.title': 'Maintenance & Repairs',
    'services.maintenance.desc': 'We ensure your property remains in excellent condition through trusted local professionals.',
    'services.maintenance.item1': 'Scheduled preventive maintenance',
    'services.maintenance.item2': 'Emergency repair handling',
    'services.maintenance.item3': 'Electrical, plumbing & general repairs',
    'services.maintenance.item4': 'Contractor supervision & quality control',
    'services.maintenance.item5': 'Cost-efficient solutions with owner approval',
    
    'services.financial.title': 'Rent Collection & Financial Reporting',
    'services.financial.desc': 'Transparent and accountable financial management—especially important for absentee and diaspora owners.',
    'services.financial.item1': 'Timely rent collection',
    'services.financial.item2': 'Monthly income & expense reports',
    'services.financial.item3': 'Clear payment records',
    'services.financial.item4': 'Owner disbursement coordination',
    
    'services.tenant.title': 'Tenant Management & Relations',
    'services.tenant.desc': 'We maintain a respectful and professional relationship between owners and tenants.',
    'services.tenant.item1': 'Tenant onboarding & orientation',
    'services.tenant.item2': 'Rule enforcement & issue resolution',
    'services.tenant.item3': 'Move-in / move-out inspections',
    'services.tenant.item4': 'Support with local compliance',
    
    'services.architecture.title': 'Architecture & Development',
    'services.architecture.desc': 'For owners planning new construction, renovations, or upgrades.',
    'services.architecture.item1': 'Coordinating with architects & designers',
    'services.architecture.item2': 'Reviewing plans from property-use perspective',
    'services.architecture.item3': 'Advising on rental-friendly layouts',
    'services.architecture.item4': 'Supporting renovation supervision',
    
    // About
    'about.label': 'ABOUT US',
    'about.title': 'About Own Property',
    'about.desc1': 'Own Property Management is a trusted Ethiopian property management service company dedicated to protecting and managing properties with integrity, transparency, and care.',
    'about.desc2': 'We serve local and diaspora property owners by acting as a reliable local representative—so your property is always in good hands.',
    'about.philosophy': 'Our Philosophy',
    'about.philosophy.desc': 'We believe property ownership is a source of pride and security. We manage your property with the same care, responsibility, and respect as if it were our own.',
    
    // Why Choose Us
    'why.label': 'WHY CHOOSE US',
    'why.title': 'The Own Property Advantage',
    'why.item1': 'Strong understanding of the Ethiopian real estate environment',
    'why.item2': 'Trusted local presence for diaspora owners',
    'why.item3': 'Transparent communication & reporting',
    'why.item4': 'Reliable maintenance and professional partners',
    'why.item5': 'Property care guided by integrity and accountability',
    
    // Who We Serve
    'serve.label': 'WHO WE SERVE',
    'serve.title': 'Our Clients',
    'serve.item1': 'Ethiopian diaspora property owners',
    'serve.item2': 'Local investors and landlords',
    'serve.item3': 'Residential & commercial property owners',
    'serve.item4': 'Families managing inherited properties',
    'serve.item5': 'Developers seeking post-handover management',
    
    // Packages
    'packages.label': 'SERVICE PACKAGES',
    'packages.title': 'Choose Your Plan',
    'packages.basic.title': 'Basic Package',
    'packages.basic.subtitle': 'Best for single residential properties',
    'packages.basic.item1': 'Rent collection',
    'packages.basic.item2': 'Tenant communication',
    'packages.basic.item3': 'Basic maintenance coordination',
    'packages.basic.item4': 'Monthly summary report',
    
    'packages.standard.title': 'Standard Package',
    'packages.standard.subtitle': 'Best for apartments & multiple units',
    'packages.standard.item1': 'Tenant sourcing & screening',
    'packages.standard.item2': 'Lease management',
    'packages.standard.item3': 'Rent collection & reporting',
    'packages.standard.item4': 'Routine inspections',
    'packages.standard.item5': 'Maintenance supervision',
    
    'packages.premium.title': 'Premium Package',
    'packages.premium.subtitle': 'Best for diaspora & high-value properties',
    'packages.premium.item1': 'Full property & tenant management',
    'packages.premium.item2': 'Financial reporting & expense tracking',
    'packages.premium.item3': 'Emergency handling',
    'packages.premium.item4': 'Architecture & renovation coordination',
    'packages.premium.item5': 'Dedicated property manager',
    
    'packages.popular': 'Most Popular',
    'packages.cta': 'Get Started',
    
    // Contact
    'contact.label': 'CONTACT US',
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let us take care of your property—so you can focus on what matters most.',
    'contact.location': 'Addis Ababa, Ethiopia',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.or': 'Or reach us directly',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Caring for What You Own',
    
    // Language
    'lang.en': 'English',
    'lang.am': 'አማርኛ',
  },
  am: {
    // Navigation
    'nav.home': 'መነሻ',
    'nav.services': 'አገልግሎቶች',
    'nav.about': 'ስለ እኛ',
    'nav.packages': 'ጥቅሎች',
    'nav.contact': 'አግኙን',
    
    // Hero
    'hero.title': 'ኦውን ፕሮፐርቲ',
    'hero.subtitle': 'ማኔጅመንት',
    'hero.tagline': 'ያለዎትን እንንከባከባለን',
    'hero.description': 'በአገር ውስጥ እና በውጭ አገር ለሚኖሩ የኢትዮጵያ ንብረት ባለቤቶች የተዘጋጀ አስተማማኝ እና ባለሙያ የንብረት አስተዳደር አገልግሎት።',
    'hero.cta': 'ጀምር',
    'hero.learn': 'ተጨማሪ እወቅ',
    
    // Services
    'services.label': 'አገልግሎቶቻችን',
    'services.title': 'ሁሉን አቀፍ የንብረት እንክብካቤ',
    'services.residential.title': 'የመኖሪያ ንብረት አስተዳደር',
    'services.residential.desc': 'በአዲስ አበባ እና አካባቢዎች ቪላዎችን፣ አፓርታማዎችን፣ ኮንዶሚኒየሞችን እና የመኖሪያ ግቢዎችን እናስተዳድራለን።',
    'services.residential.item1': 'ተከራይ ማፈላለግ፣ ማጣራት እና ማስፈር',
    'services.residential.item2': 'የኪራይ ውል ዝግጅት እና እድሳት',
    'services.residential.item3': 'የኪራይ ክፍያ ማሰባሰብ እና ክትትል',
    'services.residential.item4': 'መደበኛ የንብረት ፍተሻ',
    'services.residential.item5': 'የጥገና ስራ ማስተባበር',
    'services.residential.item6': 'ከተከራይ ጋር ግንኙነት እና ችግር አፈታት',
    
    'services.commercial.title': 'የንግድ ንብረት አስተዳደር',
    'services.commercial.desc': 'ለቢሮዎች፣ የችርቻሮ ቦታዎች እና ድብልቅ ሕንፃዎች ባለሙያ ቁጥጥር።',
    'services.commercial.item1': 'የንግድ ተከራይ አስተዳደር',
    'services.commercial.item2': 'የኪራይ ውል ማክበር ክትትል',
    'services.commercial.item3': 'የመገልገያ ቁጥጥር',
    'services.commercial.item4': 'ከአቅራቢዎች ጋር ማስተባበር',
    'services.commercial.item5': 'የወጪ ቁጥጥር እና ሪፖርት',
    
    'services.maintenance.title': 'ጥገና እና ጠገና',
    'services.maintenance.desc': 'ንብረትዎ በጥሩ ሁኔታ እንዲቆይ በታማኝ የአካባቢ ባለሙያዎች እንረዳለን።',
    'services.maintenance.item1': 'የታቀደ መከላከያ ጥገና',
    'services.maintenance.item2': 'የአደጋ ጊዜ ጠገና አያያዝ',
    'services.maintenance.item3': 'ኤሌክትሪክ፣ ቧንቧ እና አጠቃላይ ጠገና',
    'services.maintenance.item4': 'ተቋራጭ ቁጥጥር እና ጥራት ማረጋገጥ',
    'services.maintenance.item5': 'ወጪ ቆጣቢ መፍትሄዎች በባለቤት ፈቃድ',
    
    'services.financial.title': 'የኪራይ ማሰባሰብ እና የፋይናንስ ሪፖርት',
    'services.financial.desc': 'ግልጽ እና ተጠያቂ የፋይናንስ አስተዳደር—በተለይ ለውጭ አገር ነዋሪ ባለቤቶች አስፈላጊ።',
    'services.financial.item1': 'ወቅታዊ የኪራይ ማሰባሰብ',
    'services.financial.item2': 'ወርሃዊ የገቢ እና ወጪ ሪፖርቶች',
    'services.financial.item3': 'ግልጽ የክፍያ መዝገቦች',
    'services.financial.item4': 'ለባለቤት ማሳወቅ ማስተባበር',
    
    'services.tenant.title': 'የተከራይ አስተዳደር እና ግንኙነት',
    'services.tenant.desc': 'በባለቤቶች እና ተከራዮች መካከል አክባሪ እና ባለሙያ ግንኙነት እንጠብቃለን።',
    'services.tenant.item1': 'የተከራይ ማስተዋወቅ እና አቅጣጫ መስጠት',
    'services.tenant.item2': 'ደንብ ማስከበር እና ችግር መፍታት',
    'services.tenant.item3': 'የመግባት / የመውጣት ፍተሻዎች',
    'services.tenant.item4': 'የአካባቢ ደንብ ማክበር ድጋፍ',
    
    'services.architecture.title': 'ህንፃ እና ልማት',
    'services.architecture.desc': 'አዲስ ግንባታ፣ ማደስ ወይም ማሻሻያ ለሚያቅዱ ባለቤቶች።',
    'services.architecture.item1': 'ከአርክቴክቶች እና ዲዛይነሮች ጋር ማስተባበር',
    'services.architecture.item2': 'ዕቅዶችን ከንብረት አጠቃቀም አንፃር መገምገም',
    'services.architecture.item3': 'ለኪራይ ምቹ አቀማመጥ ማማከር',
    'services.architecture.item4': 'የማደስ ቁጥጥር መደገፍ',
    
    // About
    'about.label': 'ስለ እኛ',
    'about.title': 'ስለ ኦውን ፕሮፐርቲ',
    'about.desc1': 'ኦውን ፕሮፐርቲ ማኔጅመንት ንብረቶችን በታማኝነት፣ ግልጽነት እና እንክብካቤ ለመጠበቅ እና ለማስተዳደር የተሰጠ ታማኝ የኢትዮጵያ የንብረት አስተዳደር አገልግሎት ድርጅት ነው።',
    'about.desc2': 'በአገር ውስጥ እና በውጭ አገር ለሚኖሩ የንብረት ባለቤቶች ታማኝ የአካባቢ ተወካይ በመሆን እናገለግላለን—ስለዚህ ንብረትዎ ሁልጊዜ በጥሩ እጅ ውስጥ ነው።',
    'about.philosophy': 'የእኛ ፍልስፍና',
    'about.philosophy.desc': 'የንብረት ባለቤትነት የኩራት እና ደህንነት ምንጭ እንደሆነ እናምናለን። ንብረትዎን የራሳችን ቢሆን በሚመስል እንክብካቤ፣ ሃላፊነት እና አክብሮት እናስተዳድራለን።',
    
    // Why Choose Us
    'why.label': 'ለምን እኛን ይምረጡ',
    'why.title': 'የኦውን ፕሮፐርቲ ጥቅም',
    'why.item1': 'የኢትዮጵያ የሪል እስቴት ገበያ ጥልቅ ግንዛቤ',
    'why.item2': 'ለውጭ አገር ነዋሪ ባለቤቶች ታማኝ የአካባቢ ተገኝነት',
    'why.item3': 'ግልጽ ግንኙነት እና ሪፖርት',
    'why.item4': 'አስተማማኝ ጥገና እና ባለሙያ አጋሮች',
    'why.item5': 'በታማኝነት እና ተጠያቂነት የሚመራ የንብረት እንክብካቤ',
    
    // Who We Serve
    'serve.label': 'የምናገለግላቸው',
    'serve.title': 'ደንበኞቻችን',
    'serve.item1': 'በውጭ አገር የሚኖሩ የኢትዮጵያ ንብረት ባለቤቶች',
    'serve.item2': 'የአካባቢ ባለሃብቶች እና አከራዮች',
    'serve.item3': 'የመኖሪያ እና የንግድ ንብረት ባለቤቶች',
    'serve.item4': 'በውርስ የመጣ ንብረት የሚያስተዳድሩ ቤተሰቦች',
    'serve.item5': 'ከግንባታ በኋላ አስተዳደር የሚፈልጉ ገንቢዎች',
    
    // Packages
    'packages.label': 'የአገልግሎት ጥቅሎች',
    'packages.title': 'እቅድዎን ይምረጡ',
    'packages.basic.title': 'መሰረታዊ ጥቅል',
    'packages.basic.subtitle': 'ለአንድ የመኖሪያ ንብረት ምርጥ',
    'packages.basic.item1': 'የኪራይ ማሰባሰብ',
    'packages.basic.item2': 'ከተከራይ ጋር ግንኙነት',
    'packages.basic.item3': 'መሰረታዊ ጥገና ማስተባበር',
    'packages.basic.item4': 'ወርሃዊ ማጠቃለያ ሪፖርት',
    
    'packages.standard.title': 'መደበኛ ጥቅል',
    'packages.standard.subtitle': 'ለአፓርታማዎች እና ብዙ ዩኒቶች ምርጥ',
    'packages.standard.item1': 'ተከራይ ማፈላለግ እና ማጣራት',
    'packages.standard.item2': 'የኪራይ ውል አስተዳደር',
    'packages.standard.item3': 'የኪራይ ማሰባሰብ እና ሪፖርት',
    'packages.standard.item4': 'መደበኛ ፍተሻዎች',
    'packages.standard.item5': 'የጥገና ቁጥጥር',
    
    'packages.premium.title': 'ፕሪሚየም ጥቅል',
    'packages.premium.subtitle': 'ለውጭ ነዋሪ እና ከፍተኛ ዋጋ ያላቸው ንብረቶች ምርጥ',
    'packages.premium.item1': 'ሙሉ ንብረት እና ተከራይ አስተዳደር',
    'packages.premium.item2': 'የፋይናንስ ሪፖርት እና ወጪ ክትትል',
    'packages.premium.item3': 'የአደጋ ጊዜ አያያዝ',
    'packages.premium.item4': 'የህንፃ እና ማደስ ማስተባበር',
    'packages.premium.item5': 'የተሰጠ የንብረት ሥራ አስኪያጅ',
    
    'packages.popular': 'በጣም ተወዳጅ',
    'packages.cta': 'ጀምር',
    
    // Contact
    'contact.label': 'አግኙን',
    'contact.title': 'ያግኙን',
    'contact.subtitle': 'ንብረትዎን እኛ እናስተዳድራለን—እርስዎ በጣም አስፈላጊ በሆነው ነገር ላይ ያተኩሩ።',
    'contact.location': 'አዲስ አበባ፣ ኢትዮጵያ',
    'contact.name': 'ስምዎ',
    'contact.email': 'ኢሜይል አድራሻ',
    'contact.phone': 'ስልክ ቁጥር',
    'contact.message': 'መልእክትዎ',
    'contact.send': 'መልእክት ላክ',
    'contact.or': 'ወይም በቀጥታ ያግኙን',
    
    // Footer
    'footer.rights': 'መብቶች በሙሉ የተጠበቁ ናቸው።',
    'footer.tagline': 'ያለዎትን እንንከባከባለን',
    
    // Language
    'lang.en': 'English',
    'lang.am': 'አማርኛ',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
