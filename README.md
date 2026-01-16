# Titcom HR - Premium LED & Signage Solutions

Modern, dark-themed bilingual website for Titcom - a Croatian company specializing in illuminated signs, LED displays, neon flex decorations, and digital signage solutions.

## Features

- 🌙 **Dark Theme** - Premium dark aesthetic with gradient accents from brand colors (#6FCCDC → #B8529E → #F8EC21)
- 🇭🇷🇬🇧 **Bilingual** - Croatian (primary) and English language support with instant switching
- ✨ **Modern Animations** - Smooth page transitions and micro-interactions using Motion
- 📱 **Responsive** - Mobile-first design that works beautifully on all devices
- ⚡ **Performance** - Built with Next.js 15 and Turbopack for blazing fast load times

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Motion (Framer Motion v11)
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
titcom-hr/
├── app/
│   ├── globals.css      # Global styles, utilities, animations
│   ├── layout.tsx       # Root layout with providers
│   └── page.tsx         # Main homepage
├── components/
│   ├── about.tsx        # About & Portfolio section
│   ├── contact.tsx      # Contact form & info
│   ├── footer.tsx       # Site footer
│   ├── hero.tsx         # Hero section with CTA
│   ├── language-switcher.tsx  # HR/EN toggle
│   ├── navigation.tsx   # Header navigation
│   ├── rental.tsx       # Digital solutions rental
│   └── services.tsx     # Services grid
├── lib/
│   ├── dictionaries/    # Translations (HR & EN)
│   ├── language-context.tsx  # Language state management
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Design System

### Colors
- **Background:** Deep navy/black tones (#030508 → #141a24)
- **Accent Cyan:** #6FCCDC
- **Accent Magenta:** #B8529E  
- **Accent Yellow:** #F8EC21

### Typography
- **Display:** Cabinet Grotesk (headings)
- **Body:** Satoshi (paragraphs, UI)

### Components
- Glass morphism effects
- Gradient borders and glows
- Animated hover states
- Staggered reveal animations

## Contact

**Titcom**
- Address: Dračevac 87
- Phone: +385 91 270 6972
- Email: dino@titcom.hr
- Hours: MON-FRI 08:00h - 15:00h

