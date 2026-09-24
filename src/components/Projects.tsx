import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return <section className="section-wrap projects-section" id="projects">
    <div className="section-heading reveal"><span className="section-number">03</span><div><p className="eyebrow">Selected work</p><h2>Things I&apos;ve built</h2></div><span className="heading-aside">04 projects / 2026</span></div>
    <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
  </section>
}
