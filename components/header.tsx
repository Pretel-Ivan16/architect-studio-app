"use client"

import Link from 'next/link'
import React, { use, useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[#faf0ef] backdrop-blur-sm'>
      <nav className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='flex items-center justify-between h-20'>
          <Link href="/" className='font-serif text-2xl tracking-wider text-foreground'>ARQ<span className='text-[#610000]'>.</span></Link>
          <div className='hidden md:flex items-center gap-3'>
            <Link href="#projects" className='text-sm tracking-widest uppercase text-[#000000] hover:text-[#6b0101] transition-colors'>Projects</Link>
            <Link href="#about" className='text-sm tracking-widest uppercase text-[#000000] hover:text-[#6b0101] transition-colors'>About Me</Link>
            <Link href="#philosophy" className='text-sm tracking-widest uppercase text-[#000000] hover:text-[#6b0101] transition-colors'>Philosophy</Link>
            <Link href="#contact" className='text-sm tracking-widest uppercase text-[#000000] hover:text-[#6b0101] transition-colors'>Contact</Link>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header
