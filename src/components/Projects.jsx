import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className="projects-section">
      <div className="section-header">
        <h2>FEATURED PROJECTS</h2>
        <button>VIEW ALL PROJECTS →</button>
      </div>

      <div className="projects-grid">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

export default Projects