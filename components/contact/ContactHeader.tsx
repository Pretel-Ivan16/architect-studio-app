import { Subtitle } from '@/components/ui/Subtitle'
import { Title } from '@/components/ui/Title'
import { Description } from '@/components/ui/Description'

interface ContactHeaderProps {
  subtitle: string
  title: string
  titleHighlight: string
  description: string
}

export function ContactHeader({
  subtitle,
  title,
  titleHighlight,
  description,
}: ContactHeaderProps) {
  return (
    <div>
      <Subtitle className='text-[#faf0ef]/60'>
        {subtitle}
      </Subtitle>
      <Title className='text-[#faf0ef]'>
        {title} <br /><span className="italic">{titleHighlight}</span>
      </Title>
      <Description className='mt-8 text-[#faf0ef]/80'>
        {description}
      </Description>
    </div>
  )
}
