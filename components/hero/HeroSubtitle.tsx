interface HeroSubtitleProps {
  text: string
}

export function HeroSubtitle({ text }: HeroSubtitleProps) {
  return (
    <p className='text-[#ffe4e4] text-sm tracking-[0.3em] uppercase mb-8'>
      {text}
    </p>
  )
}
