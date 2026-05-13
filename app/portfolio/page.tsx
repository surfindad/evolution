'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PortfolioGrid from '@/components/PortfolioGrid'

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative pt-40 pb-16 overflow-hidden bg-[#E8D4B0] grain">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 20%, rgba(119,221,119,0.10) 0%, transparent 55%)',
        }}
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
      >
        <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
          Our Investments
        </p>
        <h1
          className="font-raleway font-black uppercase gradient-text text-glow mb-10 leading-none"
          style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
        >
          Portfolio
        </h1>

        {/* Thesis pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {[
            { num: '01', text: 'Technology decomposing monolithic industries' },
            { num: '02', text: 'Innovation over invention — refine and scale' },
            { num: '03', text: 'Clear, rapid pathways to revenue' },
            { num: '04', text: 'Marginal value exceeds marginal cost' },
          ].map((pillar) => (
            <div
              key={pillar.num}
              className="glass rounded-xl p-5 group"
            >
              <p className="text-green/30 font-raleway font-black text-xs mb-2">{pillar.num}</p>
              <p className="text-[#1A1510]/40 font-inter text-sm leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>

        <p className="text-[#1A1510]/25 text-sm font-inter max-w-2xl leading-relaxed">
          50+ portfolio companies across sectors — each selected for their ability to redefine
          their market with technology, speed, and a clear path to value creation.
        </p>
      </motion.div>
    </section>
  )
}

export default function PortfolioPage() {
  return (
    <main className="bg-[#E8D4B0] min-h-screen">
      <HeroSection />
      <hr className="divider" />
      <section className="py-16 bg-[#E8D4B0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PortfolioGrid />
        </div>
      </section>
    </main>
  )
}
