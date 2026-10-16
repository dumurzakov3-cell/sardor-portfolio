import { useState } from 'react'

const CONTACT_ITEMS = [
  {
    icon: 'call',
    label: 'Telefon',
    value: '50 992 66 28',
    href: 'tel:+998509926628',
  },
  {
    icon: 'chat',
    label: 'Telegram',
    value: '@dumurzakov',
    href: 'https://t.me/dumurzakov',
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'dumurzakov3@gmail.com',
    href: 'mailto:dumurzakov3@gmail.com',
  },
  {
    icon: 'location_on',
    label: 'Manzil',
    value: 'Guliston sh., O\'zbekiston',
    href: null,
  },
]

export default function Contact() {
  const [status, setStatus] = useState(null) // null | 'success'

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('success')
    e.target.reset()
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <section
      id="contact"
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
          BOG&#39;LANISH
        </span>
        <h2
          className="mb-2"
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#d6e3fe',
          }}
        >
          Loyiha bo&#39;yicha gaplashamizmi?
        </h2>
        <p style={{ fontSize: '1rem', color: '#aac9f4' }}>
          G&#39;oyangiz bormi? Xabar qoldiring, 15 daqiqa ichida javob beraman.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8">
          {status === 'success' && (
            <div
              className="flex items-center gap-2 mb-4 px-4 py-3 rounded-lg"
              style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', color: '#4ade80', fontSize: '0.875rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>check_circle</span>
              Rahmat! Xabaringiz yuborildi. Tez orada siz bilan bog&#39;lanaman.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#aac9f4', marginBottom: '0.375rem', letterSpacing: '0.04em' }}>
                Ism
              </label>
              <input
                type="text"
                placeholder="Sardor"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(2,14,33,0.80)',
                  border: '1px solid rgba(90,65,54,0.5)',
                  color: '#fff',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = '#ff6500')}
                onBlur={e => (e.target.style.borderColor = 'rgba(90,65,54,0.5)')}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#aac9f4', marginBottom: '0.375rem', letterSpacing: '0.04em' }}>
                Telefon raqam
              </label>
              <input
                type="tel"
                placeholder="50 992 66 28"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(2,14,33,0.80)',
                  border: '1px solid rgba(90,65,54,0.5)',
                  color: '#fff',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = '#ff6500')}
                onBlur={e => (e.target.style.borderColor = 'rgba(90,65,54,0.5)')}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#aac9f4', marginBottom: '0.375rem', letterSpacing: '0.04em' }}>
                Xabaringiz
              </label>
              <textarea
                placeholder="Loyihangiz haqida qisqacha yozing..."
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(2,14,33,0.80)',
                  border: '1px solid rgba(90,65,54,0.5)',
                  color: '#fff',
                  fontSize: '0.875rem',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                }}
                onFocus={e => (e.target.style.borderColor = '#ff6500')}
                onBlur={e => (e.target.style.borderColor = 'rgba(90,65,54,0.5)')}
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg orange-glow-sm"
              style={{
                background: '#ff6500',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.02em',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e05a00')}
              onMouseLeave={e => (e.currentTarget.style.background = '#ff6500')}
            >
              <span>Xabar yuborish</span>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-5">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
              Aloqa ma&#39;lumotlari
            </h3>
            {CONTACT_ITEMS.map(({ icon, label, value, href }) => {
              const inner = (
                <div className="flex items-center gap-3.5 group" style={{ transition: 'color 0.15s' }}>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: '#1d2a3e',
                      border: '1px solid rgba(255,181,150,0.2)',
                      transition: 'transform 0.15s',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#ff6500' }}>{icon}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#aac9f4', fontWeight: 500, letterSpacing: '0.05em' }}>{label}</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#d6e3fe' }}>{value}</div>
                  </div>
                </div>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                >
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              )
            })}
          </div>

          {/* Social Icons */}
          <div className="glass-card rounded-2xl p-4 flex items-center justify-around">
            {[
              { icon: 'send', href: 'https://t.me/dumurzakov', title: 'Telegram' },
              { icon: 'photo_camera', href: '#', title: 'Instagram' },
              { icon: 'badge', href: '#', title: 'LinkedIn' },
              { icon: 'code', href: '#', title: 'GitHub' },
            ].map(({ icon, href, title }) => (
              <a
                key={title}
                href={href}
                title={title}
                target={href !== '#' ? '_blank' : undefined}
                rel={href !== '#' ? 'noopener noreferrer' : undefined}
                className="p-2.5 rounded-lg"
                style={{
                  background: '#132033',
                  color: '#aac9f4',
                  textDecoration: 'none',
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#ff6500'
                  e.currentTarget.style.background = '#1d2a3e'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#aac9f4'
                  e.currentTarget.style.background = '#132033'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
