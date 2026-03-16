"use client"

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileMenu } from './MobileMenu'
import { menuItems } from '@/data/navigation'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const handleNavClick = useSmoothScroll(isHome, pathname)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[#faf0ef]/50 backdrop-blur-md'>
      <nav className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='flex items-center justify-between h-20'>
          <Logo />
          <Navigation menuItems={menuItems} onNavClick={handleNavClick} isHome={isHome} />
          <MobileMenuButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <MobileMenu
          isOpen={isMenuOpen}
          menuItems={menuItems}
          onNavClick={handleNavClick}
          onClose={() => setIsMenuOpen(false)}
          isHome={isHome}
        />
      </nav>
    </header>
  )
}

export default Header
