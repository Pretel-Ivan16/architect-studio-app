"use client"

import { FooterLogo } from './FooterLogo'
import { FooterDescription } from './FooterDescription'
import { FooterNav } from './FooterNav'
import { FooterSocial } from './FooterSocial'
import { FooterBottomBar } from './FooterBottomBar'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { footerContent, navigationLinks, socialLinks, bottomLinks } from '@/data/footer'

function Footer() {
  const handleNavClick = useSmoothScroll()

  return (
    <footer className="py-12 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <FooterLogo />
            <FooterDescription text={footerContent.description} />
          </div>
          <FooterNav 
            title="Navigation" 
            links={navigationLinks}
            onLinkClick={handleNavClick}
          />
          <FooterSocial 
            title="Follow us" 
            links={socialLinks}
          />
        </div>
        <FooterBottomBar 
          copyrightText={footerContent.copyrightText}
          bottomLinks={bottomLinks}
        />
      </div>
    </footer>
  )
}

export default Footer
