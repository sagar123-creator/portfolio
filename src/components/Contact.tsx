import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, Check, Mail } from 'lucide-react'

export function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }
  return <section className="contact-section" id="contact"><div className="section-wrap contact-grid"><div className="contact-copy reveal"><p className="eyebrow">05 / make a connection</p><h2>Let&apos;s build<br /><span>something useful.</span></h2><p>I&apos;m open to opportunities, collaborations, hackathons, and interesting technical projects.</p><a href="mailto:sagar.rathod@example.com" className="email-link"><Mail size={16} /> sagar.rathod@example.com</a></div><form className="contact-form reveal reveal-delay" onSubmit={handleSubmit}><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label></div><label>Message<textarea name="message" required placeholder="Tell me a little about what you're building..." rows={5} /></label><button type="submit" className="button button-primary">{sent ? <>Message ready <Check size={16} /></> : <>Send message <ArrowUpRight size={16} /></>}</button>{sent && <p className="form-note" role="status">Thanks. Your message is ready to send from your email client.</p>}</form></div></section>
}
