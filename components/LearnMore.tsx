import { ExternalLink } from 'lucide-react'

const links = [
  {
    label: 'AngelList',
    title: 'Invest via AngelList',
    description:
      'Join as an investor in the Minerva Fund and back the next generation of Sacramento Valley startups.',
    href: 'https://venture.angellist.com/v/back/minerva-fund-6',
    emoji: '✌️',
  },
  {
    label: 'Dealum',
    title: 'Funding via Dealum',
    description:
      'Apply for funding through our Dealum platform and connect directly with our investment team.',
    href: 'https://app.dealum.com/#/company/application/new/129390/q84vodhbucyzpog3fiwks4mosjy3bazq',
    emoji: '💼',
  },
  {
    label: 'Substack',
    title: 'Subscribe to Substack',
    description:
      'Stay informed with ecosystem news, startup insights, and updates from Evolution Accelerator.',
    href: 'https://www.evolutionaccelerator.co/',
    emoji: '📬',
  },
]

export default function LearnMore() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <p className="text-green/60 text-xs font-inter font-semibold tracking-[0.4em] uppercase mb-4">
            Get Involved
          </p>
          <h2 className="font-raleway font-black text-5xl md:text-6xl uppercase text-green text-glow mb-4">
            Learn More
          </h2>
          <p className="text-white/35 text-lg font-inter max-w-xl">
            Learn more via the links below about investing, funding, and subscription. Select a card to go to the respective platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark rounded-2xl p-8 group flex flex-col gap-5"
            >
              <div className="text-4xl">{link.emoji}</div>
              <div className="flex-1">
                <p className="text-green/50 text-xs font-inter tracking-widest uppercase mb-2">
                  {link.label}
                </p>
                <h3 className="font-raleway font-bold text-white text-xl mb-3 group-hover:text-green transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-white/35 text-sm font-inter leading-relaxed">
                  {link.description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-green text-sm font-inter font-semibold">
                Visit Platform <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
