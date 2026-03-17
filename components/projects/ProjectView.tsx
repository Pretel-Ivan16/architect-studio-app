"use client"

import { useState } from 'react'
import { projects } from "@/data/projects"
import { ProjectImage } from "@/components/ui/ProjectImage"
import { ProjectInfo } from "@/components/ui/ProjectInfo"
import { ProjectControls } from "./ProjectControls"

export function ProjectView() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <div className='relative w-full h-full'>
      <div className='relative w-full h-full'>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-1000 ease-out ${
              index === currentIndex 
                ? 'opacity-100 translate-x-0 scale-100' 
                : index > currentIndex 
                  ? 'opacity-0 translate-x-full scale-95' 
                  : 'opacity-0 -translate-x-full scale-95'
            }`}
          >
            <div className='relative w-full h-full'>
              {project.images[0] && (
                <ProjectImage
                  src={project.images[0]}
                  alt={project.title}
                />
              )}
              <ProjectInfo
                category={project.category}
                year={project.year}
                title={project.title}
                location={project.location}
              />
            </div>
          </div>
        ))}
      </div>
      <ProjectControls 
        currentIndex={currentIndex} 
        total={projects.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  )
}
