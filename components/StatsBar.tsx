'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from './CountUp'

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="relative bg-[#16161F] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green/[0.04] to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="flex items-center justify-between px-10 lg:px-20 py-10 gap-8"
      >
        <span className="font-inter text-white/25 text-sm uppercase tracking-[0.3em] shrink-0">
          Portfolio Companies
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 via-green/30 to-white/10" />
        <span className="font-raleway font-black text-green-accent shrink-0" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
          <CountUp to={50} suffix="+" duration={1600} />
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 via-green/30 to-white/10" />
        <span className="font-inter text-white/25 text-sm uppercase tracking-[0.3em] shrink-0">
          And Growing
        </span>
      </motion.div>
    </div>
  )
}
