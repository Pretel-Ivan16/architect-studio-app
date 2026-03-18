import { Subtitle } from '@/components/ui/Subtitle'
import { Title } from '@/components/ui/Title'

interface PhilosophyHeaderProps {
  subtitle: string
  title: string
}

export function PhilosophyHeader({ subtitle, title }: PhilosophyHeaderProps) {
  return (
    <div className='max-w-3xl mb-20'>
      <Subtitle>
        {subtitle}
      </Subtitle>
      <Title>
        {title}
      </Title>
    </div>
  )
}
