import { Subtitle } from '@/components/ui/Subtitle'
import { Title } from '@/components/ui/Title'
import { Description } from '@/components/ui/Description'

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
        <Subtitle>
          {subtitle}
        </Subtitle>
        <Title>
          {title}
          <br />
          <span className="italic">{titleHighlight}</span>
        </Title>
      </div>
      <Description>
        {description}
      </Description>
    </div>
  )
}
