import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { tools } from '../data/skills';
export default function Tools() {
  return (
    <Section id="tools" eyebrow="Stack" title="Tools and technologies">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {tools.map((t, i) => (
          <li key={t.name}><Reveal delay={i * 40}>
            <div className="card flex items-center gap-3 px-4 py-3.5 transition hover:border-accent/50 hover:text-accent">
              <Icon name={t.icon} size={20} className="text-accent" /><span className="text-sm font-medium">{t.name}</span>
            </div>
          </Reveal></li>
        ))}
      </ul>
    </Section>
  );
}
