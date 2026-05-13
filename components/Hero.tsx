'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ParticleCanvas from './ParticleCanvas'

const words = ['Capital.', 'Community.', 'Culture.']

export default function Hero() {
  const { scrollY } = useScroll()
  const contentY = useTransform(scrollY, [0, 700], [0, -140])
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E1E2A]">

      {/*
       * ─────────────────────────────────────────────────────────────
       * HERO VIDEO
       * Drop hero.mp4 + hero.webm into /public/video/ then remove "hidden".
       * ─────────────────────────────────────────────────────────────
       */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 hidden" aria-hidden>
        {/* <source src="/video/hero.mp4" type="video/mp4" /> */}
        {/* <source src="/video/hero.webm" type="video/webm" /> */}
      </video>

      <ParticleCanvas />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2A]/20 via-transparent to-[#1E1E2A]/70 pointer-events-none" />

      {/* Content — parallax on scroll */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-12 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 text-green/60 text-xs font-inter font-semibold tracking-[0.4em] uppercase border border-green/15 rounded-full px-5 py-2.5 glass">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Evolution Accelerator · Sacramento Valley, CA
          </span>
        </motion.div>

        {/* Headline — staggered word entries */}
        <div className="text-center mb-8">
          {words.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                className="block font-raleway font-black uppercase gradient-text leading-[0.88]"
                style={{ fontSize: 'clamp(3.2rem, 10vw, 9.5rem)' }}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1 + i * 0.16, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Animated rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="w-24 h-px bg-green/50 mx-auto mb-10 origin-left"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-white/40 text-lg md:text-xl max-w-xl mx-auto mb-12 font-inter leading-relaxed text-center"
        >
          Evolving the art of acceleration within California&apos;s Sacramento Valley —
          where capital, community, and culture converge.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/20 text-[10px] font-inter tracking-[0.35em] uppercase">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-green/50 to-transparent animate-float" />
      </motion.div>
    </section>
  )
}
