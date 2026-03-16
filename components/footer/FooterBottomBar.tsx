import { FooterBottomLink } from './FooterBottomLink'

interface FooterBottomBarProps {
  copyrightText: string
  bottomLinks: Array<{ href: string; label: string }>
}

export function FooterBottomBar({ copyrightText, bottomLinks }: FooterBottomBarProps) {
  return (
    <div className="mt-16 pt-8 border-t border-[#faf0ef]/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[#faf0ef]/40 text-sm">
        {copyrightText}
      </p>
      <div className="flex gap-6">
        {bottomLinks.map((link, index) => (
          <FooterBottomLink 
            key={`${link.label}-${index}`}
            href={link.href}
            label={link.label}
          />
        ))}
      </div>
    </div>
  )
}
