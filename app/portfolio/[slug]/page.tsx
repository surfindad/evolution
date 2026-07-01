'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, ArrowRight, Globe, Users, Calendar, Layers } from 'lucide-react'
import companiesData from '@/data/companies.json'

const SECTOR_COLORS: Record<string, string> = {
  'AI & ML':    'text-violet-400  border-violet-400/30  bg-violet-400/10',
  'Health':     'text-rose-400    border-rose-400/30    bg-rose-400/10',
  'Fintech':    'text-sky-400     border-sky-400/30     bg-sky-400/10',
  'Consumer':   'text-amber-400   border-amber-400/30   bg-amber-400/10',
  'CleanTech':  'text-green       border-green/30       bg-green/10',
  'Enterprise': 'text-indigo-400  border-indigo-400/30  bg-indigo-400/10',
  'E-Commerce': 'text-orange-400  border-orange-400/30  bg-orange-400/10',
  'EdTech':     'text-pink-400    border-pink-400/30    bg-pink-400/10',
  'Technology': 'text-white/50    border-white/15       bg-white/5',
}

export default function CompanyPage() {
  const params  = useParams()
  const slug    = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const company = companiesData.find((c) => c.slug === slug)

  if (!company) return notFound()

  const sectorCls = SECTOR_COLORS[company.sector] ?? SECTOR_COLORS['Technology']
  const body      = company.longDescription || company.description || ''
  const hasDetail = !!(company.website || company.founders || company.founded)

  const hasTeam = !!(company.team && company.team.length > 0)

  return (
    <main className="bg-[#1E1E2A] min-h-screen">
      <HeroSection company={company} sectorCls={sectorCls} />
      <hr className="divider" />
      <ContentSection company={company} body={body} hasDetail={hasDetail} sectorCls={sectorCls} />
      {hasTeam && (
        <>
          <hr className="divider" />
          <TeamSection team={company.team!} />
        </>
      )}
      <hr className="divider" />
      <BottomNav slug={slug ?? ''} />
    </main>
  )
}

