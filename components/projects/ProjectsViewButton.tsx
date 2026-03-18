import { ArrowUpRight } from 'lucide-react'

interface ProjectsViewButtonProps {
  href: string
  label: string
}

export function ProjectsViewButton({ href, label }: ProjectsViewButtonProps) {
  return (
    <div className="text-center mt-16">
      <a 
        href={href} 
        className="inline-flex items-center gap-2 text-[#0b0b0b] text-sm tracking-widest uppercase border border-[#0b0b0b] px-8 py-4 hover:bg-[#0b0b0b] hover:text-[#faf0ef] transition-all duration-300"
      >
        {label}
        <ArrowUpRight className="w-4 h-4"/> 
      </a>
    </div>
  )
}
