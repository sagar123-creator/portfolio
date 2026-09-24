import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Mail, Terminal } from 'lucide-react'

export function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy reveal">
      <p className="eyebrow"><span className="eyebrow-dot" /> COMPUTER ENGINEERING <i /> AI/ML <i /> FULL-STACK</p>
      <h1>Building systems<br /><span>with a point of view.</span></h1>
      <p className="hero-lede">I&apos;m Sagar Rathod, a Computer Engineering student focused on turning complex problems into practical, intelligent software.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={16} /></a>
        <a className="button button-quiet" href="#contact">Let&apos;s connect <ArrowDown size={16} /></a>
        <a className="button button-quiet" href="/Sagar-Rathod-Resume.txt" download>Download resume <ArrowUpRight size={16} /></a>
      </div>
      <div className="social-row" aria-label="Social links">
        <span>Find me online</span>
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17} /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={17} /></a>
        <a href="mailto:sagar.rathod@example.com" aria-label="Email"><Mail size={17} /></a>
      </div>
    </div>
    <div className="hero-terminal reveal reveal-delay" aria-label="A small preview of a developer terminal">
      <div className="terminal-top"><span><b /> <b /> <b /></span><small>~/sagar/portfolio</small><Terminal size={14} /></div>
      <div className="terminal-body">
        <p><span className="terminal-prompt">01</span> <span className="syntax-key">const</span> <span className="syntax-blue">mindset</span> = <span className="syntax-string">&quot;curious&quot;</span></p>
        <p><span className="terminal-prompt">02</span> <span className="syntax-key">const</span> <span className="syntax-blue">focus</span> = [</p>
        <p className="indent"><span className="syntax-string">&quot;intelligence&quot;</span>,</p>
        <p className="indent"><span className="syntax-string">&quot;craft&quot;</span>,</p>
        <p className="indent"><span className="syntax-string">&quot;impact&quot;</span></p>
        <p>]</p>
        <p><span className="terminal-prompt">03</span> <span className="syntax-comment">// shipping ideas into reality</span></p>
        <div className="terminal-status"><span className="status-pulse" /> system ready <span>v1.0.0</span></div>
      </div>
    </div>
  </section>
}
