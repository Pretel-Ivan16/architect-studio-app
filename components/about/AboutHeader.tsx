import { Subtitle } from '@/components/ui/Subtitle'
import { Title } from '@/components/ui/Title'

interface AboutHeaderProps {
  subtitle: string
  title: string
}

export function AboutHeader({ subtitle, title }: AboutHeaderProps) {
  return (
    <div>
      <Subtitle className='text-[#faf0ef]'>
        {subtitle}
      </Subtitle>
      <Title className='text-[#faf0ef]'>
        {title}
      </Title>
    </div>
  )
}
