interface AboutButtonProps {
  href: string
  label: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function AboutButton({ href, label, onClick }: AboutButtonProps) {
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      className='inline-flex items-center gap-2 mt-10 text-[#faf0ef] text-sm tracking-widest uppercase border border-[#faf0ef]/30 px-8 py-4 hover:bg-[#faf0ef] hover:text-[#111d37] transition-all duration-300'
    >
      {label}
    </a>
  )
}
