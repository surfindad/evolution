'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'

/* ── Data ────────────────────────────────────────────────────── */
const partners = [
  {
    num: '01',
    name: 'MasterVerse.AI',
    description: 'AI-powered services platform',
    href: 'https://www.masterverse.ai/p/services',
    logo: '/images/masterverseAI-logo.jpg',
  },
  {
    num: '02',
    name: 'Evolution Venture Catalyst',
    description: 'Venture catalyst program',
    href: 'https://www.evolutionacceleration.com/venture-catalyst-program',
    logo: '/images/evolution-logo.jpg',
  },
  {
    num: '03',
    name: 'Elevate Global',
    description: 'Global acceleration services',
    href: 'https://www.elevateglobal.io/p/services',
    logo: '/images/elevateglobal-logo.jpg',
  },
  {
    num: '04',
    name: 'Red Dot Accelerator',
    description: 'Accelerator program partner',
    href: 'https://www.evolutionacceleration.com/red-dot-accelerator',
    logo: '/images/reddotaccelerator-logo.jpg',
  },
  {
    num: '05',
    name: 'The CRC Digest',
    description: 'Ecosystem news and insights',
    href: 'https://crcdigest.com/',
    logo: '/images/thecrc-logo.jpg',
  },
]

const termsBullets = [
  {
    title: 'Fee Structure',
    content:
      'The Evolution Ecosystem is free to use for all non-monetized activities. If you are paid for products or services through the Evolution Ecosystem by Evolution Accelerator, Inc., such action constitutes agreement to Evolution Accelerator, Inc. to retain a 10% fee from each transaction amount at the time of processing.',
  },
  {
    title: 'Third-Party Transaction Fees',
    content:
      'In addition to the 10% fee retained by Evolution Accelerator, Inc., any transaction fees charged by third-party payment processors (e.g., Stripe) will be passed through to you without markup or deducted from each transaction amount. These fees will be calculated, deducted, and retained by Evolution Accelerator, Inc. at the time of each transaction.',
  },
  {
    title: 'Clients, Content, Data, Products & Services',
    content:
      "Collection, processing, or submission of Evolution Ecosystem users' content, brand, data, or services does not constitute transfer of legal and monetary rights to Evolution Accelerator, Inc. Users retain full copyrights and may de-platform or discontinue processing at any time with no further legal or monetary obligation.",
  },
]

