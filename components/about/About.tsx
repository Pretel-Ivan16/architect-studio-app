"use client"

import { AboutLeft } from './AboutLeft'
import { StatsSection } from './StatsSection'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { stats } from '@/data/stats'
import { aboutContent } from '@/data/about'

function About() {
  const handleNavClick = useSmoothScroll()

  return (
    <section id='about' className='py-24 lg:py-32 bg-[#111d37]'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
          <AboutLeft
            subtitle={aboutContent.subtitle}
            title={aboutContent.title}
            description={aboutContent.description}
            buttonLabel={aboutContent.buttonLabel}
            buttonHref={aboutContent.buttonHref}
            onButtonClick={handleNavClick}
          />
          <StatsSection stats={stats} />
        </div>
      </div>
    </section>
  )
}

export default About
