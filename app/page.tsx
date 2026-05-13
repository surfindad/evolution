'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ImageIcon } from 'lucide-react'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import LearnMore from '@/components/LearnMore'
import MarqueeStrip from '@/components/MarqueeStrip'

/* ── Manifesto strip ─────────────────────────────────────── */
function Manifesto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const lines = [
    { text: 'Not just another accelerator.', delay: 0 },
    { text: 'A movement.', delay: 0.15 },
  ]

  return (
    <section className="py-32 bg-[#1E1E2A] relative overflow-hidden grain">
      {/* Giant watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-raleway font-black uppercase text-white/[0.022] whitespace-nowrap leading-none"
          style={{ fontSize: 'clamp(8rem, 20vw, 22rem)' }}
        >
          EVOLUTION
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-5xl">
          {lines.map(({ text, delay }) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="font-raleway font-black uppercase gradient-text leading-[0.9] mb-2"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)' }}
              >
                {text}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10"
          >
            <div className="w-16 h-px bg-green/40 mb-8" />
            <p className="text-white/35 text-xl font-inter leading-relaxed max-w-2xl">
              Evolution Accelerator is redefining what it means to support founders —
              bringing together the three essential forces every startup needs to thrive
              in California&apos;s Sacramento Valley and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── The 3 C's ────────────────────────────────────────────── */
const threeCs = [
  {
    num: '01',
    title: 'Capital',
    letter: 'C',
    description:
      'Access to the funding and financial resources that give great ideas the runway to become great companies. We connect founders with investors who believe in the mission.',
    accent: 'from-green/20 via-green/5 to-transparent',
    border: 'border-green/20',
    numColor: 'text-green/10',
  },
  {
    num: '02',
    title: 'Community',
    letter: 'C',
    description:
      'A living network of founders, operators, and partners who actively lift each other up. The Sacramento Valley ecosystem grows stronger every time we collaborate.',
    accent: 'from-emerald-400/15 via-emerald-400/5 to-transparent',
    border: 'border-emerald-400/20',
    numColor: 'text-emerald-400/10',
  },
  {
    num: '03',
    title: 'Culture',
    letter: 'C',
    description:
      'The values, environment, and shared ethos that make exceptional companies possible. We believe culture isn\'t a perk — it\'s the foundation everything else is built on.',
    accent: 'from-teal-400/15 via-teal-400/5 to-transparent',
    border: 'border-teal-400/20',
    numColor: 'text-teal-400/10',
  },
]

function ThreeCsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#16161F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-4">
            Our Foundation
          </p>
          <h2 className="font-raleway font-black text-5xl md:text-6xl uppercase gradient-text">
            The 3 C&apos;s
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {threeCs.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`glass rounded-2xl p-10 relative overflow-hidden border ${c.border} group`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute top-0 left-0 right-0 h-48 bg-gradient-to-b ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Giant number watermark */}
              <span
                className={`absolute -bottom-4 -right-2 font-raleway font-black leading-none select-none pointer-events-none ${c.numColor}`}
                style={{ fontSize: '9rem' }}
                aria-hidden
              >
                {c.num}
              </span>

              <div className="relative z-10">
                <p className="text-white/20 font-inter text-xs tracking-widest uppercase mb-6">
                  {c.num}
                </p>
                <h3
                  className="font-raleway font-black uppercase gradient-text leading-none mb-6"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
                >
                  {c.title}
                </h3>
                <p className="text-white/35 font-inter leading-relaxed text-base">
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

/* ── About snippet ────────────────────────────────────────── */
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const stats = [
    { num: '#5', desc: 'Ranked regionally for women entrepreneurs' },
    { num: '~7,000', desc: 'Investors in the Sacramento Valley ecosystem' },
    { num: '700+', desc: 'Startups in the region' },
    { num: '49+', desc: 'Portfolio companies supported' },
  ]

  return (
    <section className="py-28 bg-[#1E1E2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-5">
              Sacramento Valley
            </p>
            <h2 className="font-raleway font-black text-4xl md:text-5xl gradient-text leading-tight mb-8">
              Why the Sacramento Valley?
            </h2>
            <p className="text-white/40 text-lg font-inter leading-relaxed mb-6">
              The Sacramento Valley is one of California&apos;s most underestimated entrepreneurial
              ecosystems — ranked <span className="text-green font-semibold">#5 regionally for women entrepreneurs</span>,
              home to ~7,000 investors, and 700+ active startups.
            </p>
            <p className="text-white/30 text-lg font-inter leading-relaxed mb-10">
              With Intel, UC Davis, and Sutter Health anchoring a diverse market, this is where
              the next wave of transformative companies will be built.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-green font-raleway font-bold text-sm tracking-widest uppercase border-b border-green/30 pb-1 hover:border-green transition-colors duration-300"
            >
              Learn More About Us <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="glass rounded-3xl p-10 relative"
          >
            {/*
             * ─────────────────────────────────────────────────────────────
             * SACRAMENTO VALLEY / OFFICE PHOTO
             * Add a photo to /public/images/sacramento.jpg then replace the
             * placeholder below with:
             *   <img src="/images/sacramento.jpg" alt="Sacramento Valley"
             *        className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-20" />
             * ─────────────────────────────────────────────────────────────
             */}
            {/* Stats rows */}
            {stats.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex items-start gap-5 py-5 border-b border-white/5 last:border-0 last:pb-0 first:pt-0"
              >
                <span className="font-raleway font-black text-3xl text-green shrink-0 w-24">
                  {item.num}
                </span>
                <span className="text-white/40 font-inter leading-relaxed pt-1">
                  {item.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── CTA ──────────────────────────────────────────────────── */
function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-36 bg-[#1E1E2A] text-center relative overflow-hidden grain">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(119,221,119,0.10) 0%, transparent 65%)',
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
          Join the Ecosystem
        </p>
        <h2
          className="font-raleway font-black uppercase gradient-text mb-6 leading-none"
          style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
        >
          Ready to<br />Evolve?
        </h2>
        <p className="text-white/35 text-lg font-inter mb-12 leading-relaxed max-w-xl mx-auto">
          Apply for access to the Evolution Ecosystem. Join startups, investors, and
          partners driving meaningful change in Sacramento Valley and beyond.
        </p>
        <a
          href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Apply Now <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Manifesto />
      <hr className="divider" />
      <ThreeCsSection />
      <hr className="divider" />
      <AboutSection />
      <hr className="divider" />
      <LearnMore />
      <hr className="divider" />
      <MarqueeStrip />
      <hr className="divider" />
      <CTASection />
    </main>
  )
}
