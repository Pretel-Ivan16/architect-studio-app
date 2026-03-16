import Link from 'next/link'

interface NavLinkProps {
  href: string
  label: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={(e) => onClick(e, href)}
      className='text-sm tracking-widest uppercase text-[#0b0b0b] hover:text-[#6b1426] transition-colors'
    >
      {label}
    </Link>
  )
}
