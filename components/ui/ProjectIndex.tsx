interface ProjectIndexProps {
  currentIndex: number
  total: number
}

export function ProjectIndex({ currentIndex, total }: ProjectIndexProps) {
  return (
    <div className='text-white text-sm tracking-widest uppercase'>
      {currentIndex + 1} / {total}
    </div>
  )
}
