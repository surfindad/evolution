'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PortfolioGrid from '@/components/PortfolioGrid'

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative pt-40 pb-16 overflow-hidden bg-[#050508]">
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
          className="font-raleway font-black uppercase gradient-text text-glow mb-8 leading-none"
          style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
        >
          Portfolio
        </h1>
        <p className="text-white/35 text-lg font-inter max-w-3xl leading-relaxed">
          Evolution&apos;s portfolio construction is guided by four core principles. First, we
          target startups using technology to decompose monolithic industries. Second, we
          prioritize innovation over invention, seeking companies that refine and scale
          existing technologies for practical application. Third, we invest in ventures with
          clear, rapid pathways to revenue generation. Finally, we focus on companies where
          marginal value significantly exceeds marginal costs, ensuring efficient capital
          deployment and long-term profitability.
        </p>
      </motion.div>
    </section>
  )
}

export default function PortfolioPage() {
  return (
    <main className="bg-[#050508] min-h-screen">
      <HeroSection />
      <hr className="divider" />
      <section className="py-16 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PortfolioGrid />
        </div>
      </section>
    </main>
  )
}
