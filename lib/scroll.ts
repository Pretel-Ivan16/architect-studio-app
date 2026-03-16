export function smoothScroll(href: string) {
  const sectionId = href.replace('#', '')
  const element = document.getElementById(sectionId)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', href)
  }
}
