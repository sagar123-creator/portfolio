export type Project = {
  name: string
  category: ProjectCategory
  description: string
  technologies: string[]
  features: string[]
  accent: 'blue' | 'cyan' | 'violet' | 'amber'
  visual: 'lex' | 'port' | 'network' | 'dossier'
  github: string
  demo: string
}

export const projectCategories = ['All', 'AI / NLP', 'Computer Vision', 'Data Analytics', 'Graph Analytics'] as const
export type ProjectCategory = Exclude<(typeof projectCategories)[number], 'All'>

export const projects: Project[] = [
  {
    name: 'LexClarity',
    category: 'AI / NLP',
    description: 'An AI-powered legal document analysis platform designed to help users understand complex legal documents through intelligent summarization, retrieval-augmented question answering, and document analysis.',
    technologies: ['Python', 'NLP', 'RAG', 'ChromaDB', 'Embeddings', 'LLMs'],
    features: ['Document upload', 'PDF text extraction', 'OCR', 'Document preprocessing', 'Intelligent summarization', 'Semantic search', 'RAG-based question answering', 'Document chatbot'],
    accent: 'blue',
    visual: 'lex',
    github: 'https://github.com/',
    demo: '#contact',
  },
  {
    name: 'Port Operations Intelligence',
    category: 'Data Analytics',
    description: 'A data-driven platform for analyzing port operations and supporting smarter decisions around vessel movement, congestion, turnaround time, and demurrage.',
    technologies: ['Python', 'Data Analytics', 'Machine Learning', 'SQL', 'React', 'Node.js'],
    features: ['Port performance dashboard', 'Vessel analytics', 'Congestion analysis', 'Turnaround-time analysis', 'Demurrage estimation', 'Operational insights', 'Data visualization'],
    accent: 'cyan',
    visual: 'port',
    github: 'https://github.com/',
    demo: '#contact',
  },
  {
    name: 'Criminal Network Analysis System',
    category: 'Graph Analytics',
    description: 'An investigation-support platform designed to analyze relationships between entities such as people, organizations, phone numbers, locations, and communication records.',
    technologies: ['Python', 'FastAPI', 'React', 'Graph Analytics', 'Machine Learning', 'Database Systems'],
    features: ['Entity relationship visualization', 'Network graph', 'Entity profiles', 'Relationship analysis', 'Investigation dashboard', 'Search and filtering', 'Network insights'],
    accent: 'violet',
    visual: 'network',
    github: 'https://github.com/',
    demo: '#contact',
  },
  {
    name: 'CONFIDENTIAL DOSSIER',
    category: 'Computer Vision',
    description: 'A Python-based computer vision project that detects faces through a webcam, compares them against a known-face dataset using facial embeddings, identifies matching profiles, and displays associated dossier information through a custom interface.',
    technologies: ['Python', 'OpenCV', 'face_recognition', 'dlib', 'NumPy', 'JSON'],
    features: ['HOG face detection', '128-dimensional face embeddings', 'Face matching', 'Euclidean distance', 'Recognition threshold', 'Known-face dataset', 'JSON metadata', 'Real-time webcam processing'],
    accent: 'amber',
    visual: 'dossier',
    github: 'https://github.com/',
    demo: '#contact',
  },
]
