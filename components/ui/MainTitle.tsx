interface MainTitleProps {
  children: React.ReactNode
  className?: string
}

export function MainTitle({ children, className = 'text-[#ffe4e4]' }: MainTitleProps) {
  return (
    <h1 className={`${className} font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight text-balance`}>
      {children}
    </h1>
  )
}
