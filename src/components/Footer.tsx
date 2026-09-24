import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'

export function Footer() {
  return <footer className="site-footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">S</span> Sagar<span className="brand-dot">.dev</span></a><p>Building intelligent systems<br />and practical software.</p><div className="footer-links"><a href="https://github.com/" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /> LinkedIn</a><a href="mailto:sagar.rathod@example.com"><Mail size={16} /> Email</a></div><small>© 2026 Sagar Rathod. All rights reserved.</small></div></footer>
}
