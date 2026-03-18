interface AboutDescriptionProps {
  text: string
}

export function AboutDescription({ text }: AboutDescriptionProps) {
  return (
    <div className='mt-8 space-y-6 text-[#faf0ef]/80 leading-relaxed'>
      <p>{text}</p>
    </div>
  )
}
