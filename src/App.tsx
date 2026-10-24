import Nav from './components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Impact from './sections/Impact';
import Experience from './sections/Experience';
import Community from './sections/Community';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Tools from './sections/Tools';
import Contact from './sections/Contact';
import { profile } from './data/profile';

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero /><About /><Skills /><Impact /><Experience /><Community /><Projects /><Services /><Tools /><Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} <span className="text-ink">{profile.name}</span> · {profile.headline}</p>
          <p className="text-xs">Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}
