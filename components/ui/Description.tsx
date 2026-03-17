interface DescriptionProps {
  children: React.ReactNode
  className?: string
}

export function Description({ children, className = 'text-[#666666]' }: DescriptionProps) {
  return (
    <p className={`${className} leading-relaxed max-w-md text-pretty`}>
      {children}
    </p>
  )
}
