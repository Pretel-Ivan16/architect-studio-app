interface ButtonNavigationLeftProps {
  onClick: () => void
}

export function ButtonNavigationLeft({ onClick }: ButtonNavigationLeftProps) {
  return (
    <button 
      onClick={onClick}
      className='w-12 h-12 bg-[#6b1426] border border-[#6b1426] flex items-center justify-center text-white hover:bg-transparent hover:text-[#6b1426] transition-all cursor-pointer text-xl'
      aria-label="Proyecto anterior"
    >
      ←
    </button>
  )
}
