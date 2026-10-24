import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { profile } from '../data/profile';

const channels = [
  { label: 'Email', sub: profile.email, href: `mailto:${profile.email}`, Icon: Mail, ext: false, aria: 'Send an email to Mohamed Ashraf' },
  { label: 'LinkedIn', sub: 'Connect professionally', href: profile.linkedin, Icon: Linkedin, ext: true, aria: 'Mohamed Ashraf on LinkedIn (opens in a new tab)' },
  { label: 'GitHub', sub: 'Code and notebooks', href: profile.github, Icon: Github, ext: true, aria: 'Mohamed Ashraf on GitHub (opens in a new tab)' },
  { label: 'WhatsApp', sub: 'Quick message', href: profile.whatsapp, Icon: MessageCircle, ext: true, aria: 'Message Mohamed Ashraf on WhatsApp (opens in a new tab)' }
];

export default function Contact() {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setState('copied'); } catch { setState('failed'); }
    window.clearTimeout(timer.current); timer.current = window.setTimeout(() => setState('idle'), 2500);
  };
  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's work together" lead="I am open to internships, entry-level roles, and relevant freelance projects in data analytics and machine learning." alt>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((c, i) => (
          <li key={c.label}><Reveal delay={i * 70} className="h-full">
            <a href={c.href} aria-label={c.aria} {...(c.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="card group flex h-full flex-col p-5 transition hover:-translate-y-1 hover:border-accent/60">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-bg text-accent transition group-hover:bg-accent group-hover:text-bg"><c.Icon size={20} aria-hidden="true" /></span>
              <span className="mt-4 font-display font-semibold">{c.label}</span>
              <span className="mt-1 break-all text-xs text-muted">{c.sub}</span>
            </a>
          </Reveal></li>
        ))}
      </ul>
      <Reveal className="mt-6">
        <button type="button" onClick={copy} className="btn-ghost">{state === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />} Copy email address</button>
        <p role="status" aria-live="polite" className="mt-3 h-5 text-sm text-muted">{state === 'copied' ? 'Email address copied to clipboard.' : state === 'failed' ? 'Copy failed. Please use the email card instead.' : ''}</p>
      </Reveal>
    </Section>
  );
}
