import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Youtube, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
  { href: 'https://www.evolutionaccelerator.co/', label: 'Blog', external: true },
]

const socialLinks = [
  { href: 'https://www.instagram.com/evolaccel_co', icon: Instagram, label: 'Instagram' },
  { href: 'https://x.com/Evolaccel_co', icon: Twitter, label: 'X' },
  { href: 'https://www.linkedin.com/company/evolutionacceleratorco', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.youtube.com/@Evolaccel_co', icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-[#16161F] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Main footer body */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 lg:gap-24">

          {/* Left: logo + tagline + apply */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="self-start">
              <Logo className="w-10 h-9 transition-all duration-300" />
            </Link>
            <p className="text-white/30 font-inter text-sm leading-relaxed max-w-xs">
              Evolving the art of acceleration within California&apos;s Sacramento Valley — capital, community, and culture.
            </p>
            <a
              href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 bg-green text-[#1E1E2A] font-raleway font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded-full hover:bg-[#5fcc5f] transition-all duration-300"
            >
              Apply Now <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Center: nav links */}
          <div className="flex flex-col gap-4">
            <p className="label-mono mb-2">Navigation</p>
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/35 hover:text-white/70 font-inter text-sm transition-colors duration-200 inline-flex items-center gap-1"
                >
                  {link.label} <ArrowUpRight size={11} className="opacity-50" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/35 hover:text-white/70 font-inter text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right: social + legal */}
          <div className="flex flex-col gap-4">
            <p className="label-mono mb-2">Connect</p>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/35 hover:text-green transition-colors duration-200"
              >
                <Icon size={15} />
                <span className="font-inter text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-inter">
            © {new Date().getFullYear()} Evolution Accelerator, Inc. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/terms"
              className="text-white/20 hover:text-white/50 text-xs font-inter transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-white/20 hover:text-white/50 text-xs font-inter transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
