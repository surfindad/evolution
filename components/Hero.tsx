'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ParticleCanvas from './ParticleCanvas'

const words = ['Capital.', 'Community.', 'Culture.']

export default function Hero() {
  const { scrollY } = useScroll()
  const contentY = useTransform(scrollY, [0, 700], [0, -140])
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 18 })
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 18 })

  // Three depth planes — far, mid, near
  const farX  = useTransform(smoothX, [-1, 1], [-24, 24])
  const farY  = useTransform(smoothY, [-1, 1], [-16, 16])
  const midX  = useTransform(smoothX, [-1, 1], [-10, 10])
  const midY  = useTransform(smoothY, [-1, 1], [-7,  7])
  const nearX = useTransform(smoothX, [-1, 1], [-3,  3])

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - r.left - r.width  / 2) / (r.width  / 2))
    mouseY.set((e.clientY - r.top  - r.height / 2) / (r.height / 2))
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1E1E2A]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
    >
      {/* Depth plane 1 — particles (farthest) */}
      <motion.div className="absolute inset-0" style={{ x: farX, y: farY }}>
        <ParticleCanvas />
      </motion.div>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Depth plane 2 — giant ghost letters (mid) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
        style={{ x: midX, y: midY }}
        aria-hidden
      >
        <span
          className="font-raleway font-black uppercase leading-none text-white/[0.025] translate-x-[18%]"
          style={{ fontSize: 'clamp(14rem, 34vw, 36rem)' }}
        >
          EVO
        </span>
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2A]/10 via-transparent to-[#1E1E2A]/80 pointer-events-none" />

      {/* Depth plane 4 — main content (nearest) */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity, x: nearX }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-32"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="label-mono mb-8"
        >
          Evolution Accelerator · Sacramento Valley, CA
        </motion.p>

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

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="w-20 h-px bg-green mb-10 origin-left"
        />

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
