"use client"

import { HeroDecorations } from './HeroDecorations'
import { HeroContent } from './HeroContent'
import { ScrollIndicator } from './ScrollIndicator'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { heroContent } from '@/data/hero'

function Hero() {
  const handleNavClick = useSmoothScroll()

  return (
    <section className='relative min-h-screen bg-[#6b1426] flex items-center justify-center overflow-hidden'>
      <HeroDecorations />

      <HeroContent
        subtitle={heroContent.subtitle}
        title={heroContent.title}
        titleHighlight={heroContent.titleHighlight}
        description={heroContent.description}
        buttonLabel={heroContent.buttonLabel}
        buttonHref={heroContent.buttonHref}
        onButtonClick={handleNavClick}
      />

      <div className='absolute bottom-12 left-1/2 -translate-x-1/2'>
        <ScrollIndicator />
      </div>
    </section>
  )
}

export default Hero
