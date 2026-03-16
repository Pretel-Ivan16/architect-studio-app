interface ProjectMetaProps {
  category: string
  year: string
}

export function ProjectMeta({ category, year }: ProjectMetaProps) {
  return (
    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[#faf0ef]/80 text-sm tracking-wide">
      <span>{category}</span>
      <span>{year}</span>
    </div>
  )
}
