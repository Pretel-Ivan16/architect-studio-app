import { HeroButton } from './HeroButton'

interface HeroContentProps {
  subtitle: string
  title: string
  titleHighlight: string
  description: string
  buttonLabel: string
  buttonHref: string
  onButtonClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function HeroContent({
  subtitle,
  title,
  titleHighlight,
  description,
  buttonLabel,
  buttonHref,
  onButtonClick,
}: HeroContentProps) {
  return (
    <div className='relative z-10 text-center px-6 max-w-5xl mx-auto'>
      <p className='text-[#ffe4e4] text-sm tracking-[0.3em] uppercase mb-8'>
        {subtitle}
      </p>
      <h1 className='font-serif text-5xl md:text-7xl lg:text-8xl text-[#ffe4e4] font-light leading-tight tracking-tight text-balance'>
        {title} <br />
        <span className='italic'>{titleHighlight}</span>
      </h1>
      <p className='mt-8 text-[#ffe4e4] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-pretty'>
        {description}
      </p>
      <HeroButton
        href={buttonHref}
        label={buttonLabel}
        onClick={onButtonClick}
      />
    </div>
  )
}

