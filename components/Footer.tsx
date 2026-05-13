import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import Logo from './Logo'

const socialLinks = [
  { href: 'https://www.instagram.com/evolaccel_co', icon: Instagram, label: 'Instagram' },
  { href: 'https://x.com/Evolaccel_co', icon: Twitter, label: 'X' },
  { href: 'https://www.linkedin.com/company/evolutionacceleratorco', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.youtube.com/@Evolaccel_co', icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F2] border-t border-[#1A1510]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(119,221,119,0.6)]" />
            <span className="font-raleway font-bold text-base tracking-[0.2em] text-[#1A1510] uppercase">
              EVOLU<span className="text-green">T</span>ION
            </span>
          </Link>

          <p className="text-[#1A1510]/25 text-sm font-inter order-last md:order-none">
            © Evolution Accelerator. All Rights Reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#1A1510]/30 hover:text-green transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="flex gap-5">
              <Link
                href="/terms"
                className="text-[#1A1510]/25 hover:text-[#1A1510]/60 text-sm font-inter transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-[#1A1510]/25 hover:text-[#1A1510]/60 text-sm font-inter transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
