"use client"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-cyan-400 font-bold text-xs">
              B
            </div>
          </div>
          <span className="text-2xl font-bold text-white tracking-wider">BLUWHALE</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="https://x.com/Based_Coinhub/status/2009389599361991166"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-colors font-semibold"
          >
            Base_CoinHub
          </a>
          <a
            href="https://dexscreener.com/base/0x1b1217fe94cd4d7c4707eff5ed578b82b86ce74cc9718e8b1c5e55e0c9e4d24e"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Trade Now
          </a>
        </nav>
      </div>
    </header>
  )
}
