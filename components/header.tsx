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

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[#faf0ef] backdrop-blur-sm'>
      <nav className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='flex items-center justify-between h-20'>
          <Link href="/" className='font-serif text-2xl tracking-wider text-foreground'>ARQ<span className='text-[#610000]'>.</span></Link>
          <div className='hidden md:flex items-center gap-3'>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
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
        {isMenuOpen && (
          <div className='md:hidden py-8 border-t border-[#0b0b0b] '>
            <div className='flex flex-col gap-6'>
              <Link href='#projects' className='text-sm tracking-widest uppercase text-[#0b0b0b] hover:text-[#6b1426] transition-colors' onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link href='#about' className='text-sm tracking-widest uppercase text-[#0b0b0b] hover:text-[#6b1426] transition-colors' onClick={() => setIsMenuOpen(false)}>About Me</Link>
              <Link href='#philosophy' className='text-sm tracking-widest uppercase text-[#0b0b0b] hover:text-[#6b1426] transition-colors' onClick={() => setIsMenuOpen(false)}>Philosophy</Link>
              <Link href='#contact' className='text-sm tracking-widest uppercase text-[#0b0b0b] hover:text-[#6b1426] transition-colors' onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
