interface ButtonRightProps {
  onClick: () => void
}

export function ButtonRight({ onClick }: ButtonRightProps) {
  return (
    <button 
      onClick={onClick}
      className='w-12 h-12 bg-[#6b1426] border border-[#6b1426] flex items-center justify-center text-white hover:bg-transparent hover:text-[#6b1426] transition-all cursor-pointer text-xl'
      aria-label="Siguiente proyecto"
    >
      →
    </button>
  )
}
