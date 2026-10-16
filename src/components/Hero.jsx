const PROFILE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAROETR2__eewa1brrPpNUw_A4tILk3Ut_Ozdr_4M8c6evjKFrzpT0LNkKDNdPHRmOhWobamDuy3dQVp-RVgeVOrvwDWdGE3lCkLLBKktPpchK5q1m8x8E8ri3FCjyfp60ppuw6S0D41C1L3OS8T6Q4I913lkW0J3jiCqyn8U_7U_s11VyV0nsUnQRnGiB51mgtlHr1aPCIE4bi3BGCoyHFOFQ6c9AdXDSLijw8HSvx0TNkNppckdEd'

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-8 pb-16 md:pt-16 md:pb-24 flex flex-col items-center text-center"
    >
      {/* Status Badge */}
      <div
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
        style={{
          background: '#132033',
          border: '1px solid rgba(255,101,0,0.2)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          color: '#ffb596',
        }}
      >
        <span
          className="w-2 h-2 rounded-full animate-ping"
          style={{ background: '#ff6500', display: 'inline-block' }}
        />
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: '#ff6500', display: 'inline-block', marginLeft: '-1rem' }}
        />
        <span>✨ Ochiq yangi loyihalar uchun | Freelancer &amp; Dasturchi</span>
      </div>

      {/* Profile Photo */}
      <div className="relative mb-8 group">
        <div
          className="absolute -inset-1 rounded-2xl opacity-60 blur-md"
          style={{
            background: 'linear-gradient(to right, #ff6500, #ffb596)',
            transition: 'opacity 0.3s',
          }}
        />
        <div
          className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden p-1 orange-glow"
          style={{
            background: '#132033',
            border: '2px solid #ff6500',
          }}
        >
          <img
            src={PROFILE_IMG}
            alt="Sardor profil surati"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Badge */}
        <div
          className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-lg shadow-lg"
          style={{
            background: '#1d2a3e',
            border: '1px solid rgba(90,65,54,0.6)',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#ff6500' }}>terminal</span>
          <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', color: '#d6e3fe' }}>
            Senior Dev
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1
        className="max-w-3xl mb-5 leading-tight"
        style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          color: '#d6e3fe',
        }}
      >
        Sardor — Men sizning g&#39;oyangizni{' '}
        <span
          style={{
            background: 'linear-gradient(to right, #ff6500, #ffb596, #ffdbcd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          tayyor loyihaga
        </span>{' '}
        aylantiraman
      </h1>

      {/* Subheadline */}
      <p
        className="max-w-2xl mb-8 leading-relaxed"
        style={{ fontSize: '1.125rem', fontWeight: 400, color: '#aac9f4' }}
      >
        Veb va mobil ilovalar yaratish, qulay UI/UX dizayn hamda biznesingizni yangi bosqichga
        olib chiquvchi zamonaviy raqamli yechimlar ishlab chiqaman.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
        <a
          href="#contact"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg orange-glow-sm"
          style={{
            background: '#ff6500',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.875rem',
            letterSpacing: '0.02em',
            textDecoration: 'none',
            transition: 'background 0.15s, transform 0.1s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#e05a00')}
          onMouseLeave={e => (e.currentTarget.style.background = '#ff6500')}
        >
          <span>Bog&#39;lanish</span>
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
        </a>
        <a
          href="#projects"
          className="w-full sm:w-auto glass-card flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg"
          style={{
            color: '#d6e3fe',
            fontWeight: 600,
            fontSize: '0.875rem',
            letterSpacing: '0.02em',
            textDecoration: 'none',
            border: '1px solid rgba(170,201,244,0.2)',
            transition: 'background 0.15s',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>layers</span>
          <span>Loyihalarim</span>
        </a>
      </div>

      {/* Trust Indicators */}
      <div
        className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-full"
        style={{
          background: 'rgba(19, 32, 51, 0.70)',
          border: '1px solid rgba(40, 53, 74, 0.4)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#ff6500', fontVariationSettings: "'FILL' 1" }}>star</span>
          <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.75rem' }}>4.9/5</span>
          <span style={{ color: 'rgba(170,201,244,0.7)', fontSize: '0.75rem' }}>mijozlar bahosi</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full" style={{ background: 'rgba(170,201,244,0.4)' }} />
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#ff6500' }}>verified</span>
          <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.75rem' }}>100%</span>
          <span style={{ color: 'rgba(170,201,244,0.7)', fontSize: '0.75rem' }}>o&#39;z vaqtida topshirish</span>
        </div>
      </div>
    </section>
  )
}
