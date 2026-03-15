"use client"

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { use, useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About Me' },
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[#faf0ef]/50 backdrop-blur-md'>
      <nav className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='flex items-center justify-between h-20'>
          <Link href="/" className='font-serif text-2xl tracking-wider text-foreground'>ARQ<span className='text-[#610000]'>.</span></Link>
          <div className='hidden md:flex items-center gap-3'>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className='text-sm tracking-widest uppercase text-[#0b0b0b] hover:text-[#6b1426] transition-colors'
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className='md:hidden p-2 hover:cursor-pointer transition-transform duration-300'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle Menu'
          >
            {isMenuOpen ? (
              <X className='w-6 h-6 transition-transform duration-300' />
            ) : (
              <Menu className='w-6 h-6 transition-transform duration-300' />
            )}
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <div className='py-8 border-t border-[#0b0b0b]'>
            <div className='flex flex-col gap-6'>
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-widest uppercase text-[#0b0b0b] hover:text-[#6b1426] transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  }}
                  onClick={(e) => {
                    handleNavClick(e, item.href)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
