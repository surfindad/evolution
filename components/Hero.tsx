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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1E1E2A]">

      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-0 hidden" aria-hidden>
        {/* <source src="/video/hero.mp4" type="video/mp4" /> */}
        {/* <source src="/video/hero.webm" type="video/webm" /> */}
      </video>

      <ParticleCanvas />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2A]/10 via-transparent to-[#1E1E2A]/80 pointer-events-none" />

      {/* Content — parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-32"
      >
        {/* Mono label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="label-mono mb-8"
        >
          Evolution Accelerator · Sacramento Valley, CA
        </motion.p>

        {/* Headline — left aligned, white, large */}
        <div className="mb-10">
          {words.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                className="block font-raleway font-black uppercase text-white leading-[0.88]"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.1 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="w-20 h-px bg-green mb-10 origin-left"
        />

        {/* Subtext + CTAs side by side on desktop */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="text-white/40 text-lg font-inter leading-relaxed max-w-sm"
          >
            Evolving the art of acceleration —
            where capital, community, and culture converge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-6 lg:left-10 flex items-center gap-4"
      >
        <div className="w-14 h-px bg-gradient-to-r from-green/50 to-transparent" />
        <span className="label-mono">Scroll</span>
      </motion.div>
    </section>
  )
}
