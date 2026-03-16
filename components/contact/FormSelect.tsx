interface FormSelectProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string }>
  required?: boolean
}

export function FormSelect({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[#faf0ef]/60 text-sm tracking-wider uppercase mb-2">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-[#faf0ef]/30 pb-3 text-[#faf0ef] focus:border-[#faf0ef] focus:outline-none transition-colors cursor-pointer"
        required={required}
      >
        <option value="" className="bg-[#6b1426] text-[#faf0ef]">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#6b1426] text-[#faf0ef]">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
