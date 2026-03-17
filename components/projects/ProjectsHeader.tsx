import { SectionSubtitle } from '@/components/ui/SectionSubtitle'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { SectionDescription } from '@/components/ui/SectionDescription'

interface ProjectsHeaderProps {
  subtitle: string
  title: string
  titleHighlight: string
  description: string
}

export function ProjectsHeader({
  subtitle,
  title,
  titleHighlight,
  description,
}: ProjectsHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
      <div>
        <SectionSubtitle>
          {subtitle}
        </SectionSubtitle>
        <SectionTitle>
          {title}
          <br />
          <span className="italic">{titleHighlight}</span>
        </SectionTitle>
      </div>
      <SectionDescription>
        {description}
      </SectionDescription>
    </div>
  )
}
