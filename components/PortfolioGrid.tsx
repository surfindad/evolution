'use client'

import { useState, useMemo } from 'react'
import { Search, ExternalLink } from 'lucide-react'
import companiesData from '@/data/companies.json'

export default function PortfolioGrid() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return companiesData
    const q = query.toLowerCase()
    return companiesData.filter((c) => c.name.toLowerCase().includes(q))
  }, [query])

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-10 max-w-lg">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25"
          size={18}
        />
        <input
          type="text"
          placeholder="Search companies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-surface-2 border border-green/10 focus:border-green/35 rounded-full pl-12 pr-6 py-3.5 text-white placeholder-white/25 font-inter text-sm outline-none transition-all duration-300"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors text-xs"
          >
            Clear
          </button>
        )}
      </div>

      {/* Company count */}
      <p className="text-white/25 text-xs font-inter tracking-widest uppercase mb-8">
        {filtered.length} {filtered.length === 1 ? 'Company' : 'Companies'}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((company) => (
            <a
              key={company.id}
              href={company.pageUrl || '#'}
              target={company.pageUrl ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="card-dark rounded-xl aspect-square flex flex-col items-center justify-center p-5 group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-green/0 group-hover:bg-green/[0.03] transition-all duration-300 rounded-xl" />

              <span className="font-raleway font-bold text-center text-white/65 group-hover:text-green transition-colors duration-300 text-sm leading-tight relative z-10">
                {company.name}
              </span>

              {company.description && (
                <span className="text-white/25 text-xs text-center mt-2 leading-tight font-inter relative z-10">
                  {company.description}
                </span>
              )}

              <ExternalLink
                size={12}
                className="absolute bottom-3 right-3 text-white/0 group-hover:text-green/40 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-white/30 font-inter text-lg mb-2">No companies found</p>
          <p className="text-white/15 font-inter text-sm">Try a different search term</p>
        </div>
      )}
    </div>
  )
}
