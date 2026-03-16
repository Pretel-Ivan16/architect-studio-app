interface FooterDescriptionProps {
  text: string
}

export function FooterDescription({ text }: FooterDescriptionProps) {
  return (
    <p className="mt-4 text-[#faf0ef]/60 max-w-md leading-relaxed">
      {text}
    </p>
  )
}
