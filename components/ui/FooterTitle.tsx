interface FooterTitleProps {
  children: React.ReactNode
  className?: string
}

export function FooterTitle({ children, className = 'text-[#faf0ef]' }: FooterTitleProps) {
  return (
    <h4 className={`${className} text-sm tracking-widest uppercase mb-4`}>
      {children}
    </h4>
  )
}
