const PROFILE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAROETR2__eewa1brrPpNUw_A4tILk3Ut_Ozdr_4M8c6evjKFrzpT0LNkKDNdPHRmOhWobamDuy3dQVp-RVgeVOrvwDWdGE3lCkLLBKktPpchK5q1m8x8E8ri3FCjyfp60ppuw6S0D41C1L3OS8T6Q4I913lkW0J3jiCqyn8U_7U_s11VyV0nsUnQRnGiB51mgtlHr1aPCIE4bi3BGCoyHFOFQ6c9AdXDSLijw8HSvx0TNkNppckdEd'

const NAV_LINKS = [
  { href: '#about', label: 'Haqida' },
  { href: '#services', label: 'Xizmatlar' },
  { href: '#projects', label: 'Loyihalar' },
  { href: '#contact', label: 'Aloqa' },
]

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: 'rgba(6, 20, 38, 0.90)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(241,245,249,0.07)',
      }}
    >
      <div className="flex justify-between items-center w-full px-4 h-16 max-w-7xl mx-auto">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <div
            className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0"
            style={{
              border: '1px solid rgba(255,181,150,0.4)',
              padding: '2px',
              background: '#132033',
            }}
          >
            <img
              src={PROFILE_IMG}
              alt="Sardor"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <span
            className="font-bold tracking-wider"
            style={{ fontSize: '1.25rem', color: '#d6e3fe', lineHeight: '1.75rem' }}
          >
            SARDOR<span style={{ color: '#ff6500', fontSize: '1.5rem' }}>.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                color: '#e3bfb1',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = '#ffb596')}
              onMouseLeave={e => (e.target.style.color = '#e3bfb1')}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg orange-glow-sm"
          style={{
            background: '#ff6500',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            textDecoration: 'none',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <span>Bog&#39;lanish</span>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>
        </a>
      </div>
    </header>
  )
}
