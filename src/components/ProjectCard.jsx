import React from 'react'

function ProjectCard() {
    return (
        <div className="terminal-card project-card">
            <small>[PROJECT_01]</small>

            <h3>IoT Attendance System</h3>

            <p>
                IoT-based attendance tracking with real-time capture,
                device communication and audit-focused architecture.
            </p>

            <div className="stack">
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Docker</span>
            </div>

            <div className="project-footer">
                <span>STATUS: Completed</span>
                <button>→</button>
            </div>
        </div>
    )
}

export default ProjectCard