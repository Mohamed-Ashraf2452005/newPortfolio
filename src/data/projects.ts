export type Category = 'Data Analytics' | 'Business Intelligence' | 'Machine Learning';
export type Visual = 'f1' | 'failure' | 'sales' | 'housing' | 'car' | 'rag' | 'star' | 'dax' | 'queue';
export interface ProjectLink { label: string; href: string; kind: 'report' | 'notebook' }
export interface Project {
  id: string; title: string; tagline: string; categories: Category[]; tags: string[]; visual: Visual; tech: string[];
  objective?: string; context?: string; dataset?: string; workflow?: string[]; findings?: string[]; limitations?: string[]; links?: ProjectLink[];
}
export const filters: ('All Projects' | Category)[] = ['All Projects', 'Data Analytics', 'Business Intelligence', 'Machine Learning'];

export const projects: Project[] = [
  {
    id: 'f1', title: 'Formula 1 Analytics Platform', visual: 'f1', categories: ['Business Intelligence', 'Data Analytics'], tags: ['Sports Analytics', 'Dashboarding'],
    tagline: 'Race performance, driver achievements, constructor dominance, circuits, and pit stop efficiency across F1 history.',
    tech: ['Power BI', 'Tableau', 'Python', 'Pandas'],
    objective: 'Analyze race performance, driver achievements, constructor dominance, circuit characteristics, and pit stop efficiency across Formula 1 history.',
    context: 'Completed as a portfolio piece in the NTI Advanced Data Analytics track, with professional README documentation.'
  },
  {
    id: 'failure', title: 'Machine Failure Prediction', visual: 'failure', categories: ['Machine Learning'], tags: ['Predictive Maintenance', 'Classification'],
    tagline: 'Predictive-maintenance models that flag potential machine failures, served through an API.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'FastAPI'],
    objective: 'Flag potential machine failures early so maintenance can be planned before a breakdown.',
    dataset: 'AI4I 2020 Predictive Maintenance Dataset.',
    workflow: ['Feature engineering on the sensor and operating variables.', 'Benchmarked eight models against each other.', 'Wrapped the chosen model in a FastAPI service with a validated Pydantic request schema.', 'Set a decision threshold for raising failure alerts.']
  },
  {
    id: 'sales', title: 'Amazon Sales Analytics Dashboard', visual: 'sales', categories: ['Business Intelligence'], tags: ['Sales Analytics'],
    tagline: 'Interactive dashboard on sales performance, regional trends, product categories, and purchasing patterns.',
    tech: ['Power BI', 'DAX', 'ETL', 'Data Modeling'],
    objective: 'Support business decisions by analyzing sales performance, regional trends, product categories, and customer purchasing patterns.',
    links: [{ label: 'View Report', href: 'https://app.powerbi.com/links/Lrc672--UJ?ctid=dee1ed73-19ca-4ce0-8066-8261fbabbeaa&pbi_source=linkShare', kind: 'report' }]
  },
  {
    id: 'housing', title: 'California Housing Analysis', visual: 'housing', categories: ['Data Analytics'], tags: ['EDA', 'Geospatial Analytics'],
    tagline: 'Exploratory analysis of the factors behind property prices and geographic trends.',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Folium'],
    objective: 'Identify factors affecting property prices and understand geographic trends through visual analytics.',
    links: [{ label: 'View Notebook', href: 'https://colab.research.google.com/drive/1qHyyrVLzjadaSTJAs198KDq8T7pOJ5BR?usp=sharing', kind: 'notebook' }]
  },
  {
    id: 'car', title: 'Car Price Prediction', visual: 'car', categories: ['Machine Learning', 'Data Analytics'], tags: ['Regression'],
    tagline: 'A regression model that estimates vehicle prices from specifications and market features.',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Seaborn'],
    objective: 'Estimate vehicle prices from vehicle specifications and market features.',
    workflow: ['Exploratory analysis with Matplotlib and Seaborn in a structured Jupyter notebook.', 'Regression modeling in Scikit-Learn.']
  },
  {
    id: 'rag', title: 'Multilingual Support Ticket Classification with RAG', visual: 'rag', categories: ['Machine Learning'], tags: ['NLP', 'RAG'],
    tagline: 'Classifies support tickets across languages and adds retrieval-augmented answers.',
    tech: ['Python', 'TF-IDF', 'Linear SVM', 'xlm-roberta-base', 'multilingual-e5-large', 'bge-reranker-v2-m3', 'Qwen2.5-7B-Instruct', 'Streamlit'],
    objective: 'Route multilingual support tickets to the right queue and support agents with retrieved, generated answers.',
    workflow: ['Per-language spaCy lemmatization with word plus character n-gram TF-IDF features.', 'Multilingual sentence embeddings and structured metadata features.', 'Stratified cross-validation, grid search tuning, and a voting ensemble.', 'RAG stack: multilingual-e5-large embeddings, bge-reranker-v2-m3 reranking, 4-bit Qwen2.5-7B-Instruct generation.', 'Deployed with Streamlit through Kaggle and ngrok to meet the GPU requirement.'],
    findings: ['Queue classification accuracy improved from a baseline of about 42% to about 64%.'],
    limitations: ['Overlapping categories (Customer Service, Product Support, IT Support, Technical Support) remain the weakest area.']
  },
  {
    id: 'foodmart', title: 'Food Mart Retail BI Capstone', visual: 'star', categories: ['Business Intelligence'], tags: ['Excel', 'Star Schema'],
    tagline: 'Three executive dashboards on a star-schema data model in Excel.',
    tech: ['Microsoft Excel', 'Power Pivot'],
    objective: 'Give retail stakeholders executive-level views of the business.',
    workflow: ['Modeled the data as a star schema in Power Pivot.', 'Built three dashboards: Executive Overview, Customer Insights, and Product Performance.', 'Prepared a presentation to walk stakeholders through the results.']
  },
  {
    id: 'adventureworks', title: 'AdventureWorks Power BI Solution', visual: 'dax', categories: ['Business Intelligence'], tags: ['DAX', 'Star Schema'],
    tagline: 'Star schema, DAX measures, and a themed dashboard.',
    tech: ['Power BI', 'DAX'],
    context: 'Lab assignment completed as a Senior BI Consultant exercise.',
    dataset: 'AdventureWorks database.',
    workflow: ['Designed a star schema from the AdventureWorks tables.', 'Wrote DAX measures for the reporting layer.', 'Delivered a themed dashboard and the supporting files.']
  },
  {
    id: 'queue', title: 'Gaming Café Queue Simulator', visual: 'queue', categories: [], tags: ['Python', 'OOP'],
    tagline: 'Educational desktop simulator for teaching queue management and OOP.',
    tech: ['Python', 'Tkinter', 'OOP'],
    objective: 'Teach queue management and object-oriented design through an interactive simulation.',
    workflow: ['Layered architecture: models, core logic, and a Tkinter interface.', 'Automatic and manual modes, gate controls, and a finish mode that drains the queue.', 'Priority queue logic with CSV and JSON import.', 'Excel and JSON export across five sheets.']
  }
];
