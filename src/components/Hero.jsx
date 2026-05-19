import React from 'react'

function Hero() {
  return (
    <section className="terminal-card hero-card">
      <div className="terminal-header">
        <span>caleb@engineer:~$ whoami</span>
      </div>

      <div className="hero-content">
        <h1>
          I build software systems
          that solve real problems
          and scale with purpose.
        </h1>

        <p>
          Software Engineer focused on backend architecture,
          system design and building reliable products.
        </p>

        <div className="focus-list">
          <span>→ Backend Infrastructure</span>
          <span>→ System Design</span>
          <span>→ Product Engineering</span>
          <span>→ IoT Systems</span>
        </div>
      </div>
    </section>
  )
}

export default Hero