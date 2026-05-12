'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, ArrowRight } from 'lucide-react'

// ─── Replace with real team data ───────────────────────────
const team = [
  {
    name: 'Team Member Name',
    title: 'Co-Founder & Managing Partner',
    bio: 'Add a short bio here — 1 to 2 sentences about background, expertise, and focus area.',
    initials: 'TM',
    linkedin: '#',
  },
  {
    name: 'Team Member Name',
    title: 'General Partner',
    bio: 'Add a short bio here — 1 to 2 sentences about background, expertise, and focus area.',
    initials: 'TM',
    linkedin: '#',
  },
  {
    name: 'Team Member Name',
    title: 'Partner, Operations',
    bio: 'Add a short bio here — 1 to 2 sentences about background, expertise, and focus area.',
    initials: 'TM',
    linkedin: '#',
  },
  {
    name: 'Team Member Name',
    title: 'Venture Partner',
    bio: 'Add a short bio here — 1 to 2 sentences about background, expertise, and focus area.',
    initials: 'TM',
    linkedin: '#',
  },
  {
    name: 'Team Member Name',
    title: 'Venture Partner',
    bio: 'Add a short bio here — 1 to 2 sentences about background, expertise, and focus area.',
    initials: 'TM',
    linkedin: '#',
  },
  {
    name: 'Team Member Name',
    title: 'Ecosystem Associate',
    bio: 'Add a short bio here — 1 to 2 sentences about background, expertise, and focus area.',
    initials: 'TM',
    linkedin: '#',
  },
]
// ───────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#050508] grain">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 60%, rgba(119,221,119,0.09) 0%, transparent 60%)',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
      >
        <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
          The People
        </p>
        <h1
          className="font-raleway font-black uppercase gradient-text text-glow leading-none mb-8"
          style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
        >
          Our Team
        </h1>
        <p className="text-white/40 text-xl font-inter max-w-2xl leading-relaxed">
          The individuals behind Evolution Accelerator — operators, investors, and builders
          united by a shared belief in the Sacramento Valley&apos;s potential.
        </p>
      </motion.div>
    </section>
  )
}

function TeamGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-green/10 border border-green/20 flex items-center justify-center mb-6 group-hover:border-green/40 transition-colors duration-300">
                <span className="font-raleway font-black text-green text-lg">
                  {member.initials}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-raleway font-bold text-white text-xl mb-1 group-hover:text-green transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-green/50 text-xs font-inter tracking-widest uppercase mb-4">
                  {member.title}
                </p>
                <p className="text-white/35 font-inter text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {member.linkedin !== '#' && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/30 hover:text-green transition-colors duration-200"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function JoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#080810] grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-2xl"
        >
          <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-5">
            Get Involved
          </p>
          <h2 className="font-raleway font-black text-5xl uppercase gradient-text text-glow mb-6">
            Join the Ecosystem
          </h2>
          <p className="text-white/40 font-inter text-lg leading-relaxed mb-10">
            Whether you&apos;re a founder, investor, or partner — there&apos;s a place for you
            in the Evolution Ecosystem. Apply today to start the conversation.
          </p>
          <a
            href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Apply Now <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default function TeamPage() {
  return (
    <main className="bg-[#050508] min-h-screen">
      <HeroSection />
      <hr className="divider" />
      <TeamGrid />
      <hr className="divider" />
      <JoinSection />
    </main>
  )
}
