"use client"

import { HeroDecorations } from './HeroDecorations'
import { HeroContent } from './HeroContent'
import { ScrollIndicator } from './ScrollIndicator'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const heroContent = {
  subtitle: 'Contemporary Architecture',
  title: 'We design spaces',
  titleHighlight: 'that inspire',
  description:
    'We create architecture that transcendes time, merging functionality with aesthetics that reflect the essence of each project.',
  buttonLabel: 'Explore Projects',
  buttonHref: '#projects',
}

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
