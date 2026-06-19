'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PortfolioGrid from '@/components/PortfolioGrid'

const THESIS = [
  { num: '01', text: 'Technology decomposing monolithic industries' },
  { num: '02', text: 'Innovation over invention — refine and scale' },
  { num: '03', text: 'Clear, rapid pathways to revenue' },
  { num: '04', text: 'Marginal value exceeds marginal cost' },
]

const STATS = [
  { value: '50+',  label: 'Portfolio Companies' },
  { value: '9',    label: 'Sectors' },
  { value: '#5',   label: 'Women Entrepreneurs' },
]

export default function PortfolioPage() {
  const heroRef   = useRef(null)
  const { scrollY } = useScroll()
  const heroY     = useTransform(scrollY, [0, 600], [0, -100])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const isInView  = useInView(heroRef, { once: true })

  return (
    <main className="bg-[#1E1E2A] min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-0 overflow-hidden bg-[#1E1E2A] min-h-[80vh] flex flex-col justify-end grain">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        {/* Ghost background word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span
            className="font-raleway font-black uppercase text-white/[0.022] leading-none whitespace-nowrap"
            style={{ fontSize: 'clamp(6rem, 18vw, 20rem)' }}
          >
            PORTFOLIO
          </span>
        </div>

        <motion.div
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full"
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="label-mono mb-8"
          >
            Our Investments
          </motion.p>

          {/* Heading + sidebar */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-16">
            <div className="overflow-hidden">
              <motion.h1
                className="font-raleway font-black uppercase text-white leading-none"
                style={{ fontSize: 'clamp(3rem, 8vw, 8.5rem)' }}
                initial={{ y: '110%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                Portfolio
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="max-w-sm border-l-2 border-green/30 pl-6 pb-1 shrink-0"
            >
              <p className="text-white/40 font-inter text-base leading-relaxed mb-5">
                50+ companies across 9 sectors — each selected for their ability to
                redefine their market with technology, speed, and a clear path to
                value creation.
              </p>
              <a
                href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green font-raleway font-bold text-xs tracking-[0.3em] uppercase border-b border-green/30 pb-1 hover:border-green transition-colors duration-300"
              >
                Apply to Join <ArrowRight size={13} />
              </a>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden"
          >
            {STATS.map((s) => (
              <div key={s.label} className="bg-[#1E1E2A] px-6 py-5 flex flex-col gap-1">
                <span className="font-raleway font-black text-green-accent leading-none" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                  {s.value}
                </span>
                <span className="label-mono">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <hr className="divider" />

      {/* ── Investment Thesis ─────────────────────────────────── */}
      <ThesisSection />

      <hr className="divider" />

      {/* ── Portfolio Grid ────────────────────────────────────── */}
      <section className="py-20 bg-[#1E1E2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PortfolioGrid />
        </div>
      </section>

      <hr className="divider" />

      {/* ── CTA ───────────────────────────────────────────────── */}
      <CTABand />
    </main>
  )
}

/* ── Investment Thesis ───────────────────────────────────────── */
function ThesisSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 bg-[#16161F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-16">

          {/* Left label + heading */}
          <div className="lg:w-80 shrink-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="label-mono mb-4"
            >
              Investment Thesis
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/30 font-inter text-sm leading-relaxed"
            >
              Four principles that guide every company we back.
            </motion.p>
          </div>

          {/* Right: 2-col pillars */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.05] rounded-xl overflow-hidden">
            {THESIS.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#16161F] p-8 group hover:bg-[#1a1a26] transition-colors duration-300"
              >
                <p className="label-mono mb-4 text-green/40">{p.num}</p>
                <p className="text-white/55 font-inter text-base leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CTA band ────────────────────────────────────────────────── */
function CTABand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-28 bg-[#1E1E2A] relative overflow-hidden grain">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="label-mono mb-4">Join the Portfolio</p>
          <h2
            className="font-raleway font-black uppercase text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            Building something<br />
            <span className="text-green">worth backing?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-4 shrink-0"
        >
          <a
            href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Apply Now <ArrowRight size={15} />
          </a>
          <p className="text-white/45 font-inter text-xs text-center">
            Sacramento Valley &amp; beyond
          </p>
        </motion.div>
      </div>
    </section>
  )
}
