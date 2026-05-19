'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Linkedin, ArrowRight, ImageIcon } from 'lucide-react'
import Image from 'next/image'

/*
 * ── TEAM DATA ────────────────────────────────────────────────────
 * photo:    Add headshots to /public/images/team/
 *           e.g. '/images/team/alex-chompff.jpg'
 *           Leave null to show initials placeholder.
 * title:    Leave empty string '' to hide the title row.
 * linkedin: Leave '' to hide the LinkedIn link.
 * ─────────────────────────────────────────────────────────────────
 */
const team: {
  name: string
  title: string
  bio: string
  photo: string | null
  linkedin: string
}[] = [
  {
    name: 'Alex Chompff',
    title: '',
    bio: '',
    photo: null,
    linkedin: '',
  },
  {
    name: '',
    title: '',
    bio: '',
    photo: null,
    linkedin: '',
  },
  {
    name: '',
    title: '',
    bio: '',
    photo: null,
    linkedin: '',
  },
  {
    name: '',
    title: '',
    bio: '',
    photo: null,
    linkedin: '',
  },
  {
    name: '',
    title: '',
    bio: '',
    photo: null,
    linkedin: '',
  },
]

/* ── Word reveal ─────────────────────────────────────────────── */
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

      <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-raleway font-black uppercase text-white/[0.022] leading-none -ml-2"
          style={{ fontSize: 'clamp(10rem, 28vw, 30rem)' }}
        >
          TEAM
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
          The People
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <div className="lg:max-w-3xl">
            <WordReveal
              text="The people behind the mission."
              delay={0.1}
              className="font-raleway font-black uppercase text-white leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:max-w-sm border-l-2 border-green/30 pl-6 shrink-0"
          >
            <p className="text-white/40 font-inter text-base leading-relaxed">
              Operators, investors, and builders united by a shared belief in Sacramento
              Valley&apos;s potential and the founders who are building its future.
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

/* ── Team grid ───────────────────────────────────────────────── */
function TeamGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filled = team.filter((m) => m.name)
  const placeholders = team.filter((m) => !m.name)

  return (
    <section className="py-28 bg-[#1E1E2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-end justify-between mb-16 pb-6 border-b border-white/[0.06]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="label-mono"
            ref={ref}
          >
            Our Team
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">

          {/* Filled members */}
          {filled.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#16161F] p-10 flex flex-col hover:bg-[#1a1a26] transition-colors duration-300"
            >
              {/* Photo / initials */}
              <div className="mb-8">
                {member.photo ? (
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 group-hover:border-green/30 transition-colors duration-300">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-white/[0.06] border border-white/[0.08] group-hover:border-green/20 flex items-center justify-center transition-colors duration-300">
                    <span className="font-raleway font-black text-white/40 text-2xl leading-none">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Name */}
              <h3
                className="font-raleway font-black uppercase text-white leading-none mb-2"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                {member.name}
              </h3>

              {/* Title */}
              {member.title && (
                <p className="label-mono mb-5">{member.title}</p>
              )}

              {/* Bio */}
              {member.bio ? (
                <p className="text-white/40 font-inter text-base leading-relaxed flex-1 mt-4">
                  {member.bio}
                </p>
              ) : (
                <p className="text-white/20 font-inter text-sm leading-relaxed flex-1 mt-4 italic">
                  Bio coming soon.
                </p>
              )}

              {/* LinkedIn */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-white/25 hover:text-green transition-colors duration-300"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin size={15} />
                  <span className="font-inter text-xs tracking-widest uppercase">LinkedIn</span>
                </a>
              )}

              {/* Bottom accent */}
              <div className="mt-8 w-8 h-px bg-green/0 group-hover:bg-green/40 transition-all duration-500" />
            </motion.div>
          ))}

          {/* Placeholder slots */}
          {placeholders.map((_, i) => (
            <motion.div
              key={`placeholder-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: (filled.length + i) * 0.1 }}
              className="bg-[#16161F] p-10 flex flex-col items-start justify-center min-h-[280px]"
            >
              <div className="w-20 h-20 rounded-full border border-dashed border-white/10 flex items-center justify-center mb-8">
                <ImageIcon size={18} className="text-white/15" />
              </div>
              <p className="text-white/15 font-inter text-sm tracking-widest uppercase">
                Coming soon
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Photo banner ────────────────────────────────────────────── */
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
        {/* Replace with: <img src="/images/team-banner.jpg" alt="Evolution Accelerator team" className="w-full h-[480px] object-cover rounded-2xl" /> */}
        <div className="w-full h-64 md:h-[420px] rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center gap-3 bg-white/[0.015]">
          <ImageIcon size={32} className="text-white/15" />
          <p className="text-white/20 font-inter text-sm tracking-widest uppercase">Team Photo</p>
          <p className="text-white/12 font-inter text-xs">Drop image at /public/images/team-banner.jpg</p>
        </div>
      </motion.div>
    </section>
  )
}

/* ── CTA ─────────────────────────────────────────────────────── */
function JoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-32 bg-[#16161F] relative overflow-hidden grain">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="label-mono mb-5">Get Involved</p>
          <h2
            className="font-raleway font-black uppercase text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            Founders, investors,<br />
            <span className="text-green">and partners welcome.</span>
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
            Sacramento Valley &amp; beyond
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Page ────────────────────────────────────────────────────── */
export default function TeamPage() {
  return (
    <main className="bg-[#1E1E2A] min-h-screen">
      <Hero />
      <hr className="divider" />
      <TeamGrid />
      <PhotoBanner />
      <hr className="divider" />
      <JoinSection />
    </main>
  )
}
