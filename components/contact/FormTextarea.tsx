import { FormLabel } from '@/components/ui/FormLabel'

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
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
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
