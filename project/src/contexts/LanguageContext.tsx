import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    'header.title': 'Vitt Mukti',
    'header.subtitle': 'Financial Freedom for Villages',
    'header.financialLiteracy': 'Financial Literacy',
    'header.governmentSchemes': 'Government Schemes',
    'header.bankingServices': 'Banking Services',
    'header.calculators': 'Calculators',
    'header.login': 'Login',
    'header.register': 'Register',
    'header.dashboard': 'Dashboard',
    'header.logout': 'Logout',

    // Home Page
    'home.hero.title': 'Empowering Every Village Towards',
    'home.hero.subtitle': 'Financial Freedom',
    'home.hero.description': 'Break free from financial vulnerability through education, awareness, and access to formal financial services.',
    'home.hero.getStarted': 'Get Started',
    'home.hero.learnMore': 'Learn More',
    'home.hero.goToDashboard': 'Go to Dashboard',

    // Stats
    'home.stats.villages': 'Villages Empowered',
    'home.stats.literacy': 'Improved Financial Literacy',
    'home.stats.lending': 'Reduced Informal Lending',
    'home.stats.languages': 'Regional Languages',

    // Features
    'home.features.title': 'Comprehensive Financial Empowerment',
    'home.features.description': 'Our platform provides everything you need to achieve financial independence and make informed financial decisions.',
    'home.features.financialLiteracy.title': 'Financial Literacy',
    'home.features.financialLiteracy.description': 'Learn about banking, savings, investments, and smart financial decisions through interactive modules.',
    'home.features.governmentSchemes.title': 'Government Schemes',
    'home.features.governmentSchemes.description': 'Discover and access various government financial aid programs, subsidies, and rural development schemes.',
    'home.features.bankingServices.title': 'Banking Services',
    'home.features.bankingServices.description': 'Get guidance on opening bank accounts, using digital banking, and accessing formal financial services.',
    'home.features.calculators.title': 'Financial Calculators',
    'home.features.calculators.description': 'Calculate SIP returns, loan EMIs, and investment growth to make informed financial decisions.',

    // CTA
    'home.cta.title': 'Ready to Start Your Financial Journey?',
    'home.cta.description': 'Join thousands of villagers who have already taken control of their financial future. Start learning, saving, and growing today.',
    'home.cta.join': 'Join Vitt Mukti',

    // Common
    'common.explore': 'Explore',
    'common.continue': 'Continue',
    'common.start': 'Start',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.close': 'Close',

    // Calculators
    'calculators.title': 'Financial Calculators',
    'calculators.description': 'Use our comprehensive calculators to plan your financial future and make informed investment decisions.',
    'calculators.sip.title': 'SIP Calculator',
    'calculators.sip.description': 'Calculate returns on your Systematic Investment Plan',
    'calculators.loan.title': 'Loan EMI Calculator',
    'calculators.loan.description': 'Calculate your monthly loan payments',
    'calculators.investment.title': 'Investment Calculator',
    'calculators.investment.description': 'Plan your investment growth over time',

    // Chatbot
    'chatbot.title': 'Financial Assistant',
    'chatbot.placeholder': 'Ask me about banking, investments, or government schemes...',
    'chatbot.send': 'Send',
    'chatbot.welcome': 'Hello! I\'m your financial assistant. How can I help you today?',

    // Footer
    'footer.description': 'Empowering rural communities through financial literacy, education, and access to government schemes and banking services.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact Us',
    'footer.copyright': '© 2024 Vitt Mukti. All rights reserved. Empowering villages towards financial freedom.',
  },
  hi: {
    // Header
    'header.title': 'वित्त मुक्ति',
    'header.subtitle': 'गांवों के लिए वित्तीय स्वतंत्रता',
    'header.financialLiteracy': 'वित्तीय साक्षरता',
    'header.governmentSchemes': 'सरकारी योजनाएं',
    'header.bankingServices': 'बैंकिंग सेवाएं',
    'header.calculators': 'कैलकुलेटर',
    'header.login': 'लॉगिन',
    'header.register': 'पंजीकरण',
    'header.dashboard': 'डैशबोर्ड',
    'header.logout': 'लॉगआउट',

    // Home Page
    'home.hero.title': 'हर गांव को सशक्त बनाना',
    'home.hero.subtitle': 'वित्तीय स्वतंत्रता की ओर',
    'home.hero.description': 'शिक्षा, जागरूकता और औपचारिक वित्तीय सेवाओं तक पहुंच के माध्यम से वित्तीय भेद्यता से मुक्त हों।',
    'home.hero.getStarted': 'शुरू करें',
    'home.hero.learnMore': 'और जानें',
    'home.hero.goToDashboard': 'डैशबोर्ड पर जाएं',

    // Stats
    'home.stats.villages': 'सशक्त गांव',
    'home.stats.literacy': 'बेहतर वित्तीय साक्षरता',
    'home.stats.lending': 'कम अनौपचारिक उधार',
    'home.stats.languages': 'क्षेत्रीय भाषाएं',

    // Features
    'home.features.title': 'व्यापक वित्तीय सशक्तिकरण',
    'home.features.description': 'हमारा प्लेटफॉर्म वित्तीय स्वतंत्रता प्राप्त करने और सूचित वित्तीय निर्णय लेने के लिए आवश्यक सब कुछ प्रदान करता है।',
    'home.features.financialLiteracy.title': 'वित्तीय साक्षरता',
    'home.features.financialLiteracy.description': 'इंटरैक्टिव मॉड्यूल के माध्यम से बैंकिंग, बचत, निवेश और स्मार्ट वित्तीय निर्णयों के बारे में जानें।',
    'home.features.governmentSchemes.title': 'सरकारी योजनाएं',
    'home.features.governmentSchemes.description': 'विभिन्न सरकारी वित्तीय सहायता कार्यक्रमों, सब्सिडी और ग्रामीण विकास योजनाओं की खोज करें और उन तक पहुंचें।',
    'home.features.bankingServices.title': 'बैंकिंग सेवाएं',
    'home.features.bankingServices.description': 'बैंक खाता खोलने, डिजिटल बैंकिंग का उपयोग करने और औपचारिक वित्तीय सेवाओं तक पहुंचने पर मार्गदर्शन प्राप्त करें।',
    'home.features.calculators.title': 'वित्तीय कैलकुलेटर',
    'home.features.calculators.description': 'सूचित वित्तीय निर्णय लेने के लिए SIP रिटर्न, लोन EMI और निवेश वृद्धि की गणना करें।',

    // CTA
    'home.cta.title': 'अपनी वित्तीय यात्रा शुरू करने के लिए तैयार हैं?',
    'home.cta.description': 'हजारों ग्रामीणों में शामिल हों जिन्होंने पहले से ही अपने वित्तीय भविष्य पर नियंत्रण पा लिया है। आज ही सीखना, बचत करना और बढ़ना शुरू करें।',
    'home.cta.join': 'वित्त मुक्ति में शामिल हों',

    // Common
    'common.explore': 'अन्वेषण करें',
    'common.continue': 'जारी रखें',
    'common.start': 'शुरू करें',
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफलता',
    'common.cancel': 'रद्द करें',
    'common.save': 'सहेजें',
    'common.close': 'बंद करें',

    // Calculators
    'calculators.title': 'वित्तीय कैलकुलेटर',
    'calculators.description': 'अपने वित्तीय भविष्य की योजना बनाने और सूचित निवेश निर्णय लेने के लिए हमारे व्यापक कैलकुलेटर का उपयोग करें।',
    'calculators.sip.title': 'SIP कैलकुलेटर',
    'calculators.sip.description': 'अपनी व्यवस्थित निवेश योजना पर रिटर्न की गणना करें',
    'calculators.loan.title': 'लोन EMI कैलकुलेटर',
    'calculators.loan.description': 'अपनी मासिक लोन भुगतान की गणना करें',
    'calculators.investment.title': 'निवेश कैलकुलेटर',
    'calculators.investment.description': 'समय के साथ अपनी निवेश वृद्धि की योजना बनाएं',

    // Chatbot
    'chatbot.title': 'वित्तीय सहायक',
    'chatbot.placeholder': 'बैंकिंग, निवेश या सरकारी योजनाओं के बारे में पूछें...',
    'chatbot.send': 'भेजें',
    'chatbot.welcome': 'नमस्ते! मैं आपका वित्तीय सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?',

    // Footer
    'footer.description': 'वित्तीय साक्षरता, शिक्षा और सरकारी योजनाओं और बैंकिंग सेवाओं तक पहुंच के माध्यम से ग्रामीण समुदायों को सशक्त बनाना।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.services': 'हमारी सेवाएं',
    'footer.contact': 'संपर्क करें',
    'footer.copyright': '© 2024 वित्त मुक्ति। सभी अधिकार सुरक्षित। वित्तीय स्वतंत्रता की ओर गांवों को सशक्त बनाना।',
  },
  te: {
    // Header
    'header.title': 'విత్త ముక్తి',
    'header.subtitle': 'గ్రామాలకు ఆర్థిక స్వేచ్ఛ',
    'header.financialLiteracy': 'ఆర్థిక అక్షరాస్యత',
    'header.governmentSchemes': 'ప్రభుత్వ పథకాలు',
    'header.bankingServices': 'బ్యాంకింగ్ సేవలు',
    'header.calculators': 'కాలిక్యులేటర్లు',
    'header.login': 'లాగిన్',
    'header.register': 'నమోదు',
    'header.dashboard': 'డాష్‌బోర్డ్',
    'header.logout': 'లాగ్అవుట్',

    // Home Page
    'home.hero.title': 'ప్రతి గ్రామాన్ని శక్తివంతం చేయడం',
    'home.hero.subtitle': 'ఆర్థిక స్వేచ్ఛ వైపు',
    'home.hero.description': 'విద్య, అవగాహన మరియు అధికారిక ఆర్థిక సేవలకు ప్రాప్యత ద్వారా ఆర్థిక దుర్బలత్వం నుండి విముక్తి పొందండి.',
    'home.hero.getStarted': 'ప్రారంభించండి',
    'home.hero.learnMore': 'మరింత తెలుసుకోండి',
    'home.hero.goToDashboard': 'డాష్‌బోర్డ్‌కు వెళ్లండి',

    // Stats
    'home.stats.villages': 'శక్తివంతమైన గ్రామాలు',
    'home.stats.literacy': 'మెరుగైన ఆర్థిక అక్షరాస్యత',
    'home.stats.lending': 'తగ్గిన అనధికారిక రుణాలు',
    'home.stats.languages': 'ప్రాంతీయ భాషలు',

    // Features
    'home.features.title': 'సమగ్ర ఆర్థిక సాధికారత',
    'home.features.description': 'ఆర్థిక స్వాతంత్ర్యం సాధించడానికి మరియు సమాచార ఆర్థిక నిర్ణయాలు తీసుకోవడానికి అవసరమైన ప్రతిదాన్ని మా ప్లాట్‌ఫారమ్ అందిస్తుంది.',
    'home.features.financialLiteracy.title': 'ఆర్థిక అక్షరాస్యత',
    'home.features.financialLiteracy.description': 'ఇంటరాక్టివ్ మాడ్యూల్స్ ద్వారా బ్యాంకింగ్, పొదుపులు, పెట్టుబడులు మరియు స్మార్ట్ ఆర్థిక నిర్ణయాల గురించి తెలుసుకోండి.',
    'home.features.governmentSchemes.title': 'ప్రభుత్వ పథకాలు',
    'home.features.governmentSchemes.description': 'వివిధ ప్రభుత్వ ఆర్థిక సహాయ కార్యక్రమాలు, సబ్సిడీలు మరియు గ్రామీణ అభివృద్ధి పథకాలను కనుగొనండి మరియు యాక్సెస్ చేయండి.',
    'home.features.bankingServices.title': 'బ్యాంకింగ్ సేవలు',
    'home.features.bankingServices.description': 'బ్యాంక్ ఖాతా తెరవడం, డిజిటల్ బ్యాంకింగ్ ఉపయోగించడం మరియు అధికారిక ఆర్థిక సేవలను యాక్సెస్ చేయడంపై మార్గదర్శనం పొందండి.',
    'home.features.calculators.title': 'ఆర్థిక కాలిక్యులేటర్లు',
    'home.features.calculators.description': 'సమాచార ఆర్థిక నిర్ణయాలు తీసుకోవడానికి SIP రిటర్న్స్, లోన్ EMIలు మరియు పెట్టుబడి వృద్ధిని లెక్కించండి.',

    // CTA
    'home.cta.title': 'మీ ఆర్థిక ప్రయాణాన్ని ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?',
    'home.cta.description': 'వారి ఆర్థిక భవిష్యత్తుపై నియంత్రణ సాధించిన వేలాది గ్రామస్తులతో చేరండి. ఈరోజే నేర్చుకోవడం, పొదుపు చేయడం మరియు పెరుగుట ప్రారంభించండి.',
    'home.cta.join': 'విత్త ముక్తిలో చేరండి',

    // Common
    'common.explore': 'అన్వేషించండి',
    'common.continue': 'కొనసాగించండి',
    'common.start': 'ప్రారంభించండి',
    'common.loading': 'లోడ్ అవుతోంది...',
    'common.error': 'లోపం',
    'common.success': 'విజయం',
    'common.cancel': 'రద్దు చేయండి',
    'common.save': 'సేవ్ చేయండి',
    'common.close': 'మూసివేయండి',

    // Calculators
    'calculators.title': 'ఆర్థిక కాలిక్యులేటర్లు',
    'calculators.description': 'మీ ఆర్థిక భవిష్యత్తును ప్లాన్ చేయడానికి మరియు సమాచార పెట్టుబడి నిర్ణయాలు తీసుకోవడానికి మా సమగ్ర కాలిక్యులేటర్లను ఉపయోగించండి.',
    'calculators.sip.title': 'SIP కాలిక్యులేటర్',
    'calculators.sip.description': 'మీ సిస్టమాటిక్ ఇన్వెస్ట్‌మెంట్ ప్లాన్‌పై రిటర్న్స్ లెక్కించండి',
    'calculators.loan.title': 'లోన్ EMI కాలిక్యులేటర్',
    'calculators.loan.description': 'మీ నెలవారీ లోన్ చెల్లింపులను లెక్కించండి',
    'calculators.investment.title': 'పెట్టుబడి కాలిక్యులేటర్',
    'calculators.investment.description': 'కాలక్రమేణా మీ పెట్టుబడి వృద్ధిని ప్లాన్ చేయండి',

    // Chatbot
    'chatbot.title': 'ఆర్థిక సహాయకుడు',
    'chatbot.placeholder': 'బ్యాంకింగ్, పెట్టుబడులు లేదా ప్రభుత్వ పథకాల గురించి అడగండి...',
    'chatbot.send': 'పంపండి',
    'chatbot.welcome': 'నమస్కారం! నేను మీ ఆర్థిక సహాయకుడను. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?',

    // Footer
    'footer.description': 'ఆర్థిక అక్షరాస్యత, విద్య మరియు ప్రభుత్వ పథకాలు మరియు బ్యాంకింగ్ సేవలకు ప్రాప్యత ద్వారా గ్రామీణ సమాజాలను శక్తివంతం చేయడం.',
    'footer.quickLinks': 'త్వరిత లింక్‌లు',
    'footer.services': 'మా సేవలు',
    'footer.contact': 'మమ్మల్ని సంప్రదించండి',
    'footer.copyright': '© 2024 విత్త ముక్తి. అన్ని హక్కులు రక్షించబడ్డాయి. ఆర్థిక స్వేచ్ఛ వైపు గ్రామాలను శక్తివంతం చేయడం.',
  },
  ta: {
    // Tamil translations
    // Header
    'header.title': 'வித் முக்தி',
    'header.subtitle': 'கிராமங்களுக்கு நிதி சுதந்திரம்',
    'header.financialLiteracy': 'நிதி கல்வி',
    'header.governmentSchemes': 'அரசுத் திட்டங்கள்',
    'header.bankingServices': 'வங்கி சேவைகள்',
    'header.calculators': 'கணிப்பான்',
    'header.login': 'உள்நுழை',
    'header.register': 'பதிவு',
    'header.dashboard': 'டாஷ்போர்டு',
    'header.logout': 'வெளியேறு',

    // Home Page
    'home.hero.title': 'ஒவ்வொரு கிராமத்தையும் சக்திவாய்ந்ததாக மாற்றுதல்',
    'home.hero.subtitle': 'நிதி சுதந்திரம் நோக்கி',
    'home.hero.description': 'கல்வி, விழிப்புணர்வு மற்றும் அதிகாரப்பூர்வ நிதி சேவைகளுக்கான அணுகல் மூலம் நிதி பாதிப்பிலிருந்து விடுபடுங்கள்.',
    'home.hero.getStarted': 'தொடங்குங்கள்',
    'home.hero.learnMore': 'மேலும் அறிக',
    'home.hero.goToDashboard': 'டாஷ்போர்டுக்கு செல்லவும்',

    // Stats
    'home.stats.villages': 'சக்திவாய்ந்த கிராமங்கள்',
    'home.stats.literacy': 'மேம்பட்ட நிதி கல்வி',
    'home.stats.lending': 'குறைந்த அனியமித கடன்',
    'home.stats.languages': 'மண்டல மொழிகள்',

    // Features
    'home.features.title': 'முழுமையான நிதி சக்திவாய்ப்பு',
    'home.features.description': 'நீங்கள் நிதி சுதந்திரத்தை அடையவும், அறிவுடன் நிதி முடிவுகளை எடுக்கவும் எங்களது தளம் அனைத்தையும் வழங்குகிறது.',
    'home.features.financialLiteracy.title': 'நிதி கல்வி',
    'home.features.financialLiteracy.description': 'இணையவழி தொகுதிகள் மூலம் வங்கி, சேமிப்பு, முதலீடு மற்றும் புத்திசாலி நிதி முடிவுகளை அறிக.',
    'home.features.governmentSchemes.title': 'அரசுத் திட்டங்கள்',
    'home.features.governmentSchemes.description': 'பல்வேறு அரசுத் திட்டங்கள், உதவித் தொகைகள் மற்றும் கிராம அபிவிருத்தி திட்டங்களை கண்டறிந்து அணுகவும்.',
    'home.features.bankingServices.title': 'வங்கி சேவைகள்',
    'home.features.bankingServices.description': 'வங்கி கணக்கு திறப்பது, டிஜிட்டல் வங்கி பயன்படுத்துவது மற்றும் அதிகாரப்பூர்வ நிதி சேவைகளை பெறுவது குறித்து வழிகாட்டுதல் பெறுங்கள்.',
    'home.features.calculators.title': 'நிதி கணிப்பான்கள்',
    'home.features.calculators.description': 'அறிவுடன் நிதி முடிவுகளை எடுக்க SIP வருமானம், கடன் EMI மற்றும் முதலீட்டு வளர்ச்சியை கணக்கிடுங்கள்.',

    // CTA
    'home.cta.title': 'உங்கள் நிதி பயணத்தை தொடங்க தயாரா?',
    'home.cta.description': 'ஏற்கனவே தங்கள் நிதி எதிர்காலத்தை கட்டுப்படுத்திய ஆயிரக்கணக்கான கிராமவாசிகளுடன் சேருங்கள். இன்று கற்றுக்கொள்ளவும், சேமிக்கவும், வளரவும் தொடங்குங்கள்.',
    'home.cta.join': 'வித் முக்தியில் சேருங்கள்',

    // Common
    'common.explore': 'ஆராயுங்கள்',
    'common.continue': 'தொடரவும்',
    'common.start': 'தொடங்குங்கள்',
    'common.loading': 'ஏற்றுகிறது...',
    'common.error': 'பிழை',
    'common.success': 'வெற்றி',
    'common.cancel': 'ரத்து செய்',
    'common.save': 'சேமிக்கவும்',
    'common.close': 'மூடு',

    // Calculators
    'calculators.title': 'நிதி கணிப்பான்கள்',
    'calculators.description': 'உங்கள் நிதி எதிர்காலத்தை திட்டமிடவும், அறிவுடன் முதலீட்டு முடிவுகளை எடுக்கவும் எங்கள் கணிப்பான்களை பயன்படுத்துங்கள்.',
    'calculators.sip.title': 'SIP கணிப்பான்',
    'calculators.sip.description': 'உங்கள் திட்டமிட்ட முதலீட்டின் வருமானத்தை கணக்கிடுங்கள்',
    'calculators.loan.title': 'கடன் EMI கணிப்பான்',
    'calculators.loan.description': 'உங்கள் மாத கடன் கட்டணத்தை கணக்கிடுங்கள்',
    'calculators.investment.title': 'முதலீட்டு கணிப்பான்',
    'calculators.investment.description': 'நேரத்தோடு உங்கள் முதலீட்டு வளர்ச்சியை திட்டமிடுங்கள்',

    // Chatbot
    'chatbot.title': 'நிதி உதவியாளர்',
    'chatbot.placeholder': 'வங்கி, முதலீடு அல்லது அரசுத் திட்டங்களைப் பற்றி கேளுங்கள்...',
    'chatbot.send': 'அனுப்பு',
    'chatbot.welcome': 'வணக்கம்! நான் உங்கள் நிதி உதவியாளர். இன்று நான் எப்படி உதவலாம்?',

    // Footer
    'footer.description': 'நிதி கல்வி, கல்வி மற்றும் அரசுத் திட்டங்கள் மற்றும் வங்கி சேவைகளுக்கான அணுகல் மூலம் கிராம சமூகங்களை சக்திவாய்ந்ததாக மாற்றுதல்.',
    'footer.quickLinks': 'விரைவு இணைப்புகள்',
    'footer.services': 'எங்கள் சேவைகள்',
    'footer.contact': 'தொடர்பு கொள்ளவும்',
    'footer.copyright': '© 2024 வித் முக்தி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. நிதி சுதந்திரம் நோக்கி கிராமங்களை சக்திவாய்ந்ததாக மாற்றுதல்.',
  },
  kn: {
    // Kannada translations
    // Header
    'header.title': 'ವಿತ್ ಮುಕ್ತಿ',
    'header.subtitle': 'ಗ್ರಾಮಗಳಿಗೆ ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯ',
    'header.financialLiteracy': 'ಆರ್ಥಿಕ ಸಾಕ್ಷರತೆ',
    'header.governmentSchemes': 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
    'header.bankingServices': 'ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು',
    'header.calculators': 'ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು',
    'header.login': 'ಲಾಗಿನ್',
    'header.register': 'ನೋಂದಣಿ',
    'header.dashboard': 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    'header.logout': 'ಲಾಗ್‌ಔಟ್',

    // Home Page
    'home.hero.title': 'ಪ್ರತಿ ಗ್ರಾಮವನ್ನೂ ಶಕ್ತಿಶಾಲಿಯಾಗಿಸುವುದು',
    'home.hero.subtitle': 'ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯ ಕಡೆಗೆ',
    'home.hero.description': 'ಶಿಕ್ಷಣ, ಜಾಗೃತಿ ಮತ್ತು ಅಧಿಕೃತ ಆರ್ಥಿಕ ಸೇವೆಗಳ ಪ್ರವೇಶದ ಮೂಲಕ ಆರ್ಥಿಕ ದುರ್ಬಲತೆಯಿಂದ ಮುಕ್ತವಾಗಿರಿ.',
    'home.hero.getStarted': 'ಪ್ರಾರಂಭಿಸಿ',
    'home.hero.learnMore': 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    'home.hero.goToDashboard': 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹೋಗಿ',

    // Stats
    'home.stats.villages': 'ಶಕ್ತಿಶಾಲಿ ಗ್ರಾಮಗಳು',
    'home.stats.literacy': 'ಮೇಲಾದ ಆರ್ಥಿಕ ಸಾಕ್ಷರತೆ',
    'home.stats.lending': 'ಕಡಿಮೆ ಅನೌಪಚಾರಿಕ ಸಾಲ',
    'home.stats.languages': 'ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳು',

    // Features
    'home.features.title': 'ಸಂಪೂರ್ಣ ಆರ್ಥಿಕ ಶಕ್ತಿಶಾಲಿತ್ವ',
    'home.features.description': 'ನೀವು ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಸಾಧಿಸಲು ಮತ್ತು ಜ್ಞಾನಪೂರ್ಣ ಆರ್ಥಿಕ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ನಮ್ಮ ವೇದಿಕೆ ಎಲ್ಲವನ್ನೂ ಒದಗಿಸುತ್ತದೆ.',
    'home.features.financialLiteracy.title': 'ಆರ್ಥಿಕ ಸಾಕ್ಷರತೆ',
    'home.features.financialLiteracy.description': 'ಇಂಟರಾಕ್ಟಿವ್ ಮಾದರಿಗಳ ಮೂಲಕ ಬ್ಯಾಂಕಿಂಗ್, ಉಳಿತಾಯ, ಹೂಡಿಕೆ ಮತ್ತು ಸ್ಮಾರ್ಟ್ ಆರ್ಥಿಕ ನಿರ್ಧಾರಗಳನ್ನು ತಿಳಿಯಿರಿ.',
    'home.features.governmentSchemes.title': 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
    'home.features.governmentSchemes.description': 'ವಿವಿಧ ಸರ್ಕಾರಿ ಆರ್ಥಿಕ ಸಹಾಯ ಕಾರ್ಯಕ್ರಮಗಳು, ಸಬ್ಸಿಡಿಗಳು ಮತ್ತು ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಪ್ರವೇಶಿಸಿ.',
    'home.features.bankingServices.title': 'ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು',
    'home.features.bankingServices.description': 'ಬ್ಯಾಂಕ್ ಖಾತೆ ತೆರೆಯುವುದು, ಡಿಜಿಟಲ್ ಬ್ಯಾಂಕಿಂಗ್ ಬಳಸುವುದು ಮತ್ತು ಅಧಿಕೃತ ಆರ್ಥಿಕ ಸೇವೆಗಳನ್ನು ಪ್ರವೇಶಿಸುವ ಬಗ್ಗೆ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.',
    'home.features.calculators.title': 'ಆರ್ಥಿಕ ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು',
    'home.features.calculators.description': 'ಜ್ಞಾನಪೂರ್ಣ ಆರ್ಥಿಕ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು SIP ವಾಪಸಾತಿ, ಸಾಲ EMI ಮತ್ತು ಹೂಡಿಕೆ ಬೆಳವಣಿಗೆಯನ್ನು ಲೆಕ್ಕಹಾಕಿ.',

    // CTA
    'home.cta.title': 'ನಿಮ್ಮ ಆರ್ಥಿಕ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?',
    'home.cta.description': 'ಈಗಾಗಲೇ ತಮ್ಮ ಆರ್ಥಿಕ ಭವಿಷ್ಯವನ್ನು ನಿಯಂತ್ರಣದಲ್ಲಿಟ್ಟಿರುವ ಸಾವಿರಾರು ಗ್ರಾಮಸ್ಥರೊಂದಿಗೆ ಸೇರಿ. ಇಂದು ಕಲಿಯಲು, ಉಳಿತಾಯ ಮಾಡಲು ಮತ್ತು ಬೆಳೆಯಲು ಪ್ರಾರಂಭಿಸಿ.',
    'home.cta.join': 'ವಿತ್ ಮುಕ್ತಿಗೆ ಸೇರಿ',

    // Common
    'common.explore': 'ಅನ್ವೇಷಿಸಿ',
    'common.continue': 'ಮುಂದುವರಿಸಿ',
    'common.start': 'ಪ್ರಾರಂಭಿಸಿ',
    'common.loading': 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
    'common.error': 'ದೋಷ',
    'common.success': 'ಯಶಸ್ಸು',
    'common.cancel': 'ರದ್ದುಮಾಡಿ',
    'common.save': 'ಉಳಿಸಿ',
    'common.close': 'ಮುಚ್ಚಿ',

    // Calculators
    'calculators.title': 'ಆರ್ಥಿಕ ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು',
    'calculators.description': 'ನಿಮ್ಮ ಆರ್ಥಿಕ ಭವಿಷ್ಯವನ್ನು ಯೋಜಿಸಲು ಮತ್ತು ಜ್ಞಾನಪೂರ್ಣ ಹೂಡಿಕೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ನಮ್ಮ ಸಮಗ್ರ ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳನ್ನು ಬಳಸಿ.',
    'calculators.sip.title': 'SIP ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    'calculators.sip.description': 'ನಿಮ್ಮ ವ್ಯವಸ್ಥಿತ ಹೂಡಿಕೆ ಯೋಜನೆಯ ಮೇಲೆ ವಾಪಸಾತಿಯನ್ನು ಲೆಕ್ಕಹಾಕಿ',
    'calculators.loan.title': 'ಸಾಲ EMI ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    'calculators.loan.description': 'ನಿಮ್ಮ ಮಾಸಿಕ ಸಾಲ ಪಾವತಿಯನ್ನು ಲೆಕ್ಕಹಾಕಿ',
    'calculators.investment.title': 'ಹೂಡಿಕೆ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    'calculators.investment.description': 'ಕಾಲಕ್ರಮೇಣ ನಿಮ್ಮ ಹೂಡಿಕೆ ಬೆಳವಣಿಗೆಯನ್ನು ಯೋಜಿಸಿ',

    // Chatbot
    'chatbot.title': 'ಆರ್ಥಿಕ ಸಹಾಯಕ',
    'chatbot.placeholder': 'ಬ್ಯಾಂಕಿಂಗ್, ಹೂಡಿಕೆ ಅಥವಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ...',
    'chatbot.send': 'ಕಳುಹಿಸಿ',
    'chatbot.welcome': 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಆರ್ಥಿಕ ಸಹಾಯಕ. ನಾನು ಇಂದು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',

    // Footer
    'footer.description': 'ಆರ್ಥಿಕ ಸಾಕ್ಷರತೆ, ಶಿಕ್ಷಣ ಮತ್ತು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳಿಗೆ ಪ್ರವೇಶದ ಮೂಲಕ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳನ್ನು ಶಕ್ತಿಶಾಲಿಯಾಗಿಸುವುದು.',
    'footer.quickLinks': 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    'footer.services': 'ನಮ್ಮ ಸೇವೆಗಳು',
    'footer.contact': 'ಸಂಪರ್ಕಿಸಿ',
    'footer.copyright': '© 2024 ವಿತ್ ಮುಕ್ತಿ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ಆರ್ಥಿಕ ಸ್ವಾತಂತ್ರ್ಯ ಕಡೆಗೆ ಗ್ರಾಮಗಳನ್ನು ಶಕ್ತಿಶಾಲಿಯಾಗಿಸುವುದು.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('vitt-mukti-language');
    if (savedLanguage && translations[savedLanguage as keyof typeof translations]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('vitt-mukti-language', lang);
  };

  const t = (key: string): string => {
    const langTranslations = translations[language as keyof typeof translations];
    return langTranslations?.[key as keyof typeof langTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};