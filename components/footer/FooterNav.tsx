import { FooterLink } from './FooterLink'
import { FooterTitle } from '@/components/ui/FooterTitle'

interface FooterNavProps {
  title: string
  links: Array<{ href: string; label: string }>
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function FooterNav({ title, links, onLinkClick }: FooterNavProps) {
  return (
    <nav>
      <FooterTitle>
        {title}
      </FooterTitle>
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <FooterLink 
            key={`${link.label}-${index}`}
            href={link.href}
            label={link.label}
            onClick={onLinkClick}
          />
        ))}
      </div>
    </nav>
  )
}
