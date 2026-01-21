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
    'nav.properties': 'Properties',
    'nav.list.property': 'List Your Property',

    // Hero
    'hero.title': 'Discover Premium',
    'hero.subtitle': 'Properties in Ethiopia',
    'hero.tagline': 'Caring for What You Own',
    'hero.description': '',
    'hero.cta': 'View Properties',
    'hero.learn': 'Learn More',
    'hero.badge': 'Your Trusted Real Estate Partner',
    'hero.stats.listings': '1200+',
    'hero.stats.listings.label': 'Premium Listings',
    'hero.stats.clients': '500+',
    'hero.stats.clients.label': 'Happy Clients',
    'hero.stats.support': '24/7',
    'hero.stats.support.label': 'Support',

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

    // Services Page Detailed
    'services.page.fullservice': 'Full-Service Management',
    'services.page.hero.title': 'Delegated Architectural \n & Rental Management',
    'services.page.hero.desc': 'As your delegated architect, I offer a seamless, end-to-end service—from preparing your property to managing tenants—ensuring your investment is marketed effectively, maintained impeccably, and generates optimal returns.',
    'services.page.assessment.title': 'Property Assessment & Enhancement',
    'services.page.assessment.desc': 'Comprehensive architectural review to identify structural, aesthetic, and functional improvements. We suggest strategic renovations—lighting, landscaping, or energy efficiency—to maximize rental value while respecting the property\'s original design integrity.',
    'services.page.legal.title': 'Legal & Documentation Handling',
    'services.page.legal.desc': 'Full management of all legal necessities, including rental agreements, delegation of authority, and compliance with local zoning and building codes. We ensure airtight documentation to protect your interests and maintain regulatory adherence.',
    'services.page.marketing.title': 'Marketing & Brand Curation',
    'services.page.marketing.desc': 'Design of professional marketing materials including brochures, online listings, and virtual tours. We highlight your property\'s unique architectural features to craft a compelling narrative that attracts high-quality, design-conscious tenants.',
    'services.page.screening.title': 'Tenant Screening & Selection',
    'services.page.screening.desc': 'Rigorous vetting process including background checks, credit reviews, and reference verification. We leverage multi-platform advertising to find and select reliable tenants who will treat your property with the same care you do.',
    'services.page.pricing.title': 'Rental Pricing Strategy',
    'services.page.pricing.desc': 'Data-driven market analysis to set competitive yet profitable rental rates. We factor in location, amenities, architectural value, and current market trends to ensure optimal occupancy and income generation.',
    'services.page.staging.title': 'Staging & Photography',
    'services.page.staging.desc': 'Professional staging with minimalistic, architecturally complementary decor. We commission high-quality photography that captures the essence of your space, making a striking first impression in listings.',
    'services.page.viewings.title': 'Viewings & Negotiations',
    'services.page.viewings.desc': 'Coordination of property showings and professional handling of all inquiries. We negotiate lease terms on your behalf to secure favorable deals, managing the entire process from initial interest to contract signing.',
    'services.page.oversight.title': 'Maintenance & Oversight',
    'services.page.oversight.desc': 'Proactive management including routine inspections and coordination of repairs. As architects, we oversee all work to ensure maintenance adheres to the highest structural and aesthetic standards, preserving your asset\'s long-term value.',
    'services.page.finance.title': 'Financial Management',
    'services.page.finance.desc': 'Complete financial stewardship including rent collection, deposit handling, and expense management. We provide detailed monthly reports on income, expenditures, and overall property performance for total transparency.',
    'services.page.exit.title': 'Exit & Turnover Management',
    'services.page.exit.desc': 'Seamless management of tenant move-outs and final inspections. We efficiently prepare the property for the next renter to minimize vacancy periods, handling all turnover logistics with precision.',
    'services.page.cta.title': 'Ready to Delegate?',
    'services.page.cta.desc': 'Let\'s discuss how we can maximize your property\'s potential while minimizing your workload. Experience the peace of mind that comes with professional architectural management.',
    'services.page.cta.button': 'Schedule a Consultation',

    // About
    'about.label': 'ABOUT US',
    'about.title': 'About Ethio Core Property',
    'about.desc1': 'Ethio Core Property is a trusted Ethiopian property management service company dedicated to protecting and managing properties with integrity, transparency, and care.',
    'about.desc2': 'We serve local and diaspora property owners by acting as a reliable local representative—so your property is always in good hands.',
    'about.philosophy': 'Our Philosophy',
    'about.philosophy.desc': 'We believe property ownership is a source of pride and security. We manage your property with the same care, responsibility, and respect as if it were our own.',

    // Why Choose Us
    'why.label': 'WHY CHOOSE US',
    'why.title': 'The Ethio Core Property Advantage',
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
    'contact.info': 'Contact Information',
    'contact.info.desc': 'Visit our premium office or reach out directly. Our dedicated team is available to provide personalized assistance.',
    'contact.office': 'Head Office - Addis Ababa',
    'contact.phone.title': 'Phone & WhatsApp',
    'contact.email.title': 'Email Contact',
    'contact.email.sales': 'sales@ethioproperties.com',
    'contact.email.info': 'info@ethioproperties.com',
    'contact.phone2': '+251 115 550 123',
    'contact.form.title': 'Send us a Message',
    'contact.form.firstname': 'First Name',
    'contact.form.firstname.placeholder': 'John',
    'contact.form.lastname': 'Last Name',
    'contact.form.lastname.placeholder': 'Doe',
    'contact.form.email.placeholder': 'john@example.com',
    'contact.form.phone.placeholder': '+251...',
    'contact.form.message.placeholder': 'How can we help you?',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Caring for What You Own',
    'footer.description': 'Your trusted partner in finding the perfect property in Ethiopia. We bridge the gap between dream homes and reality with premium services.',
    'footer.quick.links': 'Quick Links',
    'footer.property.types': 'Property Types',
    'footer.types.apartments': 'Apartments',
    'footer.types.villas': 'Villas',
    'footer.types.offices': 'Offices',
    'footer.types.commercial': 'Commercial',
    'footer.types.land': 'Land',
    'footer.phone': '+251 92 939 7215',
    'footer.email': 'info@ethiocoreproperty.com',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Language
    'lang.en': 'English',
    'lang.am': 'አማርኛ',

    // Properties
    'properties.description': 'Discover our exclusive collection of luxury properties across Ethiopia\'s most prestigious locations. Each property represents the pinnacle of modern living and investment opportunity.',
    'properties.featured': 'Featured Properties',
    'properties.featured.desc': 'Each property in our portfolio has been carefully selected for its exceptional quality, prime location, and investment potential.',
    'properties.exclusive': 'Exclusive Collection',
    'properties.view.all': 'View All Properties',
    'properties.schedule': 'Schedule a Viewing',
    'properties.cta.title': 'Can\'t Find What You\'re Looking For?',
    'properties.cta.desc': 'Our team of experts can help you find the perfect property that matches your specific needs and budget.',

    // Property Card
    'property.favorite': 'Add to favorites',
    'property.view': 'View Details',
    'property.beds': 'Beds',
    'property.baths': 'Baths',

    // Partners
    'partners.trusted': 'Trusted Ethiopian Partners',
    'partners.title': 'Collaborating with Ethiopia\'s Leading Companies',
    'partners.desc': 'Proud to work alongside Ethiopia\'s most respected institutions and companies, bringing together expertise and trust to serve our clients better.',

    // Statistics
    'stats.properties': 'Properties in Ethiopia',
    'stats.properties.desc': 'Across major cities',
    'stats.years': 'Years in Ethiopian Market',
    'stats.years.desc': 'Local expertise',
    'stats.satisfaction': 'Ethiopian Client Satisfaction',
    'stats.satisfaction.desc': 'Trusted locally',
    'stats.impact': 'Our Ethiopian Impact',
    'stats.title': 'Serving Ethiopia with Excellence',
  },
  am: {
    // Navigation
    'nav.home': 'መነሻ',
    'nav.services': 'አገልግሎቶች',
    'nav.about': 'ስለ እኛ',
    'nav.packages': 'ጥቅሎች',
    'nav.contact': 'አግኙን',
    'nav.properties': 'ንብረቶች',
    'nav.list.property': 'ንብረትዎን ይዘርዝሩ',

    // Hero
    'hero.title': 'ፕሪሚየም ንብረቶችን',
    'hero.subtitle': 'በኢትዮጵያ ያግኙ',
    'hero.tagline': 'ያለዎትን እንንከባከባለን',
    'hero.description': '',
    'hero.cta': 'ንብረቶችን ይመልከቱ',
    'hero.learn': 'ተጨማሪ እወቅ',
    'hero.badge': 'ታማኝ የሪል እስቴት አጋርዎ',
    'hero.stats.listings': '1200+',
    'hero.stats.listings.label': 'ፕሪሚየም ዝርዝሮች',
    'hero.stats.clients': '500+',
    'hero.stats.clients.label': 'ደስተኛ ደንበኞች',
    'hero.stats.support': '24/7',
    'hero.stats.support.label': 'ድጋፍ',

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

    // Services Page Detailed
    'services.page.fullservice': 'ሙሉ አገልግሎት አስተዳደር',
    'services.page.hero.title': 'የተወካይ አርክቴክቸር \n እና የኪራይ አስተዳደር',
    'services.page.hero.desc': 'እንደ እርስዎ የተወካይ አርክቴክት፣ ንብረቶን ከማዘጋጀት ጀምሮ ተከራዮችን እስከ ማስተዳደር ድረስ—እንከን የለሽ፣ ከጫፍ እስከ ጫፍ አገልግሎት እሰጣለሁ—ኢንቨስትመንትዎ በብቃት ለገበያ መቅረቡን፣ በጥራት መያዙን እና ጥሩ ገቢ ማስገኘቱን ያረጋግጣል።',
    'services.page.assessment.title': 'የንብረት ግምገማ እና ማሻሻያ',
    'services.page.assessment.desc': 'መዋቅራዊ፣ ውበት እና ተግባራዊ ማሻሻያዎችን ለመለየት አጠቃላይ የአርክቴክቸር ግምገማ። የንብረቱን የመጀመሪያ ንድፍ አቋም እያከበርን የኪራይ ዋጋን ከፍ ለማድረግ ስትራቴጂያዊ እድሳቶችን—መብራት፣ የመሬት ገጽታ ወይም የኢነርጂ ብቃትን—እንጠቁማለን።',
    'services.page.legal.title': 'የህግ እና ሰነዶች አያያዝ',
    'services.page.legal.desc': 'የኪራይ ስምምነቶችን፣ የውክልና ስልጣንን፣ እና የአካባቢ የዞን እና የግንባታ ደንቦችን ማክበርን ጨምሮ የሁሉንም የህግ አስፈላጊ ጉዳዮች ሙሉ አስተዳደር። ፍላጎቶችዎን ለመጠበቅ እና የህግ ተገዢነትን ለማረጋገጥ ጠንካራ ሰነዶችን እናረጋግጣለን።',
    'services.page.marketing.title': 'ገበያ እና የምርት ስም ማስተዋወቅ',
    'services.page.marketing.desc': 'ብሮሸሮችን፣ የመስመር ላይ ዝርዝሮችን እና ምናባዊ ጉብኝቶችን ጨምሮ የባለሙያ የገበያ ቁሳቁሶች ንድፍ። ጥራት ያላቸውን፣ ዲዛይን አዋቂ ተከራዮችን የሚስብ አስገዳጅ ታሪክ ለመፍጠር የንብረትዎን ልዩ የአርክቴክቸር ባህሪያት እናጎላለን።',
    'services.page.screening.title': 'ተከራይ ማጣራት እና መምረጥ',
    'services.page.screening.desc': 'ዳራ ማጣራትን፣ የክሬዲት ግምገማዎችን እና የማጣቀሻ ማረጋገጫን ጨምሮ ጥብቅ የማጣራት ሂደት። ንብረቶን እርስዎ በሚንከባከቡት ተመሳሳይ ጥንቃቄ የሚይዙ ታማኝ ተከራዮችን ለማግኘት እና ለመምረጥ ባለብዙ መድረክ ማስታወቂያ እንጠቀማለን።',
    'services.page.pricing.title': 'የኪራይ ዋጋ ስትራቴጂ',
    'services.page.pricing.desc': 'ተወዳዳሪ ሆኖም አትራፊ የኪራይ ተመኖችን ለማዘጋጀት በመረጃ የተደገፈ የገበያ ትንተና። ምርጥ የመኖርያ እና የገቢ ማስገኛን ለማረጋገጥ ቦታን፣ መገልገያዎችን፣ የአርክቴክቸር ዋጋን እና ወቅታዊ የገበያ ሁኔታዎችን ግምት ውስጥ እናስገባለን።',
    'services.page.staging.title': 'ማሳመር እና ፎቶግራፍ',
    'services.page.staging.desc': 'በትንሹ፣ ከአርክቴክቸር ጋር በሚስማማ ጌጣጌጥ የባለሙያ ማሳመር። በዝርዝሮች ውስጥ አስደናቂ የመጀመሪያ ስሜት የሚፈጥር፣ የቦታዎን ይዘት የሚይዝ ከፍተኛ ጥራት ያለው ፎቶግራፍ እናዘጋጃለን።',
    'services.page.viewings.title': 'ጉብኝቶች እና ድርድሮች',
    'services.page.viewings.desc': 'የንብረት ማሳያዎችን ማስተባበር እና ሁሉንም ጥያቄዎች በባለሙያ ማስተናገድ። ምቹ ስምምነቶችን ለማስጠበቅ፣ ከመጀመሪያው ፍላጎት እስከ ውል መፈረም ድረስ ያለውን ሂደት በሙሉ በማስተዳደር በእርስዎ ስም የሊዝ ውሎችን እንደራደራለን።',
    'services.page.oversight.title': 'ጥገና እና ክትትል',
    'services.page.oversight.desc': 'መደበኛ ፍተሻዎችን እና የጥገና ማስተባበርን ጨምሮ ንቁ አስተዳደር። እንደ አርክቴክቶች፣ ጥገናው ከፍተኛውን የመዋቅር እና የውበት ደረጃዎችን ማክበሩን ለማረጋገጥ፣ የንብረትዎን የረጅም ጊዜ ዋጋ በመጠበቅ ሁሉንም ስራዎች እንቆጣጠራለን።',
    'services.page.finance.title': 'የፋይናንስ አስተዳደር',
    'services.page.finance.desc': 'የኪራይ ማሰባሰብን፣ ተቀማጭ ገንዘብ አያያዝን እና የወጪ አስተዳደርን ጨምሮ ሙሉ የፋይናንስ መጋቢነት። ለጠቅላላ ግልጽነት በገቢ፣ ወጪዎች እና አጠቃላይ የንብረት አፈጻጸም ላይ ዝርዝር ወርሃዊ ሪፖርቶችን እናቀርባለን።',
    'services.page.exit.title': 'የመውጣት እና የማስረከብ አስተዳደር',
    'services.page.exit.desc': 'የተከራይ መውጣት እና የመጨረሻ ፍተሻዎች እንከን የለሽ አስተዳደር። ባዶ ጊዜን ለመቀነስ፣ ሁሉንም የማስረከብ ሎጅስቲክስ በትክክል በማስተናገድ ንብረቱን ለሚቀጥለው ተከራይ በብቃት እናዘጋጃለን።',
    'services.page.cta.title': 'ለመወከል ዝግጁ ነዎት?',
    'services.page.cta.desc': 'የስራ ጫናዎን በሚቀንሱበት ጊዜ የንብረትዎን አቅም እንዴት ከፍ ማድረግ እንደምንችል እንወያይ። ከባለሙያ አርክቴክቸር አስተዳደር ጋር የሚመጣውን የአእምሮ ሰላም ይለማመዱ።',
    'services.page.cta.button': 'ምክክር ይያዙ',

    // About
    'about.label': 'ስለ እኛ',
    'about.title': 'ስለ ኢትዮ ኮር ፕሮፐርቲ',
    'about.desc1': 'ኢትዮ ኮር ፕሮፐርቲ ማኔጅመንት ንብረቶችን በታማኝነት፣ ግልጽነት እና እንክብካቤ ለመጠበቅ እና ለማስተዳደር የተሰጠ ታማኝ የኢትዮጵያ የንብረት አስተዳደር አገልግሎት ድርጅት ነው።',
    'about.desc2': 'በአገር ውስጥ እና በውጭ አገር ለሚኖሩ የንብረት ባለቤቶች ታማኝ የአካባቢ ተወካይ በመሆን እናገለግላለን—ስለዚህ ንብረትዎ ሁልጊዜ በጥሩ እጅ ውስጥ ነው።',
    'about.philosophy': 'የእኛ ፍልስፍና',
    'about.philosophy.desc': 'የንብረት ባለቤትነት የኩራት እና ደህንነት ምንጭ እንደሆነ እናምናለን። ንብረትዎን የራሳችን ቢሆን በሚመስል እንክብካቤ፣ ሃላፊነት እና አክብሮት እናስተዳድራለን።',

    // Why Choose Us
    'why.label': 'ለምን እኛን ይምረጡ',
    'why.title': 'የኢትዮ ኮር ፕሮፐርቲ ጥቅም',
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
    'contact.info': 'የመገኛ አድራሻ መረጃ',
    'contact.info.desc': 'ፕሪሚየም ቢሮአችንን ይጎብኙ ወይም በቀጥታ ያግኙን። የኛ የተሰጠ ቡድን የግል እርዳታ ለመስጠት ዝግጁ ነው።',
    'contact.office': 'ዋና ቢሮ - አዲስ አበባ',
    'contact.phone.title': 'ስልክ እና ዋትስአፕ',
    'contact.email.title': 'ኢሜይል ግንኙነት',
    'contact.email.sales': 'sales@ethioproperties.com',
    'contact.email.info': 'info@ethioproperties.com',
    'contact.phone2': '+251 115 550 123',
    'contact.form.title': 'መልእክት ይላኩልን',
    'contact.form.firstname': 'የመጀመሪያ ስም',
    'contact.form.firstname.placeholder': 'ጆን',
    'contact.form.lastname': 'የአባት ስም',
    'contact.form.lastname.placeholder': 'ዶ',
    'contact.form.email.placeholder': 'john@example.com',
    'contact.form.phone.placeholder': '+251...',
    'contact.form.message.placeholder': 'እንዴት ልንረዳዎ እንችላለን?',

    // Footer
    'footer.rights': 'መብቶች በሙሉ የተጠበቁ ናቸው።',
    'footer.tagline': 'ያለዎትን እንንከባከባለን',
    'footer.description': 'በኢትዮጵያ ፍጹም ንብረት ለማግኘት የታመነ አጋርዎ። በህልም ቤቶች እና በእውነታ መካከል ያለውን ክፍተት በፕሪሚየም አገልግሎቶች እንሞላለን።',
    'footer.quick.links': 'ፈጣን አገናኞች',
    'footer.property.types': 'የንብረት ዓይነቶች',
    'footer.types.apartments': 'አፓርታማዎች',
    'footer.types.villas': 'ቪላዎች',
    'footer.types.offices': 'ቢሮዎች',
    'footer.types.commercial': 'ንግድ',
    'footer.types.land': 'መሬት',
    'footer.phone': '+251 92 939 7215',
    'footer.email': 'info@ethiocoreproperty.com',
    'footer.privacy': 'የግላዊነት ፖሊሲ',
    'footer.terms': 'የአገልግሎት ውሎች',

    // Language
    'lang.en': 'English',
    'lang.am': 'አማርኛ',

    // Properties
    'properties.description': 'በኢትዮጵያ በጣም ተወዳጅ በሆኑ ቦታዎች የሚገኙ የቅንጦት ንብረቶችን ልዩ ስብስብ ያግኙ። እያንዳንዱ ንብረት የዘመናዊ ኑሮ እና የኢንቨስትመንት እድል ከፍተኛ ደረጃ ይወክላል።',
    'properties.featured': 'ተመራጭ ንብረቶች',
    'properties.featured.desc': 'በእኛ ፖርትፎሊዮ ውስጥ ያለ እያንዳንዱ ንብረት ለልዩ ጥራቱ፣ ዋና ቦታው እና የኢንቨስትመንት አቅሙ በጥንቃቄ ተመርጧል።',
    'properties.exclusive': 'ልዩ ስብስብ',
    'properties.view.all': 'ሁሉንም ንብረቶች ይመልከቱ',
    'properties.schedule': 'መመልከቻ ይያዙ',
    'properties.cta.title': 'የሚፈልጉትን ማግኘት አልቻሉም?',
    'properties.cta.desc': 'የእኛ የባለሙያዎች ቡድን ከእርስዎ ልዩ ፍላጎት እና በጀት ጋር የሚስማማ ፍጹም ንብረት እንዲያገኙ ሊረዳዎት ይችላል።',

    // Property Card
    'property.favorite': 'ወደ ተወዳጆች ጨምር',
    'property.view': 'ዝርዝሮችን ይመልከቱ',
    'property.beds': 'መኝታ ቤቶች',
    'property.baths': 'መታጠቢያ ቤቶች',

    // Partners
    'partners.trusted': 'የታመኑ የኢትዮጵያ አጋሮች',
    'partners.title': 'ከኢትዮጵያ መሪ ኩባንያዎች ጋር በመተባበር',
    'partners.desc': 'ከኢትዮጵያ በጣም የተከበሩ ተቋማት እና ኩባንያዎች ጋር በመስራት እንኮራለን፣ ደንበኞቻችንን በተሻለ ሁኔታ ለማገልገል ባለሙያነት እና እምነትን አንድ ላይ እናመጣለን።',

    // Statistics
    'stats.properties': 'በኢትዮጵያ ንብረቶች',
    'stats.properties.desc': 'በዋና ዋና ከተሞች',
    'stats.years': 'በኢትዮጵያ ገበያ ዓመታት',
    'stats.years.desc': 'የአካባቢ ባለሙያነት',
    'stats.satisfaction': 'የኢትዮጵያ ደንበኞች እርካታ',
    'stats.satisfaction.desc': 'በአካባቢው የታመነ',
    'stats.impact': 'የእኛ የኢትዮጵያ ተፅእኖ',
    'stats.title': 'ኢትዮጵያን በላቀ ሁኔታ እናገለግላለን',
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
