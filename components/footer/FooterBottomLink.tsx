interface FooterBottomLinkProps {
  href: string
  label: string
}

export function FooterBottomLink({ href, label }: FooterBottomLinkProps) {
  return (
    <a 
      href={href} 
      className="text-[#faf0ef]/40 hover:text-[#faf0ef]/60 transition-colors text-sm"
    >
      {label}
    </a>
  )
}
