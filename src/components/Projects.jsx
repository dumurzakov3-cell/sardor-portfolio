const PROJECTS = [
  {
    category: 'Veb & Mobil',
    categoryBg: '#ff6500',
    categoryColor: '#fff',
    previewLabel: 'Fintech Core v2.4',
    previewStat: '+99.4% Uptime',
    previewStatColor: '#4ade80',
    progressColor: '#ff6500',
    progressWidth: '80%',
    title: 'Fintech Uzbekistan',
    desc: 'Onlayn to\'lov va moliyaviy hisobotlar platformasi. Real vaqt rejimida tranzaksiyalar tahlili va to\'lov shlyuzlari.',
    tags: ['Next.js', 'Tailwind', 'PostgreSQL'],
  },
  {
    category: 'Dashboard',
    categoryBg: '#29486d',
    categoryColor: '#aac9f4',
    previewLabel: 'Yuk Tashish & GPS',
    previewStat: '1,420 buyurtma/kun',
    previewStatColor: '#ffb596',
    progressColor: '#aac9f4',
    progressWidth: '60%',
    title: 'Logistika & Yetkazib berish',
    desc: 'Kuryerlik va yuk tashish xizmatlari boshqaruv tizimi. Haydovchilar marshruti va avtomatik hisob-kitob moduli.',
    tags: ['React', 'Node.js', 'Mapbox'],
  },
  {
    category: 'Full-stack',
    categoryBg: 'rgba(0,155,254,0.30)',
    categoryColor: '#9dcaff',
    previewLabel: 'EduTech Online',
    previewStat: '12,000+ Talaba',
    previewStatColor: '#9dcaff',
    progressColor: '#9dcaff',
    progressWidth: '92%',
    title: 'EduTech Ta\'lim Portali',
    desc: 'Interaktiv video kurslar, test sinovlari va talabalar uchun o\'quv platformasi. Sertifikat generatsiya tizimi.',
    tags: ['Full-stack', 'TypeScript', 'Docker'],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
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
          LOYIHALARIM
        </span>
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#d6e3fe',
          }}
        >
          So&#39;nggi muvaffaqiyatli ishlarim
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="glass-card rounded-2xl overflow-hidden flex flex-col"
            style={{ transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,101,0,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(241,245,249,0.1)')}
          >
            {/* Preview area */}
            <div
              className="h-48 w-full relative overflow-hidden p-4 flex flex-col justify-between"
              style={{
                background: '#132033',
                borderBottom: '1px solid rgba(40,53,74,0.3)',
              }}
            >
              <div className="flex justify-between items-center">
                <span
                  className="px-2.5 py-1 rounded-md"
                  style={{
                    background: p.categoryBg,
                    color: p.categoryColor,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                  }}
                >
                  {p.category}
                </span>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(29,42,62,0.9)' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#aac9f4' }}>open_in_new</span>
                </span>
              </div>
              {/* Mock preview bar */}
              <div
                className="p-3 rounded-lg"
                style={{
                  background: 'rgba(2,14,33,0.80)',
                  border: '1px solid rgba(170,201,244,0.15)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span style={{ fontSize: '0.625rem', color: '#aac9f4', fontFamily: 'monospace' }}>{p.previewLabel}</span>
                  <span style={{ fontSize: '0.625rem', color: p.previewStatColor, fontFamily: 'monospace', fontWeight: 600 }}>{p.previewStat}</span>
                </div>
                <div className="w-full rounded-full overflow-hidden" style={{ height: 8, background: '#28354a' }}>
                  <div style={{ width: p.progressWidth, height: '100%', background: p.progressColor }} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3
                  className="mb-2"
                  style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.01em' }}
                >
                  {p.title}
                </h3>
                <p
                  className="leading-relaxed mb-4"
                  style={{ fontSize: '0.875rem', color: '#aac9f4' }}
                >
                  {p.desc}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded"
                      style={{
                        background: '#1d2a3e',
                        color: '#e3bfb1',
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5"
                  style={{
                    color: '#ffb596',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ffb596')}
                >
                  <span>Loyihani ko&#39;rish</span>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
