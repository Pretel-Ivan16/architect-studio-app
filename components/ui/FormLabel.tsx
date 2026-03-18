interface FormLabelProps {
  htmlFor: string
  children: React.ReactNode
  className?: string
}

export function FormLabel({ htmlFor, children, className = 'text-[#faf0ef]/60' }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className={`${className} block text-sm tracking-wider uppercase mb-2`}>
      {children}
    </label>
  )
}
