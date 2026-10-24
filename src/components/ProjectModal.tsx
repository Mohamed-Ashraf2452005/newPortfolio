import { useEffect, useRef, type ReactNode } from 'react';
import { ExternalLink, X } from 'lucide-react';
import type { Project } from '../data/projects';
import ProjectVisual from './ProjectVisual';

const Block = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="mt-6"><h4 className="eyebrow">{label}</h4><div className="mt-2 text-sm leading-relaxed text-ink/90">{children}</div></div>
);
const List = ({ items }: { items: string[] }) => <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">{items.map((i) => <li key={i}>{i}</li>)}</ul>;

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab' || !boxRef.current) return;
      const f = boxRef.current.querySelectorAll<HTMLElement>('button, a[href]');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = overflow; prev?.focus(); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={boxRef} role="dialog" aria-modal="true" aria-labelledby="pm-title" className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-line bg-bg p-6 shadow-2xl sm:rounded-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-muted">{project.categories.length ? project.categories.join(' · ') : 'Python Software'}</p>
            <h3 id="pm-title" className="mt-1 font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close project details" className="shrink-0 rounded-md border border-line p-2 text-muted hover:text-ink"><X size={18} aria-hidden="true" /></button>
        </div>
        <p className="mt-3 text-muted">{project.tagline}</p>
        <ProjectVisual type={project.visual} className="mt-6" />
        {project.objective && <Block label="Objective">{project.objective}</Block>}
        {project.context && <Block label="Context">{project.context}</Block>}
        {project.dataset && <Block label="Dataset">{project.dataset}</Block>}
        {project.workflow && <Block label="Implementation"><List items={project.workflow} /></Block>}
        {project.findings && <Block label="Results"><List items={project.findings} /></Block>}
        {project.limitations && <Block label="Limitations"><List items={project.limitations} /></Block>}
        <Block label="Technologies"><ul className="flex flex-wrap gap-2">{project.tech.map((t) => <li key={t} className="tag font-mono">{t}</li>)}</ul></Block>
        {project.links && (
          <div className="mt-7 flex flex-wrap gap-3 border-t border-line pt-6">
            {project.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-primary">{l.label} <ExternalLink size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>)}
          </div>
        )}
      </div>
    </div>
  );
}
