"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"


function Projects() {
  const [hoveredID, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#faf0ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mp-16">
          <div>
            <p className="text-[#6b1426] text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0b0b0b]">
              Projects
              <br />
              <span className="italic">selected</span>
            </h2>
          </div>
          <p className="text-[#666666] max-w-md text-pretty">
            Each project is a unique exploration of form, funcion, and context. Discover our selection of recent works.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {projects.slice(0, 4).map((project) => (
            <article 
            key={project.id}
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-4/3 bg-[#111d37] mb-6 overflow-hidden">
                <div className={`absolute inset-0 bg-[#6b1426] flex items-center justify-center transition-opacity duration-500 ${hoveredID === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <ArrowUpRight className="w-12 h-12 text-[#faf0ef]"/>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[#faf0ef]/80 text-sm tracking-wide">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground group-hover:text-[#6b1426]">
                    {project.title}
                  </h3>
                  <p className="text-[#0b0b0b] text-sm mt-2">
                    {project.location}
                  </p>
                </div>
              <ArrowUpRight className="w-5 h-5 text-[#0b0b0b] group-hover:text-[#6b1426] transition-colors flex-linear-0 mt-2"/>
              </div>
              <p className="text-[#0b0b0b] mt-4 text-pretty">
                {project.description}
              </p>
          </article>
        ))}
        </div>
        <div className="text-center mt-16">
          <a href="" className="inline-flex items-center gap-2 text-[#0b0b0b] text-sm tracking-widest uppercase border border-[#0b0b0b] px-8 py-4 hover:bg-[#0b0b0b] hover:text-[#faf0ef] transition-all duration-300">
            View all projects
            <ArrowUpRight className="w-4 h-4"/> 
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects