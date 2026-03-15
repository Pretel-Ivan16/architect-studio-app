"use client"

import { stats } from '@/data/stats'
import React from 'react'

function About() {
  const handleScrollToPhilosophy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('philosophy')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', '#philosophy')
    }
  }

  return (
    <section id='about' className='py-24 lg:py-32 bg-[#111d37]'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
          <div>
            <p className='text-[#faf0ef] text-sm tracking-[0.3em] uppercase mb-4'>Our Studio</p>
            <h2 className='font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf0ef] font-light leading-tight'>Architecture with a purpose</h2>
            <div className='mt-8 space-y-6 text-[#faf0ef]/80 leading-relaxed'>
              <p>
                Founded in 2026. STELLARQ was born out of passion for the profession, a belief that architecture should be functional for both people and their surroundings, and a deep affection for another person.
              </p>
            </div>
            <a href="#philosophy" onClick={handleScrollToPhilosophy} className='inline-flex items-center gap-2 mt-10 text-[#faf0ef] text-sm tracking-widest uppercase border border-[#faf0ef]/30 px-8 py-4 hover:bg-[#faf0ef] hover:text-[#111d37] transition-all duration-300'>
              Learn about our philosophy
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className="border border-[#faf0ef]/20 p-8 hover:bg-[#faf0ef] transition-all duration-400 group">
                <span className="font-serif text-5xl lg:text-6xl text-[#faf0ef] group-hover:text-[#111d37] transition-colors duration-400">
                  {stat.number}
                </span>
                <p className="text-[#faf0ef]/60 text-sm tracking-wider uppercase mt-4 group-hover:text-[#111d37] transition-colors duration-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
