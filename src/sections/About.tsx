
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { aboutIntro, strengths } from '../data/profile';

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About me">
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#12203A] via-panel to-bg">
            <img
              src="/images/profile.png"
              alt="Mohamed Ashraf"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-ink/90">
              {aboutIntro}
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {strengths.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="card h-full p-5 transition hover:border-accent/50">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-bg text-accent">
                      <Icon name={s.icon} size={18} />
                    </span>

                    <h3 className="mt-4 font-display text-[15px] font-semibold">
                      {s.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
