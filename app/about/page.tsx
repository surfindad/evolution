import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Evolution Accelerator',
  description:
    'Evolution Accelerator aims to help and serve others via access to capital, community, and culture that creates meaningful relationships to fuel positive change.',
}

const sections = [
  {
    title: 'Welcome',
    content:
      'Evolution Accelerator welcomes others to apply for access to the Evolution Ecosystem whereby we may unite together to expand the breadth and reach of the ecosystem.',
  },
  {
    title: 'Education',
    content:
      'Evolution Accelerator represents a desire to explore, help, listen, learn, serve, share, and teach a greatly diversified wisdom without bias or prejudice.',
  },
  {
    title: 'Grow',
    content:
      'Evolution Accelerator seeks to nurture mutually-beneficial growth throughout the ecosystem via collaboration and teamwork; it also aims to foster and sponsor appreciation, kindness, and respect.',
  },
  {
    title: 'Legacy',
    content:
      'Evolution Accelerator seeks to build a legacy of helping and serving others via coaching, education, and mentorship, as well as things like these to positively impact the universe.',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 25% 50%, rgba(119,221,119,0.09) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-green/60 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
            About Us
          </p>
          <h1
            className="font-raleway font-black uppercase leading-none text-green text-glow mb-10 max-w-5xl"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            Evolving the art of acceleration via the 3C&apos;s: Capital. Community. Culture.
          </h1>
          <p className="text-white/45 text-xl font-inter leading-relaxed max-w-2xl">
            Evolution Accelerator aims to help and serve others via access to capital,
            community, and culture that creates meaningful relationships to fuel positive change.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* Core sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <div key={section.title} className="card-dark rounded-2xl p-10">
                <h2 className="font-raleway font-black text-2xl text-green uppercase tracking-wide mb-5">
                  {section.title}
                </h2>
                <p className="text-white/45 font-inter leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Subscribe */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-green/60 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-5">
              Stay Connected
            </p>
            <h2 className="font-raleway font-black text-5xl uppercase text-green text-glow mb-6">
              Subscribe
            </h2>
            <p className="text-white/45 font-inter text-lg leading-relaxed mb-10">
              Evolution Accelerator seeks to support others in providing access to elements,
              such as, but not limited to the 3C&apos;s: Capital, Community, and Culture.
              Please feel free to subscribe to Evolution Accelerator&apos;s Substack using the link below.
            </p>
            <a
              href="https://www.evolutionaccelerator.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green text-black font-raleway font-black text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-green-light hover:shadow-[0_0_30px_rgba(119,221,119,0.4)] transition-all duration-300"
            >
              Subscribe on Substack <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Apply */}
      <section className="py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(119,221,119,0.07) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
            Join the Ecosystem
          </p>
          <h2 className="font-raleway font-black text-5xl md:text-7xl uppercase text-green text-glow mb-6">
            Apply
          </h2>
          <p className="text-white/40 font-inter text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Please feel free to use the button below to apply for access to the Evolution
            Ecosystem if you&apos;re ready, willing, and able to play a part in positive change
            and greater good.
          </p>
          <a
            href="https://airtable.com/appNvUtobsLy17k38/page1l8ort3ooz8a7/form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green text-black font-raleway font-black text-sm tracking-widest uppercase px-12 py-5 rounded-full hover:bg-green-light hover:shadow-[0_0_60px_rgba(119,221,119,0.5)] transition-all duration-300"
          >
            Apply Now <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  )
}
