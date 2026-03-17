import { ButtonLeft } from '@/components/ui/ButtonLeft'
import { ButtonRight } from '@/components/ui/ButtonRight'
import { Index } from '@/components/ui/Index'

interface ProjectControlsProps {
  currentIndex: number
  total: number
  onPrev: () => void
  onNext: () => void
}

export function ProjectControls({ currentIndex, total, onPrev, onNext }: ProjectControlsProps) {
  return (
    <div className='absolute bottom-8 left-0 right-0 z-40 flex items-center justify-between px-6 lg:px-12'>
      <ButtonLeft onClick={onPrev} />
      <Index currentIndex={currentIndex} total={total} />
      <ButtonRight onClick={onNext} />
    </div>
  )
}
