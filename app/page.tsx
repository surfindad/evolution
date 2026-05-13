'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import LearnMore from '@/components/LearnMore'
import MarqueeStrip from '@/components/MarqueeStrip'

/* ── Word-by-word reveal ─────────────────────────────────────── */
function WordReveal({
  text,
  className,
  delay = 0,
  style,
}: {
  text: string
  className?: string
  delay?: number
  style?: React.CSSProperties
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const words = text.split(' ')

  return (
    <div ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.22em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.75, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}

/* ── Manifesto ───────────────────────────────────────────────── */
function Manifesto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-40 bg-[#1E1E2A] relative overflow-hidden grain">
      <div className="absolute inset-0 grid-bg opacity-[0.025] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-green/50 text-xs font-inter font-semibold tracking-[0.5em] uppercase mb-10"
        >
          Our Mission
        </motion.p>

        {/* Word reveal lines */}
        <WordReveal
          text="Not just another accelerator."
          delay={0.1}
          className="font-raleway font-black uppercase gradient-text leading-[0.9] mb-3"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 7.5rem)' }}
        />
        <WordReveal
          text="A movement."
          delay={0.4}
          className="font-raleway font-black uppercase text-white/90 leading-[0.9]"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 7.5rem)' }}
        />

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-14 max-w-2xl border-l-2 border-green/30 pl-8"
        >
          <p className="text-white/40 text-xl font-inter leading-relaxed">
            Evolution Accelerator is redefining what it means to support founders —
            bringing together the three essential forces every startup needs to thrive
            in California&apos;s Sacramento Valley and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── The 3 C's — editorial rows ──────────────────────────────── */
const threeCs = [
  {
    num: '01',
    title: 'Capital',
    description:
      'Access to the funding and financial resources that give great ideas the runway to become great companies. We connect founders with investors who believe in the mission.',
  },
  {
    num: '02',
    title: 'Community',
    description:
      'A living network of founders, operators, and partners who actively lift each other up. The Sacramento Valley ecosystem grows stronger every time we collaborate.',
  },
  {
    num: '03',
    title: 'Culture',
    description:
      "The values, environment, and shared ethos that make exceptional companies possible. Culture isn't a perk — it's the foundation everything else is built on.",
  },
]

function ThreeCsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#16161F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 pb-6 border-b border-white/8"
        >
          <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.5em] uppercase">
            Our Foundation
          </p>
          <p className="text-white/20 font-inter text-sm tracking-widest">The 3 C&apos;s</p>
        </motion.div>

        <div ref={ref} className="divide-y divide-white/8">
          {threeCs.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 py-10 md:py-14 hover:bg-white/[0.02] transition-colors duration-500 -mx-6 px-6 lg:-mx-10 lg:px-10"
            >
              {/* Number */}
              <span className="text-white/20 font-inter text-sm tracking-widest pt-2 md:pt-4">
                {c.num}
              </span>

              {/* Title */}
              <div className="md:flex md:items-center">
                <h3
                  className="font-raleway font-black uppercase gradient-text leading-none"
                  style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)' }}
                >
                  {c.title}
                </h3>
              </div>

              {/* Description — hidden on mobile unless expanded */}
              <div className="col-span-2 md:col-span-1 md:flex md:items-center">
                <p className="text-white/40 font-inter leading-relaxed text-base md:text-lg">
                  {c.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Sacramento Valley stats ─────────────────────────────────── */
const stats = [
  { num: '#5', label: 'Regionally for women entrepreneurs' },
  { num: '~7K', label: 'Investors in the ecosystem' },
  { num: '700+', label: 'Active startups in the region' },
  { num: '49+', label: 'Portfolio companies' },
]

function RegionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#1E1E2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-green/50 text-xs font-inter font-semibold tracking-[0.5em] uppercase mb-6"
          >
            Sacramento Valley
          </motion.p>
          <WordReveal
            text="California's most underestimated ecosystem."
            className="font-raleway font-black leading-tight gradient-text"
            style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
          />
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1E1E2A] p-8 md:p-10 flex flex-col gap-3"
            >
              <span
                className="font-raleway font-black gradient-text leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                {s.num}
              </span>
              <span className="text-white/35 font-inter text-sm leading-relaxed">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex justify-end"
        >
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-green font-raleway font-bold text-xs tracking-[0.3em] uppercase border-b border-green/30 pb-1 hover:border-green transition-colors duration-300"
          >
            Learn More About Us <ArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Full-width statement band ───────────────────────────────── */
function StatementBand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-green overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10"
      >
        <p
          className="font-raleway font-black uppercase text-[#1E1E2A] leading-none"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
        >
          49+ companies.<br />One ecosystem.
        </p>
        <a
          href="/portfolio"
          className="inline-flex items-center gap-3 bg-[#1E1E2A] text-green font-raleway font-bold text-xs tracking-[0.3em] uppercase px-8 py-4 rounded-full hover:bg-[#0f0f17] transition-colors duration-300 self-start md:self-auto whitespace-nowrap"
        >
          View Portfolio <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </section>
  )
}

/* ── CTA ─────────────────────────────────────────────────────── */
function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center bg-[#1E1E2A] text-center relative overflow-hidden grain py-32">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Giant background word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-raleway font-black uppercase text-white/[0.018] whitespace-nowrap leading-none"
          style={{ fontSize: 'clamp(10rem, 28vw, 28rem)' }}
        >
          APPLY
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-green/50 text-xs font-inter font-semibold tracking-[0.5em] uppercase mb-10"
        >
          Join the Ecosystem
        </motion.p>

        <WordReveal
          text="Ready to evolve?"
          delay={0.1}
          className="font-raleway font-black uppercase gradient-text leading-none mb-10"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/35 text-lg font-inter mb-14 leading-relaxed max-w-lg mx-auto"
        >
          Apply for access to the Evolution Ecosystem. Join startups, investors, and
          partners driving meaningful change in Sacramento Valley and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <a
            href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-5"
          >
            Apply Now <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Manifesto />
      <hr className="divider" />
      <ThreeCsSection />
      <hr className="divider" />
      <RegionSection />
      <StatementBand />
      <LearnMore />
      <hr className="divider" />
      <MarqueeStrip />
      <hr className="divider" />
      <CTASection />
    </main>
  )
}