/* ── Hero ────────────────────────────────────────────────────── */
function HeroSection({ company, sectorCls }: { company: CompanyType; sectorCls: string }) {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-[#1E1E2A] grain">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      {/* Ghost company name backdrop */}
      <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-raleway font-black uppercase text-white/[0.02] leading-none whitespace-nowrap -ml-2"
          style={{ fontSize: 'clamp(8rem, 22vw, 22rem)' }}
        >
          {company.name}
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 font-inter text-sm transition-colors duration-300"
          >
            <ArrowLeft size={14} /> All Companies
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* Left: logo + name + tagline */}
          <div>
            {/* Logo + sector row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-24 h-24 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center overflow-hidden shrink-0">
                {company.logo ? (
                  <Image src={company.logo} alt={company.name} width={96} height={96} className="object-contain w-full h-full p-2" />
                ) : (
                  <span className="font-raleway font-black text-white/35 text-2xl leading-none">
                    {company.name.charAt(0)}
                  </span>
                )}
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-inter font-semibold tracking-[0.12em] uppercase border ${sectorCls}`}>
                {company.sector}
              </span>
            </motion.div>

            {/* Company name */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                className="font-raleway font-black uppercase text-white leading-none"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
                initial={{ y: '110%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {company.name}
              </motion.h1>
            </div>

            {/* Tagline */}
            {company.tagline && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/50 font-inter text-xl leading-relaxed max-w-xl"
              >
                {company.tagline}
              </motion.p>
            )}
          </div>

          {/* Right: website CTA */}
          {company.website && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="shrink-0"
            >
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.10] hover:border-green/30 text-white font-raleway font-bold text-sm tracking-[0.15em] uppercase px-7 py-4 rounded-full transition-all duration-300"
              >
                Visit Website <ArrowUpRight size={15} />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ── Content + Details ───────────────────────────────────────── */
function ContentSection({
  company, body, hasDetail, sectorCls,
}: {
  company: CompanyType; body: string; hasDetail: boolean; sectorCls: string
}) {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-[#1E1E2A]">

      {/* Two-column layout when cover image exists */}
      {company.coverImage ? (
        <div className="grid lg:grid-cols-[1fr_45%] min-h-[600px]">
          {/* Left: text + details */}
          <div className="py-20 px-6 lg:px-10 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <p className="label-mono mb-6">About</p>
              <div className="space-y-5">
                {body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-white/55 font-inter text-lg leading-relaxed">{para}</p>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Right: tall cover image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative min-h-[500px] lg:min-h-full"
          >
            <Image
              src={company.coverImage}
              alt={`${company.name} cover`}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E2A]/30 to-transparent" />
          </motion.div>
        </div>
      ) : null}

      {/* Standard layout: about + details card (always shown; also details when cover image present) */}
      <div className={`max-w-7xl mx-auto px-6 lg:px-10 ${company.coverImage ? 'py-16' : 'py-20'}`}>
        <div className="grid lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">

          {/* Left: About — only shown when no cover image (cover image layout has its own about) */}
          {!company.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="label-mono mb-6">About</p>

              {body ? (
                <div className="space-y-5">
                  {body.split('\n\n').map((para, i) => (
                    <p key={i} className="text-white/55 font-inter text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="border border-white/[0.07] rounded-xl p-10 text-center">
                  <p className="text-white/25 font-inter text-base mb-2">Full profile coming soon</p>
                  <p className="text-white/15 font-inter text-sm">
                    We&apos;re building out this page. Check back shortly.
                  </p>
                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-green font-inter text-sm hover:text-green/80 transition-colors"
                    >
                      Visit {company.name} directly <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* Right: Details card */}
          {hasDetail && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="label-mono mb-6">Details</p>
              <div className="border border-white/[0.07] rounded-xl overflow-hidden divide-y divide-white/[0.06]">

                <div className="px-6 py-4 flex items-center gap-3">
                  <Layers size={14} className="text-green/50 shrink-0" />
                  <div>
                    <p className="text-white/30 font-inter text-xs uppercase tracking-widest mb-0.5">Sector</p>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase border ${sectorCls}`}>
                      {company.sector}
                    </span>
                  </div>
                </div>

                {company.founded && (
                  <div className="px-6 py-4 flex items-center gap-3">
                    <Calendar size={14} className="text-green/50 shrink-0" />
                    <div>
                      <p className="text-white/30 font-inter text-xs uppercase tracking-widest mb-0.5">Founded</p>
                      <p className="text-white/70 font-inter text-sm">{company.founded}</p>
                    </div>
                  </div>
                )}

                {company.founders && (
                  <div className="px-6 py-4 flex items-center gap-3">
                    <Users size={14} className="text-green/50 shrink-0" />
                    <div>
                      <p className="text-white/30 font-inter text-xs uppercase tracking-widest mb-0.5">Founders</p>
                      <p className="text-white/70 font-inter text-sm">{company.founders}</p>
                    </div>
                  </div>
                )}

                {company.website && (
                  <div className="px-6 py-4 flex items-center gap-3">
                    <Globe size={14} className="text-green/50 shrink-0" />
                    <div>
                      <p className="text-white/30 font-inter text-xs uppercase tracking-widest mb-0.5">Website</p>
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green font-inter text-sm hover:text-green/70 transition-colors inline-flex items-center gap-1"
                      >
                        {company.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        <ArrowUpRight size={11} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ── Team / Founders ──────────────────────────────────────────── */
function TeamSection({ team }: { team: { name: string; title: string; bio: string; photo: string }[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-20 bg-[#16161F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="label-mono mb-12">The Team</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden border border-white/10">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="object-cover object-top w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/[0.04]">
                    <span className="font-raleway font-black text-green-accent text-4xl leading-none">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-raleway font-black uppercase text-white text-xl leading-none mb-2">
                  {member.name}
                </h3>
                <p className="label-mono mb-4">{member.title}</p>
                <p className="text-white/50 font-inter text-base leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Bottom nav — prev / next + back ─────────────────────────── */
function BottomNav({ slug }: { slug: string }) {
  const idx  = companiesData.findIndex((c) => c.slug === slug)
  const prev = idx > 0 ? companiesData[idx - 1] : null
  const next = idx < companiesData.length - 1 ? companiesData[idx + 1] : null

  return (
    <section className="py-16 bg-[#16161F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Prev */}
          <div className="flex-1">
            {prev && (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="group inline-flex items-center gap-3 text-white/30 hover:text-white/70 transition-colors duration-300"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                <div>
                  <p className="label-mono mb-0.5">Previous</p>
                  <p className="font-raleway font-bold text-base">{prev.name}</p>
                </div>
              </Link>
            )}
          </div>

          {/* Back to portfolio */}
          <Link
            href="/portfolio"
            className="btn-outline text-xs px-6 py-3"
          >
            All Companies
          </Link>

          {/* Next */}
          <div className="flex-1 flex justify-end">
            {next && (
              <Link
                href={`/portfolio/${next.slug}`}
                className="group inline-flex items-center gap-3 text-white/30 hover:text-white/70 transition-colors duration-300 text-right"
              >
                <div>
                  <p className="label-mono mb-0.5">Next</p>
                  <p className="font-raleway font-bold text-base">{next.name}</p>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Type helper ─────────────────────────────────────────────── */
type CompanyType = typeof companiesData[number]
