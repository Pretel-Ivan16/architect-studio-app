interface FormTextareaProps {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  rows?: number
  required?: boolean
}

export function FormTextarea({
  id,
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  required = false,
}: FormTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[#faf0ef]/60 text-sm tracking-wider uppercase mb-2">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-[#faf0ef]/30 pb-3 text-[#faf0ef] placeholder:text-[#faf0ef]/40 focus:border-[#faf0ef] focus:outline-none transition-colors resize-none custom-scrollbar"
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}
