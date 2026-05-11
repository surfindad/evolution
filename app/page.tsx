import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import LearnMore from '@/components/LearnMore'
import MarqueeStrip from '@/components/MarqueeStrip'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />

      {/* About snippet */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-green/60 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-5">
                Who We Are
              </p>
              <h2 className="font-raleway font-black text-4xl md:text-5xl text-white leading-tight mb-8">
                Evolving the art of acceleration via the{' '}
                <span className="text-green">3C&apos;s</span>
              </h2>
              <p className="text-white/45 text-lg font-inter leading-relaxed mb-8">
                Evolution Accelerator is evolving the art of acceleration within
                California&apos;s Sacramento Valley. The Sacramento Valley is key to
                California&apos;s entrepreneurial ecosystem — ranked #5 regionally for
                women entrepreneurs, ~7,000 investors, and over 700 startups.
              </p>
              <p className="text-white/35 text-lg font-inter leading-relaxed mb-10">
                It also features a diverse market with presence from Intel, UC Davis,
                and Sutter Health. Startups and investors can access vital information
                on our programs below.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-green font-raleway font-bold text-sm tracking-widest uppercase border-b border-green/30 pb-1 hover:border-green transition-colors duration-300"
              >
                Learn More About Us <ArrowRight size={14} />
              </a>
            </div>

            {/* Stats card */}
            <div className="card-dark rounded-3xl p-10 space-y-8">
              {[
                { num: '#5', desc: 'Ranked regionally for women entrepreneurs' },
                { num: '~7,000', desc: 'Investors in the Sacramento Valley ecosystem' },
                { num: '700+', desc: 'Startups in the region' },
                { num: '49+', desc: 'Portfolio companies supported' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-5 pb-8 border-b border-white/5 last:border-0 last:pb-0">
                  <span className="font-raleway font-black text-3xl text-green text-glow shrink-0 w-24">
                    {item.num}
                  </span>
                  <span className="text-white/45 font-inter leading-relaxed pt-1">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />
      <LearnMore />
      <hr className="divider" />
      <MarqueeStrip />
      <hr className="divider" />

      {/* CTA Section */}
      <section className="py-36 bg-black text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(119,221,119,0.09) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-green/50 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-6">
            Join the Ecosystem
          </p>
          <h2 className="font-raleway font-black text-6xl md:text-8xl uppercase text-green text-glow mb-6 leading-none">
            Ready to<br />Evolve?
          </h2>
          <p className="text-white/35 text-lg font-inter mb-12 leading-relaxed max-w-xl mx-auto">
            Apply for access to the Evolution Ecosystem. Join startups, investors, and
            partners driving meaningful change in Sacramento Valley and beyond.
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
