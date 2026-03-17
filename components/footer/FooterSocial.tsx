import { FooterLink } from './FooterLink'
import { FooterTitle } from '@/components/ui/FooterTitle'

interface FooterSocialProps {
  title: string
  links: Array<{ href: string; label: string }>
}

export function FooterSocial({ title, links }: FooterSocialProps) {
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
          />
        ))}
      </div>
    </nav>
  )
}
