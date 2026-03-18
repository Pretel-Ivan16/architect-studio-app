"use client"

import { use } from "react"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Title } from "@/components/ui/Title"
import { Description } from "@/components/ui/Description"
import { ProjectHeroImage } from "./ProjectHeroImage"
import { ProjectDetailsCard } from "./ProjectDetailsCard"
import { ProjectGallery } from "./ProjectGallery"

interface ProjectIndividualProps {
  params: Promise<{
    slug: string
  }>
}

export function ProjectIndividual({ params }: ProjectIndividualProps) {
  const { slug } = use(params)
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="pt-20 min-h-screen bg-[#faf0ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <nav className="mb-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-[#0b0b0b] hover:text-[#6b1426] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </nav>
        <article className="mb-16">
          <ProjectHeroImage src={project.images[0]} alt={project.title} />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Title as="h1" className="text-[#0b0b0b] mb-4">
                {project.title}
              </Title>
              <Description className="text-[#0b0b0b]/60 max-w-none">
                {project.description}
              </Description>
            </div>
            <div className="lg:col-span-1">
              <ProjectDetailsCard project={project} />
            </div>
          </div>
        </article>
        <ProjectGallery images={project.images} projectTitle={project.title} />
        <nav className="border-t border-[#0b0b0b]/10 pt-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-[#0b0b0b] text-sm tracking-widest uppercase border border-[#0b0b0b] px-8 py-4 hover:bg-[#0b0b0b] hover:text-[#faf0ef] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </nav>
      </div>
    </section>
  )
}
