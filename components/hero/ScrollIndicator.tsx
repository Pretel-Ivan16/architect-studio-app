import { ArrowDown } from 'lucide-react'

interface ScrollIndicatorProps {
  className?: string
}

export function ScrollIndicator({ className = '' }: ScrollIndicatorProps) {
  return (
    <div className={`animate-bounce ${className}`}>
      <ArrowDown className='w-5 h-5 text-[#ffe4e4]' />
    </div>
  )
}
