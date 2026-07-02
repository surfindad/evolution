'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion'
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

/* ── Manifesto — asymmetric split ────────────────────────────── */
function Manifesto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-40 bg-[#1E1E2A] relative overflow-hidden grain">
      <div className="absolute inset-0 grid-bg opacity-[0.025] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 lg:gap-24 items-end">

          {/* Left: big type */}
          <div>
            <motion.p
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="label-mono mb-10"
            >
              Our Mission
            </motion.p>
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
          </div>

          {/* Right: editorial sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="border-l-2 border-green/30 pl-8 pb-1 flex flex-col gap-8"
          >
            <p className="text-white/40 text-lg font-inter leading-relaxed">
              Evolution Accelerator is redefining what it means to support founders —
              bringing together the three essential forces every startup needs to thrive
              in California&apos;s Sacramento Valley and beyond.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-green font-raleway font-bold text-xs tracking-[0.3em] uppercase border-b border-green/30 pb-1 hover:border-green transition-colors duration-300 self-start"
            >
              Our Story <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Three C's — sticky scroll narrative ─────────────────────── */
const threeCs = [
  {
    num: '01',
    title: 'Capital',
    description:
      'Access to the funding and financial resources that give great ideas the runway to become great companies. We connect founders with investors who believe in the mission.',
    accent: 'Funding & Resources',
  },
  {
    num: '02',
    title: 'Community',
    description:
      'A living network of founders, operators, and partners who actively lift each other up. The Sacramento Valley ecosystem grows stronger every time we collaborate.',
    accent: 'Network & Belonging',
  },
  {
    num: '03',
    title: 'Culture',
    description:
      "The values, environment, and shared ethos that make exceptional companies possible. Culture isn't a perk — it's the foundation everything else is built on.",
    accent: 'Values & Ethos',
  },
]

function ThreeCsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v < 0.34) setActive(0)
    else if (v < 0.67) setActive(1)
    else setActive(2)
  })

  return (
    <section ref={containerRef} className="relative bg-[#16161F]" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

        {/* Top bar */}
        <div className="flex items-center justify-between px-6 lg:px-10 pt-10 pb-0">
          <p className="label-mono">Our Foundation — The 3 C&apos;s</p>
          {/* Step indicators */}
          <div className="flex gap-3 items-center">
            {threeCs.map((_, i) => (
              <motion.div
                key={i}
                animate={{ width: i === active ? 32 : 16, opacity: i === active ? 1 : 0.25 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="h-px bg-green origin-left"
              />
            ))}
          </div>
        </div>

        {/* Main grid */}
        <div className="flex-1 grid lg:grid-cols-2 gap-0 items-center px-6 lg:px-10">

          {/* Left: large number + title */}
          <div className="relative flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Ghost number */}
                <div
                  className="font-raleway font-black leading-none text-white/[0.04] select-none absolute -top-8 -left-4"
                  style={{ fontSize: 'clamp(10rem, 22vw, 22rem)' }}
                  aria-hidden
                >
                  {threeCs[active].num}
                </div>
                {/* Step label */}
                <p className="label-mono mb-6 relative z-10">{threeCs[active].num} / 03</p>
                {/* Title */}
                <h3
                  className="font-raleway font-black uppercase text-white leading-none relative z-10"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 6.5rem)' }}
                >
                  {threeCs[active].title}
                </h3>
                {/* Accent tag */}
                <div className="mt-6 inline-flex items-center gap-2 relative z-10">
                  <div className="w-4 h-px bg-green" />
                  <span className="text-green text-xs font-inter font-medium tracking-[0.2em] uppercase">
                    {threeCs[active].accent}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: description */}
          <div className="flex items-center lg:pl-20 border-t lg:border-t-0 lg:border-l border-white/5 py-10 lg:py-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-md"
              >
                <p className="text-white/50 text-xl lg:text-2xl font-inter leading-relaxed">
                  {threeCs[active].description}
                </p>

                {/* Navigation dots */}
                <div className="mt-12 flex gap-6">
                  {threeCs.map((c, i) => (
                    <span
                      key={i}
                      className={`font-raleway font-bold text-xs uppercase tracking-widest transition-colors duration-300 ${
                        i === active ? 'text-green' : 'text-white/20'
                      }`}
                    >
                      {c.title}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom progress bar */}
        <motion.div
          className="h-px bg-green/30 origin-left mx-6 lg:mx-10 mb-10"
          animate={{ scaleX: (active + 1) / 3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
    </section>
  )
}

/* ── Sacramento Valley — bento grid ─────────────────────────── */
function RegionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const delay = (i: number) => ({ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const })

  return (
    <section className="py-28 bg-[#1E1E2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Asymmetric heading */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="label-mono mb-6"
            >
              Sacramento Valley
            </motion.p>
            <WordReveal
              text="California's most underestimated ecosystem."
              className="font-raleway font-black leading-tight gradient-text"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/50 text-base font-inter max-w-xs leading-relaxed lg:text-right"
          >
            Numbers that tell the story of a region ready to become the next great startup hub.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div ref={ref} className="grid grid-cols-1 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">

          {/* 50+ — full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={delay(0)}
            className="bg-[#16161F] p-8 lg:p-10 flex items-center justify-between gap-6"
          >
            <div>
              <span
                className="font-raleway font-black text-green-accent leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                50+
              </span>
              <span className="text-white/35 font-inter text-sm block mt-1">Portfolio companies</span>
            </div>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-green font-raleway font-bold text-xs tracking-[0.25em] uppercase border border-green/25 px-6 py-3 rounded-full hover:bg-green/10 hover:border-green/50 transition-all duration-300 shrink-0"
            >
              View All <ArrowUpRight size={13} />
            </a>
          </motion.div>
        </div>
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
          50+ companies.<br />One ecosystem.
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
          className="label-mono mb-10"
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
