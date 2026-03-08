import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Menu, X } from 'lucide-react'

export default function Navbar({ onFeaturesClick, onTeamClick, onDownloadClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Features', action: onFeaturesClick },
    { label: 'Team', action: onTeamClick },
    { label: 'Download', action: onDownloadClick },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 24px',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '12px auto',
          padding: '14px 28px',
          borderRadius: 'var(--radius-full)',
          background: scrolled ? 'rgba(37, 36, 34, 0.85)' : 'rgba(37, 36, 34, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${scrolled ? 'rgba(255,252,242,0.1)' : 'rgba(255,252,242,0.05)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--orange), #D44A1A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(235,94,40,0.3)',
            }}
          >
            <Shield size={18} color="#fff" />
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--cream)' }}>
            Sentinel
          </span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          className="desktop-nav"
        >
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => link.action()}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                background: 'transparent',
                color: 'var(--text-2)',
                fontSize: 14,
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.target.style.color = 'var(--cream)'; e.target.style.background = 'rgba(255,252,242,0.05)' }}
              onMouseLeave={e => { e.target.style.color = 'var(--text-2)'; e.target.style.background = 'transparent' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={onDownloadClick}
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: 13, marginLeft: 8 }}
          >
            Get the App
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--cream)',
            cursor: 'pointer',
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            maxWidth: 1200,
            margin: '8px auto 0',
            padding: 20,
            borderRadius: 'var(--radius)',
            background: 'rgba(37, 36, 34, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,252,242,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
          className="mobile-menu"
        >
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => { link.action(); setMobileOpen(false) }}
              style={{
                padding: '14px 20px',
                borderRadius: 14,
                background: 'rgba(255,252,242,0.04)',
                color: 'var(--cream)',
                fontSize: 15,
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font)',
                textAlign: 'left',
              }}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
