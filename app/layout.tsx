import type { Metadata } from 'next';
import { LanguageProvider } from '@/lib/language-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'Titcom | Svjetleće Reklame & LED Rješenja',
  description: 'Izrađujemo inovativne svjetleće i nesvjetleće reklame, LED natpise, neon flex dekoracije i digitalne prikaze koji ostavljaju dojam.',
  keywords: ['LED reklame', 'svjetleće reklame', 'neon flex', 'digitalne reklame', 'XXL print', 'signage', 'Croatia', 'Hrvatska'],
  authors: [{ name: 'Titcom' }],
  openGraph: {
    title: 'Titcom | Svjetleće Reklame & LED Rješenja',
    description: 'Izrađujemo inovativne svjetleće i nesvjetleće reklame, LED natpise, neon flex dekoracije i digitalne prikaze koji ostavljaju dojam.',
    type: 'website',
    locale: 'hr_HR',
    alternateLocale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body className="antialiased bg-dark-950 text-gray-100 min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

