'use client';

import { useI18n } from '@/lib/i18n';
import { useEffect, useState, useRef } from 'react';

const navLinks = [
  { id: 'hero', labelKey: 'home' as const },
  { id: 'philosophy', labelKey: 'philosophy' as const },
  { id: 'case-studies', labelKey: 'caseStudies' as const },
  { id: 'experience', labelKey: 'experience' as const },
  { id: 'contact', labelKey: 'contact' as const },
];

export default function Navigation() {
  const { t, locale, toggleLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-warm-surface/95' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="text-sm font-semibold tracking-tight text-warm-charcoal hover:text-cobalt-signal transition-colors duration-150"
        >
          Fernando Pérez
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`nav-active-dot text-xs font-medium uppercase tracking-widest transition-colors duration-150 ${
                      isActive
                        ? 'active text-warm-charcoal'
                        : 'text-soft-ash hover:text-cobalt-signal'
                    }`}
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {/* @ts-ignore */}
                    {t.nav[link.labelKey]}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            onClick={toggleLocale}
            className="text-xs font-medium uppercase tracking-widest text-soft-ash hover:text-cobalt-signal transition-colors duration-150"
            style={{ letterSpacing: '0.08em' }}
            aria-label="Toggle language"
          >
            <span className={locale === 'en' ? 'text-warm-charcoal font-semibold' : ''}>EN</span>
            <span className="mx-1 text-soft-ash/50">/</span>
            <span className={locale === 'es' ? 'text-warm-charcoal font-semibold' : ''}>ES</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
