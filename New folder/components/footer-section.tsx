"use client"

export function FooterSection() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-cyan-500/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">© 2026 BLUWHALE. All rights reserved.</p>
          <p className="text-slate-500 text-xs mt-4 md:mt-0">Powered by Base Network</p>
        </div>
      </div>
    </footer>
  )
}
