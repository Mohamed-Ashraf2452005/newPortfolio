import { useEffect, useState } from 'react';
import { ArrowUp, Download, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const links = [['about', 'About'], ['skills', 'Skills'], ['impact', 'Impact'], ['experience', 'Experience'], ['community', 'Volunteering'], ['projects', 'Projects'], ['services', 'Services'], ['tools', 'Tools'], ['contact', 'Contact']] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8); setShowTop(y > 700); setProgress(max > 0 ? Math.min(y / max, 1) : 0); ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update(); window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' });
    ['home', ...links.map(([id]) => id)].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const cls = (id: string) => `relative rounded-md px-2.5 py-2 text-[13px] transition-colors ${active === id ? 'text-accent' : 'text-muted hover:text-ink'}`;
  return (
    <>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent"><div className="h-full origin-left bg-gradient-to-r from-blue to-accent" style={{ transform: `scaleX(${progress})` }} /></div>
      <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'bg-transparent'}`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg">Skip to content</a>
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="font-display text-[15px] font-semibold tracking-wide">M<span className="text-accent">.</span>ASHRAF</a>
          <ul className="hidden items-center xl:flex">
            {links.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} aria-current={active === id ? 'true' : undefined} className={cls(id)}>{label}
                {active === id && <span aria-hidden="true" className="absolute inset-x-2.5 -bottom-0.5 h-px bg-accent" />}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href={profile.cv} download className="hidden items-center gap-2 rounded-lg border border-accent/50 px-3.5 py-2 text-[13px] font-medium text-accent transition hover:bg-accent hover:text-bg sm:inline-flex"><Download size={15} aria-hidden="true" /> Download CV</a>
            <button type="button" className="rounded-md p-2 xl:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </nav>
        {open && (
          <div id="mobile-menu" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-bg px-5 pb-6 pt-2 xl:hidden">
            <ul>{links.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined} className={`block border-b border-line/50 py-3 text-base ${active === id ? 'text-accent' : 'text-ink'}`}>{label}</a></li>)}</ul>
            <a href={profile.cv} download onClick={() => setOpen(false)} className="btn-ghost mt-5 w-full"><Download size={16} aria-hidden="true" /> Download CV</a>
          </div>
        )}
      </header>
      <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
        className={`fixed bottom-5 right-5 z-40 rounded-full border border-line bg-panel p-3 text-accent shadow-lg transition duration-300 hover:border-accent ${showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`} tabIndex={showTop ? 0 : -1}>
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </>
  );
}
