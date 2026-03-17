interface ProjectNavigationProps {
  onPrev: () => void
  onNext: () => void
}

export function ProjectNavigation({ onPrev, onNext }: ProjectNavigationProps) {
  return (
    <div className='flex items-center gap-8'>
      <button 
        onClick={onPrev}
        className='w-12 h-12 bg-[#6b1426] border border-[#6b1426] flex items-center justify-center text-white hover:bg-transparent hover:text-[#6b1426] transition-all cursor-pointer text-xl'
        aria-label="Proyecto anterior"
      >
        ←
      </button>
      
      <button 
        onClick={onNext}
        className='w-12 h-12 bg-[#6b1426] border border-[#6b1426] flex items-center justify-center text-white hover:bg-transparent hover:text-[#6b1426] transition-all cursor-pointer text-xl'
        aria-label="Siguiente proyecto"
      >
        →
      </button>
    </div>
  )
}
