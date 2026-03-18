interface InfoItemProps {
  label: string
  content: React.ReactNode
  labelClassName?: string
  contentClassName?: string
}

export function InfoItem({ label, content, labelClassName = 'text-[#faf0ef]/60', contentClassName = 'text-[#faf0ef]' }: InfoItemProps) {
  return (
    <div>
      <p className={`${labelClassName} text-sm tracking-wider uppercase mb-2`}>
        {label}
      </p>
      <div className={contentClassName}>
        {content}
      </div>
    </div>
  )
}
