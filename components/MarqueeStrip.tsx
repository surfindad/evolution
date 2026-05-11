import Link from 'next/link'
import companiesData from '@/data/companies.json'
import { ArrowRight } from 'lucide-react'

export default function MarqueeStrip() {
  const doubled = [...companiesData, ...companiesData]

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-green/60 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-4">
              50+ Companies
            </p>
            <h2 className="font-raleway font-black text-5xl md:text-6xl uppercase text-green text-glow mb-4">
              Our Portfolio
            </h2>
            <p className="text-white/35 text-lg font-inter max-w-xl">
              Explore the innovative companies we proudly support, each driving change and pushing boundaries in their field.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-green/25 text-green font-raleway font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-green/10 hover:border-green/50 transition-all duration-300 whitespace-nowrap self-start md:self-auto"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {doubled.map((company, i) => (
            <div key={`${company.id}-${i}`} className="flex items-center">
              <span className="font-raleway font-bold text-2xl md:text-3xl text-white/20 hover:text-green transition-colors duration-300 px-8 whitespace-nowrap cursor-default select-none">
                {company.name}
              </span>
              <span className="text-green/15 text-xl select-none">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
