const NAV_ITEMS = [
  { icon: 'home', label: 'Bosh sahifa', href: '#hero' },
  { icon: 'person', label: 'Haqida', href: '#about' },
  { icon: 'code', label: 'Loyihalar', href: '#projects' },
  { icon: 'mail', label: 'Aloqa', href: '#contact' },
]

export default function MobileNav() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2"
      style={{
        background: 'rgba(19,32,51,0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 -4px 32px -4px rgba(0,0,0,0.5)',
      }}
    >
      {NAV_ITEMS.map(({ icon, label, href }) => (
        <a
          key={href}
          href={href}
          className="flex flex-col items-center justify-center py-1"
          style={{
            color: '#aac9f4',
            textDecoration: 'none',
            transition: 'color 0.15s, transform 0.1s',
            minWidth: '3.5rem',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#ffb596')}
          onMouseLeave={e => (e.currentTarget.style.color = '#aac9f4')}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{icon}</span>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.04em', marginTop: '0.125rem' }}>
            {label}
          </span>
        </a>
      ))}
    </nav>
  )
}
