import React from 'react'
import { primary } from '@/data/philosophyfacts'

function Philosophy() {
  return (
    <section id='philosophy' className='py-24 lg:py-32 bg-[#faf0ef]'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12' >
        <div className='max-w-3xl mb-20'>
          <p className='text-[#6b1426] text-sm tracking-[0.3em] uppercase mb-4'>
            Our Philosophy
          </p>
          <h2 className='font-serif text-4xl md:text-5xl lg:text-6xl text-[#0b0b0b] font-light leading-tight'>
            Principles that guide every decision
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {primary.map((principle) => (
            <div key={principle.id} className="group border-t border-[#d1c4c0] pt-8">
              <span className="text-[#6b1426] text-sm tracking-wider">
                {principle.number}
              </span>
              <h3 className="font-serif text-3xl lg:text-4xl text-[#0b0b0b] mt-4 group-hover:text-[#6b1426] transition-colors">
                {principle.title}
              </h3>
              <p className="text-[#0b0b0b] mt-4 leading-relaxed text-pretty">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
        <div className='mt-24 pt-16 border-t border-[#ddd6d1]'>
          <blockquote className='max-w-4xl mx-auto text-center'>
            <p className='font-serif text-2xl md:text-3xl lg:text-4xl text-[#0b0b0b] font-light italic leading-relaxed'>
              {"\"Architecture is the masterful, precise, and magnificent interplay of volumenes in the light\""}
            </p>
            <cite className='block mt-8 text-[#555555] text-sm tracking-widest uppercase not-italic'>
              — Le Corbusier
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
