'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './language-switcher';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dictionary } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: dictionary.nav.services },
    { href: '#about', label: dictionary.nav.about },
    { href: '#portfolio', label: dictionary.nav.portfolio },
    { href: '#rental', label: dictionary.nav.rental },
    { href: '#contact', label: dictionary.nav.contact },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'py-3' : 'py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={cn(
              'relative flex items-center justify-between rounded-2xl transition-all duration-500 px-6',
              isScrolled
                ? 'glass-strong py-3 shadow-2xl shadow-black/20'
                : 'py-4'
            )}
          >
            {/* Logo */}
            <a href="#" className="relative group flex items-center gap-3">
              <div className="relative w-10 h-10">
                {/* Logo mark - stylized T with gradient */}
                <div className="absolute inset-0 bg-gradient-brand rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 flex items-center justify-center text-dark-950 font-display font-bold text-xl">
                  T
                </span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                <span className="text-white">tit</span>
                <span className="text-gradient">com</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>

            {/* Right side - Language & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <a
                href="#contact"
                className="btn-primary text-sm"
              >
                <span>{dictionary.nav.cta}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden px-4"
          >
            <div className="glass-strong rounded-2xl p-6 shadow-2xl shadow-black/30">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <LanguageSwitcher />
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary text-sm"
                  >
                    <span>{dictionary.nav.cta}</span>
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

