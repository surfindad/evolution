'use client'

import { useState, useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, ExternalLink, ArrowUpRight } from 'lucide-react'
import companiesData from '@/data/companies.json'

export default function PortfolioGrid() {
  const [query, setQuery] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const filtered = useMemo(() => {
    if (!query.trim()) return companiesData
    const q = query.toLowerCase()
    return companiesData.filter((c) => c.name.toLowerCase().includes(q))
  }, [query])

  return (
    <div>
      {/* Search bar */}
      <div className="flex items-center gap-4 mb-10">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
          <input
            type="text"
            placeholder="Search portfolio companies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#1A1510]/[0.03] border border-white/[0.08] focus:border-green/40 rounded-full pl-11 pr-6 py-3.5 text-white placeholder-[#1A1510]/20 font-inter text-sm outline-none transition-all duration-300 backdrop-blur-md"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors text-xs font-inter"
            >
              Clear
            </button>
          )}
        </div>
        <p className="text-white/20 text-xs font-inter tracking-widest uppercase shrink-0">
          {filtered.length} {filtered.length === 1 ? 'Company' : 'Companies'}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((company, i) => (
            <motion.a
              key={company.id}
              href={company.pageUrl || '#'}
              target={company.pageUrl ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: Math.min(i * 0.025, 0.7),
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#1A1510]/[0.03] hover:bg-[#1A1510]/[0.06] hover:border-green/30 transition-all duration-400 flex flex-col items-start justify-between p-6 h-36"
              style={{
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(119,221,119,0.07) 0%, transparent 70%)' }}
              />

              {/* Top left accent on hover */}
              <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="font-raleway font-bold text-white/55 group-hover:text-white transition-colors duration-300 text-base leading-snug relative z-10 line-clamp-2">
                {company.name}
              </span>

              <div className="flex items-center justify-between w-full relative z-10">
                <span className="text-green/0 group-hover:text-green/50 text-xs font-inter tracking-widest uppercase transition-colors duration-300">
                  View
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-white/0 group-hover:text-green/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </motion.a>
          ))}
        </div>
      ) : (
        <div className="text-center py-28">
          <p className="text-white/25 font-inter text-lg mb-2">No companies found</p>
          <p className="text-white/15 font-inter text-sm">Try a different search term</p>
        </div>
      )}
    </div>
  )
}
