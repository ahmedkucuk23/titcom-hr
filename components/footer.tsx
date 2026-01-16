'use client';

import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function Footer() {
  const { dictionary } = useLanguage();
  const { footer, nav } = dictionary;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const navLinks = [
    { href: '#services', label: footer.links.services },
    { href: '#about', label: footer.links.about },
    { href: '#portfolio', label: footer.links.portfolio },
    { href: '#contact', label: footer.links.contact },
  ];

  const legalLinks = [
    { href: '#', label: footer.links.privacy },
    { href: '#', label: footer.links.terms },
  ];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-accent-magenta/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <a href="#" className="inline-flex items-center gap-3 mb-6 group">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-gradient-brand rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-0 flex items-center justify-center text-dark-950 font-display font-bold text-2xl">
                    T
                  </span>
                </div>
                <span className="font-display font-bold text-2xl tracking-tight">
                  <span className="text-white">tit</span>
                  <span className="text-gradient">com</span>
                </span>
              </a>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                {footer.tagline}
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-dark-800/50 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan/30 hover:bg-dark-700/50 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-display font-semibold text-white mb-4">Navigacija</h4>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors link-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-display font-semibold text-white mb-4">Kontakt</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="mailto:dino@titcom.hr" className="hover:text-white transition-colors">
                    dino@titcom.hr
                  </a>
                </li>
                <li>
                  <a href="tel:+385912706972" className="hover:text-white transition-colors">
                    +385 91 270 6972
                  </a>
                </li>
                <li>Dračevac 87</li>
                <li className="text-sm text-gray-500">PON - PET: 08:00h - 15:00h</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-sm text-gray-500">
            {footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-dark-800/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan/30 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}

