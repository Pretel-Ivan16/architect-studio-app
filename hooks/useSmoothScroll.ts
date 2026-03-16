import { useCallback } from 'react'
import { smoothScroll } from '@/lib/scroll'

export function useSmoothScroll(isHome: boolean = true) {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (isHome) {
      smoothScroll(href)
    } else {
      window.location.href = `/${href}`
    }
  }, [isHome])
}
