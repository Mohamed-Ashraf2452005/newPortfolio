import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { useCountUp } from '../components/useCountUp';
import { projects } from '../data/projects';
import { training } from '../data/experience';

function Metric({ target, label, note, delay }: { target: number; label: string; note?: string; delay: number }) {
  const { ref, value } = useCountUp(target);
  return (
    <Reveal delay={delay} className="h-full">
      <div className="card h-full p-6">
        <p className="font-display text-5xl font-semibold tracking-tight text-ink"><span ref={ref} aria-label={String(target)}>{value}</span></p>
        <p className="mt-2 text-sm font-medium">{label}</p>
        {note && <p className="mt-1 text-xs text-muted">{note}</p>}
      </div>
    </Reveal>
  );
}

export default function Impact() {
  const hours = training.reduce((n, t) => n + (t.hoursValue ?? 0), 0);
  return (
    <Section id="impact" eyebrow="Track record" title="Impact so far" lead="Figures are counted from the projects and training listed on this page.">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <li><Metric target={projects.length} label="Portfolio projects" delay={0} /></li>
        <li><Metric target={training.length} label="Training programs" delay={80} /></li>
        <li><Metric target={hours} label="Verified training hours" note="Programs without a stated hour count are not included." delay={160} /></li>
        <li><Metric target={1} label="Technical community" note="GDG Minya" delay={240} /></li>
      </ul>
    </Section>
  );
}
