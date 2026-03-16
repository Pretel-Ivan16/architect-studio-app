interface HeroTitleProps {
  title: string
  highlight: string
}

export function HeroTitle({ title, highlight }: HeroTitleProps) {
  return (
    <h1 className='font-serif text-5xl md:text-7xl lg:text-8xl text-[#ffe4e4] font-light leading-tight tracking-tight text-balance'>
      {title} <br />
      <span className='italic'>{highlight}</span>
    </h1>
  )
}
