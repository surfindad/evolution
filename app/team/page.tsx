'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, ArrowRight, Camera } from 'lucide-react'

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * TEAM DATA — fill in real info here
 *
 * photo:    Add headshot images to /public/images/team/
 *           Set photo to the path e.g. '/images/team/john-doe.jpg'
 *           Leave as null to show the initials placeholder until photo is ready.
 *
 * linkedin: Replace '#' with the full LinkedIn profile URL.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const team: {
  name: string
  title: string
  bio: string
  initials: string
  photo: string | null
  linkedin: string
}[] = [
  {
    name: 'Team Member Name',
    title: 'Co-Founder & Managing Partner',
    bio: 'Add a 1–2 sentence bio covering background, focus area, and what they bring to founders.',
    initials: 'TM',
    photo: null,           // → '/images/team/filename.jpg'
    linkedin: '#',         // → 'https://linkedin.com/in/...'
  },
  {
    name: 'Team Member Name',
    title: 'General Partner',
    bio: 'Add a 1–2 sentence bio covering background, focus area, and what they bring to founders.',
    initials: 'TM',
    photo: null,
    linkedin: '#',
  },
  {
    name: 'Team Member Name',
    title: 'Partner, Operations',
    bio: 'Add a 1–2 sentence bio covering background, focus area, and what they bring to founders.',
    initials: 'TM',
    photo: null,
    linkedin: '#',
  },
  {
    name: 'Team Member Name',
    title: 'Venture Partner',
    bio: 'Add a 1–2 sentence bio covering background, focus area, and what they bring to founders.',
    initials: 'TM',
    photo: null,
    linkedin: '#',
  },
  {
    name: 'Team Member Name',
    title: 'Venture Partner',
    bio: 'Add a 1–2 sentence bio covering background, focus area, and what they bring to founders.',
    initials: 'TM',
    photo: null,
    linkedin: '#',
  },
  {
    name: 'Team Member Name',
    title: 'Ecosystem Associate',
    bio: 'Add a 1–2 sentence bio covering background, focus area, and what they bring to founders.',
    initials: 'TM',
    photo: null,
    linkedin: '#',
  },
]

function Avatar({ member }: { member: typeof team[number] }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className="w-20 h-20 rounded-full object-cover object-top border border-white/10 group-hover:border-green/30 transition-colors duration-300 mb-6"
      />
    )
  }

  /* Photo placeholder — shows until real photo is provided */
  return (
    <div className="w-20 h-20 rounded-full border border-dashed border-white/15 group-hover:border-green/30 flex flex-col items-center justify-center mb-6 transition-colors duration-300 bg-white/[0.02] relative overflow-hidden">
      <Camera size={16} className="text-white/20 mb-1" />
      <span className="text-white/20 text-[9px] font-inter tracking-widest uppercase">Photo</span>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#0D0D0B] grain">
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
    <section className="py-24 bg-[#0D0D0B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-8 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <Avatar member={member} />

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="font-raleway font-bold text-white text-xl mb-1 group-hover:text-green transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-green/50 text-xs font-inter tracking-widest uppercase mb-4">
                  {member.title}
                </p>
                <p className="text-white/35 font-inter text-sm leading-relaxed flex-1 mb-6">
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

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * TEAM / EVENT PHOTO BANNER
 * Add a wide team or event photo to /public/images/team-banner.jpg
 * Then replace the placeholder div below with:
 *   <img src="/images/team-banner.jpg" alt="Evolution Accelerator team" ... />
 * ─────────────────────────────────────────────────────────────────────────────
 */
function PhotoBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0D0D0B] px-6 lg:px-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="max-w-7xl mx-auto"
      >
        {/* ↓ Replace this div with your team/event photo */}
        <div className="w-full h-72 md:h-96 rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center gap-3 bg-white/[0.015]">
          <Camera size={32} className="text-white/15" />
          <p className="text-white/20 font-inter text-sm tracking-widest uppercase">
            Team / Event Photo
          </p>
          <p className="text-white/12 font-inter text-xs">
            Add image to /public/images/team-banner.jpg
          </p>
        </div>
      </motion.div>
    </section>
  )
}

function JoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-[#131310] grain">
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
    <main className="bg-[#0D0D0B] min-h-screen">
      <HeroSection />
      <hr className="divider" />
      <TeamGrid />
      <PhotoBanner />
      <hr className="divider" />
      <JoinSection />
    </main>
  )
}
