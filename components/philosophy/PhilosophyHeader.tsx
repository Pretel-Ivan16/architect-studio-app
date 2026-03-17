import { SectionSubtitle } from '@/components/ui/SectionSubtitle'
import { SectionTitle } from '@/components/ui/SectionTitle'

interface PhilosophyHeaderProps {
  subtitle: string
  title: string
}

export function PhilosophyHeader({ subtitle, title }: PhilosophyHeaderProps) {
  return (
    <div className='max-w-3xl mb-20'>
      <SectionSubtitle>
        {subtitle}
      </SectionSubtitle>
      <SectionTitle>
        {title}
      </SectionTitle>
    </div>
  )
}
