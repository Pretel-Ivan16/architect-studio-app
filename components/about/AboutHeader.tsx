import { SectionSubtitle } from '@/components/ui/SectionSubtitle'
import { SectionTitle } from '@/components/ui/SectionTitle'

interface AboutHeaderProps {
  subtitle: string
  title: string
}

export function AboutHeader({ subtitle, title }: AboutHeaderProps) {
  return (
    <div>
      <SectionSubtitle className='text-[#faf0ef]'>
        {subtitle}
      </SectionSubtitle>
      <SectionTitle className='text-[#faf0ef]'>
        {title}
      </SectionTitle>
    </div>
  )
}
