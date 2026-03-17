import { MainTitle } from '@/components/ui/MainTitle'

interface HeroTitleProps {
  title: string
  highlight: string
}

export function HeroTitle({ title, highlight }: HeroTitleProps) {
  return (
    <MainTitle>
      {title} <br />
      <span className='italic'>{highlight}</span>
    </MainTitle>
  )
}
