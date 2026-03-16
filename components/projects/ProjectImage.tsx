import { ArrowUpRight } from 'lucide-react'

interface ProjectImageProps {
  isHovered: boolean
}

export function ProjectImage({ isHovered }: ProjectImageProps) {
  return (
    <div className="relative aspect-4/3 bg-[#111d37] mb-6 overflow-hidden">
      <div className={`absolute inset-0 bg-[#6b1426] flex items-center justify-center transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <ArrowUpRight className="w-12 h-12 text-[#faf0ef]"/>
      </div>
    </div>
  )
}
