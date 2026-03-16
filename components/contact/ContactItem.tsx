interface ContactItemProps {
  label: string
  content: React.ReactNode
}

export function ContactItem({ label, content }: ContactItemProps) {
  return (
    <div>
      <p className="text-[#faf0ef]/60 text-sm tracking-wider uppercase mb-2">
        {label}
      </p>
      <div className="text-[#faf0ef]">
        {content}
      </div>
    </div>
  )
}
