'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const links = [
  {
    label: 'AngelList',
    title: 'Invest via AngelList',
    description: 'Join as an investor in the Minerva Fund and back the next generation of Sacramento Valley startups.',
    href: 'https://venture.angellist.com/v/back/minerva-fund-6',
    icon: '✌️',
    accent: 'from-orange-500/10 to-transparent',
  },
  {
    label: 'Dealum',
    title: 'Funding via Dealum',
    description: 'Apply for funding through our Dealum platform and connect directly with our investment team.',
    href: 'https://app.dealum.com/#/company/application/new/129390/q84vodhbucyzpog3fiwks4mosjy3bazq',
    icon: '💼',
    accent: 'from-red-500/10 to-transparent',
  },
  {
    label: 'Substack',
    title: 'Subscribe to Substack',
    description: 'Stay informed with ecosystem news, startup insights, and updates from Evolution Accelerator.',
    href: 'https://www.evolutionaccelerator.co/',
    icon: '📬',
    accent: 'from-orange-400/10 to-transparent',
  },
]

export default function LearnMore() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#050508]">
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
              className="glass rounded-2xl p-8 group flex flex-col gap-6 relative overflow-hidden"
            >
              {/* Accent gradient */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${link.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="text-4xl relative z-10">{link.icon}</div>

              <div className="flex-1 relative z-10">
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

              <div className="flex items-center gap-2 text-green/60 group-hover:text-green text-sm font-inter font-semibold transition-colors duration-300 relative z-10">
                Visit Platform <ExternalLink size={13} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
