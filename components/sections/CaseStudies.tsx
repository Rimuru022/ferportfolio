'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

const caseStudyImages: Record<number, { src: string; alt: string; caption?: string }[]> = {
  0: [
    { src: '/recruiters-page/images/inventory-1.jpg', alt: 'University inventory dashboard view 1' },
    { src: '/recruiters-page/images/inventory-2.jpg', alt: 'University inventory dashboard view 2' },
    { src: '/recruiters-page/images/inventory-3.jpg', alt: 'University inventory dashboard view 3' },
    { src: '/recruiters-page/images/inventory-4.jpg', alt: 'Power Query automation behind the inventory system' },
    { src: '/recruiters-page/images/n8n-inventory.png', alt: 'n8n workflow automation for inventory management' },
  ],
  1: [
    { src: '/recruiters-page/images/chatbi.jpg', alt: 'Secure GenAI ChatBI prototype interface showing natural language to SQL query generation' },
  ],
};

export default function CaseStudies() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState<number[]>([0]);

  const toggleCaseStudy = (index: number) => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="case-studies" className="section-padding bg-warm-ivory">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-label mb-10 md:mb-14">{t.caseStudies.title}</p>
        </Reveal>

        <div className="space-y-8">
          {t.caseStudies.items.map((item, index) => {
            const isExpanded = expanded.includes(index);
            const images = caseStudyImages[index];
            return (
              <Reveal key={index} delay={index * 120}>
                <div className="border-t border-soft-ash/20 pt-6">
                  <button
                    onClick={() => toggleCaseStudy(index)}
                    className="w-full text-left group"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-warm-charcoal group-hover:text-cobalt-signal transition-colors duration-150 mb-2">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-medium uppercase tracking-widest text-soft-ash/70 border border-soft-ash/20 px-2 py-0.5"
                              style={{ letterSpacing: '0.1em' }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-soft-ash text-2xl leading-none mt-1 shrink-0 transition-transform duration-300 ease-out-quart">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  <div className={`case-expand-grid ${isExpanded ? 'expanded' : ''}`}>
                    <div className="case-expand-inner">
                      <div className="mt-6 space-y-4 max-w-prose">
                        <div>
                          <p className="text-label mb-1.5">Challenge</p>
                          <p className="text-sm md:text-base leading-relaxed text-warm-charcoal/80">
                            {item.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-label mb-1.5">Build</p>
                          <p className="text-sm md:text-base leading-relaxed text-warm-charcoal/80">
                            {item.build}
                          </p>
                        </div>
                        <div>
                          <p className="text-label mb-1.5">Result</p>
                          <p className="text-sm md:text-base leading-relaxed text-warm-charcoal/80">
                            {item.result}
                          </p>
                        </div>

                        {images && images.length > 0 && (
                          <div className="pt-4">
                            {images.length === 1 ? (
                              <figure className="case-image">
                                <img
                                  src={images[0].src}
                                  alt={images[0].alt}
                                  loading="lazy"
                                  className="w-full"
                                />
                              </figure>
                            ) : (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {images.map((img, i) => (
                                  <figure key={i} className="case-image">
                                    <img
                                      src={img.src}
                                      alt={img.alt}
                                      loading="lazy"
                                      className="w-full"
                                    />
                                    {img.caption && (
                                      <figcaption className="text-[10px] text-soft-ash/60 mt-1 uppercase tracking-wider" style={{ letterSpacing: '0.06em' }}>
                                        {img.caption}
                                      </figcaption>
                                    )}
                                  </figure>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
