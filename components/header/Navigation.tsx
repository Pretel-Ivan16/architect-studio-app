import { NavLink } from './NavLink'

interface MenuItem {
  href: string
  label: string
}

interface NavigationProps {
  menuItems: MenuItem[]
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  isHome: boolean
}

export function Navigation({ menuItems, onNavClick, isHome }: NavigationProps) {
  return (
    <div className='hidden md:flex items-center gap-3'>
      {menuItems.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          onClick={onNavClick}
          isHome={isHome}
        />
      ))}
    </div>
  )
}
