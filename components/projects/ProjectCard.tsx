import Link from 'next/link'
import { ProjectImage } from './ProjectImage'
import { ProjectInfo } from './ProjectInfo'
import { ProjectMeta } from './ProjectMeta'

interface Project {
  id: number
  slug: string
  title: string
  location: string
  category: string
  year: string
  description: string
  images: string[]
}

interface ProjectCardProps {
  project: Project
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function ProjectCard({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article 
        className="group cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="relative">
          <ProjectImage isHovered={isHovered} image={project.images[0]} />
          <ProjectMeta category={project.category} year={project.year} />
        </div>
        <ProjectInfo title={project.title} location={project.location} isHovered={isHovered} />
        <p className="text-[#0b0b0b] mt-4 text-pretty">
          {project.description}
        </p>
      </article>
    </Link>
  )
}
