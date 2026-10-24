const bars = [45, 70, 55, 90, 65, 100, 78];
const chips = [{ t: 'Python', c: 'left-[-4%] top-[-3%]' }, { t: 'SQL', c: 'right-[-3%] top-[24%]' }, { t: 'Power BI', c: 'left-[-3%] bottom-[-3%]' }, { t: 'Scikit-Learn', c: 'right-[2%] bottom-[2%]' }];
export default function HeroPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div aria-hidden="true" className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_60%_40%,rgba(34,211,238,.16),transparent_65%)]" />
      <div className="relative rounded-2xl border border-line bg-gradient-to-b from-panel to-bg p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,.8)] sm:p-6" role="img" aria-label="Illustration of an analytics dashboard with a bar chart, a trend line and a model fit">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <span className="font-mono text-[11px] text-muted">analytics_overview</span>
          <span className="flex items-center gap-1.5 text-[11px] text-muted"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Illustrative</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => <div key={i} className="rounded-lg border border-line bg-bg/70 p-3"><div className="h-1.5 w-8 rounded bg-muted/50" /><div className={`mt-3 h-2.5 rounded ${i === 1 ? 'w-12 bg-accent' : 'w-14 bg-ink/80'}`} /></div>)}
        </div>
        <div className="mt-3 grid grid-cols-5 gap-3">
          <div className="col-span-3 rounded-lg border border-line bg-bg/70 p-3">
            <svg viewBox="0 0 200 90" className="block h-auto w-full" aria-hidden="true">
              <defs><linearGradient id="hp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#22D3EE" stopOpacity=".3" /><stop offset="1" stopColor="#22D3EE" stopOpacity="0" /></linearGradient></defs>
              {[22, 44, 66].map((y) => <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="#263244" strokeDasharray="3 4" />)}
              <path d="M0 70 L24 60 L48 66 L72 44 L96 52 L120 32 L144 38 L168 16 L200 10 L200 90 L0 90 Z" fill="url(#hp)" />
              <path d="M0 70 L24 60 L48 66 L72 44 L96 52 L120 32 L144 38 L168 16 L200 10" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinejoin="round" className="draw" />
              <path d="M0 74 L200 18" stroke="#3B82F6" strokeWidth="1.2" strokeDasharray="4 4" opacity=".8" />
            </svg>
          </div>
          <div className="col-span-2 flex h-full items-end gap-1.5 rounded-lg border border-line bg-bg/70 p-3">
            {bars.map((h, i) => <div key={i} className="grow-bar w-full rounded-sm bg-accent" style={{ height: `${h * 1.05}px`, opacity: 0.35 + i * 0.09, animationDelay: `${i * 80 + 200}ms` }} />)}
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-line bg-bg/70 p-3">
          <svg viewBox="0 0 300 50" className="block h-auto w-full" aria-hidden="true">
            {[[20,34],[44,28],[66,36],[92,22],[118,26],[140,14]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.4" fill="#22D3EE" />)}
            {[[170,30],[196,18],[220,24],[246,10],[272,16],[290,8]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.4" fill="none" stroke="#F8FAFC" strokeWidth="1.4" />)}
            <path d="M8 44 C100 40 180 12 292 4" stroke="#94A3B8" strokeDasharray="4 4" fill="none" />
          </svg>
        </div>
      </div>
      {chips.map((c, i) => (
        <span key={c.t} className={`floaty absolute ${c.c} rounded-lg border border-line bg-panel/95 px-3 py-1.5 font-mono text-[11px] text-ink shadow-lg`} style={{ animationDelay: `${i * 0.9}s` }}>{c.t}</span>
      ))}
    </div>
  );
}
