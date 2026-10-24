import type { Visual } from '../data/projects';
const A = '#22D3EE', B = '#3B82F6', L = '#263244', M = '#94A3B8', T = '#F8FAFC';

const alt: Record<Visual, string> = {
  f1: 'Illustrative preview: a race circuit outline with lap-time trend lines',
  failure: 'Illustrative preview: a sensor signal crossing an alert threshold',
  sales: 'Illustrative preview: sales bars, a trend line and a category breakdown',
  housing: 'Illustrative preview: a geographic scatter of points shaded by value',
  car: 'Illustrative preview: a scatter plot with a fitted regression line',
  rag: 'Illustrative preview: a pipeline from ticket to classification and retrieval-augmented answer',
  star: 'Illustrative preview: a star schema with a central fact table',
  dax: 'Illustrative preview: a star schema beside a measure and KPI cards',
  queue: 'Illustrative preview: customers waiting in a queue assigned to machines'
};

function Body({ v }: { v: Visual }) {
  switch (v) {
    case 'f1': return (<>
      <path d="M60 140 C40 110 70 70 120 78 C160 84 150 40 200 38 C250 36 270 70 250 100 C236 124 270 150 230 160 C180 172 90 170 60 140 Z" fill="none" stroke={L} strokeWidth="14" strokeLinejoin="round"/>
      <path d="M60 140 C40 110 70 70 120 78 C160 84 150 40 200 38 C250 36 270 70 250 100 C236 124 270 150 230 160 C180 172 90 170 60 140 Z" fill="none" stroke={A} strokeWidth="2" strokeDasharray="5 5" className="draw"/>
      <rect x="116" y="160" width="4" height="14" fill={T}/><circle cx="120" cy="160" r="3" fill={A}/>
      {[0,1,2,3,4].map(i=><rect key={i} x={20+i*10} y={176-[10,22,16,30,24][i]} width="6" height={[10,22,16,30,24][i]} rx="1" fill={B} opacity={.5+i*.1} className="grow-bar" style={{animationDelay:`${i*80}ms`}}/>)}
      <path d="M200 176 L220 160 L240 168 L262 148 L286 154" stroke={A} strokeWidth="2" fill="none" className="draw"/>
    </>);
    case 'failure': return (<>
      {[50,90,130].map(y=><line key={y} x1="20" x2="300" y1={y} y2={y} stroke={L} strokeDasharray="3 5"/>)}
      <line x1="20" x2="300" y1="62" y2="62" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="6 4" opacity=".8"/>
      <path d="M20 120 L50 112 L80 118 L110 104 L140 110 L170 90 L200 74 L225 52 L250 40 L280 34" fill="none" stroke={A} strokeWidth="2.4" strokeLinejoin="round" className="draw"/>
      <circle cx="225" cy="52" r="5" fill="#F59E0B"/><circle cx="225" cy="52" r="10" fill="none" stroke="#F59E0B" opacity=".5"/>
      <rect x="20" y="150" width="86" height="32" rx="6" fill="#0B1120" stroke={L}/><rect x="30" y="160" width="44" height="5" rx="2" fill={M}/><rect x="30" y="170" width="62" height="6" rx="3" fill={A}/>
      <rect x="116" y="150" width="86" height="32" rx="6" fill="#0B1120" stroke={L}/><rect x="126" y="160" width="36" height="5" rx="2" fill={M}/><rect x="126" y="170" width="50" height="6" rx="3" fill={B}/>
    </>);
    case 'sales': return (<>
      {[48,72,56,96,80,118,100].map((h,i)=><rect key={i} x={24+i*26} y={150-h} width="16" height={h} rx="3" fill={A} opacity={.35+i*.09} className="grow-bar" style={{animationDelay:`${i*70}ms`}}/>)}
      <path d="M32 112 L58 90 L84 100 L110 64 L136 78 L162 44 L188 56" fill="none" stroke={T} strokeWidth="1.8" strokeLinecap="round" className="draw" opacity=".85"/>
      <line x1="16" x2="212" y1="150" y2="150" stroke={L}/>
      <circle cx="258" cy="76" r="38" fill="none" stroke={L} strokeWidth="14"/>
      <circle cx="258" cy="76" r="38" fill="none" stroke={A} strokeWidth="14" strokeDasharray="95 240" transform="rotate(-90 258 76)"/>
      <circle cx="258" cy="76" r="38" fill="none" stroke={B} strokeWidth="14" strokeDasharray="60 240" strokeDashoffset="-95" transform="rotate(-90 258 76)"/>
      {[0,1,2].map(i=><rect key={i} x="226" y={134+i*14} width={[70,52,36][i]} height="6" rx="3" fill={[A,B,M][i]} opacity=".8"/>)}
    </>);
    case 'housing': return (<>
      <path d="M180 14 L214 26 L234 58 L224 96 L252 126 L246 160 L214 182 L170 170 L128 128 L112 88 L132 50 Z" fill="#0F1A2E" stroke={L} strokeWidth="1.5" transform="translate(-30 0)"/>
      {[[100,40],[116,52],[108,70],[128,64],[96,86],[120,92],[140,80],[152,104],[132,118],[160,128],[176,148],[146,138],[188,160],[168,166],[104,58],[142,56]].map(([x,y],i)=>
        <circle key={i} cx={x+34} cy={y} r={3.5+(i%3)} fill={i%3===0?A:i%3===1?B:T} opacity={.5+(i%4)*.12}/>)}
      <rect x="236" y="20" width="62" height="64" rx="8" fill="#0B1120" stroke={L}/>
      {[0,1,2,3].map(i=><rect key={i} x="246" y={30+i*13} width={[40,32,24,16][i]} height="6" rx="3" fill={A} opacity={1-i*.2}/>)}
      <rect x="236" y="100" width="62" height="50" rx="8" fill="#0B1120" stroke={L}/><path d="M246 140 L258 126 L270 132 L288 112" stroke={B} strokeWidth="2" fill="none"/>
    </>);
    case 'car': return (<>
      <line x1="30" x2="30" y1="20" y2="170" stroke={L}/><line x1="30" x2="296" y1="170" y2="170" stroke={L}/>
      {[[48,150],[66,140],[78,146],[96,126],[110,134],[128,108],[142,118],[160,96],[176,100],[192,78],[206,86],[224,62],[240,70],[262,44],[278,52],[88,138],[150,110],[214,72]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3.4" fill={i%2?A:T} opacity=".85"/>)}
      <path d="M40 154 L286 40" stroke={A} strokeWidth="2.2" className="draw"/>
      <path d="M40 154 L286 40" stroke={A} strokeWidth="14" opacity=".08"/>
      <g transform="translate(246 128)"><path d="M0 0 L34 0 L44 11 L34 22 L0 22 Z" fill={B} opacity=".9"/><circle cx="9" cy="11" r="3" fill="#0B1120"/></g>
    </>);
    case 'rag': return (<>
      {[[20,22,'Ticket'],[120,22,'Classify'],[220,22,'Queue']].map(([x,y,t])=><g key={t as string}><rect x={x as number} y={y as number} width="80" height="34" rx="8" fill="#0B1120" stroke={L}/><text x={(x as number)+40} y={(y as number)+21} textAnchor="middle" fontSize="11" fill={M}>{t}</text></g>)}
      {[[20,116,'Embed'],[120,116,'Retrieve'],[220,116,'Answer']].map(([x,y,t])=><g key={t as string}><rect x={x as number} y={y as number} width="80" height="34" rx="8" fill="#0B1120" stroke={A}/><text x={(x as number)+40} y={(y as number)+21} textAnchor="middle" fontSize="11" fill={T}>{t}</text></g>)}
      <path d="M100 39 H120 M200 39 H220 M100 133 H120 M200 133 H220 M60 56 V116" stroke={M} fill="none"/>
      <rect x="20" y="170" width="280" height="6" rx="3" fill={L}/><rect x="20" y="170" width="150" height="6" rx="3" fill={A} className="grow-bar" style={{animationName:'none'}}/>
    </>);
    case 'star': case 'dax': return (<>
      <rect x="116" y="68" width="88" height="64" rx="8" fill="#0B1120" stroke={A}/><text x="160" y="94" textAnchor="middle" fontSize="11" fill={T}>Fact</text>
      {[0,1,2].map(i=><rect key={i} x="130" y={104+i*8} width={[56,44,50][i]} height="3" rx="1.5" fill={M} opacity=".5"/>)}
      {[[20,18],[220,18],[20,138],[220,138]].map(([x,y],i)=><g key={i}><rect x={x} y={y} width="80" height="44" rx="8" fill="#0B1120" stroke={L}/><rect x={x+10} y={y+12} width="36" height="5" rx="2" fill={M}/><rect x={x+10} y={y+24} width="52" height="5" rx="2" fill={B} opacity=".8"/></g>)}
      <path d="M100 40 L132 68 M220 40 L188 68 M100 160 L132 132 M220 160 L188 132" stroke={A} opacity=".6" fill="none"/>
      {v==='dax' && <><rect x="112" y="150" width="96" height="30" rx="6" fill="#111827" stroke={L}/><text x="160" y="169" textAnchor="middle" fontSize="10" fill={A} fontFamily="monospace">Measure = SUM( )</text></>}
    </>);
    default: return (<>
      {[0,1,2,3].map(i=><g key={i}><circle cx={30+i*26} cy="46" r="9" fill="none" stroke={i<3?A:L} opacity={1-i*.12}/><circle cx={30+i*26} cy="46" r="3" fill={i<3?A:L}/></g>)}
      <path d="M130 46 H160" stroke={M} strokeDasharray="3 3"/>
      {[0,1,2].map(i=><g key={i}><rect x={172} y={20+i*30} width="124" height="22" rx="6" fill="#0B1120" stroke={L}/><rect x={178} y={26+i*30} width={[84,60,96][i]} height="10" rx="4" fill={[A,B,A][i]} opacity=".75" className="grow-bar" style={{animationName:'none'}}/></g>)}
      <rect x="20" y="124" width="276" height="48" rx="8" fill="#0B1120" stroke={L}/>
      {[0,1,2,3,4,5,6].map(i=><rect key={i} x={32+i*36} y={160-[10,18,12,26,16,22,14][i]} width="22" height={[10,18,12,26,16,22,14][i]} rx="2" fill={A} opacity={.4+i*.07}/>)}
    </>);
  }
}

export default function ProjectVisual({ type, caption = true, className = '' }: { type: Visual; caption?: boolean; className?: string }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className="relative overflow-hidden rounded-xl border border-line bg-gradient-to-br from-[#0F1A2E] to-bg">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <svg viewBox="0 0 320 200" role="img" aria-label={alt[type]} className="relative block aspect-[16/10] h-auto w-full"><Body v={type} /></svg>
      </div>
      {caption && <figcaption className="mt-1.5 text-[11px] text-muted">Illustrative preview, not a project screenshot</figcaption>}
    </figure>
  );
}
