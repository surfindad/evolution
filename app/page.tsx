'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import LearnMore from '@/components/LearnMore'
import MarqueeStrip from '@/components/MarqueeStrip'

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
    <section className="py-28 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-5">
              Who We Are
            </p>
            <h2 className="font-raleway font-black text-4xl md:text-5xl gradient-text text-glow leading-tight mb-8">
              Evolving the art of acceleration via the{' '}
              <span className="text-green">3C&apos;s</span>
            </h2>
            <p className="text-white/40 text-lg font-inter leading-relaxed mb-6">
              Evolution Accelerator is evolving the art of acceleration within
              California&apos;s Sacramento Valley. The Sacramento Valley is key to
              California&apos;s entrepreneurial ecosystem — ranked #5 regionally for
              women entrepreneurs, ~7,000 investors, and over 700 startups.
            </p>
            <p className="text-white/30 text-lg font-inter leading-relaxed mb-10">
              It also features a diverse market with presence from Intel, UC Davis,
              and Sutter Health. Startups and investors can access vital information
              on our programs below.
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
            className="glass rounded-3xl p-10 space-y-0"
          >
            {stats.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex items-start gap-5 py-6 border-b border-white/5 last:border-0 last:pb-0 first:pt-0"
              >
                <span className="font-raleway font-black text-3xl text-green text-glow-sm shrink-0 w-24">
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

function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-36 bg-[#050508] text-center relative overflow-hidden">
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
          className="font-raleway font-black uppercase gradient-text text-glow mb-6 leading-none"
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

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
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
