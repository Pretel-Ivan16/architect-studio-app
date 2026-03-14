import { ArrowDown } from 'lucide-react'

function Hero() {
  return (
    <section className='relative min-h-screen bg-[#6b1426] flex items-center justify-between overflow-hidden'>
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-1/4 left-1/4 w-px h-96 bg-[#c6c6c6] rotate-45'/>
        <div className='absolute top-1/3 right-1/3 w-px h-64 bg-[#c6c6c6] -rotate-12'/>
        <div className='absolute bottom-1/4 left-1/2 w-px h-80 bg-[#c6c6c6] rotate-30'/>
      </div>
      <div className='relative z-10 text-center px-6 max-w-5xl mx-auto'>
        <p className='text-[#ffe4e4] text-sm tracking-[0.3em] uppercase mb-8'>
          Contemporary Architecture
        </p>
        <h1 className='font-serif text-5xl md:text-7xl lg:text-8xl text-[#ffe4e4] font-light leading-tight tracking-tight text-balance'>
          We design spaces <br /><span className='italic'>that inspire</span>
        </h1>
        <p className='mt-8 text-[#ffe4e4] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-pretty'>We create architecture that transcendes time, merging functionality with aesthetics that reflect the essence of each project.</p>
        <a href="#projects" className='inline-flex items-center gap-2 mt-12 text-[#ffe4e4] text-sm tracking-widest uppercase border border-[#ffe4e4] px-8 py-4 hover:bg-[#f9eaea] hover:text-[#6b1426] transition-all duration-300'>Explore Projects</a>
      </div>
      <div className='absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce'>
        <ArrowDown className='w-5 h-5 text-[#ffe4e4]'/>
      </div>
    </section>
  )
}

export default Hero
