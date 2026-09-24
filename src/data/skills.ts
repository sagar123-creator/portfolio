export type SkillGroup = {
  title: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'Programming', icon: '⌘', skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Frontend', icon: '◫', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vite'] },
  { title: 'Backend', icon: '⌬', skills: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Database', icon: '▦', skills: ['MySQL'] },
  { title: 'AI / ML', icon: '✦', skills: ['Machine Learning', 'NLP', 'RAG', 'Embeddings', 'Computer Vision', 'Face Recognition'] },
  { title: 'Tools', icon: '⚙', skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Google Colab', 'Ollama'] },
]
