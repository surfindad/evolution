'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const partners = [
  {
    name: 'MasterVerse.AI',
    href: 'https://www.masterverse.ai/p/services',
    description: 'AI-powered services platform',
  },
  {
    name: 'Evolution',
    href: 'https://www.evolutionacceleration.com/venture-catalyst-program',
    description: 'Venture Catalyst Program',
  },
  {
    name: 'Elevate Global',
    href: 'https://www.elevateglobal.io/p/services',
    description: 'Global acceleration services',
  },
  {
    name: 'Red Dot Accelerator',
    href: 'https://www.evolutionacceleration.com/red-dot-accelerator',
    description: 'Accelerator program partner',
  },
  {
    name: 'The CRC Digest',
    href: 'https://crcdigest.com/',
    description: 'Ecosystem news and insights',
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
      'In addition to the 10% fee retained by Evolution Accelerator, Inc., any transaction fees charged by third-party payment processors (e.g., such as Stripe or another 3rd-party, etc.) will be passed through to you without any markup or deducted from each transaction amount. These fees will be calculated, deducted, and retained by Evolution Accelerator, Inc. at the time of each transaction.',
  },
  {
    title: 'Clients, Content, Data, Products, and Services',
    content:
      "The collection, processing, or submission of Evolution Ecosystem users or users' clients, content, brand, data, information, logo, monetized or non-monetized products or services through the Evolution Ecosystem platform by Evolution Accelerator, Inc. does not constitute agreement to, nor transfer of the legal and monetary rights of, the users or users' clients, content, brand, data, information, logo, monetized or non-monetized products or services, relationships, to Evolution Accelerator, Inc. The users of the Evolution Ecosystem by Evolution Accelerator, Inc. retain full copyrights and other legal rights and may de-platform from, or discontinue processing transactions via, the Evolution Ecosystem at any time with no further legal or monetary obligation.",
  },
]

function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-[#F0F0F2] grain">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 70% 30%, rgba(119,221,119,0.09) 0%, transparent 60%)',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
      >
        <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
          Our Network
        </p>
        <h1
          className="font-raleway font-black uppercase gradient-text text-glow mb-6 leading-none"
          style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
        >
          Ecosystem
        </h1>
        <p className="text-[#1A1510]/40 text-xl font-inter max-w-2xl leading-relaxed">
          A free-to-nest community of innovators, investors, and partners united in expanding the breadth and reach of the Evolution Ecosystem.
        </p>
      </motion.div>
    </section>
  )
}

function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-[#F0F0F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-10">
          Ecosystem Partners
        </p>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.href}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="glass rounded-2xl p-8 group flex items-center justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-raleway font-bold text-xl text-[#1A1510] group-hover:text-green transition-colors duration-300 mb-1">
                  {partner.name}
                </h3>
                <p className="text-[#1A1510]/30 text-sm font-inter">{partner.description}</p>
              </div>
              <ExternalLink
                size={18}
                className="text-[#1A1510]/15 group-hover:text-green/60 transition-colors duration-300 shrink-0 ml-4 relative z-10"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function TermsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-[#E5E5E8]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="max-w-4xl mx-auto px-6 lg:px-10"
      >
        <h2 className="font-raleway font-black text-5xl md:text-6xl uppercase gradient-text text-glow mb-10">
          Terms
        </h2>
        <div className="space-y-6 text-[#1A1510]/40 font-inter text-lg leading-relaxed">
          <p>
            In simple terms, no cages. The beautiful birds of the heavens are invited to nest
            in the beautiful tree of the Evolution Ecosystem by Evolution Accelerator and yet
            fly freely.
          </p>
          <p>
            Today, some may see a small beginning, a small tree, and a few small birds, yet,
            these are very precious birds gracing the branches with their beauty. May we be
            careful not to despise such a small start. After all, how many seeds have sprouted
            and became massive trees where many birds nest?
          </p>
          <p>
            May the tree and the birds who fly freely and nest as they please grow mighty and
            strong and live long and prosper to the glory of the Heavens and Love itself.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

function Terms2Section() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-[#F0F0F2]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="max-w-4xl mx-auto px-6 lg:px-10"
      >
        <h2 className="font-raleway font-black text-5xl md:text-6xl uppercase gradient-text text-glow mb-10">
          Terms 2.0
        </h2>
        <div className="space-y-5 text-[#1A1510]/40 font-inter text-lg leading-relaxed mb-10">
          <p>
            Regrettably as the world changes and becomes more complex and more litigious it
            seems advisable and perhaps required to have a less simple version of the Terms.
            Please feel free to browse them:{' '}
            <a href="/terms" className="text-green hover:text-green-light transition-colors underline underline-offset-4">
              Terms & Conditions
            </a>{' '}
            (T&Cs) and{' '}
            <a href="/privacy" className="text-green hover:text-green-light transition-colors underline underline-offset-4">
              Privacy Policy
            </a>{' '}
            (PP).
          </p>
          <p>
            Please remember, despite the long versions of T&Cs and PP, principally no cages
            are being offered to the birds of heaven looking to fly freely and nest as needed.
          </p>
          <p>
            The highlights of the &ldquo;nest free, fly free&rdquo; Evolution Ecosystem by Evolution
            Accelerator include the following:
          </p>
        </div>

        <div className="space-y-5 mb-12">
          {termsBullets.map((bullet, i) => (
            <motion.div
              key={bullet.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="glass rounded-xl p-6 flex gap-5"
            >
              <span className="text-green mt-1 shrink-0 font-bold">→</span>
              <div>
                <p className="text-[#1A1510]/70 font-raleway font-bold mb-2">{bullet.title}:</p>
                <p className="text-[#1A1510]/35 font-inter leading-relaxed">{bullet.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-5 text-[#1A1510]/40 font-inter text-lg leading-relaxed">
          <p>
            In other words, the spirit is that we make money when and if you make money,
            until then, please nest freely. Even if you begin to monetize thereby potentially
            profiting yourself and others (i.e., us), there&apos;s no express obligation (i.e.,
            cage) to keep nesting.
          </p>
          <p>
            Should the time come when the Evolution Ecosystem &ldquo;tree&rdquo; fails to earn the
            grace of your presence, may the Universe provide another more suitable tree to nest.
          </p>
          <p className="text-[#1A1510]/55 italic text-xl">
            Thank you. Without the birds, the tree will be lonely. May agape and peace be yours.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default function EcosystemPage() {
  return (
    <main className="bg-[#F0F0F2] min-h-screen">
      <HeroSection />
      <hr className="divider" />
      <PartnersSection />
      <hr className="divider" />
      <TermsSection />
      <hr className="divider" />
      <Terms2Section />
    </main>
  )
}
