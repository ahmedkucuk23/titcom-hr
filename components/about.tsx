'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Lightbulb, Award, Palette } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const valueIcons = [Lightbulb, Award, Palette];

export function About() {
  const { dictionary } = useLanguage();
  const { about } = dictionary;

  return (
    <section id="about" className="section">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent-magenta/5 to-transparent -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-yellow/30 mb-6"
            >
              <span className="text-sm font-medium text-accent-yellow">{about.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
            >
              <span className="text-white">{about.title}</span>
              <br />
              <span className="text-gradient">{about.titleAccent}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-6"
            >
              {about.description}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 leading-relaxed mb-8"
            >
              {about.mission}
            </motion.p>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {about.values.map((value, index) => {
                const Icon = valueIcons[index];
                return (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-dark-800/30 border border-white/5"
                  >
                    <Icon className="w-6 h-6 text-accent-cyan mx-auto mb-2" />
                    <h4 className="font-display font-semibold text-white text-sm mb-1">
                      {value.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-snug">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#portfolio"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>{about.cta}</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="portfolio"
            className="relative"
          >
            {/* Main showcase grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large featured card */}
              <div className="col-span-2 aspect-video rounded-2xl overflow-hidden border-gradient-subtle p-[1px]">
                <div className="w-full h-full rounded-2xl bg-dark-800/80 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-accent-magenta/10 to-accent-yellow/10" />
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  
                  {/* Animated LED effect */}
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-display font-bold text-gradient-animated tracking-wider">
                      TITCOM
                    </div>
                    <div className="absolute inset-0 blur-xl bg-gradient-brand opacity-30 animate-pulse-glow" />
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent-cyan/50" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent-magenta/50" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent-yellow/50" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent-cyan/50" />
                </div>
              </div>

              {/* Smaller showcase cards */}
              <div className="aspect-square rounded-2xl overflow-hidden border-gradient-subtle p-[1px]">
                <div className="w-full h-full rounded-2xl bg-dark-800/80 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-magenta/20 to-transparent" />
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-magenta flex items-center justify-center">
                      <span className="text-2xl font-display font-bold text-dark-950">3D</span>
                    </div>
                    <span className="text-sm text-gray-400">LED Natpisi</span>
                  </div>
                </div>
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden border-gradient-subtle p-[1px]">
                <div className="w-full h-full rounded-2xl bg-dark-800/80 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 to-transparent" />
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-accent-magenta to-accent-yellow flex items-center justify-center animate-pulse-glow">
                      <span className="text-2xl">✨</span>
                    </div>
                    <span className="text-sm text-gray-400">Neon Flex</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-cyan/10 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-magenta/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

