const SKILLS = ['TypeScript', 'Next.js', 'Node.js', 'Figma UI/UX', 'PostgreSQL']

const STATS = [
  { value: '3+ Yil', label: 'Sohaviy tajriba', color: '#ff6500' },
  { value: '25+ Loyiha', label: 'Muvaffaqiyatli yakunlangan', color: '#fff' },
  { value: '100+ Mijoz', label: 'Mamnun foydalanuvchilar', color: '#ffb596' },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-20"
      style={{ borderTop: '1px solid rgba(40,53,74,0.3)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-10">
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
            MEN HAQIMDA
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#d6e3fe',
            }}
          >
            Zamonaviy texnologiyalar orqali muammolarga yechim topaman
          </h2>
        </div>

        {/* Bio Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 mb-8">
          <p
            className="leading-relaxed mb-6"
            style={{ fontSize: '1rem', color: '#aac9f4' }}
          >
            Salom! Men Sardor — 3 yildan ortiq tajribaga ega Full-stack dasturchi va UI/UX
            dizaynerman. Asosiy maqsadim — foydalanuvchilar uchun qulay, biznes uchun esa yuqori
            daromad keltiruvchi raqamli mahsulotlarni noldan yaratishdir. Har bir loyihaga
            individual va professional yondashaman.
          </p>
          <div
            className="flex flex-wrap gap-2 pt-2"
            style={{ borderTop: '1px solid rgba(40,53,74,0.3)' }}
          >
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full"
                style={{
                  background: '#1d2a3e',
                  color: '#ffb596',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#ff6500', display: 'inline-block' }}
                />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STATS.map(({ value, label, color }) => (
            <div
              key={label}
              className="glass-card rounded-xl p-5 text-center"
              style={{ transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,101,0,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(241,245,249,0.1)')}
            >
              <div
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color,
                  marginBottom: '0.25rem',
                }}
              >
                {value}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#aac9f4' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
