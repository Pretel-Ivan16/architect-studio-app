interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionTitle({ children, className = 'text-[#0b0b0b]', as: Tag = 'h2' }: SectionTitleProps) {
  return (
    <Tag className={`${className} font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight`}>
      {children}
    </Tag>
  )
}
