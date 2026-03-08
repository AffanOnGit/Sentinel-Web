import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Team from './components/Team'
import Download from './components/Download'
import Footer from './components/Footer'

export default function App() {
  const featuresRef = useRef(null)
  const teamRef = useRef(null)
  const downloadRef = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--dark)' }}>
      <Navbar
        onFeaturesClick={() => scrollTo(featuresRef)}
        onTeamClick={() => scrollTo(teamRef)}
        onDownloadClick={() => scrollTo(downloadRef)}
      />

      <Hero onDownloadClick={() => scrollTo(downloadRef)} />

      <div ref={featuresRef}>
        <Features />
      </div>

      <HowItWorks />

      <div ref={teamRef}>
        <Team />
      </div>

      <div ref={downloadRef}>
        <Download />
      </div>

      <Footer />
    </div>
  )
}
