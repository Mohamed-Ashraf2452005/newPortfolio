import { CheckCircle2, Clock } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { training } from '../data/experience';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Credentials" title="Experience and training" lead="Structured, hands-on programs, newest first. Each shows whether it is completed or still in progress." alt>
      <ul className="grid gap-6 md:grid-cols-2">
        {training.map((t, i) => (
          <li key={t.id}>
            <Reveal delay={(i % 2) * 90} className="h-full">
              <article className="card flex h-full flex-col p-6 transition hover:border-accent/50">
                <div className="flex items-start justify-between gap-4">
                  <span aria-hidden="true" className="flex h-12 min-w-12 items-center justify-center rounded-xl border border-line bg-bg px-2 font-display text-sm font-semibold tracking-wider text-accent">{t.logo}</span>
                  {t.status === 'Ongoing'
                    ? <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/60 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"><Clock size={12} aria-hidden="true" /> Ongoing</span>
                    : <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-muted"><CheckCircle2 size={12} aria-hidden="true" /> Completed</span>}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{t.title}</h3>
                <p className="mt-1 text-sm text-muted">{t.org}</p>
                <p className="mt-3 font-mono text-xs text-accent">{t.period}</p>
                {t.statusNote && <p className="mt-2 text-sm text-ink/90"><span className="font-medium text-accent">Note:</span> {t.statusNote}. Technical and soft skills training is complete.</p>}
                {(t.hours || t.score) && (
                  <p className="mt-3 flex flex-wrap gap-2">
                    {t.hours && <span className="tag">{t.hours}</span>}
                    {t.score && <span className="tag text-accent">{t.score}</span>}
                  </p>
                )}
                <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-ink/85">
                  {t.topics.map((x) => <li key={x} className="flex gap-2.5"><span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{x}</li>)}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
