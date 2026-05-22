'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { dictionaries, Locale, Dictionary } from './dictionaries';

interface I18nContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'en' ? 'es' : 'en'));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = dictionaries[locale];

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
