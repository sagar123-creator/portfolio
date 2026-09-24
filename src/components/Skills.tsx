import { skillGroups } from '../data/skills'
import type { CSSProperties } from 'react'

export function Skills() {
  return <section className="section-wrap skills-section" id="skills">
    <div className="section-heading reveal"><span className="section-number">02</span><div><p className="eyebrow">The toolkit</p><h2>Skills &amp; tools</h2></div></div>
    <div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card reveal" style={{ '--delay': `${index * 60}ms` } as CSSProperties} key={group.title}><div className="skill-icon">{group.icon}</div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
  </section>
}
