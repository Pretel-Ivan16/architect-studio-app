"use client"

import { useState } from 'react'
import { projects } from "@/data/projects"
import { ButtonLeft } from "@/components/ui/ButtonLeft"
import { ButtonRight } from "@/components/ui/ButtonRight"
import { Index } from "@/components/ui/Index"
import { ProjectImage } from "@/components/ui/ProjectImage"
import { ProjectInfo } from "@/components/ui/ProjectInfo"

function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <main className='pt-20 h-screen bg-[#001f3f] flex items-center justify-center overflow-hidden relative'>
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
      <div className='absolute bottom-8 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12'>
        <ButtonLeft onClick={goPrev} />
        <Index currentIndex={currentIndex} total={projects.length} />
        <ButtonRight onClick={goNext} />
      </div>
    </main>
  )
}

export default ProjectsPage
