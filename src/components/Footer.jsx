export default function Footer() {
  return (
    <footer
      style={{
        background: '#020e21',
        borderTop: '1px solid rgba(40,53,74,0.3)',
        marginTop: '4rem',
      }}
    >
      <div className="w-full py-12 px-6 flex flex-col items-center justify-center text-center gap-6 max-w-7xl mx-auto pb-24 md:pb-12">
        {/* Brand */}
        <div>
          <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#d6e3fe' }}>
            SARDOR<span style={{ color: '#ff6500' }}>.</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { label: 'Telegram', href: 'https://t.me/dumurzakov' },
            { label: 'Instagram', href: '#' },
            { label: 'LinkedIn', href: '#' },
            { label: 'GitHub', href: '#' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href !== '#' ? '_blank' : undefined}
              rel={href !== '#' ? 'noopener noreferrer' : undefined}
              style={{
                color: 'rgba(170,201,244,0.8)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffb596')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(170,201,244,0.8)')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Scroll to top */}
        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full"
          style={{
            background: '#132033',
            border: '1px solid #28354a',
            color: '#aac9f4',
            fontSize: '0.875rem',
            textDecoration: 'none',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#ffb596'
            e.currentTarget.style.borderColor = 'rgba(255,181,150,0.4)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#aac9f4'
            e.currentTarget.style.borderColor = '#28354a'
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_upward</span>
          <span>Yuqoriga</span>
        </a>

        {/* Copyright */}
        <p style={{ fontSize: '0.875rem', color: 'rgba(170,201,244,0.6)' }}>
          &copy; 2026 SARDOR. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  )
}
