const SERVICES = [
  {
    icon: 'language',
    title: 'Veb-saytlar va Portallar',
    desc: 'Yuqori tezlikda ishlovchi zamonaviy lending, korporativ saytlar va onlayn do\'konlar (React, Next.js, Tailwind).',
    badge: 'SEO mos, mobil moslashuvchan, ultra-tezkor',
    iconBg: 'rgba(255,101,0,0.20)',
    iconBorder: 'rgba(255,101,0,0.40)',
    iconColor: '#ff6500',
  },
  {
    icon: 'smartphone',
    title: 'Mobil Ilovalar',
    desc: 'iOS va Android uchun qulay, chiroyli va tezkor ilovalar ishlab chiqish (Flutter / React Native).',
    badge: 'Cross-platform, AppStore & Play Market tayyor',
    iconBg: 'rgba(0,155,254,0.20)',
    iconBorder: 'rgba(0,155,254,0.40)',
    iconColor: '#9dcaff',
  },
  {
    icon: 'palette',
    title: 'UI/UX Dizayn',
    desc: 'Foydalanuvchiga qulay, zamonaviy interfeyslar, prototiplash va dizayn tizimlari (Figma).',
    badge: 'User Flow, Clickable Wireframes, Design System',
    iconBg: 'rgba(41,72,109,0.50)',
    iconBorder: 'rgba(170,201,244,0.40)',
    iconColor: '#aac9f4',
  },
  {
    icon: 'dns',
    title: 'Backend & API Tizimlar',
    desc: 'Xavfsiz ma\'lumotlar bazasi, to\'lov tizimlari integratsiyasi (Click, Payme, Uzum) va mustahkam arxitektura.',
    badge: 'REST API, Microservices, Yuqori yuklamali bazalar',
    iconBg: 'rgba(255,181,150,0.20)',
    iconBorder: 'rgba(255,181,150,0.40)',
    iconColor: '#ffb596',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-12 md:py-20"
      style={{ borderTop: '1px solid rgba(40,53,74,0.3)' }}
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span
          className="inline-block px-3 py-1 rounded-full mb-3 uppercase tracking-wider"
          style={{
            background: 'rgba(41,72,109,0.5)',
            border: '1px solid rgba(170,201,244,0.2)',
            color: '#ffb596',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          XIZMATLAR
        </span>
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#d6e3fe',
          }}
        >
          Sizga qanday yordam bera olaman?
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden"
            style={{ transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,101,0,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(241,245,249,0.1)')}
          >
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: s.iconBg,
                border: `1px solid ${s.iconBorder}`,
                transition: 'transform 0.2s',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 26, color: s.iconColor }}>
                {s.icon}
              </span>
            </div>
            <h3
              className="mb-2.5"
              style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.01em' }}
            >
              {s.title}
            </h3>
            <p
              className="leading-relaxed mb-4"
              style={{ fontSize: '0.875rem', color: '#aac9f4' }}
            >
              {s.desc}
            </p>
            <div className="flex items-center gap-2" style={{ fontSize: '0.75rem', fontWeight: 500, color: '#ffb596', letterSpacing: '0.05em' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#ff6500', display: 'inline-block', flexShrink: 0 }} />
              {s.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
