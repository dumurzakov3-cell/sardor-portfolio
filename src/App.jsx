import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'
import AmbientBg from './components/AmbientBg'

function App() {
  return (
    <div className="relative min-h-screen" style={{ background: '#061426', color: '#d6e3fe', fontFamily: 'Inter, sans-serif' }}>
      <AmbientBg />
      <Navbar />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}

export default App
