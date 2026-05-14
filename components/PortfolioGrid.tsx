'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowUpRight, X } from 'lucide-react'
import Image from 'next/image'
import companiesData from '@/data/companies.json'

const ALL = 'All'
const SECTORS = [
  ALL,
  'AI & ML',
  'Health',
  'Fintech',
  'Consumer',
  'CleanTech',
  'Enterprise',
  'E-Commerce',
  'EdTech',
  'Technology',
]

const SECTOR_COLORS: Record<string, string> = {
  'AI & ML':    'text-violet-400  border-violet-400/30  bg-violet-400/10',
  'Health':     'text-rose-400    border-rose-400/30    bg-rose-400/10',
  'Fintech':    'text-sky-400     border-sky-400/30     bg-sky-400/10',
  'Consumer':   'text-amber-400   border-amber-400/30   bg-amber-400/10',
  'CleanTech':  'text-green       border-green/30       bg-green/10',
  'Enterprise': 'text-indigo-400  border-indigo-400/30  bg-indigo-400/10',
  'E-Commerce': 'text-orange-400  border-orange-400/30  bg-orange-400/10',
  'EdTech':     'text-pink-400    border-pink-400/30    bg-pink-400/10',
  'Technology': 'text-white/50    border-white/15       bg-white/5',
}

function SectorPill({ sector }: { sector: string }) {
  const cls = SECTOR_COLORS[sector] ?? SECTOR_COLORS['Technology']
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-inter font-semibold tracking-[0.12em] uppercase border ${cls}`}>
      {sector}
    </span>
  )
}

export default function PortfolioGrid() {
  const [query, setQuery]   = useState('')
  const [sector, setSector] = useState(ALL)

  const filtered = useMemo(() => {
    return companiesData.filter((c) => {
      const matchSector = sector === ALL || c.sector === sector
      const matchQuery  = !query.trim() || c.name.toLowerCase().includes(query.toLowerCase())
      return matchSector && matchQuery
    })
  }, [query, sector])

  const counts = useMemo(() => {
    const map: Record<string, number> = { [ALL]: companiesData.length }
    companiesData.forEach((c) => {
      map[c.sector] = (map[c.sector] ?? 0) + 1
    })
    return map
  }, [])

  return (
    <div>
      {/* ── Filter bar ─────────────────────────────────────────── */}
      <div className="mb-8 flex flex-col gap-5">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={15} />
          <input
            type="text"
            placeholder="Search companies…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-green/40 rounded-full pl-11 pr-10 py-3 text-white placeholder-white/20 font-inter text-sm outline-none transition-all duration-300"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Sector pills */}
        <div className="flex flex-wrap gap-2">
          {SECTORS.map((s) => (
            <button
              key={s}
              onClick={() => setSector(s)}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-[0.1em] uppercase border transition-all duration-300 ${
                sector === s
                  ? 'bg-green text-[#1E1E2A] border-green'
                  : 'bg-transparent text-white/40 border-white/10 hover:text-white/70 hover:border-white/25'
              }`}
            >
              {s}
              <span className={`text-[10px] font-normal ${sector === s ? 'opacity-60' : 'opacity-40'}`}>
                {counts[s] ?? 0}
              </span>
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-white/20 text-xs font-inter tracking-widest uppercase">
          {filtered.length} {filtered.length === 1 ? 'company' : 'companies'}
          {sector !== ALL ? ` · ${sector}` : ''}
        </p>
      </div>

      {/* ── Grid ───────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={`${sector}-${query}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden"
          >
            {filtered.map((company, i) => {
              const hasLink = !!company.pageUrl
              const inner = (
                <div className={`group relative bg-[#16161F] p-7 flex flex-col gap-5 h-full min-h-[180px] transition-all duration-300 ${hasLink ? 'hover:bg-[#1a1a28]' : ''}`}>
                  {/* Top: logo + sector pill */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0 overflow-hidden">
                      {company.logo ? (
                        <Image src={company.logo} alt={company.name} width={44} height={44} className="object-contain w-full h-full p-1" />
                      ) : (
                        <span className="font-raleway font-black text-white/30 text-base leading-none">
                          {company.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <SectorPill sector={company.sector} />
                      {hasLink && (
                        <ArrowUpRight size={14} className="text-white/20 group-hover:text-green transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                      )}
                    </div>
                  </div>
                  {/* Name + description */}
                  <div className="flex-1">
                    <h3 className={`font-raleway font-bold text-lg leading-snug mb-2 transition-colors duration-300 ${hasLink ? 'text-white/70 group-hover:text-white' : 'text-white/60'}`}>
                      {company.name}
                    </h3>
                    {company.description && (
                      <p className="text-white/35 font-inter text-sm leading-relaxed line-clamp-2">{company.description}</p>
                    )}
                  </div>
                  {hasLink && <div className="absolute bottom-0 left-0 right-0 h-px bg-green/0 group-hover:bg-green/30 transition-all duration-300" />}
                </div>
              )

              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.4) }}
                >
                  {hasLink ? (
                    <a href={company.pageUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                      {inner}
                    </a>
                  ) : inner}
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-32"
          >
            <p className="text-white/25 font-inter text-lg mb-2">No companies found</p>
            <p className="text-white/15 font-inter text-sm">Try a different search or filter</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
