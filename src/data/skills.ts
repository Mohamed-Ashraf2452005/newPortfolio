export interface SkillGroup { icon: 'search' | 'code' | 'chart' | 'brain'; title: string; items: string[] }
export const skills: SkillGroup[] = [
  { icon: 'search', title: 'Data Analytics', items: ['Data Analysis', 'Exploratory Data Analysis', 'Statistics', 'Data Cleaning', 'Data Preprocessing'] },
  { icon: 'code', title: 'Programming and Data', items: ['Python', 'SQL', 'Pandas', 'NumPy'] },
  { icon: 'chart', title: 'Business Intelligence', items: ['Power BI', 'Tableau', 'Excel', 'Data Visualization', 'DAX', 'Data Modeling'] },
  { icon: 'brain', title: 'Machine Learning', items: ['Scikit-Learn', 'Regression', 'Classification', 'Feature Engineering', 'Model Evaluation', 'Predictive Analytics'] }
];
export const tools = [
  { name: 'Python', icon: 'code' }, { name: 'SQL', icon: 'database' }, { name: 'Power BI', icon: 'chart' }, { name: 'Tableau', icon: 'chart2' },
  { name: 'Excel', icon: 'sheet' }, { name: 'Pandas', icon: 'table' }, { name: 'NumPy', icon: 'sigma' }, { name: 'Scikit-Learn', icon: 'cpu' },
  { name: 'Git', icon: 'git' }, { name: 'GitHub', icon: 'github' }
] as const;
