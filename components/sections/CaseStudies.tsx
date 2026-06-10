'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import Reveal from '@/components/Reveal';

const caseStudyImages: Record<number, { src: string; alt: string; caption?: string }[]> = {
  0: [
    { src: './images/imagen%20de%20rental%20flow%20exec%20pagina%20web.png', alt: 'Rental Operations AI web interface showing query submission and AI response with execution time and cost', caption: 'Custom web interface: query submission, AI response, execution time & cost breakdown' },
    { src: './images/diagrama%20inicial%20planeacion%20renta%20flow.png', alt: 'Initial planning diagram for the rental operations workflow drawn in Excalidraw', caption: 'Excalidraw planning: initial process architecture sketch' },
    { src: './images/full%20rental%20n8n%20flow.png', alt: 'Complete n8n workflow showing webhook, security guardrails, AI query, and Excel logging', caption: 'Full n8n flow: webhook → guardrails → AI → Excel audit log' },
    { src: './images/Openrouter%20logs%20cost%20per%201%20exec.png', alt: 'OpenRouter logs showing cost per execution across 5 AI calls per workflow run', caption: 'OpenRouter logs: ~5 AI calls per execution, cost per run tracked' },
  ],
  1: [
    { src: './images/inventory-1.jpg', alt: 'University inventory dashboard view 1' },
    { src: './images/inventory-2.jpg', alt: 'University inventory dashboard view 2' },
    { src: './images/inventory-3.jpg', alt: 'University inventory dashboard view 3' },
    { src: './images/inventory-4.jpg', alt: 'Power Query automation behind the inventory system' },
    { src: './images/n8n-inventory.jpg', alt: 'n8n workflow automation for inventory management' },
  ],
  2: [
    { src: './images/chatbi.jpg', alt: 'Secure GenAI ChatBI prototype interface showing natural language to SQL query generation' },
  ],
};

const caseStudyVideo: Record<number, string> = {
  0: 'https://canva.link/wznw1cytbu01xal',
};

export default function CaseStudies() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState<number[]>([0]);
  const [lightbox, setLightbox] = useState<string | null>(null);

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
            const video = caseStudyVideo[index];
            const isFeatured = index === 0;
            return (
              <Reveal key={index} delay={index * 120}>
                <div className={`border-t border-soft-ash/20 pt-6${isFeatured ? ' featured-case-study' : ''}`}>
                  <button
                    onClick={() => toggleCaseStudy(index)}
                    className="w-full text-left group"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {isFeatured && (
                          <span className="featured-badge">Complete Case Study · Photos · Diagrams · Video</span>
                        )}
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
                                  className="w-full cursor-pointer"
                                  onClick={() => setLightbox(images[0].src)}
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
                                      className="w-full cursor-pointer"
                                      onClick={() => setLightbox(img.src)}
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
                        {video && (
                          <div className="pt-4">
                            <a
                              href={video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="video-link group"
                            >
                              <span className="video-play-icon">▶</span>
                              <span>Watch Full Demo Video</span>
                              <span className="text-xs text-soft-ash/60 group-hover:text-cobalt-signal transition-colors duration-150">↗</span>
                            </a>
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

      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
        >
          <div className="lightbox-content">
            <img src={lightbox} alt="" className="lightbox-image" />
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
