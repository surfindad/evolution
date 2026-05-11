'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const words = ['Capital.', 'Community.', 'Culture.']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508]">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: '900px',
            height: '900px',
            top: '50%',
            left: '50%',
            marginTop: '-450px',
            marginLeft: '-450px',
            background: 'radial-gradient(circle, rgba(119,221,119,0.12) 0%, rgba(119,221,119,0.04) 40%, transparent 70%)',
            animation: 'hero-breathe 10s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            top: '20%',
            right: '15%',
            background: 'radial-gradient(circle, rgba(119,221,119,0.07) 0%, transparent 65%)',
            animation: 'hero-breathe-2 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            bottom: '20%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(119,221,119,0.05) 0%, transparent 65%)',
            animation: 'hero-breathe 18s ease-in-out infinite 3s',
          }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 text-green/60 text-xs font-inter font-semibold tracking-[0.4em] uppercase border border-green/15 rounded-full px-5 py-2.5 glass">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Evolution Accelerator · Sacramento Valley, CA
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-10 overflow-hidden">
          {words.map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3 + i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <span
                className="block font-raleway font-black uppercase gradient-text text-glow leading-[0.9]"
                style={{ fontSize: 'clamp(4rem, 13vw, 11rem)' }}
              >
                {word}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-green to-transparent mx-auto mb-10"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-white/40 text-lg md:text-xl max-w-xl mx-auto mb-12 font-inter leading-relaxed"
        >
          Evolving the art of acceleration within California&apos;s Sacramento Valley —
          where capital, community, and culture converge.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Apply Now <ArrowRight size={15} />
          </a>
          <Link href="/portfolio" className="btn-outline">
            View Portfolio <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/20 text-[10px] font-inter tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-green/40 to-transparent animate-float" />
      </motion.div>
    </section>
  )
}
