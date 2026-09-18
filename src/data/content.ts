export interface ServicePackage {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  deliveryTime: string;
  highlight?: boolean;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  domain: string;
  liveUrl?: string;
  detailUrl?: string;
  screenshot: string;
  metrics: {
    label: string;
    value: string;
    subtext: string;
  };
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  stars: number;
  source: string;
  authorLabel?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteContent = {
  meta: {
    brandName: "Hero Webdesign",
    founder: "Roman",
    city: "Leverkusen",
    region: "Leverkusen, Köln & NRW",
    phone: "+49 152 24196590",
    phoneDisplay: "+49 152 24196590",
    email: "info@hero-webdesign.de",
    whatsAppUrl: "https://wa.me/message/BJMHXSTMT7RBO1",
    availability: "Aktuell 1 freier Projekt-Slot für diesen Monat",
    googleRating: "5,0",
    reviewCount: "Google-Bewertungen",
  },

  hero: {
    badgeRegion: "Leverkusen · Köln · NRW",
    badgeSLA: "Antwort innerhalb eines Werktages",
    headlineLine1: "Ihre Website soll",
    headlineLine2: "Anfragen bringen.",
    headlineHighlight: "Schön reicht nicht.",
    leadText:
      "Für Betriebe, die von echten Anfragen leben — in Leverkusen, Köln und ganz NRW. Website, Online-Shop und Google-Sichtbarkeit ab 800 Euro Festpreis. Schlüsselfertig live in 2 bis 3 Wochen.",
    ctaPrimary: "Kostenlose Potenzial-Analyse",
    ctaSecondary: "Leistungen und Festpreise",
    trustStars: "5,0 bei Google (100 % Weiterempfehlung)",
  },

  klartext: [
    {
      title: "Was ich mache",
      subtitle: "Websites, Shops und regionale Sichtbarkeit",
      text: "Ich baue Ihre Seite schlüsselfertig und sorge dafür, dass Kunden Sie bei Google finden — beides aus einer Hand, ohne Stille Post.",
      icon: "Code2",
    },
    {
      title: "Für wen",
      subtitle: "Betriebe, die von Aufträgen leben",
      text: "Hersteller, Praxen, Handwerk, Dienstleister — überall dort, wo ein einzelner Auftrag hunderte oder tausende Euro wert ist und Kunden vorher online prüfen.",
      icon: "Target",
    },
    {
      title: "Was es bringt",
      subtitle: "Echte Anrufe statt leerer Klicks",
      text: "Sie erscheinen genau dann, wenn jemand Ihre Leistung in Ihrer Region sucht. Anrufen und Anfragen dauert auf dem Smartphone genau eine Berührung.",
      icon: "PhoneCall",
    },
  ],

  problemsAndSolutions: [
    {
      number: "01",
      problemTitle: "Sie sind online unsichtbar",
      problemDesc:
        "Alle Leistungen stehen auf einer einzigen Sammelseite. Google kann nicht erkennen, wofür Sie stehen — und platziert den Betrieb vor Ihnen, der jede Leistung einzeln listet.",
      problemImpact: "Wer Ihre Leistung sucht, ruft bei der Konkurrenz an.",
      solutionTitle: "Eigene Landingpages je Kernleistung",
      solutionDesc:
        "Gezielte Unterseiten mit lokaler Optimierung für Leverkusen, Köln und Umkreis. Google stuft Sie als regionalen Spezialisten ein.",
    },
    {
      number: "02",
      problemTitle: "Auf dem Smartphone eine Qual",
      problemDesc:
        "Am Desktop entworfen, danach zusammengestaucht. Schriften zu klein, Buttons zu dicht, Telefonnummer muss mühsam abgetippt werden.",
      problemImpact: "Interessenten brechen genervt ab und klicken zurück.",
      solutionTitle: "Radikal Mobile-First gebaut",
      solutionDesc:
        "Große Klickflächen, intuitive Daumen-Navigation und Sofort-Anruf mit genau einem Fingertipp.",
    },
    {
      number: "03",
      problemTitle: "Kein klarer nächster Schritt",
      problemDesc:
        "Der Kontakt versteckt sich im Footer, das Formular verlangt zwölf Pflichtfelder. Wer anfragen will, verliert die Geduld.",
      problemImpact: "Der Besucher liest, nickt — und schließt den Tab für immer.",
      solutionTitle: "Ein glasklares Ziel je Seite",
      solutionDesc:
        "Geführte Kurzanfrage oder direkter WhatsApp- und Telefon-Kanal. Anfragen dauert weniger als 30 Sekunden.",
    },
  ],

  packages: [
    {
      id: "landingpage",
      number: "01",
      name: "Landingpage",
      subtitle: "Der schnelle Einstieg",
      description: "Eine Seite, ein klares Ziel. Für eine spezielle Aktion, eine Kernleistung oder wenn es schnell gehen muss.",
      price: "800 €",
      deliveryTime: "Festpreis · live in 7 bis 10 Tagen",
      features: [
        "Zielgerichteter Aufbau und verkaufsstarke Texte",
        "100 % Mobile-First für Smartphone-Kunden",
        "Telefon und WhatsApp-Button permanent erreichbar",
        "Google Unternehmensprofil verknüpft",
        "Ladezeit unter 1,5 Sekunden (90+ PageSpeed)",
        "Einfache Einweisung für spätere Textanpassungen",
      ],
    },
    {
      id: "business-website",
      number: "02",
      name: "Business-Webseite",
      subtitle: "Der Goldstandard für Betriebe",
      description: "Ihr kompletter Betrieb souverän im Netz. Leistungen, Referenzen, Bewertungen, Team und Stellenangebote.",
      price: "1.500 €",
      deliveryTime: "Festpreis · live in 2 bis 3 Wochen",
      highlight: true,
      features: [
        "Bis zu 5 Unterseiten (jede Kernleistung einzeln optimiert)",
        "Referenzen und Google-Bewertungen eingebunden",
        "Lokale SEO-Architektur für Leverkusen, Köln und Region",
        "Eigener Karrierebereich für Mitarbeitergewinnung",
        "Verkaufsstarke Texte und Bildaufbereitung inklusive",
        "Persönliche Einweisung und 30 Tage Support",
      ],
    },
    {
      id: "online-shop",
      number: "03",
      name: "Online-Shop",
      subtitle: "Wenn digital verkauft wird",
      description: "Produkte, Kasse, Zahlungsarten und Versand. Sauber aufgesetzt, rechtssicher und einfach selbst zu verwalten.",
      price: "ab 3.000 €",
      deliveryTime: "Richtpreis · live in 3 bis 5 Wochen",
      features: [
        "Übersichtlicher Produktkatalog nach Ihrer Struktur",
        "Alle gängigen Zahlungsarten (PayPal, Kreditkarte, Klarna, Rechnung)",
        "Versandregeln und automatisierte Bestellbestätigungen",
        "Bestell- und Lagerverwaltung auf Knopfdruck",
        "Intensive Schulung für Sie und Ihr Team",
        "Optional erweiterbare Schnittstellen",
      ],
    },
    {
      id: "seo-sichtbarkeit",
      number: "04",
      name: "Gefunden werden",
      subtitle: "Regionale Google-Dominanz",
      description: "Google Unternehmensprofil, Branchenverzeichnisse und lokale Suchbegriff-Zuordnung. Einmalig oder laufend.",
      price: "690 €",
      deliveryTime: "Im Paket · 890 € einzeln",
      features: [
        "Google-Unternehmensprofil lückenlos optimiert",
        "Konsistente Daten in allen relevanten Branchenbüchern",
        "Lokale Suchbegriffsanalyse (z. B. Dachdecker Leverkusen)",
        "Google Search Console und Messung eingerichtet",
        "Keine leeren Ranking-Garantien, sondern echte Arbeit",
        "Laufende Monatsbetreuung optional für 590 Euro im Monat",
      ],
    },
  ],

  caseStudies: [
    {
      id: "stobo-shop",
      title: "STOBO GmbH",
      category: "Online-Shop und B2B-Katalog",
      location: "Köln",
      domain: "stobo.shop",
      description: "Hersteller von Gasdruckfedern. B2B-Shop mit digitalem Produktkatalog, Maß-Konfigurator und Kasse.",
      screenshot: "/assets/images/stobo-shop.webp",
      metrics: {
        value: "97/100",
        label: "Google PageSpeed",
        subtext: "1.000+ Bauformen direkt online bestellbar",
      },
      highlights: [
        "Ersatzteile direkt ohne Telefon-Wartezeit bestellen",
        "Maße, Hubkräfte und Preise eigenständig prüfen",
        "10 Zahlungsarten inklusive Kauf auf Rechnung",
        "Vollständig zweisprachig (Deutsch und Englisch)",
      ],
    },
    {
      id: "prolife",
      title: "ProLife Krankenfahrdienst",
      category: "Business-Webseite",
      location: "Köln",
      domain: "prolife.ag",
      description: "Krankenfahrdienst Köln. Website mit geführter digitaler Transportanfrage und Karrierebereich.",
      screenshot: "/assets/images/prolife.webp",
      metrics: {
        value: "96/100",
        label: "Mobile Performance",
        subtext: "5 bis 10 zusätzliche Fahrtanfragen im Monat",
      },
      highlights: [
        "Krankentransport online buchen, auch am Wochenende",
        "Geführtes Anfrageformular statt unklarer Textfelder",
        "Echte Patienten-Bewertungen direkt im Blick",
        "Eigener Karrierebereich mit 1-Klick-Bewerbung",
      ],
    },
    {
      id: "vanessa-bartsch",
      title: "Vanessa Bartsch",
      category: "Portfolio und Buchungs-Plattform",
      location: "Köln",
      domain: "vanessabartsch.com",
      description: "Freiberufliches Model Köln. Minimalistisches Editorial-Portfolio mit Bildstrecken und Direktbuchung.",
      screenshot: "/assets/images/vanessa-bartsch.webp",
      metrics: {
        value: "99/100",
        label: "Lighthouse Score",
        subtext: "Alle Portfolios auf einer zentralen Adresse",
      },
      highlights: [
        "Freie Shooting-Tage direkt im Kalender einsehbar",
        "Buchungsanfragen ohne Umweg über Social Media",
        "Vita, Sedcard und hochauflösende Fotostrecken",
        "Direkter Kundenkontakt ohne Agenturprovision",
      ],
    },
    {
      id: "stobo-de",
      title: "STOBO Unternehmensauftritt",
      category: "Unternehmens-Website",
      location: "Köln",
      domain: "stobo.de",
      description: "Hersteller technischer Federlösungen. Corporate Website mit Wissensbereich und Branchen-Einstiegen.",
      screenshot: "/assets/images/stobo-de.webp",
      metrics: {
        value: "91/100",
        label: "Desktop und Mobile",
        subtext: "6 industrielle Produktlinien erschlossen",
      },
      highlights: [
        "Über 1.000 technische Varianten strukturiert",
        "Suche nach industrieller Anwendung statt nur nach Bauteil",
        "Technischer Wissensbereich für Ingenieure",
        "Eigener Anfragepfad für maßgeschneiderte Sonderanfertigungen",
      ],
    },
  ],

  testimonials: [
    {
      id: "1",
      quote:
        "Wir sind sehr zufrieden mit der Umsetzung unseres Onlineshops und unserer neuen Website. Die Resultate alleine durch die Implementierung des Shops sind deutlich. Von der Planung bis zur finalen Umsetzung lief alles professionell ab und die Ergebnisse sprechen für sich.",
      stars: 5,
      source: "Google-Bewertung",
      authorLabel: "Industrie-Kunde (Online-Shop)",
    },
    {
      id: "2",
      quote:
        "Die Zusammenarbeit war super! Ich hatte viele spezielle Wünsche und alle wurden perfekt umgesetzt. Die Gespräche waren alle sehr freundlich und ich habe mich von Anfang bis Ende sehr wohl gefühlt. Kleine Anpassungen wurden ohne Probleme umgesetzt. Werde ich auf jeden Fall weiterempfehlen!",
      stars: 5,
      source: "Google-Bewertung",
      authorLabel: "Dienstleistungs-Betrieb",
    },
    {
      id: "3",
      quote:
        "Super Beratungsgespräch! Endlich jemand, der einem nichts andrehen will, sondern wirklich auf die eigenen Bedürfnisse eingeht.",
      stars: 5,
      source: "Google-Bewertung",
      authorLabel: "Lokaler Gewerbekunde",
    },
    {
      id: "4",
      quote:
        "Professionell, kreativ und zuverlässig. Tolle Ideen und super Service. Klare Empfehlung!",
      stars: 5,
      source: "Google-Bewertung",
      authorLabel: "Mittelständisches Unternehmen",
    },
  ],

  process: [
    {
      number: "01",
      title: "Erstgespräch (20 Minuten)",
      description:
        "Kurzes, unverbindliches Telefonat. Wir klären, was Ihr Betrieb anbietet, wer Ihre Kunden sind und was die Website konkret bewirken soll. Danach wissen wir beide, ob es passt.",
      duration: "Tag 1",
    },
    {
      number: "02",
      title: "Schriftliches Festpreisangebot",
      description:
        "Sie erhalten schwarz auf weiß den genauen Leistungsumfang, den verbindlichen Festpreis und das garantierte Fertigstellungsdatum. Keine versteckten Stundensätze, kein Kleingedrucktes.",
      duration: "Tag 2",
    },
    {
      number: "03",
      title: "Umsetzung und 2 Korrekturrunden",
      description:
        "Ich baue Ihre Seite. Sie verfolgen den Fortschritt live an einem privaten Vorschaulink und geben Feedback in Ihrem eigenen Tempo. Zwei vollständige Korrekturschleifen sind inklusive.",
      duration: "Woche 1 bis 2",
    },
    {
      number: "04",
      title: "Go-Live und Einweisung",
      description:
        "Wir schalten Ihre Domain live, richten Google Business ein und ich zeige Ihnen in 15 Minuten, wie Sie Texte selbst ändern. Ich bleibe Ihr Ansprechpartner — auch ohne teuren Wartungsvertrag.",
      duration: "Live",
    },
  ],

  aboutRoman: {
    badge: "Ihr persönlicher Entwickler",
    headline: "Sie reden mit mir. Nicht mit einem Accountmanager.",
    bio1: "Hero Webdesign ist keine anonyme Großagentur mit wechselnden Praktikanten. Ich bin Roman, ich sitze in Leverkusen, und ich entwickle Ihre Website persönlich vom ersten Konzept bis zum Moment, in dem die Seite live geht.",
    bio2: "Vor meiner Selbstständigkeit habe ich jahrelang in einem Industriebetrieb gearbeitet und dort ausgebildet. Ich weiß, wie Betriebe von innen funktionieren. Niemand hat Zeit für dreiwöchige Feedbackschleifen oder Agentur-Fachchinesisch. Deshalb halte ich Absprachen kurz, verbindlich und schriftlich.",
    bio3: "Ich nehme bewusst nur 2 bis 3 Projekte im Monat an. Das garantiert, dass Ihr Betrieb meine ungeteilte Aufmerksamkeit bekommt und nicht in einer internen Ticket-Warteschlange versauert.",
    stats: [
      { value: "5,0 ★", label: "Google-Bewertung", sublabel: "Verifizierte Kundenzufriedenheit" },
      { value: "1", label: "Fester Ansprechpartner", sublabel: "Vom ersten Call bis zum Go-Live" },
      { value: "2 bis 3", label: "Wochen bis live", sublabel: "Garantierter Fertigstellungstermin" },
    ],
  },

  faqs: [
    {
      question: "Was kostet die Website am Ende wirklich?",
      answer:
        "Exakt den Festpreis, der im schriftlichen Angebot steht. Es gibt keine versteckten Kosten oder nachträgliche Stundenzettel. Sollten Sie während des Projekts zusätzliche Sonderwünsche haben, nenne ich Ihnen den Preis dafür vorher, bevor ich anfange.",
    },
    {
      question: "Ich habe bereits eine Website. Reicht eine Überarbeitung?",
      answer:
        "Häufig ja. Ich analysiere Ihre bestehende Seite und sage Ihnen ehrlich, ob eine gezielte Modernisierung ausreicht oder ob ein sauberer Neubau wirtschaftlicher ist. Wenn Ihre jetzige Seite ihren Zweck bereits erfüllt, sage ich Ihnen das genauso direkt.",
    },
    {
      question: "Muss ich fertige Texte und professionelle Fotos anliefern?",
      answer:
        "Nein. Die verkaufsstarken Texte verfasse ich für Sie. Sie geben mir im Erstgespräch lediglich die Fakten und Eckdaten. Wenn Sie keine Fotos haben, zeige ich Ihnen genau, wie Sie mit dem Smartphone in 10 Minuten authentische Betriebsbilder aufnehmen.",
    },
    {
      question: "Wem gehört die Website nach Fertigstellung?",
      answer:
        "Zu 100 Prozent Ihnen. Domain, Code, Inhalte und alle Zugänge laufen vollständig auf Ihren Namen. Sie sind an keinen Knebelvertrag gebunden und können jederzeit eigenständig schalten und walten.",
    },
    {
      question: "Werde ich bei Google in Leverkusen und Köln gefunden?",
      answer:
        "Für Ihren Ort und Ihre spezifischen Leistungen in aller Regel ja. Genau dafür ist die semantische Seitenstruktur und das Google Unternehmensprofil ausgelegt. Bei stark umkämpften nationalen Keywords dauert es länger. Was realistisch ist, sage ich Ihnen vorab im Gespräch.",
    },
  ],

  ctaBanner: {
    headline: "Klingt das nach dem, was Ihr Betrieb braucht?",
    text: "Zwanzig Minuten am Telefon, kostenlos. Danach wissen Sie, was ich ändern würde — und was es kostet.",
    buttonText: "Kostenlose Analyse",
  },

  legal: {
    impressum: {
      heading: "Impressum",
      text: "Die Angaben für das Impressum werden vom Inhaber nachgereicht.",
    },
    datenschutz: {
      heading: "Datenschutzerklärung",
      text: "Die Angaben für die Datenschutzerklärung werden vom Inhaber nachgereicht.",
    },
  },
};
