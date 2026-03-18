interface IndexProps {
  currentIndex: number
  total: number
}

export function Index({ currentIndex, total }: IndexProps) {
  return (
    <div className='text-white text-sm tracking-widest uppercase'>
      {currentIndex + 1} / {total}
    </div>
  )
}
