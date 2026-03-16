interface ProjectsHeaderProps {
  subtitle: string
  title: string
  titleHighlight: string
  description: string
}

export function ProjectsHeader({
  subtitle,
  title,
  titleHighlight,
  description,
}: ProjectsHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
      <div>
        <p className="text-[#6b1426] text-sm tracking-[0.3em] uppercase mb-4">
          {subtitle}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0b0b0b]">
          {title}
          <br />
          <span className="italic">{titleHighlight}</span>
        </h2>
      </div>
      <p className="text-[#666666] max-w-md text-pretty">
        {description}
      </p>
    </div>
  )
}
