interface PhilosophyHeaderProps {
  subtitle: string
  title: string
}

export function PhilosophyHeader({ subtitle, title }: PhilosophyHeaderProps) {
  return (
    <div className='max-w-3xl mb-20'>
      <p className='text-[#6b1426] text-sm tracking-[0.3em] uppercase mb-4'>
        {subtitle}
      </p>
      <h2 className='font-serif text-4xl md:text-5xl lg:text-6xl text-[#0b0b0b] font-light leading-tight'>
        {title}
      </h2>
    </div>
  )
}
