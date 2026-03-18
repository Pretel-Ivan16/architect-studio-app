interface PhilosophyQuoteProps {
  text: string
  author: string
}

export function PhilosophyQuote({ text, author }: PhilosophyQuoteProps) {
  return (
    <div className='mt-24 pt-16 border-t border-[#ddd6d1]'>
      <blockquote className='max-w-4xl mx-auto text-center'>
        <p className='font-serif text-2xl md:text-3xl lg:text-4xl text-[#0b0b0b] font-light italic leading-relaxed'>
          {`"${text}"`}
        </p>
        <cite className='block mt-8 text-[#555555] text-sm tracking-widest uppercase not-italic'>
          — {author}
        </cite>
      </blockquote>
    </div>
  )
}
