import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { services } from '../data/services';
export default function Services() {
  return (
    <Section id="services" eyebrow="How I can help" title="Offered services" lead="Practical data work for small businesses and startups that need clear answers from their numbers." alt>
      <ol className="divide-y divide-line border-y border-line">
        {services.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 50}>
              <div className="group grid items-start gap-3 py-6 sm:grid-cols-[3rem_1fr_1.2fr] sm:gap-8 sm:py-7">
                <span className="font-mono text-xs text-muted" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="flex items-center gap-3 font-display text-lg font-semibold transition group-hover:text-accent">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-bg text-accent"><Icon name={s.icon} size={18} /></span>{s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted sm:pt-1.5">{s.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal className="mt-8"><a href="#contact" className="btn-primary">Discuss your project</a></Reveal>
    </Section>
  );
}
