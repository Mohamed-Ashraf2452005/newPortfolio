import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { aboutIntro, strengths } from '../data/profile';

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About me">
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div role="img" aria-label="Abstract illustration with the initials MA over a data grid" className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#12203A] via-panel to-bg">
            <svg viewBox="0 0 320 320" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => <line key={'v' + i} x1={20 + i * 35} x2={20 + i * 35} y1="20" y2="300" stroke="#263244" opacity=".5" />)}
              {Array.from({ length: 9 }).map((_, i) => <line key={'h' + i} y1={20 + i * 35} y2={20 + i * 35} x1="20" x2="300" stroke="#263244" opacity=".5" />)}
              <path d="M20 250 L90 210 L150 228 L210 150 L300 90" fill="none" stroke="#22D3EE" strokeWidth="2" opacity=".7" />
              {[[90,210],[150,228],[210,150],[300,90]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" fill="#22D3EE" />)}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center"><span className="font-display text-7xl font-semibold tracking-tight text-ink/95">M<span className="text-accent">A</span></span></div>
          </div>
        </Reveal>
        <div>
          <Reveal><p className="text-lg leading-relaxed text-ink/90">{aboutIntro}</p></Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {strengths.map((s, i) => (
              <li key={s.title}><Reveal delay={i * 80} className="h-full">
                <div className="card h-full p-5 transition hover:border-accent/50">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-bg text-accent"><Icon name={s.icon} size={18} /></span>
                  <h3 className="mt-4 font-display text-[15px] font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
