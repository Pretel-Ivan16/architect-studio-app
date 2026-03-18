"use client"

import { use } from "react"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Ruler, User } from "lucide-react"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params)
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="pt-20 min-h-screen bg-[#faf0ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Back Button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 mb-12 text-[#0b0b0b] hover:text-[#6b1426] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="relative aspect-video bg-[#111d37] overflow-hidden rounded-lg mb-8">
            {project.images[0] && (
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <h1 className="font-serif text-5xl lg:text-6xl text-[#0b0b0b] mb-4">
                {project.title}
              </h1>
              <p className="text-[#0b0b0b]/60 text-lg leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            {/* Project Details Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6 bg-white p-8 rounded-lg border border-[#0b0b0b]/10">
                <div>
                  <p className="text-[#0b0b0b]/60 text-sm tracking-wider uppercase mb-2">
                    Category
                  </p>
                  <p className="text-[#0b0b0b] font-medium">
                    {project.category}
                  </p>
                </div>

                <div>
                  <p className="text-[#0b0b0b]/60 text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </p>
                  <p className="text-[#0b0b0b] font-medium">
                    {project.location}
                  </p>
                </div>

                <div>
                  <p className="text-[#0b0b0b]/60 text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Year
                  </p>
                  <p className="text-[#0b0b0b] font-medium">
                    {project.year}
                  </p>
                </div>

                <div>
                  <p className="text-[#0b0b0b]/60 text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
                    <Ruler className="w-4 h-4" />
                    Area
                  </p>
                  <p className="text-[#0b0b0b] font-medium">
                    {project.area}
                  </p>
                </div>

                <div>
                  <p className="text-[#0b0b0b]/60 text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Status
                  </p>
                  <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                    project.status === "Completed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div>
                  <p className="text-[#0b0b0b]/60 text-sm tracking-wider uppercase mb-2">
                    Architect
                  </p>
                  <p className="text-[#0b0b0b] font-medium">
                    {project.architect}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {project.images.length > 1 && (
          <div className="mb-16">
            <h2 className="font-serif text-3xl text-[#0b0b0b] mb-8">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video bg-[#111d37] overflow-hidden rounded-lg"
                >
                  <img
                    src={image}
                    alt={`${project.title} - View ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="border-t border-[#0b0b0b]/10 pt-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-[#0b0b0b] text-sm tracking-widest uppercase border border-[#0b0b0b] px-8 py-4 hover:bg-[#0b0b0b] hover:text-[#faf0ef] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  )
}
