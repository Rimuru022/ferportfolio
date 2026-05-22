'use client';

import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

export default function Philosophy() {
  const { t } = useI18n();
  const cats = t.philosophy.categories;

  return (
    <section id="philosophy" className="section-padding bg-warm-surface">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 md:mb-16">
            <p className="text-label mb-3">{t.philosophy.title}</p>
            <p className="text-base md:text-lg leading-relaxed text-warm-charcoal/80 max-w-prose">
              {t.philosophy.text}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(cats).map(([key, category], index) => (
            <Reveal key={key} delay={index * 100}>
              <div>
                <h3
                  className="text-sm font-semibold text-warm-charcoal mb-3 uppercase tracking-widest"
                  style={{ letterSpacing: '0.08em' }}
                >
                  {category.title}
                </h3>
                <ul className="space-y-1.5">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-soft-ash">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
