import { useState } from 'react'
import { projectCategories, projects, type ProjectCategory } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All')
  const visibleProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return <section className="section-wrap projects-section" id="projects">
    <div className="section-heading reveal"><span className="section-number">03</span><div><p className="eyebrow">Selected work</p><h2>Things I&apos;ve built</h2></div><span className="heading-aside">04 projects / 2026</span></div>
    <div className="project-filters" aria-label="Filter projects">
      {projectCategories.map((category) => <button className={activeCategory === category ? 'is-active' : ''} key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</button>)}
    </div>
    <div className="projects-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
  </section>
}
