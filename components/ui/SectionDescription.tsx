interface SectionDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function SectionDescription({ children, className = 'text-[#666666]' }: SectionDescriptionProps) {
  return (
    <p className={`${className} leading-relaxed max-w-md text-pretty`}>
      {children}
    </p>
  )
}
