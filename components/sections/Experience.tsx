'use client';

import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

const roleImages: Record<number, { src: string; alt: string }> = {
  1: {
    src: './images/n8n-compliance.png',
    alt: 'n8n automation workflow for certification procurement and compliance data analysis at Castrol (BP)',
  },
};

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="section-padding bg-warm-surface">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-label mb-10 md:mb-14">{t.experience.title}</p>
        </Reveal>

        <div className="space-y-10">
          {t.experience.roles.map((role, index) => {
            const image = roleImages[index];
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="border-t border-soft-ash/20 pt-6">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                    <h3 className="text-lg md:text-xl font-semibold text-warm-charcoal">
                      {role.title}
                    </h3>
                    <span
                      className="text-xs text-soft-ash uppercase tracking-widest"
                      style={{ letterSpacing: '0.08em' }}
                    >
                      {role.period}
                    </span>
                  </div>
                  <p className="text-sm text-soft-ash mb-3">{role.company}</p>
                  <ul className="space-y-2 max-w-prose">
                    {role.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm md:text-base leading-relaxed text-warm-charcoal/80"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {image && (
                    <figure className="case-image mt-5 max-w-xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full"
                      />
                    </figure>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
