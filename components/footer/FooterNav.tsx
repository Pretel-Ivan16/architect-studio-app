import { FooterLink } from './FooterLink'

interface FooterNavProps {
  title: string
  links: Array<{ href: string; label: string }>
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function FooterNav({ title, links, onLinkClick }: FooterNavProps) {
  return (
    <div>
      <h4 className="text-[#faf0ef] text-sm tracking-widest uppercase mb-4">
        {title}
      </h4>
      <nav className="flex flex-col gap-3">
        {links.map((link, index) => (
          <FooterLink 
            key={`${link.label}-${index}`}
            href={link.href}
            label={link.label}
            onClick={onLinkClick}
          />
        ))}
      </nav>
    </div>
  )
}
