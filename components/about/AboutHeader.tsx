interface AboutHeaderProps {
  subtitle: string
  title: string
}

export function AboutHeader({ subtitle, title }: AboutHeaderProps) {
  return (
    <div>
      <p className='text-[#faf0ef] text-sm tracking-[0.3em] uppercase mb-4'>
        {subtitle}
      </p>
      <h2 className='font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf0ef] font-light leading-tight'>
        {title}
      </h2>
    </div>
  )
}
