import { HeroSubtitle } from './HeroSubtitle'
import { HeroTitle } from './HeroTitle'
import { HeroDescription } from './HeroDescription'
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
      <HeroSubtitle text={subtitle} />
      <HeroTitle title={title} highlight={titleHighlight} />
      <HeroDescription text={description} />
      <HeroButton
        href={buttonHref}
        label={buttonLabel}
        onClick={onButtonClick}
      />
    </div>
  )
}


