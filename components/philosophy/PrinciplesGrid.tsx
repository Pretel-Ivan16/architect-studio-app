import { PrincipleCard } from './PrincipleCard'

interface Principle {
  id: number
  number: string
  title: string
  description: string
}

interface PrinciplesGridProps {
  principles: Principle[]
}

export function PrinciplesGrid({ principles }: PrinciplesGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
      {principles.map((principle) => (
        <PrincipleCard key={principle.id} principle={principle} />
      ))}
    </div>
  )
}
