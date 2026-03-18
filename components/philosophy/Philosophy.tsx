import { PhilosophyHeader } from './PhilosophyHeader'
import { PrinciplesGrid } from './PrinciplesGrid'
import { PhilosophyQuote } from './PhilosophyQuote'
import { primary } from '@/data/philosophyfacts'
import { philosophyContent } from '@/data/philosophy'

function Philosophy() {
  return (
    <section id='philosophy' className='py-24 lg:py-32 bg-[#faf0ef]'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <PhilosophyHeader 
          subtitle={philosophyContent.subtitle}
          title={philosophyContent.title}
        />
        <PrinciplesGrid principles={primary} />
        <PhilosophyQuote 
          text={philosophyContent.quoteText}
          author={philosophyContent.quoteAuthor}
        />
      </div>
    </section>
  )
}

export default Philosophy
