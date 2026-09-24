const steps = ['B.Tech Computer Engineering', 'AI / ML Exploration', 'Full-Stack Development', 'Academic & Personal Projects', 'Hackathons & Problem Solving']

export function Journey() {
  return <section className="section-wrap journey-section" id="journey"><div className="section-heading reveal"><span className="section-number">04</span><div><p className="eyebrow">Still in motion</p><h2>My journey</h2></div></div><div className="journey-track">{steps.map((step, index) => <div className={`journey-step reveal ${index === 0 ? 'active' : ''}`} key={step}><span className="journey-dot">{String(index + 1).padStart(2, '0')}</span><div><p className="journey-phase">{index === 0 ? 'The foundation' : index === 1 ? 'Curiosity' : index === 2 ? 'Putting it together' : index === 3 ? 'Learning by making' : 'The next challenge'}</p><h3>{step}</h3>{index === 0 && <p>Vidyalankar Institute of Technology</p>}</div></div>)}</div></section>
}
