import { BrainCircuit, Code2, MapPin, School } from 'lucide-react'

export function About() {
  return <section className="section-wrap about-section" id="about">
    <div className="section-heading reveal"><span className="section-number">01</span><div><p className="eyebrow">A little context</p><h2>About me</h2></div></div>
    <div className="about-grid">
      <div className="about-copy reveal"><p className="lead-copy">I&apos;m a Computer Engineering student at Vidyalankar Institute of Technology with a strong interest in <em>Artificial Intelligence, Machine Learning, Computer Vision,</em> and Full-Stack Development.</p><p>I enjoy building practical systems that combine software engineering with intelligent technologies, data processing, automation, and modern web development.</p><p className="about-note"><span className="note-line" />Currently based in Mumbai, India. Open to ideas, collaborations, and meaningful technical problems.</p></div>
      <div className="info-card reveal reveal-delay"><div className="info-card-head"><span>01 / profile</span><span>available</span></div><div className="info-list"><div><School size={18} /><span>Education<strong>B.Tech Computer Engineering</strong></span></div><div><BrainCircuit size={18} /><span>Institute<strong>Vidyalankar Institute of Technology</strong></span></div><div><MapPin size={18} /><span>Location<strong>Mumbai, India</strong></span></div><div><Code2 size={18} /><span>Focus<strong>AI/ML + Full-Stack Development</strong></span></div></div></div>
    </div>
  </section>
}
