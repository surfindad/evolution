'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ImageIcon } from 'lucide-react'

/* ── Data ────────────────────────────────────────────────────── */
const pillars = [
  {
    num: '01',
    title: 'Welcome',
    body: 'Evolution Accelerator welcomes others to apply for access to the Evolution Ecosystem whereby we may unite together to expand the breadth and reach of the ecosystem.',
  },
  {
    num: '02',
    title: 'Education',
    body: 'Evolution Accelerator represents a desire to explore, help, listen, learn, serve, share, and teach a greatly diversified wisdom without bias or prejudice.',
  },
  {
    num: '03',
    title: 'Grow',
    body: 'Evolution Accelerator seeks to nurture mutually-beneficial growth throughout the ecosystem via collaboration and teamwork — fostering and sponsoring appreciation, kindness, and respect.',
  },
  {
    num: '04',
    title: 'Legacy',
    body: 'Evolution Accelerator seeks to build a legacy of helping and serving others via coaching, education, and mentorship, and to positively impact the universe.',
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
          style={{ fontSize: 'clamp(10rem, 28vw, 30rem)' }}
        >
          ABOUT
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
          About Us
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* Left: headline */}
          <div className="lg:max-w-3xl">
            <WordReveal
              text="Evolving the art of acceleration."
              delay={0.1}
              className="font-raleway font-black uppercase text-white leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}
            />
          </div>

          {/* Right: sub-copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:max-w-sm border-l-2 border-green/30 pl-6 shrink-0"
          >
            <p className="text-white/40 font-inter text-base leading-relaxed">
              Evolution Accelerator aims to help and serve others via access to capital,
              community, and culture — creating meaningful relationships that fuel positive change
              throughout Sacramento Valley and beyond.
            </p>
          </motion.div>
        </div>

        {/* Scroll cue */}
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

/* ── Mission pull-quote ──────────────────────────────────────── */
function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#16161F]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">

          {/* Left: large quote */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="label-mono mb-10"
            >
              Our Mission
            </motion.p>
            <WordReveal
              text="Not just another accelerator. A movement."
              delay={0.1}
              className="font-raleway font-black uppercase gradient-text leading-[0.88]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
            />
          </div>

          {/* Right: supporting copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-6 pt-2 lg:pt-20"
          >
            <p className="text-white/45 font-inter text-lg leading-relaxed">
              Evolution Accelerator was built on a simple belief: that the right combination
              of capital, community, and culture can unlock potential in any founder — regardless
              of background, geography, or circumstance.
            </p>
            <p className="text-white/35 font-inter text-base leading-relaxed">
              We operate in California&apos;s Sacramento Valley, one of the most underestimated
              ecosystems in the country, and we intend to change that.
            </p>
            <div className="w-8 h-px bg-green/40 mt-2" />
            <div>
              <span className="text-green-accent font-raleway font-black text-4xl leading-none">49+</span>
              <p className="text-white/30 font-inter text-sm mt-1">companies and counting</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Photo banner placeholder ────────────────────────────────── */
function PhotoBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#1E1E2A] px-6 lg:px-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Replace with: <img src="/images/about-banner.jpg" alt="Evolution Accelerator" className="w-full h-[520px] object-cover rounded-2xl" /> */}
        <div className="w-full h-64 md:h-[480px] rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center gap-3 bg-white/[0.015]">
          <ImageIcon size={32} className="text-white/15" />
          <p className="text-white/20 font-inter text-sm tracking-widest uppercase">Team / Event Photo</p>
          <p className="text-white/12 font-inter text-xs">Drop image at /public/images/about-banner.jpg</p>
        </div>
      </motion.div>
    </section>
  )
}

/* ── Four Pillars — editorial rows ───────────────────────────── */
function Pillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#1E1E2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-16 pb-6 border-b border-white/[0.06]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="label-mono"
          >
            How We Operate
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/20 font-inter text-sm tracking-widest"
          >
            Our Principles
          </motion.p>
        </div>

        {/* Rows */}
        <div ref={ref} className="divide-y divide-white/[0.06]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 py-10 md:py-14 hover:bg-white/[0.02] transition-colors duration-500 -mx-6 px-6 lg:-mx-10 lg:px-10"
            >
              {/* Number */}
              <span className="text-white/20 font-inter text-sm tracking-widest pt-2 md:pt-4">
                {p.num}
              </span>

              {/* Title */}
              <div className="md:flex md:items-center">
                <h3
                  className="font-raleway font-black uppercase gradient-text leading-none"
                  style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)' }}
                >
                  {p.title}
                </h3>
              </div>

              {/* Body */}
              <div className="col-span-2 md:col-span-1 md:flex md:items-center">
                <p className="text-white/40 font-inter leading-relaxed text-base md:text-lg">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Sacramento Valley callout ───────────────────────────────── */
function ValleySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-green overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10"
      >
        <div>
          <p className="font-inter text-[#1E1E2A]/50 text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            Sacramento Valley, CA
          </p>
          <p
            className="font-raleway font-black uppercase text-[#1E1E2A] leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            California&apos;s most<br />underestimated ecosystem.
          </p>
        </div>
        <div className="md:max-w-xs">
          <p className="text-[#1E1E2A]/55 font-inter text-base leading-relaxed">
            We chose Sacramento Valley on purpose. The talent is here, the hunger is here,
            and the opportunity is massive. We&apos;re building the infrastructure to prove it.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

/* ── Substack ────────────────────────────────────────────────── */
function Substack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#16161F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="label-mono mb-6">Stay Connected</p>
            <h2
              className="font-raleway font-black uppercase gradient-text leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Subscribe
            </h2>
            <p className="text-white/40 font-inter text-lg leading-relaxed mb-10">
              Evolution Accelerator publishes insights, ecosystem news, and founder stories
              on Substack. Subscribe to stay in the loop on everything happening in
              Sacramento Valley and across our portfolio.
            </p>
            <a
              href="https://www.evolutionaccelerator.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Subscribe on Substack <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right: decorative */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {['Capital', 'Community', 'Culture', 'Sacramento Valley', 'Founder Stories', 'Ecosystem News'].map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                className={`border border-white/[0.07] rounded-full px-5 py-2.5 font-inter text-sm text-white/30 ${i % 2 === 0 ? 'self-start' : 'self-end'}`}
              >
                {tag}
              </motion.div>
            ))}
          </motion.div>
        </div>
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
          style={{ fontSize: 'clamp(10rem, 28vw, 28rem)' }}
        >
          APPLY
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
            Ready to play a part<br />
            in <span className="text-green">positive change?</span>
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
          <p className="text-white/20 font-inter text-xs text-center">
            Startups · Investors · Partners
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Page ────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main className="bg-[#1E1E2A] min-h-screen">
      <Hero />
      <hr className="divider" />
      <Mission />
      <hr className="divider" />
      <PhotoBanner />
      <hr className="divider" />
      <Pillars />
      <ValleySection />
      <hr className="divider" />
      <Substack />
      <hr className="divider" />
      <Apply />
    </main>
  )
}