/* ── Word reveal helper ──────────────────────────────────────── */
function WordReveal({
  text,
  className,
  delay = 0,
  style,
}: {
  text: string
  className?: string
  delay?: number
  style?: React.CSSProperties
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <div ref={ref} className={className} style={style} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.22em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.75, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}

/* ── Hero ────────────────────────────────────────────────────── */
function Hero() {
  const { scrollY } = useScroll()
  const y       = useTransform(scrollY, [0, 600], [0, -100])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const ref     = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#1E1E2A] grain">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      {/* Ghost backdrop */}
      <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-raleway font-black uppercase text-white/[0.022] leading-none -ml-2"
          style={{ fontSize: 'clamp(7rem, 22vw, 24rem)' }}
        >
          ECOSYSTEM
        </span>
      </div>

      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-44 pb-20"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="label-mono mb-8"
        >
          Our Network
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <div className="lg:max-w-3xl">
            <WordReveal
              text="Open. Connected. Free."
              delay={0.1}
              className="font-raleway font-black uppercase text-white leading-[0.9]"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:max-w-sm border-l-2 border-green/30 pl-6 shrink-0"
          >
            <p className="text-white/40 font-inter text-base leading-relaxed">
              A free-to-join community of innovators, investors, and partners united in
              expanding the breadth and reach of the Evolution Ecosystem.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="w-14 h-px bg-gradient-to-r from-green/50 to-transparent" />
          <span className="label-mono">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ── Our Approach ────────────────────────────────────────────── */
function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const pillars = [
    {
      num: '01',
      title: 'Capital',
      body: 'Access to the funding and financial resources that give great ideas the runway to become great companies. We connect founders with investors who believe in the mission.',
    },
    {
      num: '02',
      title: 'Community',
      body: 'A living network of founders, operators, and partners who actively lift each other up. The Sacramento Valley ecosystem grows stronger every time we collaborate.',
    },
    {
      num: '03',
      title: 'Culture',
      body: 'We back founders who are building something meaningful — companies with a clear sense of purpose, a strong team, and the conviction to see it through.',
    },
    {
      num: '04',
      title: 'Ecosystem',
      body: 'Free to join for all non-monetized activities. We make money when you make money — 10% only when you earn through the Evolution Ecosystem.',
    },
  ]

  return (
    <section className="py-32 bg-[#16161F] relative overflow-hidden grain">
      <div className="absolute inset-0 grid-bg opacity-[0.025] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20" ref={ref}>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="label-mono mb-6"
            >
              Our Approach
            </motion.p>
            <WordReveal
              text="Capital. Community. Culture."
              delay={0.1}
              className="font-raleway font-black uppercase gradient-text leading-[0.9]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/40 font-inter text-lg leading-relaxed lg:max-w-sm border-l-2 border-green/30 pl-6"
          >
            Evolution Accelerator backs founders building scalable solutions across nine sectors — providing the resources, relationships, and support to grow.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="bg-[#16161F] p-8 flex flex-col gap-6 hover:bg-[#1a1a26] transition-colors duration-300"
            >
              <span className="text-white/45 font-inter text-xs tracking-widest">{p.num}</span>
              <h3 className="font-raleway font-black uppercase text-white text-2xl leading-none">{p.title}</h3>
              <p className="text-white/40 font-inter text-sm leading-relaxed flex-1">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Partners — editorial rows ───────────────────────────────── */
function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#1E1E2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-end justify-between mb-16 pb-6 border-b border-white/[0.06]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="label-mono"
          >
            Ecosystem Partners
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/45 font-inter text-sm tracking-widest"
          >
            {partners.length} Partners
          </motion.p>
        </div>

        <div ref={ref} className="divide-y divide-white/[0.06]">
          {partners.map((p, i) => (
            <motion.a
              key={p.num}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-[40px_96px_1fr_auto] md:grid-cols-[64px_176px_1fr_300px_auto] gap-6 md:gap-12 py-8 md:py-10 hover:bg-white/[0.02] transition-colors duration-500 -mx-6 px-6 lg:-mx-10 lg:px-10 items-center"
            >
              <span className="text-white/45 font-inter text-sm tracking-widest">{p.num}</span>
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className="w-20 h-20 md:w-40 md:h-40 rounded-xl object-contain bg-white p-3 shrink-0"
              />
              <h3
                className="font-raleway font-black uppercase text-white/70 group-hover:text-white transition-colors duration-300 leading-none"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                {p.name}
              </h3>
              <p className="hidden md:block text-white/30 font-inter text-base leading-relaxed">
                {p.description}
              </p>
              <ArrowUpRight
                size={18}
                className="text-white/45 group-hover:text-green transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Terms 2.0 ───────────────────────────────────────────────── */
function Terms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#16161F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[360px_1fr] gap-16 lg:gap-24">

          {/* Left: heading + context */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="label-mono mb-6"
              ref={ref}
            >
              Terms & Conditions
            </motion.p>
            <WordReveal
              text="Simple. Transparent. Fair."
              delay={0.1}
              className="font-raleway font-black uppercase gradient-text leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/35 font-inter text-base leading-relaxed mb-8"
            >
              As the world grows more complex, we&apos;ve had to add formal terms — but the spirit
              remains unchanged: open, transparent, and built on trust.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-3"
            >
              <a
                href="/terms"
                className="inline-flex items-center gap-2 text-green font-raleway font-bold text-xs tracking-[0.3em] uppercase border-b border-green/30 pb-1 hover:border-green transition-colors duration-300 self-start"
              >
                Terms & Conditions <ArrowRight size={12} />
              </a>
              <a
                href="/privacy"
                className="inline-flex items-center gap-2 text-green font-raleway font-bold text-xs tracking-[0.3em] uppercase border-b border-green/30 pb-1 hover:border-green transition-colors duration-300 self-start"
              >
                Privacy Policy <ArrowRight size={12} />
              </a>
            </motion.div>
          </div>

          {/* Right: bullets */}
          <div className="space-y-px bg-white/[0.04] rounded-2xl overflow-hidden">
            {termsBullets.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="bg-[#16161F] p-8 hover:bg-[#1a1a26] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-green mt-2.5 shrink-0" />
                  <div>
                    <p className="font-raleway font-bold text-white/80 mb-3">{b.title}</p>
                    <p className="text-white/35 font-inter text-sm leading-relaxed">{b.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-white/[0.06] max-w-2xl"
        >
          <p className="text-white/50 font-inter text-lg leading-relaxed italic">
            &ldquo;Thank you for being part of the ecosystem. We&apos;re better, together.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Apply CTA ───────────────────────────────────────────────── */
function Apply() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-32 bg-[#1E1E2A] relative overflow-hidden grain">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-raleway font-black uppercase text-white/[0.018] whitespace-nowrap leading-none"
          style={{ fontSize: 'clamp(8rem, 22vw, 24rem)' }}
        >
          JOIN
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="label-mono mb-5">Join the Ecosystem</p>
          <h2
            className="font-raleway font-black uppercase text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            Ready to join<br />
            <span className="text-green">the ecosystem?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="shrink-0 flex flex-col gap-4"
        >
          <a
            href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Apply Now <ArrowRight size={16} />
          </a>
          <p className="text-white/45 font-inter text-xs text-center">
            Startups · Investors · Partners
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Page ────────────────────────────────────────────────────── */
export default function EcosystemPage() {
  return (
    <main className="bg-[#1E1E2A] min-h-screen">
      <Hero />
      <hr className="divider" />
      <Philosophy />
      <hr className="divider" />
      <Partners />
      <hr className="divider" />
      <Terms />
      <hr className="divider" />
      <Apply />
    </main>
  )
}
