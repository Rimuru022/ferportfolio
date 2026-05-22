'use client';

import { useInView } from '@/lib/useInView';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span';
}

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref as any}
      className={`${className} reveal-up ${isInView ? 'reveal-up-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
