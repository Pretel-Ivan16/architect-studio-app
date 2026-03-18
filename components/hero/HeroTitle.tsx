import { Title } from '@/components/ui/Title'

interface HeroTitleProps {
  title: string
  highlight: string
}

export function HeroTitle({ title, highlight }: HeroTitleProps) {
  return (
    <Title className='text-[#ffe4e4]' as='h1'>
      {title} <br />
      <span className='italic'>{highlight}</span>
    </Title>
  )
}
