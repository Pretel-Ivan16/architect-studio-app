"use client"

import { ProjectIndividual } from "@/components/projects/ProjectIndividual"

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <main>
      <ProjectIndividual params={params} />
    </main>
  )
}
