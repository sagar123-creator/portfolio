import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = ['About', 'Skills', 'Projects', 'Journey', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">S</span> Sagar<span className="brand-dot">.dev</span></a>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
          <a className="nav-resume" href="#contact" onClick={() => setOpen(false)}>Resume <span>↗</span></a>
        </div>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>
  )
}
