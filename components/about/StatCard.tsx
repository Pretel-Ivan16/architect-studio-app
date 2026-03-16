interface Stat {
  number: string
  label: string
}

interface StatCardProps {
  stat: Stat
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className='border border-[#faf0ef]/20 p-8 hover:bg-[#faf0ef] transition-all duration-400 group'>
      <span className='font-serif text-5xl lg:text-6xl text-[#faf0ef] group-hover:text-[#111d37] transition-colors duration-400'>
        {stat.number}
      </span>
      <p className='text-[#faf0ef]/60 text-sm tracking-wider uppercase mt-4 group-hover:text-[#111d37] transition-colors duration-400'>
        {stat.label}
      </p>
    </div>
  )
}
