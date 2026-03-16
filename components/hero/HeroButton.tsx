interface HeroButtonProps {
  href: string
  label: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function HeroButton({ href, label, onClick }: HeroButtonProps) {
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      className='inline-flex items-center gap-2 mt-12 text-[#ffe4e4] text-sm tracking-widest uppercase border border-[#ffe4e4] px-8 py-4 hover:bg-[#f9eaea] hover:text-[#6b1426] transition-all duration-300'
    >
      {label}
    </a>
  )
}
