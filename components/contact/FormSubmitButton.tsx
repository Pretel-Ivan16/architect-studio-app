import { ArrowUpRight } from 'lucide-react'

interface FormSubmitButtonProps {
  label: string
}

export function FormSubmitButton({ label }: FormSubmitButtonProps) {
  return (
    <button 
      type="submit"
      className="inline-flex items-center gap-2 mt-4 text-[#faf0ef] text-sm tracking-widest uppercase border border-[#faf0ef]/30 px-8 py-4 hover:bg-[#faf0ef] hover:text-[#6b1426] transition-all duration-300"
    >
      {label}
      <ArrowUpRight className="w-4 h-4" />
    </button>
  )
}
