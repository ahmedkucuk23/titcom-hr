'use client';

import { motion } from 'motion/react';
import { Check, ArrowRight, Monitor, Tv, Presentation } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function Rental() {
  const { dictionary } = useLanguage();
  const { rental } = dictionary;

  return (
    <section id="rental" className="section">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-brand p-[1px] rounded-3xl">
              <div className="absolute inset-[1px] bg-dark-900 rounded-3xl" />
            </div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 mb-6"
                  >
                    <Tv className="w-4 h-4 text-accent-cyan" />
                    <span className="text-sm font-medium text-accent-cyan">{rental.badge}</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="section-title"
                  >
                    <span className="text-white">{rental.title}</span>
                    <br />
                    <span className="text-gradient">{rental.titleAccent}</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-400 text-lg mb-8"
                  >
                    {rental.description}
                  </motion.p>

                  {/* Features list */}
                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-3 mb-8"
                  >
                    {rental.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-dark-950" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </motion.ul>

                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    href="#contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <span>{rental.cta}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Right visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Digital display mockup */}
                  <div className="relative">
                    {/* Main display */}
                    <div className="aspect-[4/3] rounded-2xl bg-dark-800 border border-white/10 overflow-hidden relative">
                      <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
                        {/* Screen content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-display font-bold text-gradient-animated mb-2">
                              LED-i-POSTER
                            </div>
                            <div className="text-sm text-gray-500">Digital Signage Solution</div>
                          </div>
                        </div>
                        
                        {/* Animated scan line */}
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent animate-[scan_3s_linear_infinite]" 
                            style={{
                              animation: 'scan 3s linear infinite',
                            }}
                          />
                        </div>
                        
                        {/* Corner UI elements */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                          <span className="text-xs text-accent-cyan font-mono">LIVE</span>
                        </div>
                        <div className="absolute top-3 right-3 text-xs text-gray-500 font-mono">
                          HD 1080p
                        </div>
                      </div>
                      
                      {/* Display stand */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-gradient-to-b from-gray-600 to-gray-700 rounded-b-lg" />
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center shadow-xl">
                      <Monitor className="w-8 h-8 text-accent-cyan" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center shadow-xl">
                      <Presentation className="w-6 h-6 text-accent-magenta" />
                    </div>
                  </div>

                  {/* What's included box */}
                  <div className="mt-8 p-6 rounded-xl bg-dark-800/50 border border-white/5">
                    <h4 className="font-display font-semibold text-white mb-4">{rental.includes.title}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {rental.includes.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <Check className="w-4 h-4 text-accent-yellow" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}

