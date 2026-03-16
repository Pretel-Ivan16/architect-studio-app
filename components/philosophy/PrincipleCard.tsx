interface Principle {
  id: number
  number: string
  title: string
  description: string
}

interface PrincipleCardProps {
  principle: Principle
}

export function PrincipleCard({ principle }: PrincipleCardProps) {
  return (
    <div className="group border-t border-[#d1c4c0] pt-8">
      <span className="text-[#6b1426] text-sm tracking-wider">
        {principle.number}
      </span>
      <h3 className="font-serif text-3xl lg:text-4xl text-[#0b0b0b] mt-4 group-hover:text-[#6b1426] transition-colors">
        {principle.title}
      </h3>
      <p className="text-[#0b0b0b] mt-4 leading-relaxed text-pretty">
        {principle.description}
      </p>
    </div>
  )
}
