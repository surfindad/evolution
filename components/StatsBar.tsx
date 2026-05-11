'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '49+', label: 'Portfolio Companies' },
  { value: 'Sacramento', label: 'Valley, California' },
  { value: '3 C\'s', label: 'Capital · Community · Culture' },
]

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="relative bg-[#080810] border-y border-white/5 py-12 overflow-hidden">
      {/* Subtle green shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-col items-center text-center py-8 md:py-2 px-8"
            >
              <span className="font-raleway font-black text-5xl md:text-6xl gradient-text text-glow-sm mb-2">
                {stat.value}
              </span>
              <span className="font-inter text-white/30 text-xs uppercase tracking-[0.25em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
