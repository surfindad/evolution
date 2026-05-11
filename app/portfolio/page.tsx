import type { Metadata } from 'next'
import PortfolioGrid from '@/components/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Portfolio | Evolution Accelerator',
  description:
    'Explore the 50+ innovative companies in the Evolution Accelerator portfolio — each driving change and pushing boundaries in their field.',
}

export default function PortfolioPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(119,221,119,0.09) 0%, transparent 55%)',
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-green/60 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
            Our Investments
          </p>
          <h1 className="font-raleway font-black text-7xl md:text-9xl uppercase text-green text-glow mb-8">
            Portfolio
          </h1>
          <p className="text-white/40 text-lg font-inter max-w-3xl leading-relaxed">
            Evolution&apos;s portfolio construction is guided by four core principles. First, we
            target startups using technology to decompose monolithic industries. Second, we
            prioritize innovation over invention, seeking companies that refine and scale
            existing technologies for practical application. Third, we invest in ventures with
            clear, rapid pathways to revenue generation. Finally, we focus on companies where
            marginal value significantly exceeds marginal costs, ensuring efficient capital
            deployment and long-term profitability.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PortfolioGrid />
        </div>
      </section>
    </main>
  )
}
