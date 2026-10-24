import { Users } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { community } from '../data/experience';
export default function Community() {
  return (
    <Section id="community" eyebrow="Beyond the desk" title="Volunteering and extracurricular activities" lead="Community involvement, kept separate from the formal training above.">
      <Reveal>
        <article className="card flex flex-col gap-6 border-l-2 border-l-accent p-6 sm:flex-row sm:items-start sm:p-8">
          <span aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-bg text-accent"><Users size={24} /></span>
          <div>
            <h3 className="font-display text-xl font-semibold">{community.title}</h3>
            <p className="mt-1 text-sm text-muted">{community.org} · <span className="font-mono text-xs text-accent">{community.period}</span></p>
            <ul className="mt-4 space-y-2 text-sm text-ink/90">
              {community.points.map((p) => <li key={p} className="flex gap-2.5"><span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{p}</li>)}
            </ul>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
