'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Camera, ImageIcon } from 'lucide-react'

const sections = [
  {
    title: 'Welcome',
    icon: '🌱',
    content:
      'Evolution Accelerator welcomes others to apply for access to the Evolution Ecosystem whereby we may unite together to expand the breadth and reach of the ecosystem.',
  },
  {
    title: 'Education',
    icon: '📚',
    content:
      'Evolution Accelerator represents a desire to explore, help, listen, learn, serve, share, and teach a greatly diversified wisdom without bias or prejudice.',
  },
  {
    title: 'Grow',
    icon: '🚀',
    content:
      'Evolution Accelerator seeks to nurture mutually-beneficial growth throughout the ecosystem via collaboration and teamwork; it also aims to foster and sponsor appreciation, kindness, and respect.',
  },
  {
    title: 'Legacy',
    icon: '✨',
    content:
      'Evolution Accelerator seeks to build a legacy of helping and serving others via coaching, education, and mentorship, as well as things like these to positively impact the universe.',
  },
]

function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#1E1E2A] grain">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 25% 50%, rgba(119,221,119,0.10) 0%, transparent 60%)',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
      >
        <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
          About Us
        </p>
        <h1
          className="font-raleway font-black uppercase gradient-text text-glow leading-none mb-10 max-w-5xl"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
        >
          Evolving the art of acceleration via the 3C&apos;s:<br />
          Capital. Community. Culture.
        </h1>
        <p className="text-white/40 text-xl font-inter leading-relaxed max-w-2xl">
          Evolution Accelerator aims to help and serve others via access to capital,
          community, and culture that creates meaningful relationships to fuel positive change.
        </p>
      </motion.div>
    </section>
  )
}

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * ABOUT PAGE — FEATURED PHOTO
 * Add a wide photo (office, event, team candid) to /public/images/about-banner.jpg
 * Then replace the placeholder div below with:
 *   <img src="/images/about-banner.jpg" alt="Evolution Accelerator" className="..." />
 * ─────────────────────────────────────────────────────────────────────────────
 */
function FeaturedPhoto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-0 bg-[#1E1E2A] px-6 lg:px-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        className="max-w-7xl mx-auto"
      >
        {/* ↓ Replace with: <img src="/images/about-banner.jpg" alt="..." className="w-full h-[500px] object-cover rounded-2xl" /> */}
        <div className="w-full h-64 md:h-[440px] rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center gap-3 bg-[#1A1510]/[0.015]">
          <ImageIcon size={36} className="text-white/15" />
          <p className="text-white/20 font-inter text-sm tracking-widest uppercase">Featured Photo</p>
          <p className="text-white/12 font-inter text-xs">Add image to /public/images/about-banner.jpg</p>
        </div>
      </motion.div>
    </section>
  )
}

function CoreSections() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-[#1E1E2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="glass rounded-2xl p-10 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="text-3xl mb-5 relative z-10">{section.icon}</div>
              <h2 className="font-raleway font-black text-2xl text-green uppercase tracking-wide mb-5 relative z-10">
                {section.title}
              </h2>
              <p className="text-white/40 font-inter leading-relaxed text-lg relative z-10">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SubscribeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#16161F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-2xl"
        >
          <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-5">
            Stay Connected
          </p>
          <h2 className="font-raleway font-black text-5xl uppercase gradient-text text-glow mb-6">
            Subscribe
          </h2>
          <p className="text-white/40 font-inter text-lg leading-relaxed mb-10">
            Evolution Accelerator seeks to support others in providing access to elements,
            such as, but not limited to the 3C&apos;s: Capital, Community, and Culture.
            Please feel free to subscribe to Evolution Accelerator&apos;s Substack using the link below.
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
      </div>
    </section>
  )
}

function ApplySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-36 bg-[#1E1E2A] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(119,221,119,0.09) 0%, transparent 65%)',
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center"
      >
        <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
          Join the Ecosystem
        </p>
        <h2
          className="font-raleway font-black uppercase gradient-text text-glow mb-6 leading-none"
          style={{ fontSize: 'clamp(4rem, 10vw, 7rem)' }}
        >
          Apply
        </h2>
        <p className="text-white/35 font-inter text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Please feel free to use the button below to apply for access to the Evolution
          Ecosystem if you&apos;re ready, willing, and able to play a part in positive change
          and greater good.
        </p>
        <a
          href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Apply Now <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-[#1E1E2A] min-h-screen">
      <HeroSection />
      <FeaturedPhoto />
      <hr className="divider" />
      <CoreSections />
      <hr className="divider" />
      <SubscribeSection />
      <hr className="divider" />
      <ApplySection />
    </main>
  )
}
