import Link from "next/link"

function Footer() {
  return (
    <footer className="py-12 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-2xl tracking-wider text-[#faf0ef]">
              STELLARQ<span className="text-[#6b1426]">.</span>
            </Link>
            <p className="mt-4 text-[#faf0ef]/60 max-w-md leading-relaxed">
              Contemporary architecture with a timeless vision.
              We design spaces that inspire and stand the test of time.
            </p>
          </div>
          <div>
            <h4 className="text-[#faf0ef] text-sm tracking-widest uppercase mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#projects" className="text-[#faf0ef]/60 hover:text-[#faf0ef] transition-colors text-sm">
                Projects
              </Link>
              <Link href="#about" className="text-[#faf0ef]/60 hover:text-[#faf0ef] transition-colors text-sm">
                About Me
              </Link>
              <Link href="#philosophy" className="text-[#faf0ef]/60 hover:text-[#faf0ef] transition-colors text-sm">
                Philosophy
              </Link>
              <Link href="#contact" className="text-[#faf0ef]/60 hover:text-[#faf0ef] transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#faf0ef] text-sm tracking-widest uppercase mb-4">Follow us</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-[#faf0ef]/60 hover:text-[#faf0ef] transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="text-[#faf0ef]/60 hover:text-[#faf0ef] transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-[#faf0ef]/60 hover:text-[#faf0ef] transition-colors text-sm">
                Pinterest
              </a>
              <a href="#" className="text-[#faf0ef]/60 hover:text-[#faf0ef] transition-colors text-sm">
                Behance
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#faf0ef]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#faf0ef]/40 text-sm">
            © {new Date().getFullYear()} STELLARQ Architecture. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#faf0ef]/40 hover:text-[#faf0ef]/60 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-[#faf0ef]/40 hover:text-[#faf0ef]/60 transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
