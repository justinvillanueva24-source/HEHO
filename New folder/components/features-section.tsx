"use client"

export function FeaturesSection() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Trade at the speed of the blockchain with minimal latency.",
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Your assets are protected with enterprise-grade security.",
    },
    {
      icon: "💎",
      title: "Low Fees",
      description: "Trade with minimal fees powered by Base network efficiency.",
    },
    {
      icon: "🌊",
      title: "Deep Liquidity",
      description: "Access deep liquidity pools with massive trading volume.",
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose <span className="text-cyan-400">BLUWHALE</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl border border-cyan-500/20 bg-slate-900/50 hover:bg-slate-900/80 hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
