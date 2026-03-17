interface SectionSubtitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionSubtitle({ children, className = 'text-[#6b1426]' }: SectionSubtitleProps) {
  return (
    <p className={`${className} text-sm tracking-[0.3em] uppercase mb-4`}>
      {children}
    </p>
  )
}
