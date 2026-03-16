import { FooterLink } from './FooterLink'

interface FooterSocialProps {
  title: string
  links: Array<{ href: string; label: string }>
}

export function FooterSocial({ title, links }: FooterSocialProps) {
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
          />
        ))}
      </nav>
    </div>
  )
}
