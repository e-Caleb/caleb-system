import React from 'react'

function StatusPanel() {
  return (
    <section className="terminal-card status-card">
      <div className="terminal-header">
        <span>SYSTEM STATUS</span>
      </div>

      <div className="status-grid">
        <div>
          <label>Role</label>
          <span>Software Engineer</span>
        </div>

        <div>
          <label>Experience</label>
          <span>Building real-world systems</span>
        </div>

        <div>
          <label>Primary Stack</label>
          <span>Node.js, React, MongoDB</span>
        </div>

        <div>
          <label>Availability</label>
          <span className="active">Open to meaningful work</span>
        </div>
      </div>
    </section>
  )
}

export default StatusPanel