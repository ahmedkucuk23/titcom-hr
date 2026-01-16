'use client';

import { motion } from 'motion/react';
import { 
  Lightbulb, 
  Zap, 
  Monitor, 
  Maximize, 
  Anchor, 
  Signpost, 
  Sparkles, 
  Wrench,
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';

const iconMap = {
  lightbulb: Lightbulb,
  zap: Zap,
  monitor: Monitor,
  maximize: Maximize,
  anchor: Anchor,
  signpost: Signpost,
  sparkles: Sparkles,
  wrench: Wrench,
};

const gradientColors = [
  'from-accent-cyan to-accent-cyan/50',
  'from-accent-magenta to-accent-magenta/50',
  'from-accent-yellow to-accent-yellow/50',
  'from-accent-cyan to-accent-magenta',
  'from-accent-magenta to-accent-yellow',
  'from-accent-yellow to-accent-cyan',
  'from-accent-cyan via-accent-magenta to-accent-yellow',
  'from-accent-magenta via-accent-cyan to-accent-yellow',
];

export function Services() {
  const { dictionary } = useLanguage();
  const { services } = dictionary;

  return (
    <section id="services" className="section">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-magenta/30 mb-6"
          >
            <span className="text-sm font-medium text-accent-magenta">{services.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            <span className="text-white">{services.title}</span>
            <br />
            <span className="text-gradient">{services.titleAccent}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            {services.description}
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const gradientClass = gradientColors[index % gradientColors.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-2xl bg-dark-800/50 border border-white/5 overflow-hidden card-hover">
                  {/* Hover gradient background */}
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500',
                    gradientClass
                  )} />
                  
                  {/* Icon */}
                  <div className={cn(
                    'relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br',
                    gradientClass
                  )}>
                    <Icon className="w-6 h-6 text-dark-950" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-accent-cyan" />
                  </div>

                  {/* Border gradient on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gradient-subtle pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            {services.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

