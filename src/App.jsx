import React, { useState } from 'react'

export default function App() {
  const [formSent, setFormSent] = useState(false)

  const handleContactSubmit = (e) => {
    e.preventDefault()
    setFormSent(true)
    alert("Rahmat! Xabaringiz yuborildi. Tez orada siz bilan bog'lanaman.")
  }

  return (
    <>
      {/* Ambient background glow elements */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[340px] md:w-[600px] h-[340px] md:h-[600px] bg-primary-container/10 rounded-full blur-[110px] pointer-events-none z-0"></div>
      <div className="fixed top-2/3 right-0 w-[260px] md:w-[480px] h-[260px] md:h-[480px] bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* 1. STICKY TOP NAVBAR */}
      <header className="docked full-width top-0 sticky z-50 bg-surface/90 dark:bg-surface/90 backdrop-blur-md shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center w-full px-4 h-16 max-w-7xl mx-auto">
          {/* Brand Logo */}
          <a className="flex items-center gap-2 group active:scale-95 transition-transform duration-150" href="#hero">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary/40 p-0.5 bg-surface-container flex-shrink-0">
              <img
                alt="Sardor profil surati"
                className="w-full h-full object-cover rounded-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAROETR2__eewa1brrPpNUw_A4tILk3Ut_Ozdr_4M8c6evjKFrzpT0LNkKDNdPHRmOhWobamDuy3dQVp-RVgeVOrvwDWdGE3lCkLLBKktPpchK5q1m8x8E8ri3FCjyfp60ppuw6S0D41C1L3OS8T6Q4I913lkW0J3jiCqyn8U_7U_s11VyV0nsUnQRnGiB51mgtlHr1aPCIE4bi3BGCoyHFOFQ6c9AdXDSLijw8HSvx0TNkNppckdEd"
              />
            </div>
            <span className="text-headline-sm font-headline-sm font-bold tracking-wider text-on-surface dark:text-on-surface flex items-center">
              SARDOR<span className="text-primary-container text-2xl leading-none ml-0.5">.</span>
            </span>
          </a>
          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-label-md font-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#about">
              Haqida
            </a>
            <a className="text-label-md font-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#services">
              Xizmatlar
            </a>
            <a className="text-label-md font-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#projects">
              Loyihalar
            </a>
            <a className="text-label-md font-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#contact">
              Aloqa
            </a>
          </nav>
          {/* Right Action CTA */}
          <div className="flex items-center gap-2">
            <a
              className="px-4 py-2 rounded-lg bg-primary-container text-white text-label-md font-label-md hover:opacity-90 active:scale-95 transition-all duration-150 orange-glow-sm flex items-center gap-1.5 shadow-sm"
              href="#contact"
            >
              <span>Bog'lanish</span>
              <span className="material-symbols-outlined text-[16px]" data-icon="send">send</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. HERO SECTION */}
        <section className="pt-8 pb-16 md:pt-16 md:pb-24 flex flex-col items-center text-center" id="hero">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-primary/20 text-primary text-label-md font-label-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-primary-container -ml-4"></span>
            <span>✨ Ochiq yangi loyihalar uchun | Freelancer &amp; Dasturchi</span>
          </div>

          {/* Profile Photo Frame */}
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-container to-primary opacity-60 blur-md group-hover:opacity-90 transition duration-300"></div>
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden p-1 bg-surface-container border-2 border-primary-container orange-glow">
              <img
                alt="Sardor profil surati"
                className="w-full h-full object-cover rounded-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAROETR2__eewa1brrPpNUw_A4tILk3Ut_Ozdr_4M8c6evjKFrzpT0LNkKDNdPHRmOhWobamDuy3dQVp-RVgeVOrvwDWdGE3lCkLLBKktPpchK5q1m8x8E8ri3FCjyfp60ppuw6S0D41C1L3OS8T6Q4I913lkW0J3jiCqyn8U_7U_s11VyV0nsUnQRnGiB51mgtlHr1aPCIE4bi3BGCoyHFOFQ6c9AdXDSLijw8HSvx0TNkNppckdEd"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-surface-container-high border border-outline-variant/60 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
              <span className="material-symbols-outlined text-primary-container text-[16px]" data-icon="terminal">terminal</span>
              <span className="text-label-mono font-label-mono text-on-surface text-[11px]">Senior Dev</span>
            </div>
          </div>

          {/* Big Headline */}
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface max-w-3xl mb-5 leading-tight">
            Sardor — Men sizning g'oyangizni <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-primary-fixed">tayyor loyihaga</span> aylantiraman
          </h1>

          {/* Subheadline */}
          <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-secondary max-w-2xl mb-8 leading-relaxed">
            Veb va mobil ilovalar yaratish, qulay UI/UX dizayn hamda biznesingizni yangi bosqichga olib chiquvchi zamonaviy raqamli yechimlar ishlab chiqaman.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
            <a
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-primary-container text-white font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-orange-600 active:scale-95 transition-all orange-glow-sm"
              href="#contact"
            >
              <span>Bog'lanish</span>
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
            </a>
            <a
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg glass-card text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-secondary-container/50 active:scale-95 transition-all border border-secondary/20"
              href="#projects"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="layers">layers</span>
              <span>Loyihalarim</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-full bg-surface-container/70 border border-surface-variant/40 backdrop-blur-sm text-secondary font-label-mono text-label-mono">
            <div className="flex items-center gap-1.5 text-on-surface">
              <span className="material-symbols-outlined text-primary-container text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-semibold text-white">4.9/5</span>
              <span className="text-secondary/70">mijozlar bahosi</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-secondary/40"></div>
            <div className="flex items-center gap-1.5 text-on-surface">
              <span className="material-symbols-outlined text-primary-container text-[18px]" data-icon="verified">verified</span>
              <span className="font-semibold text-white">100%</span>
              <span className="text-secondary/70">o'z vaqtida topshirish</span>
            </div>
          </div>
        </section>

        {/* 3. MEN HAQIMDA (About Section) */}
        <section className="py-12 md:py-20 border-t border-surface-variant/30" id="about">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="px-3 py-1 rounded-full bg-secondary-container/50 border border-secondary/20 text-primary text-label-mono font-label-mono uppercase tracking-wider inline-block mb-3">
                MEN HAQIMDA
              </span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Zamonaviy texnologiyalar orqali muammolarga yechim topaman
              </h2>
            </div>
            <div className="glass-card rounded-2xl p-6 sm:p-8 mb-8">
              <p className="font-body-md text-body-md text-secondary leading-relaxed mb-6">
                Salom! Men Sardor — 3 yildan ortiq tajribaga ega Full-stack dasturchi va UI/UX dizaynerman. Asosiy maqsadim — foydalanuvchilar uchun qulay, biznes uchun esa yuqori daromad keltiruvchi raqamli mahsulotlarni noldan yaratishdir. Har bir loyihaga individual va professional yondashaman.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-variant/30">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-mono text-label-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>TypeScript
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-mono text-label-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>Next.js
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-mono text-label-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>Node.js
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-mono text-label-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>Figma UI/UX
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-mono text-label-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>PostgreSQL
                </span>
              </div>
            </div>
            {/* 3 Key Stats Cards (Horizontal grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-5 text-center relative overflow-hidden group hover:border-primary-container/40 transition-all duration-200">
                <div className="text-display-hero-mobile font-display-hero-mobile text-primary-container mb-1 font-bold">3+ Yil</div>
                <div className="text-body-sm font-body-sm text-secondary">Sohaviy tajriba</div>
              </div>
              <div className="glass-card rounded-xl p-5 text-center relative overflow-hidden group hover:border-primary-container/40 transition-all duration-200">
                <div className="text-display-hero-mobile font-display-hero-mobile text-white mb-1 font-bold">25+ Loyiha</div>
                <div className="text-body-sm font-body-sm text-secondary">Muvaffaqiyatli yakunlangan</div>
              </div>
              <div className="glass-card rounded-xl p-5 text-center relative overflow-hidden group hover:border-primary-container/40 transition-all duration-200">
                <div className="text-display-hero-mobile font-display-hero-mobile text-primary mb-1 font-bold">100+ Mijoz</div>
                <div className="text-body-sm font-body-sm text-secondary">Mamnun foydalanuvchilar</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. XIZMATLAR / KO'NIKMALAR (Services / Skills) */}
        <section className="py-12 md:py-20 border-t border-surface-variant/30" id="services">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-secondary-container/50 border border-secondary/20 text-primary text-label-mono font-label-mono uppercase tracking-wider inline-block mb-3">
              XIZMATLAR
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Sizga qanday yordam bera olaman?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group hover:border-primary-container/50 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 border border-primary-container/40 flex items-center justify-center text-primary-container mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]" data-icon="language">language</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-white mb-2.5">Veb-saytlar va Portallar</h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-4">
                Yuqori tezlikda ishlovchi zamonaviy lending, korporativ saytlar va onlayn do'konlar (React, Next.js, Tailwind).
              </p>
              <div className="flex items-center gap-2 text-label-mono font-label-mono text-primary text-[12px]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                SEO mos, mobil moslashuvchan, ultra-tezkor
              </div>
            </div>
            {/* Service 2 */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group hover:border-primary-container/50 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-tertiary-container/20 border border-tertiary-container/40 flex items-center justify-center text-tertiary mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]" data-icon="smartphone">smartphone</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-white mb-2.5">Mobil Ilovalar</h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-4">
                iOS va Android uchun qulay, chiroyli va tezkor ilovalar ishlab chiqish (Flutter / React Native).
              </p>
              <div className="flex items-center gap-2 text-label-mono font-label-mono text-primary text-[12px]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                Cross-platform, AppStore &amp; Play Market tayyor
              </div>
            </div>
            {/* Service 3 */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group hover:border-primary-container/50 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-secondary-container/50 border border-secondary/40 flex items-center justify-center text-secondary mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]" data-icon="palette">palette</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-white mb-2.5">UI/UX Dizayn</h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-4">
                Foydalanuvchiga qulay, zamonaviy interfeyslar, prototiplash va dizayn tizimlari (Figma).
              </p>
              <div className="flex items-center gap-2 text-label-mono font-label-mono text-primary text-[12px]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                User Flow, Clickable Wireframes, Design System
              </div>
            </div>
            {/* Service 4 */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group hover:border-primary-container/50 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]" data-icon="dns">dns</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-white mb-2.5">Backend &amp; API Tizimlar</h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-4">
                Xavfsiz ma'lumotlar bazasi, to'lov tizimlari integratsiyasi (Click, Payme, Uzum) va mustahkam arxitektura.
              </p>
              <div className="flex items-center gap-2 text-label-mono font-label-mono text-primary text-[12px]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                REST API, Microservices, Yuqori yuklamali bazalar
              </div>
            </div>
          </div>
        </section>

        {/* 5. LOYIHALARIM (Portfolio Grid) */}
        <section className="py-12 md:py-20 border-t border-surface-variant/30" id="projects">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-secondary-container/50 border border-secondary/20 text-primary text-label-mono font-label-mono uppercase tracking-wider inline-block mb-3">
              LOYIHALARIM
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              So'nggi muvaffaqiyatli ishlarim
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary-container/50 transition-all duration-200">
              <div className="h-48 w-full bg-surface-container relative overflow-hidden p-4 flex flex-col justify-between border-b border-surface-variant/30">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-md bg-primary-container text-white text-label-mono font-label-mono text-[11px]">Veb &amp; Mobil</span>
                  <span className="w-7 h-7 rounded-full bg-surface-container-high/90 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[16px]" data-icon="open_in_new">open_in_new</span>
                  </span>
                </div>
                {/* Mockup Graphic preview */}
                <div className="p-3 bg-surface-container-lowest/80 rounded-lg border border-secondary/15 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-secondary font-mono">Fintech Core v2.4</span>
                    <span className="text-[10px] text-green-400 font-mono font-semibold">+99.4% Uptime</span>
                  </div>
                  <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full w-4/5"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-white mb-2">Fintech Uzbekistan</h3>
                  <p className="font-body-sm text-body-sm text-secondary mb-4 leading-relaxed">
                    Onlayn to'lov va moliyaviy hisobotlar platformasi. Real vaqt rejimida tranzaksiyalar tahlili va to'lov shlyuzlari.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-label-mono">Next.js</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-label-mono">Tailwind</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-label-mono">PostgreSQL</span>
                  </div>
                  <a className="inline-flex items-center gap-1.5 text-primary text-label-md font-label-md hover:text-white transition-colors" href="#contact">
                    <span>Loyihani ko'rish</span>
                    <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary-container/50 transition-all duration-200">
              <div className="h-48 w-full bg-surface-container relative overflow-hidden p-4 flex flex-col justify-between border-b border-surface-variant/30">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-md bg-secondary-container text-secondary text-label-mono font-label-mono text-[11px]">Dashboard</span>
                  <span className="w-7 h-7 rounded-full bg-surface-container-high/90 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[16px]" data-icon="open_in_new">open_in_new</span>
                  </span>
                </div>
                {/* Mockup Graphic preview */}
                <div className="p-3 bg-surface-container-lowest/80 rounded-lg border border-secondary/15 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-secondary font-mono">Yuk Tashish &amp; GPS</span>
                    <span className="text-[10px] text-primary font-mono font-semibold">1,420 buyurtma/kun</span>
                  </div>
                  <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-3/5"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-white mb-2">Logistika &amp; Yetkazib berish</h3>
                  <p className="font-body-sm text-body-sm text-secondary mb-4 leading-relaxed">
                    Kuryerlik va yuk tashish xizmatlari boshqaruv tizimi. Haydovchilar marshruti va avtomatik hisob-kitob moduli.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-label-mono">React</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-label-mono">Node.js</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-label-mono">Mapbox</span>
                  </div>
                  <a className="inline-flex items-center gap-1.5 text-primary text-label-md font-label-md hover:text-white transition-colors" href="#contact">
                    <span>Loyihani ko'rish</span>
                    <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-primary-container/50 transition-all duration-200">
              <div className="h-48 w-full bg-surface-container relative overflow-hidden p-4 flex flex-col justify-between border-b border-surface-variant/30">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-md bg-tertiary-container/30 text-tertiary text-label-mono font-label-mono text-[11px]">Full-stack</span>
                  <span className="w-7 h-7 rounded-full bg-surface-container-high/90 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[16px]" data-icon="open_in_new">open_in_new</span>
                  </span>
                </div>
                {/* Mockup Graphic preview */}
                <div className="p-3 bg-surface-container-lowest/80 rounded-lg border border-secondary/15 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-secondary font-mono">EduTech Online</span>
                    <span className="text-[10px] text-tertiary font-mono font-semibold">12,000+ Talaba</span>
                  </div>
                  <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full w-11/12"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-white mb-2">EduTech Ta'lim Portali</h3>
                  <p className="font-body-sm text-body-sm text-secondary mb-4 leading-relaxed">
                    Interaktiv video kurslar, test sinovlari va talabalar uchun o'quv platformasi. Sertifikat generatsiya tizimi.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-label-mono">Full-stack</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-label-mono">TypeScript</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-label-mono">Docker</span>
                  </div>
                  <a className="inline-flex items-center gap-1.5 text-primary text-label-md font-label-md hover:text-white transition-colors" href="#contact">
                    <span>Loyihani ko'rish</span>
                    <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FIKRLAR (Testimonials) */}
        <section className="py-12 md:py-20 border-t border-surface-variant/30">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-secondary-container/50 border border-secondary/20 text-primary text-label-mono font-label-mono uppercase tracking-wider inline-block mb-3">
              MIJOZLAR FIKRI
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Hamkorlarimiz nima deydi?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Review 1 */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between border-l-4 border-l-primary-container">
              <div className="mb-4">
                <div className="flex items-center gap-1 text-primary-container mb-3">
                  <span className="material-symbols-outlined text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                  "Sardor bilan ishlash juda qulay bo'ldi. Loyihamizni kutilgandek va muddatidan oldin sifatli topshirdi! Har qanday texnik qiyinchilikka oson yechim topdi."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-surface-variant/30">
                <div className="w-10 h-10 rounded-full bg-primary-container/20 border border-primary-container/50 flex items-center justify-center font-bold text-primary">
                  AQ
                </div>
                <div>
                  <div className="font-headline-sm text-[15px] text-white">Alisher Qodirov</div>
                  <div className="font-body-sm text-[12px] text-secondary">CEO, FinStart</div>
                </div>
              </div>
            </div>
            {/* Review 2 */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between border-l-4 border-l-secondary">
              <div className="mb-4">
                <div className="flex items-center gap-1 text-primary-container mb-3">
                  <span className="material-symbols-outlined text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                  "Dizayn va texnik tomoni a'lo darajada. Mahsulotimiz foydalanuvchilar orasida juda iliq kutib olindi va konversiyasi 40% ga oshdi. Tavsiya qilaman!"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-surface-variant/30">
                <div className="w-10 h-10 rounded-full bg-secondary-container/50 border border-secondary/50 flex items-center justify-center font-bold text-secondary">
                  DR
                </div>
                <div>
                  <div className="font-headline-sm text-[15px] text-white">Dilnoza Rahimova</div>
                  <div className="font-body-sm text-[12px] text-secondary">Product Lead</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. BOG'LANISH (Contact Section) */}
        <section className="py-12 md:py-20 border-t border-surface-variant/30" id="contact">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-secondary-container/50 border border-secondary/20 text-primary text-label-mono font-label-mono uppercase tracking-wider inline-block mb-3">
              BOG'LANISH
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
              Loyiha bo'yicha gaplashamizmi?
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              G'oyangiz bormi? Xabar qoldiring, 15 daqiqa ichida javob beraman.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8">
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div>
                  <label className="block text-label-md font-label-md text-secondary mb-1.5">Ism</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/50 text-white placeholder-secondary/40 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors font-body-sm"
                    placeholder="Sardor"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-label-md font-label-md text-secondary mb-1.5">Telefon raqam</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/50 text-white placeholder-secondary/40 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors font-body-sm"
                    placeholder="50 992 66 28"
                    required
                    type="tel"
                  />
                </div>
                <div>
                  <label className="block text-label-md font-label-md text-secondary mb-1.5">Xabaringiz</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/50 text-white placeholder-secondary/40 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors font-body-sm resize-none"
                    placeholder="Loyihangiz haqida qisqacha yozing..."
                    required
                    rows="4"
                  ></textarea>
                </div>
                <button
                  className="w-full py-3.5 rounded-lg bg-primary-container text-white font-label-lg text-label-lg hover:bg-orange-600 active:scale-98 transition-all flex items-center justify-center gap-2 orange-glow-sm shadow-md"
                  type="submit"
                >
                  <span>Xabar yuborish</span>
                  <span className="material-symbols-outlined text-[18px]" data-icon="send">send</span>
                </button>
              </form>
            </div>
            {/* Direct Contact Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-5">
                <h3 className="font-headline-sm text-headline-sm text-white mb-2">Aloqa ma'lumotlari</h3>
                <a className="flex items-center gap-3.5 text-on-surface hover:text-primary transition-colors group" href="tel:509926628">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/20 flex items-center justify-center text-primary-container group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]" data-icon="call">call</span>
                  </div>
                  <div>
                    <div className="text-[12px] text-secondary font-label-mono">Telefon</div>
                    <div className="font-headline-sm text-[15px] font-semibold">50 992 66 28</div>
                  </div>
                </a>
                <a className="flex items-center gap-3.5 text-on-surface hover:text-primary transition-colors group" href="https://t.me/sardor" rel="noopener noreferrer" target="_blank">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/20 flex items-center justify-center text-primary-container group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]" data-icon="chat">chat</span>
                  </div>
                  <div>
                    <div className="text-[12px] text-secondary font-label-mono">Telegram</div>
                    <div className="font-headline-sm text-[15px] font-semibold">@sardor</div>
                  </div>
                </a>
                <a className="flex items-center gap-3.5 text-on-surface hover:text-primary transition-colors group" href="mailto:dumurzakov3@gmail.com">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/20 flex items-center justify-center text-primary-container group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]" data-icon="mail">mail</span>
                  </div>
                  <div>
                    <div className="text-[12px] text-secondary font-label-mono">Email</div>
                    <div className="font-headline-sm text-[15px] font-semibold">dumurzakov3@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3.5 text-on-surface group">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-primary/20 flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[20px]" data-icon="location_on">location_on</span>
                  </div>
                  <div>
                    <div className="text-[12px] text-secondary font-label-mono">Manzil</div>
                    <div className="font-headline-sm text-[15px] font-semibold">Guliston sh., O'zbekiston</div>
                  </div>
                </div>
              </div>
              {/* Social Icons / Links */}
              <div className="glass-card rounded-2xl p-4 flex items-center justify-around">
                <a className="p-2.5 rounded-lg bg-surface-container text-secondary hover:text-primary-container hover:bg-surface-container-high active:scale-95 transition-all" href="https://t.me/sardor" rel="noopener noreferrer" target="_blank" title="Telegram">
                  <span className="material-symbols-outlined text-[22px]" data-icon="send">send</span>
                </a>
                <a className="p-2.5 rounded-lg bg-surface-container text-secondary hover:text-primary-container hover:bg-surface-container-high active:scale-95 transition-all" href="#" title="Instagram">
                  <span className="material-symbols-outlined text-[22px]" data-icon="photo_camera">photo_camera</span>
                </a>
                <a className="p-2.5 rounded-lg bg-surface-container text-secondary hover:text-primary-container hover:bg-surface-container-high active:scale-95 transition-all" href="#" title="LinkedIn">
                  <span className="material-symbols-outlined text-[22px]" data-icon="badge">badge</span>
                </a>
                <a className="p-2.5 rounded-lg bg-surface-container text-secondary hover:text-primary-container hover:bg-surface-container-high active:scale-95 transition-all" href="https://github.com/dumurzakov3-cell/sardor-portfolio" rel="noopener noreferrer" target="_blank" title="GitHub">
                  <span className="material-symbols-outlined text-[22px]" data-icon="code">code</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="docked full-width bg-surface-container-lowest dark:bg-surface-container-lowest flat no shadows border-t border-surface-variant/30 mt-16">
        <div className="w-full py-12 px-6 flex flex-col items-center justify-center text-center gap-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-headline-md font-headline-md font-extrabold text-on-surface dark:text-on-surface">
              SARDOR<span className="text-primary-container">.</span>
            </span>
          </div>
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-label-md font-label-md">
            <a className="text-secondary/80 dark:text-secondary/80 hover:text-primary dark:hover:text-primary transition-colors duration-200" href="https://t.me/sardor" rel="noopener noreferrer" target="_blank">Telegram</a>
            <a className="text-secondary/80 dark:text-secondary/80 hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">Instagram</a>
            <a className="text-secondary/80 dark:text-secondary/80 hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">LinkedIn</a>
            <a className="text-secondary/80 dark:text-secondary/80 hover:text-primary dark:hover:text-primary transition-colors duration-200" href="https://github.com/dumurzakov3-cell/sardor-portfolio" rel="noopener noreferrer" target="_blank">GitHub</a>
          </div>
          {/* Scroll to Top Button */}
          <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container border border-surface-variant text-secondary hover:text-primary hover:border-primary/40 text-body-sm font-body-sm transition-all duration-200" href="#hero">
            <span className="material-symbols-outlined text-[16px]" data-icon="arrow_upward">arrow_upward</span>
            <span>Yuqoriga</span>
          </a>
          {/* Copyright */}
          <p className="text-body-sm font-body-sm text-secondary/60">
            © 2026 SARDOR. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAV BAR (Shared Component Anchor) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface-container/95 dark:bg-surface-container/95 backdrop-blur-lg shadow-2xl">
        <a className="flex flex-col items-center justify-center text-primary dark:text-primary font-bold py-1 active:scale-95 transition-transform duration-150" href="#hero">
          <span className="material-symbols-outlined text-[22px]" data-icon="home">home</span>
          <span className="text-[11px] font-label-md mt-0.5">Bosh sahifa</span>
        </a>
        <a className="flex flex-col items-center justify-center text-secondary/70 dark:text-secondary/70 py-1 hover:text-primary dark:hover:text-primary active:scale-95 transition-transform duration-150" href="#about">
          <span className="material-symbols-outlined text-[22px]" data-icon="person">person</span>
          <span className="text-[11px] font-label-md mt-0.5">Haqida</span>
        </a>
        <a className="flex flex-col items-center justify-center text-secondary/70 dark:text-secondary/70 py-1 hover:text-primary dark:hover:text-primary active:scale-95 transition-transform duration-150" href="#projects">
          <span className="material-symbols-outlined text-[22px]" data-icon="code">code</span>
          <span className="text-[11px] font-label-md mt-0.5">Loyihalar</span>
        </a>
        <a className="flex flex-col items-center justify-center text-secondary/70 dark:text-secondary/70 py-1 hover:text-primary dark:hover:text-primary active:scale-95 transition-transform duration-150" href="#contact">
          <span className="material-symbols-outlined text-[22px]" data-icon="mail">mail</span>
          <span className="text-[11px] font-label-md mt-0.5">Aloqa</span>
        </a>
      </nav>
    </>
  )
}
