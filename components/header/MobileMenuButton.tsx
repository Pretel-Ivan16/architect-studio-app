import { Menu, X } from 'lucide-react'

interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      className='md:hidden p-2 hover:cursor-pointer transition-transform duration-300'
      onClick={onClick}
      aria-label='Toggle Menu'
    >
      {isOpen ? (
        <X className='w-6 h-6 transition-transform duration-300' />
      ) : (
        <Menu className='w-6 h-6 transition-transform duration-300' />
      )}
    </button>
  )
}
