import Link from 'next/link'
import companiesData from '@/data/companies.json'
import { ArrowRight } from 'lucide-react'

export default function MarqueeStrip() {
  const doubled = [...companiesData, ...companiesData]

  return (
    <section className="py-28 bg-[#1E1E1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-4">
              50+ Companies
            </p>
            <h2 className="font-raleway font-black text-5xl md:text-6xl uppercase gradient-text text-glow mb-4">
              Our Portfolio
            </h2>
            <p className="text-white/30 text-lg font-inter max-w-xl">
              Explore the innovative companies we proudly support, each driving change and pushing boundaries.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="btn-outline self-start md:self-auto whitespace-nowrap"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Row 1 — left to right */}
      <div className="marquee-container relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#1E1E1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#1E1E1A] to-transparent z-10 pointer-events-none" />
        <div className="marquee-track marquee-track-fwd">
          {doubled.map((company, i) => (
            <div key={`fwd-${company.id}-${i}`} className="flex items-center">
              <span className="font-raleway font-bold text-2xl md:text-3xl text-white/50 hover:text-green transition-colors duration-300 px-8 whitespace-nowrap cursor-default select-none">
                {company.name}
              </span>
              <span className="text-green/30 text-lg select-none">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="marquee-container relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#1E1E1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#1E1E1A] to-transparent z-10 pointer-events-none" />
        <div className="marquee-track marquee-track-rev">
          {doubled.map((company, i) => (
            <div key={`rev-${company.id}-${i}`} className="flex items-center">
              <span className="font-raleway font-bold text-xl md:text-2xl text-white/35 hover:text-green/80 transition-colors duration-300 px-8 whitespace-nowrap cursor-default select-none">
                {company.name}
              </span>
              <span className="text-green/20 text-lg select-none">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
