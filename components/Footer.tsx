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
    <footer className="bg-[#1E1E2A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-8 h-8 transition-all duration-300 " />
            <span className="font-raleway font-bold text-base tracking-[0.2em] text-white uppercase">
              EVOLU<span className="text-green">T</span>ION
            </span>
          </Link>

          <p className="text-white/25 text-sm font-inter order-last md:order-none">
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
                  className="text-white/30 hover:text-green transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="flex gap-5">
              <Link
                href="/terms"
                className="text-white/25 hover:text-white/60 text-sm font-inter transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-white/25 hover:text-white/60 text-sm font-inter transition-colors"
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
