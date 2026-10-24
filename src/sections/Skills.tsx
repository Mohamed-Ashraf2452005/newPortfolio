import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { skills } from '../data/skills';
export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills" lead="A stack covering the path from raw data to the dashboard or model that explains it." alt>
      <ul className="grid gap-5 sm:grid-cols-2">
        {skills.map((g, i) => (
          <li key={g.title}><Reveal delay={i * 80} className="h-full">
            <div className="card h-full p-6 transition hover:border-accent/50">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-bg text-accent"><Icon name={g.icon} size={20} /></span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">{g.items.map((s) => <li key={s} className="tag">{s}</li>)}</ul>
            </div>
          </Reveal></li>
        ))}
      </ul>
    </Section>
  );
}
