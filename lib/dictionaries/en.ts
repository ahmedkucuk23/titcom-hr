import type { Dictionary } from './hr';

export const en: Dictionary = {
  meta: {
    title: "Titcom | Illuminated Signs & LED Solutions",
    description: "We create innovative illuminated and non-illuminated signs, LED displays, neon flex decorations and digital displays that leave an impression.",
  },
  nav: {
    services: "Services",
    about: "About",
    portfolio: "Portfolio",
    rental: "Rental",
    contact: "Contact",
    cta: "Get a Quote",
  },
  hero: {
    badge: "Premium LED & Signage Solutions",
    title: "Your vision.",
    titleAccent: "Our light.",
    description: "We create innovative illuminated and non-illuminated signs, LED displays, neon flex decorations and digital displays that leave a lasting impression.",
    cta: "Start Your Project",
    secondary: "View Portfolio",
    stats: {
      projects: "500+",
      projectsLabel: "Completed projects",
      years: "15+",
      yearsLabel: "Years of experience",
      clients: "300+",
      clientsLabel: "Satisfied clients",
    },
  },
  services: {
    badge: "Our Services",
    title: "Innovative solutions",
    titleAccent: "for visual recognition",
    description: "From small business spaces to large corporate brands – our products shape first impressions and attract attention.",
    items: [
      {
        icon: "lightbulb",
        title: "Illuminated Signs",
        description: "We create 3D LED signs, illuminated displays and advertisements that capture attention. Premium quality for maximum impact.",
      },
      {
        icon: "zap",
        title: "Neon & LED",
        description: "Modern Neon Flex and LED Point solutions for dynamic and striking visual effects that mesmerize.",
      },
      {
        icon: "monitor",
        title: "Digital Advertising",
        description: "LED displays, interactive screens and digital panels for indoor and outdoor use. The future is digital.",
      },
      {
        icon: "maximize",
        title: "XXL Print",
        description: "Large format high-resolution printing for facades, storefronts, events and advertising surfaces that dominate the space.",
      },
      {
        icon: "anchor",
        title: "Marine Signs",
        description: "Specialized illuminated signs resistant to weather and marine conditions. Quality that sails.",
      },
      {
        icon: "signpost",
        title: "Totems & Signage",
        description: "Information boards, advertising totems and signage adapted to any space for perfect navigation.",
      },
      {
        icon: "sparkles",
        title: "Decorative Products",
        description: "LED signs, engraved displays and unique lighting elements for interiors that take your breath away.",
      },
      {
        icon: "wrench",
        title: "Design & Installation",
        description: "From idea to realization, we offer design, production and professional installation. Complete service.",
      },
    ],
    cta: "View All Services",
  },
  about: {
    badge: "About Us",
    title: "We create light,",
    titleAccent: "we shape space",
    description: "Titcom specializes in producing high-quality illuminated and non-illuminated signs, unique LED displays, engraved signs with backlighting and digital displays.",
    mission: "Our mission is to ensure the recognition of your business through superior craftsmanship, modern technologies and creative approaches. We work with attention to detail, using the latest materials and energy-efficient LED solutions to create lasting and memorable advertisements.",
    values: [
      {
        title: "Innovation",
        description: "Always a step ahead with the latest technologies",
      },
      {
        title: "Quality",
        description: "Premium materials for long-lasting results",
      },
      {
        title: "Design",
        description: "Creative solutions that attract attention",
      },
    ],
    cta: "View Portfolio",
  },
  rental: {
    badge: "Digital Solutions Rental",
    title: "Digital advertising",
    titleAccent: "without large investments",
    description: "For everyone who wants to take advantage of digital advertising without large initial investments, we offer rental of LED-i-Posters and Android consoles.",
    features: [
      "Trade show presence that attracts attention",
      "Promotional actions and seasonal campaigns",
      "Interactive display in business spaces",
      "Testing digital formats before investment",
    ],
    includes: {
      title: "What does rental include?",
      items: [
        "Full technical support",
        "Installation and content configuration",
        "LED-i-Posters and Android consoles",
        "Modern, dynamic display",
      ],
    },
    cta: "Learn More About Rental",
  },
  contact: {
    badge: "Contact",
    title: "Let's start",
    titleAccent: "your project",
    description: "Visit us or contact us – we're always here for you!",
    form: {
      name: "Full name",
      email: "Email address",
      phone: "Phone",
      message: "Your message",
      submit: "Send Inquiry",
    },
    info: {
      address: {
        label: "Address",
        value: "Dračevac 87",
      },
      phone: {
        label: "Phone",
        value: "+385 91 270 6972",
      },
      email: {
        label: "E-Mail",
        value: "dino@titcom.hr",
      },
      hours: {
        label: "Working hours",
        value: "MON - FRI: 08:00h - 15:00h",
      },
    },
  },
  footer: {
    tagline: "We create light, shape space and highlight brands. Innovation, design and quality in every detail, for a lasting impression.",
    copyright: "© 2026 Titcom. All rights reserved.",
    links: {
      services: "Services",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms of use",
    },
  },
} as const;

