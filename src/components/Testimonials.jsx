const REVIEWS = [
  {
    text: '"Sardor bilan ishlash juda qulay bo\'ldi. Loyihamizni kutilgandek va muddatidan oldin sifatli topshirdi! Har qanday texnik qiyinchilikka oson yechim topdi."',
    initials: 'AQ',
    name: 'Alisher Qodirov',
    role: 'CEO, FinStart',
    accentColor: '#ff6500',
    avatarBg: 'rgba(255,101,0,0.2)',
    avatarBorder: 'rgba(255,101,0,0.5)',
    borderLeft: '#ff6500',
  },
  {
    text: '"Dizayn va texnik tomoni a\'lo darajada. Mahsulotimiz foydalanuvchilar orasida juda iliq kutib olindi va konversiyasi 40% ga oshdi. Tavsiya qilaman!"',
    initials: 'DR',
    name: 'Dilnoza Rahimova',
    role: 'Product Lead',
    accentColor: '#aac9f4',
    avatarBg: 'rgba(41,72,109,0.50)',
    avatarBorder: 'rgba(170,201,244,0.50)',
    borderLeft: '#aac9f4',
  },
]

const Stars = ({ color }) => (
  <div className="flex items-center gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className="material-symbols-outlined"
        style={{ fontSize: 18, color, fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section
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
          MIJOZLAR FIKRI
        </span>
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#d6e3fe',
          }}
        >
          Hamkorlarimiz nima deydi?
        </h2>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {REVIEWS.map((r) => (
          <div
            key={r.name}
            className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            style={{ borderLeft: `4px solid ${r.borderLeft}` }}
          >
            <div className="mb-4">
              <Stars color={r.accentColor} />
              <p style={{ fontSize: '1rem', color: '#d6e3fe', fontStyle: 'italic', lineHeight: '1.6' }}>
                {r.text}
              </p>
            </div>
            <div
              className="flex items-center gap-3 pt-4"
              style={{ borderTop: '1px solid rgba(40,53,74,0.3)' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{
                  background: r.avatarBg,
                  border: `1px solid ${r.avatarBorder}`,
                  color: r.accentColor,
                  fontSize: '0.875rem',
                }}
              >
                {r.initials}
              </div>
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#fff' }}>{r.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#aac9f4' }}>{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
