import { NavLink } from './NavLink'

interface MenuItem {
  href: string
  label: string
}

interface MobileMenuProps {
  isOpen: boolean
  menuItems: MenuItem[]
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  onClose: () => void
  isHome: boolean
}

export function MobileMenu({ isOpen, menuItems, onNavClick, onClose, isHome }: MobileMenuProps) {
  return (
    <nav
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-80' : 'max-h-0'
      }`}
    >
      <div className='py-8 border-t border-[#0b0b0b]'>
        <div className='flex flex-col gap-6'>
          {menuItems.map((item, index) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={(e) => {
                onNavClick(e, item.href)
                onClose()
              }}
              isHome={isHome}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}
