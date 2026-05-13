'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F0F0F2]/90 backdrop-blur-xl border-b border-[#1A1510]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-9 h-9 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(119,221,119,0.7)]" />
            <span className="font-raleway font-bold text-lg tracking-[0.2em] text-white uppercase">
              EVOLU<span className="text-green">T</span>ION
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1510]/55 hover:text-green transition-colors duration-200 text-sm font-inter font-medium tracking-widest uppercase"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#1A1510]/55 hover:text-green transition-colors duration-200 text-sm font-inter font-medium tracking-widest uppercase"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green text-black font-raleway font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded-full hover:bg-green-light hover:shadow-[0_0_20px_rgba(119,221,119,0.5)] transition-all duration-300"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1A1510]/70 hover:text-green transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#F0F0F2]/95 backdrop-blur-xl border-t border-[#1A1510]/5 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1510]/60 hover:text-green transition-colors text-xl font-inter font-medium tracking-widest uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1A1510]/60 hover:text-green transition-colors text-xl font-inter font-medium tracking-widest uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-black font-raleway font-bold text-sm tracking-widest uppercase px-6 py-3 rounded-full text-center hover:bg-green-light transition-all duration-300 mt-2"
          >
            Apply Now
          </a>
          <div className="flex gap-5 pt-4 border-t border-[#1A1510]/10">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#1A1510]/40 hover:text-green transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
