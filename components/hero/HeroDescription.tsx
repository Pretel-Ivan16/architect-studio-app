interface HeroDescriptionProps {
  text: string
}

export function HeroDescription({ text }: HeroDescriptionProps) {
  return (
    <p className='mt-8 text-[#ffe4e4] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-pretty'>
      {text}
    </p>
  )
}
