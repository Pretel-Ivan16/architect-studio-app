interface SubtitleProps {
  children: React.ReactNode
  className?: string
}

export function Subtitle({ children, className = 'text-[#6b1426]' }: SubtitleProps) {
  return (
    <p className={`${className} text-sm tracking-[0.3em] uppercase mb-4`}>
      {children}
    </p>
  )
}
