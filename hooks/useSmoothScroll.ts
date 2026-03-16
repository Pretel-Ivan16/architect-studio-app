import { useCallback } from 'react'
import { smoothScroll } from '@/lib/scroll'

export function useSmoothScroll() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScroll(href)
  }, [])
}
