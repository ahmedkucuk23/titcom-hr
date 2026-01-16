'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center gap-1 p-1 rounded-full bg-dark-800/50 border border-white/10">
      {/* Background slider */}
      <motion.div
        layoutId="language-slider"
        className="absolute top-1 bottom-1 w-10 rounded-full bg-gradient-brand"
        initial={false}
        animate={{
          left: language === 'hr' ? '4px' : 'calc(100% - 44px)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
      
      <button
        onClick={() => setLanguage('hr')}
        className={cn(
          'relative z-10 w-10 h-8 flex items-center justify-center text-xs font-bold rounded-full transition-colors',
          language === 'hr' ? 'text-dark-950' : 'text-gray-400 hover:text-white'
        )}
        aria-label="Hrvatski"
      >
        HR
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'relative z-10 w-10 h-8 flex items-center justify-center text-xs font-bold rounded-full transition-colors',
          language === 'en' ? 'text-dark-950' : 'text-gray-400 hover:text-white'
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

