'use client'

import { useState, useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, ExternalLink } from 'lucide-react'
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
      {/* Search */}
      <div className="relative mb-10 max-w-lg">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={17} />
        <input
          type="text"
          placeholder="Search companies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white/[0.03] border border-white/[0.07] focus:border-green/30 rounded-full pl-12 pr-6 py-3.5 text-white placeholder-white/20 font-inter text-sm outline-none transition-all duration-300 backdrop-blur-md"
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

      <p className="text-white/20 text-xs font-inter tracking-widest uppercase mb-8">
        {filtered.length} {filtered.length === 1 ? 'Company' : 'Companies'}
      </p>

      {filtered.length > 0 ? (
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
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
                delay: Math.min(i * 0.03, 0.8),
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="glass rounded-xl aspect-square flex flex-col items-center justify-center p-5 group relative overflow-hidden"
            >
              {/* Green corner accent on hover */}
              <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-green/50 to-transparent" />
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-green/50 to-transparent" />
              </div>

              <span className="font-raleway font-bold text-center text-white/50 group-hover:text-green transition-colors duration-300 text-sm leading-tight relative z-10">
                {company.name}
              </span>

              {company.description && (
                <span className="text-white/20 text-xs text-center mt-2 leading-tight font-inter relative z-10">
                  {company.description}
                </span>
              )}

              <ExternalLink
                size={11}
                className="absolute bottom-3 right-3 text-white/0 group-hover:text-green/40 transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>
      ) : (
        <div className="text-center py-28">
          <p className="text-white/25 font-inter text-lg mb-2">No companies found</p>
          <p className="text-white/12 font-inter text-sm">Try a different search term</p>
        </div>
      )}
    </div>
  )
}
