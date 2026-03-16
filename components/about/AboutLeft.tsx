import { AboutHeader } from './AboutHeader'
import { AboutDescription } from './AboutDescription'
import { AboutButton } from './AboutButton'

interface AboutLeftProps {
  subtitle: string
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
  onButtonClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function AboutLeft({
  subtitle,
  title,
  description,
  buttonLabel,
  buttonHref,
  onButtonClick,
}: AboutLeftProps) {
  return (
    <div>
      <AboutHeader subtitle={subtitle} title={title} />
      <AboutDescription text={description} />
      <AboutButton href={buttonHref} label={buttonLabel} onClick={onButtonClick} />
    </div>
  )
}
