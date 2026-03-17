import { ArrowUpRight } from 'lucide-react'

interface ProjectImageProps {
  isHovered: boolean
  image?: string
}

export function ProjectImage({ isHovered, image }: ProjectImageProps) {
  return (
    <div className="relative aspect-4/3 bg-[#111d37] overflow-hidden">
      {image && (
        <img
          src={image}
          alt="Project"
          className="w-full h-full object-cover"
        />
      )}
      <div className={`absolute inset-0 bg-[#6b1426]/95 flex items-center justify-center transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <ArrowUpRight className="w-12 h-12 text-[#faf0ef]"/>
      </div>
    </div>
  )
}
