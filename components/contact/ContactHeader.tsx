import { SectionSubtitle } from '@/components/ui/SectionSubtitle'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { SectionDescription } from '@/components/ui/SectionDescription'

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
      <SectionSubtitle className='text-[#faf0ef]/60'>
        {subtitle}
      </SectionSubtitle>
      <SectionTitle className='text-[#faf0ef]'>
        {title} <br /><span className="italic">{titleHighlight}</span>
      </SectionTitle>
      <SectionDescription className='mt-8 text-[#faf0ef]/80'>
        {description}
      </SectionDescription>
    </div>
  )
}
