'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, DollarSign, Rss, ExternalLink } from 'lucide-react'

const links = [
  {
    label: 'AngelList',
    title: 'Invest via AngelList',
    description: 'Join as an investor in the Minerva Fund and back the next generation of Sacramento Valley startups.',
    href: 'https://venture.angellist.com/v/back/minerva-fund-6',
    Icon: TrendingUp,
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-400',
    topBar: 'from-orange-500/60 via-orange-400/30 to-transparent',
    glow: 'group-hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]',
    stat: 'Minerva Fund',
    statLabel: 'Active investment vehicle',
  },
  {
    label: 'Dealum',
    title: 'Funding via Dealum',
    description: 'Apply for funding through our Dealum platform and connect directly with our investment team.',
    href: 'https://app.dealum.com/#/company/application/new/129390/q84vodhbucyzpog3fiwks4mosjy3bazq',
    Icon: DollarSign,
    iconBg: 'bg-green/10',
    iconColor: 'text-green',
    topBar: 'from-green/60 via-green/30 to-transparent',
    glow: 'group-hover:shadow-[0_0_40px_rgba(119,221,119,0.15)]',
    stat: 'Apply Now',
    statLabel: 'Open to new applicants',
  },
  {
    label: 'Substack',
    title: 'Subscribe to Substack',
    description: 'Stay informed with ecosystem news, startup insights, and updates from Evolution Accelerator.',
    href: 'https://www.evolutionaccelerator.co/',
    Icon: Rss,
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    topBar: 'from-amber-500/60 via-amber-400/30 to-transparent',
    glow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]',
    stat: 'Newsletter',
    statLabel: 'Ecosystem insights & news',
  },
]

export default function LearnMore() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#0D0D0B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-4">
            Get Involved
          </p>
          <h2 className="font-raleway font-black text-5xl md:text-6xl uppercase gradient-text text-glow mb-5">
            Learn More
          </h2>
          <p className="text-white/30 text-lg font-inter max-w-lg">
            Investing, funding, and subscription — select a card to go to the respective platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
              className={`glass rounded-2xl flex flex-col relative overflow-hidden transition-all duration-500 ${link.glow}`}
            >
              {/* Top accent bar */}
              <div className={`h-px w-full bg-gradient-to-r ${link.topBar}`} />

              <div className="p-8 flex flex-col gap-6 flex-1">
                {/* Icon + stat row */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl ${link.iconBg} flex items-center justify-center`}>
                    <link.Icon size={22} className={link.iconColor} />
                  </div>
                  <div className="text-right">
                    <p className={`font-raleway font-black text-sm ${link.iconColor}`}>{link.stat}</p>
                    <p className="text-white/25 text-xs font-inter mt-0.5">{link.statLabel}</p>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-green/40 text-xs font-inter tracking-widest uppercase mb-2">
                    {link.label}
                  </p>
                  <h3 className="font-raleway font-bold text-white text-xl mb-3 group-hover:text-green transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-white/30 text-sm font-inter leading-relaxed">
                    {link.description}
                  </p>
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-2 text-sm font-inter font-semibold transition-colors duration-300 ${link.iconColor} opacity-70 group-hover:opacity-100`}>
                  Visit Platform <ExternalLink size={13} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
