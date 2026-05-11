'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-70" />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(119,221,119,0.13) 0%, transparent 65%)',
            animation: 'hero-glow 7s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(119,221,119,0.06) 0%, transparent 70%)',
            animation: 'hero-glow 10s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(119,221,119,0.05) 0%, transparent 70%)',
            animation: 'hero-glow 13s ease-in-out infinite 2s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block text-green/60 text-xs font-inter font-semibold tracking-[0.4em] uppercase border border-green/20 rounded-full px-5 py-2">
            Evolution Accelerator · Sacramento Valley, CA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-raleway font-black uppercase leading-[0.88] mb-10"
          style={{ fontSize: 'clamp(3.8rem, 12vw, 10rem)' }}
        >
          <span className="block text-green text-glow">Capital.</span>
          <span className="block text-green text-glow">Community.</span>
          <span className="block text-green text-glow">Culture.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-white/45 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-inter leading-relaxed"
        >
          Evolving the art of acceleration within California&apos;s Sacramento Valley —
          connecting capital, community, and culture to fuel the next generation of startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green text-black font-raleway font-black text-sm tracking-widest uppercase px-9 py-4 rounded-full hover:bg-green-light hover:shadow-[0_0_45px_rgba(119,221,119,0.55)] transition-all duration-300"
          >
            Apply Now <ArrowRight size={16} />
          </a>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 border border-green/30 text-green font-raleway font-bold text-sm tracking-widest uppercase px-9 py-4 rounded-full hover:bg-green/10 hover:border-green/60 transition-all duration-300"
          >
            View Portfolio <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-green animate-float" />
        <div className="w-1.5 h-1.5 rounded-full bg-green" />
      </div>
    </section>
  )
}
