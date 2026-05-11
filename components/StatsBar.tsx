const stats = [
  { value: '49+', label: 'Portfolio Companies' },
  { value: 'Sacramento', label: 'Valley, California' },
  { value: '3 C\'s', label: 'Capital · Community · Culture' },
]

export default function StatsBar() {
  return (
    <div className="bg-surface-2 border-y border-green/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center py-4 md:py-0">
              <span className="font-raleway font-black text-4xl md:text-5xl text-green text-glow mb-1">
                {stat.value}
              </span>
              <span className="font-inter text-white/35 text-xs uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
