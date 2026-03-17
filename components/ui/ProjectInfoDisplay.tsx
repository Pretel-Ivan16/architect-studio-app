interface ProjectInfoProps {
  category: string
  year: string
  title: string
  location: string
}

export function ProjectInfoDisplay({ category, year, title, location }: ProjectInfoProps) {
  return (
    <div className="absolute bottom-32 bg-linear-to-t left-0 right-0 p-8 lg:p-12">
      <p className="text-xs lg:text-sm tracking-widest uppercase text-white/80 mb-6">
        {category} — {year}
      </p>
      <h2 className="text-4xl lg:text-6xl font-serif text-white mb-4">
        {title}
      </h2>
      <p className="text-xl lg:text-2xl text-white/90">
        {location}
      </p>
    </div>
  )
}
