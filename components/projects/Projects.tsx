"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import { ProjectsHeader } from './ProjectsHeader'
import { ProjectsGrid } from './ProjectsGrid'
import { ProjectsViewButton } from './ProjectsViewButton'
import { projectsContent } from '@/data/projects'

function Projects() {
  const [hoveredID, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#faf0ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ProjectsHeader
          subtitle={projectsContent.subtitle}
          title={projectsContent.title}
          titleHighlight={projectsContent.titleHighlight}
          description={projectsContent.description}
        />
        <ProjectsGrid 
          projects={projects} 
          hoveredID={hoveredID} 
          onHover={setHoveredId}
        />
        <ProjectsViewButton 
          href={projectsContent.buttonHref}
          label={projectsContent.buttonLabel}
        />
      </div>
    </section>
  )
}

export default Projects
