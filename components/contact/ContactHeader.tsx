interface ContactHeaderProps {
  subtitle: string
  title: string
  titleHighlight: string
  description: string
}

export function ContactHeader({
  subtitle,
  title,
  titleHighlight,
  description,
}: ContactHeaderProps) {
  return (
    <div>
      <p className="text-[#faf0ef]/60 text-sm tracking-[0.3em] uppercase mb-4">
        {subtitle}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf0ef] font-light leading-tight">
        {title} <br /><span className="italic">{titleHighlight}</span>
      </h2>
      <p className="mt-8 text-[#faf0ef]/80 leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  )
}
