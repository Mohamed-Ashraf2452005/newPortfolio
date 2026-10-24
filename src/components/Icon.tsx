import { BarChart3, Bot, Brain, Building2, Code2, Cpu, Database, FileSpreadsheet, Github, GitBranch, LayoutDashboard, LineChart, Search, Sigma, Sparkles, Table2, Target, type LucideProps } from 'lucide-react';
const map = {
  search: Search, brain: Brain, chart: LineChart, target: Target, code: Code2, database: Database, chart2: BarChart3, sheet: FileSpreadsheet,
  table: Table2, sigma: Sigma, cpu: Cpu, git: GitBranch, github: Github, dash: LayoutDashboard, bi: Building2, clean: Sparkles, bot: Bot
};
export type IconName = keyof typeof map;
export default function Icon({ name, ...p }: { name: IconName } & LucideProps) {
  const C = map[name]; return <C aria-hidden="true" {...p} />;
}
