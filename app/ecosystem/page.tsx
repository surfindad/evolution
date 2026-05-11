import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ecosystem | Evolution Accelerator',
  description:
    'The Evolution Ecosystem — a free-to-nest community of innovators, investors, and ecosystem partners.',
}

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

export default function EcosystemPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 70% 30%, rgba(119,221,119,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-green/60 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
            Our Network
          </p>
          <h1 className="font-raleway font-black text-7xl md:text-9xl uppercase text-green text-glow mb-6">
            Ecosystem
          </h1>
          <p className="text-white/40 text-xl font-inter max-w-2xl leading-relaxed">
            A free-to-nest community of innovators, investors, and partners united in expanding the breadth and reach of the Evolution Ecosystem.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* Partners grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-10">
            Ecosystem Partners
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((partner) => (
              <a
                key={partner.href}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark rounded-2xl p-8 group flex items-center justify-between"
              >
                <div>
                  <h3 className="font-raleway font-bold text-xl text-white group-hover:text-green transition-colors duration-300 mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-white/30 text-sm font-inter">{partner.description}</p>
                </div>
                <ExternalLink
                  size={18}
                  className="text-white/15 group-hover:text-green transition-colors duration-300 shrink-0 ml-4"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Terms */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="font-raleway font-black text-5xl md:text-6xl uppercase text-green text-glow mb-10">
            Terms
          </h2>
          <div className="space-y-6 text-white/45 font-inter text-lg leading-relaxed">
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
        </div>
      </section>

      <hr className="divider" />

      {/* Terms 2.0 */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="font-raleway font-black text-5xl md:text-6xl uppercase text-green text-glow mb-10">
            Terms 2.0
          </h2>
          <div className="space-y-5 text-white/45 font-inter text-lg leading-relaxed mb-10">
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

          <ul className="space-y-8 mb-12">
            {termsBullets.map((bullet) => (
              <li key={bullet.title} className="flex gap-5">
                <span className="text-green mt-1 shrink-0 font-bold">→</span>
                <div>
                  <p className="text-white/70 font-raleway font-bold mb-2">{bullet.title}:</p>
                  <p className="text-white/35 font-inter leading-relaxed">{bullet.content}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="space-y-5 text-white/45 font-inter text-lg leading-relaxed">
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
            <p className="text-white/60 italic text-xl">
              Thank you. Without the birds, the tree will be lonely. May agape and peace be yours.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
