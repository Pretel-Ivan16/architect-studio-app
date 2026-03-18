import { StatCard } from './StatCard'

interface Stat {
  number: string
  label: string
}

interface StatsSectionProps {
  stats: Stat[]
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className='grid grid-cols-2 gap-8'>
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  )
}
