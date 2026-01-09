"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/whale-background.png)",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              BLUWHALE
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">A massive wave is brewing onchain</p>

          <div className="flex items-center gap-4 mb-12">
            <a
              href="https://x.com/Base_BluWhale"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              aria-label="X (Twitter)"
            >
              <Image src="/x-logo.png" alt="X Logo" width={24} height={24} />
            </a>
            <a
              href="https://dexscreener.com/base/0x1b1217fe94cd4d7c4707eff5ed578b82b86ce74cc9718e8b1c5e55e0c9e4d24e"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              aria-label="DEXScreener"
            >
              <Image src="/dex-logo.png" alt="DEX Logo" width={24} height={24} />
            </a>
            <a
              href="https://zora.co/coin/base:0x7f366d8ab8d9f74a3b20438bf4685c2fcaeb62d8?referrer=0xdd1aaff40dde70ac2965b54ac56b8a9857a44f25"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              aria-label="Zora"
            >
              <Image src="/zora-logo.png" alt="ZORA Logo" width={24} height={24} />
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="https://dexscreener.com/base/0x1b1217fe94cd4d7c4707eff5ed578b82b86ce74cc9718e8b1c5e55e0c9e4d24e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
          >
            Start Trading →
          </a>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 left-20 w-72 h-72 border border-blue-500/10 rounded-full animate-pulse delay-700"></div>
      </div>
    </section>
  )
}
