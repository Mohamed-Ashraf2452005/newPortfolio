import { ArrowRight, Download } from 'lucide-react';
import { profile } from '../data/profile';
import HeroPanel from '../components/HeroPanel';

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(ellipse at 65% 35%, #000 10%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 65% 35%, #000 10%, transparent 70%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-3.5 py-1.5 text-xs text-muted">
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" /> Available for internships and relevant freelance work
          </p>
          <h1 id="hero-title" className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">Hi, I'm <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">Mohamed Ashraf.</span></h1>
          <p className="mt-4 font-display text-lg font-medium text-ink/90 sm:text-xl">{profile.headline}</p>
          <p className="mt-3 text-base font-medium text-accent sm:text-lg">{profile.statement}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#projects" className="btn-primary">View My Projects <ArrowRight size={16} aria-hidden="true" /></a>
            <a href={profile.cv} download className="btn-ghost"><Download size={16} aria-hidden="true" /> Download CV</a>
            <a href="#contact" className="px-1 text-sm font-medium text-muted underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent">Get in touch</a>
          </div>
        </div>
        <HeroPanel />
      </div>
    </section>
  );
}
