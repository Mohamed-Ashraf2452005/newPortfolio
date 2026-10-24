import type { ReactNode } from 'react';
import Reveal from './Reveal';
export default function Section({ id, eyebrow, title, lead, children, alt = false }: { id: string; eyebrow: string; title: string; lead?: string; children: ReactNode; alt?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-16 sm:py-24 ${alt ? 'border-y border-line/60 bg-panel/30' : ''}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="section-title">{title}</h2>
          {lead && <p className="mt-4 max-w-2xl leading-relaxed text-muted">{lead}</p>}
        </Reveal>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
