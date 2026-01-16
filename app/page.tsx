import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { Rental } from '@/components/rental';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-dark-950 -z-10" />
      <div className="fixed inset-0 bg-gradient-mesh -z-10 opacity-50" />
      <div className="fixed inset-0 bg-grid -z-10 opacity-30" />
      
      {/* Floating gradient orbs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl -z-10 animate-float" />
      <div className="fixed top-1/3 right-10 w-80 h-80 bg-accent-magenta/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-20 left-1/3 w-72 h-72 bg-accent-yellow/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '4s' }} />

      <Navigation />
      <Hero />
      <Services />
      <About />
      <Rental />
      <Contact />
      <Footer />
    </main>
  );
}

