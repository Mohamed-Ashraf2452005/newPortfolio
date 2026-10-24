import { useCallback, useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import ProjectModal from '../components/ProjectModal';
import ProjectVisual from '../components/ProjectVisual';
import { filters, projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All Projects');
  const [openId, setOpenId] = useState<string | null>(null);
  const list = useMemo(() => (filter === 'All Projects' ? projects : projects.filter((p) => (p.categories as string[]).includes(filter))), [filter]);
  const open = projects.find((p) => p.id === openId) ?? null;
  const close = useCallback(() => setOpenId(null), []);
  return (
    <Section id="projects" eyebrow="Portfolio" title="Featured projects" lead="Business intelligence, predictive modeling, and exploratory analysis. Open any project for its workflow and results.">
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {filters.map((c) => (
          <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-2 text-sm transition ${filter === c ? 'border-accent bg-accent font-semibold text-bg' : 'border-line text-muted hover:border-accent/60 hover:text-ink'}`}>{c}</button>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted" role="status" aria-live="polite">Showing {list.length} {list.length === 1 ? 'project' : 'projects'}</p>
      <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <li key={p.id}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <article className="card group flex h-full flex-col p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_40px_-24px_rgba(34,211,238,.35)]">
                <ProjectVisual type={p.visual} caption={false} />
                <div className="flex flex-1 flex-col px-1.5 pb-1.5 pt-4">
                  <p className="text-xs text-accent">{p.categories.length ? p.categories.join(' · ') : 'Python Software'}</p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.tagline}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => <li key={t} className="tag font-mono !text-[11px]">{t}</li>)}
                    {p.tech.length > 4 && <li className="px-1 py-1 font-mono text-[11px] text-muted">+{p.tech.length - 4}</li>}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
                    <button type="button" onClick={() => setOpenId(p.id)} aria-haspopup="dialog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
                      View details <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> for {p.title}</span>
                    </button>
                    {p.links?.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-ink">
                        {l.label} <ExternalLink size={13} aria-hidden="true" /><span className="sr-only"> for {p.title} (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-muted">Previews are illustrative graphics, not project screenshots. Report and notebook links appear only where a published version exists.</p>
      {open && <ProjectModal project={open} onClose={close} />}
    </Section>
  );
}
