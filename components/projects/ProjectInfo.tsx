import { ArrowUpRight } from 'lucide-react'

interface ProjectInfoProps {
  title: string
  location: string
  isHovered: boolean
}

export function ProjectInfo({ title, location, isHovered }: ProjectInfoProps) {
  return (
    <div className="flex justify-between items-start gap-4">
      <div>
        <h3 className={`font-serif text-2xl lg:text-3xl text-foreground transition-colors ${
          isHovered ? 'text-[#6b1426]' : 'text-foreground'
        }`}>
          {title}
        </h3>
        <p className="text-[#0b0b0b] text-sm mt-2">
          {location}
        </p>
      </div>
      <ArrowUpRight className={`w-5 h-5 transition-colors shrink-0 mt-2 ${
        isHovered ? 'text-[#6b1426]' : 'text-[#0b0b0b]'
      }`}/>
    </div>
  )
}
