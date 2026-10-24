export type Status = 'Completed' | 'Ongoing';
export interface Training {
  id: string; logo: string; title: string; org: string; period: string; status: Status; statusNote?: string;
  hours?: string; hoursValue?: number; score?: string; topics: string[];
}
// Reverse chronological by start date.
export const training: Training[] = [
  { id: 'iti-ai', logo: 'ITI', title: 'AI and Machine Learning Foundation – Level 1', org: 'Information Technology Institute (ITI)', period: 'Aug 16 – Sep 7, 2026', status: 'Completed', hours: '90 hours', hoursValue: 90,
    topics: ['Introduction to AI and Python', 'Probability and Statistics for ML', 'Linear Algebra and Numerical Optimization', 'Data Preparation and Exploration', 'Neural Networks and Deep Learning'] },
  { id: 'nti-ada', logo: 'NTI', title: 'Advanced Data Analytics', org: 'National Telecommunication Institute (NTI)', period: 'Jul 19 – Aug 13, 2026', status: 'Completed', hours: '120 hours', hoursValue: 120, score: 'Final score: 100%',
    topics: ['Excel', 'Power BI', 'Tableau', 'Python', 'Freelancing services, pricing, and negotiation', 'Project planning, portfolio, and personal branding', 'Proposal writing'] },
  { id: 'dey-ml', logo: 'DEY', title: 'Machine Learning for Data Analysis', org: 'Digital Egypt Youth (DEY) – Creativa Innovation Hubs', period: 'Jun 14, 2026 – Present', status: 'Ongoing', statusNote: 'Coaching phase in progress', hours: '120 hours (90 technical + 30 soft skills)', hoursValue: 120,
    topics: ['Python, NumPy, Pandas', 'Statistics, visualization, EDA, data cleaning', 'Linear and Logistic Regression, Naive Bayes, KNN, SVM', 'Decision Trees and Ensemble Learning', 'Preprocessing, feature engineering, optimization, evaluation', 'Unsupervised learning, hyperparameter tuning, deployment'] },
  { id: 'depi-ml', logo: 'DEPI', title: 'Microsoft Machine Learning Engineer Track', org: 'Digital Egypt Pioneers Initiative (DEPI) – CLS', period: 'Nov 2025 – Jul 2026', status: 'Completed',
    topics: ['Python Programming and Python for Data Science and AI', 'Statistics and Linear Algebra fundamentals', 'Data Preprocessing and Visualization', 'Machine Learning and Deep Learning', 'Natural Language Processing', 'Computer Vision and Transfer Learning', 'Prompt Engineering'] },
  { id: 'iti-iot', logo: 'ITI', title: 'IoT Internship', org: 'Information Technology Institute (ITI) – SpimeSenseLabs', period: 'Aug 2025', status: 'Completed', hours: '60 hours', hoursValue: 60, score: 'Final evaluation: 100%',
    topics: ['IoT Value Chain and real-world IoT solutions', 'MasterOfThings IoT Platform', 'SigFox Innovation Kit, WiFi IoTik, and BLE Gateway'] }
];

export const community = {
  title: 'Technical Member', org: 'GDG Minya', period: '2025 – Present',
  points: ['Contributed to technical events and workshops.', 'Collaborated with team members to support community-driven learning and knowledge sharing in technology.']
};
