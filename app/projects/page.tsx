"use client"

import { useState } from 'react'
import { projects } from "@/data/projects"

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
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-32 bg-linear-to-t left-0 right-0 p-8 lg:p-12">
                <p className="text-xs lg:text-sm tracking-widest uppercase text-white/80 mb-6">
                  {project.category} — {project.year}
                </p>
                <h2 className="text-4xl lg:text-6xl font-serif text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-xl lg:text-2xl text-white/90">
                  {project.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute bottom-8 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12'>
        <button 
          onClick={goPrev}
          className='w-12 h-12 bg-[#6b1426] border border-[#6b1426] flex items-center justify-center text-white hover:bg-transparent hover:text-[#6b1426] transition-all cursor-pointer text-xl'
          aria-label="Proyecto anterior"
        >
          ←
        </button>
        
        <div className='text-white text-sm tracking-widest uppercase'>
          {currentIndex + 1} / {projects.length}
        </div>
        
        <button 
          onClick={goNext}
          className='w-12 h-12 bg-[#6b1426] border border-[#6b1426] flex items-center justify-center text-white hover:bg-transparent hover:text-[#6b1426] transition-all cursor-pointer text-xl'
          aria-label="Siguiente proyecto"
        >
          →
        </button>
      </div>
    </main>
  )
}

export default ProjectsPage
