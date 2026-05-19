import React from 'react'

function Sidebar() {
  return (
    <div>
      <div className="sidebar-header">
        <h1>caleb@engineer:~$</h1>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>[HOME]</li>
          <li>/ABOUT</li>
          <li>/PROJECTS</li>
          <li>/ENGINEERING</li>
          <li>/PHILOSOPHY</li>
          <li>/CONTACT</li>
        </ul>
      </nav>

      <div className="system-panel">
        <p>OS: Portfolio v1.0.0</p>
        <p>USER: Caleb</p>
        <p>ROLE: Software Engineer</p>
        <p>STATUS: Online</p>
      </div>

      <div className="quote-box">
        <p>
          "Good engineering is the ability to solve
          relevant problems with clarity,
          simplicity and the right tradeoffs."
        </p>
      </div>

      <div className="quote-box">
        <p>
          "Good engineering is the ability to solve
          relevant problems with clarity,
          simplicity and the right tradeoffs."
        </p>
      </div>
    </div>
  )
}

export default Sidebar