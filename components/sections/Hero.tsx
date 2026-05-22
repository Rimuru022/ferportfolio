'use client';

import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center px-6 pt-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="max-w-prose">
          <p className="hero-entrance hero-entrance-delay-1 text-label mb-4">
            {t.hero.role}
          </p>
          <h1
            className="hero-entrance hero-entrance-delay-2 text-5xl font-bold tracking-tight text-warm-charcoal md:text-6xl lg:text-7xl mb-6"
            style={{ lineHeight: 1.05 }}
          >
            {t.hero.name}
          </h1>
          <p className="hero-entrance hero-entrance-delay-3 text-base md:text-lg leading-relaxed text-warm-charcoal/80 mb-10 max-w-prose">
            {t.hero.summary}
          </p>
          <div className="hero-entrance hero-entrance-delay-4 flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="btn-lift inline-flex items-center px-6 py-3 text-xs font-medium uppercase tracking-widest bg-warm-charcoal text-warm-ivory hover:bg-cobalt-signal"
              style={{ letterSpacing: '0.08em' }}
            >
              {t.hero.downloadResume}
            </a>
            <a
              href="https://github.com/Rimuru022"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex items-center px-6 py-3 text-xs font-medium uppercase tracking-widest border border-warm-charcoal text-warm-charcoal hover:border-cobalt-signal hover:text-cobalt-signal"
              style={{ letterSpacing: '0.08em' }}
            >
              {t.hero.viewGithub}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
