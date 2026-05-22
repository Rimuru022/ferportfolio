'use client';

import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="section-padding bg-warm-ivory">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-label mb-10 md:mb-14">{t.nav.contact}</p>
        </Reveal>

        <div className="max-w-prose space-y-8">
          <Reveal delay={100}>
            <div>
              <p className="text-label mb-2">Education</p>
              <p className="text-base md:text-lg leading-relaxed text-warm-charcoal/80">
                {t.contact.education}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={`mailto:${t.contact.email}`}
                className="group inline-flex items-center gap-2 text-sm md:text-base text-warm-charcoal hover:text-cobalt-signal transition-colors duration-150"
              >
                <span className="text-label">{t.contact.emailLabel}</span>
                <span className="font-medium">{t.contact.emailPlaceholder}</span>
              </a>
              <a
                href={`https://${t.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm md:text-base text-warm-charcoal hover:text-cobalt-signal transition-colors duration-150"
              >
                <span className="text-label">{t.contact.linkedinLabel}</span>
                <span className="font-medium">{t.contact.linkedinPlaceholder}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
