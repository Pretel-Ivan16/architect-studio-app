import { useCallback } from 'react'
import { smoothScroll } from '@/lib/scroll'

export function useSmoothScroll(isHome: boolean = true, pathname: string = '/') {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    const section = href.substring(1)

    if (pathname === `/${section}`) {
      return
    }

    if (isHome) {
      smoothScroll(href)
    } else {
      window.location.href = `/${href}`
    }
  }, [isHome, pathname])
}
