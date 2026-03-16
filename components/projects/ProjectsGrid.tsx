import { ProjectCard } from './ProjectCard'

interface Project {
  id: number
  title: string
  location: string
  category: string
  year: string
  description: string
}

interface ProjectsGridProps {
  projects: Project[]
  hoveredID: number | null
  onHover: (id: number | null) => void
}

export function ProjectsGrid({ projects, hoveredID, onHover }: ProjectsGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
      {projects.slice(0, 4).map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isHovered={hoveredID === project.id}
          onMouseEnter={() => onHover(project.id)}
          onMouseLeave={() => onHover(null)}
        />
      ))}
    </div>
  )
}
