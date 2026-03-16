import Link from "next/link"

interface FooterLinkProps {
  href: string
  label: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function FooterLink({ href, label, onClick }: FooterLinkProps) {
  return (
    <Link 
      href={href} 
      onClick={(e) => onClick?.(e, href)}
      className="text-[#faf0ef]/60 hover:text-[#faf0ef] transition-colors text-sm"
    >
      {label}
    </Link>
  )
}
