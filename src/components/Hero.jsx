import { motion } from 'framer-motion'
import { Shield, ChevronDown } from 'lucide-react'

export default function Hero({ onDownloadClick }) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}
    >
      {/* Animated background orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '10%', right: '15%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235,94,40,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orb-drift-1 12s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', left: '10%',
          width: 350, height: 350, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(204,197,137,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orb-drift-2 15s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235,94,40,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb-drift-3 18s ease-in-out infinite',
        }} />
      </div>

      {/* Grid lines decoration */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,252,242,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,252,242,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800 }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: 32 }}
        >
          <span className="pill-badge">
            <Shield size={14} />
            Hybrid AI Security System
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: 'clamp(42px, 7vw, 80px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            marginBottom: 24,
          }}
        >
          <span style={{ color: 'var(--cream)' }}>The Future of</span>
          <br />
          <span className="gradient-text-orange">Smart Security</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'var(--text-3)',
            lineHeight: 1.7,
            maxWidth: 600,
            margin: '0 auto 48px',
            fontWeight: 400,
          }}
        >
          Sentinel fuses Wi-Fi Channel State Information sensing with edge computer vision
          to deliver intelligent, privacy-preserving surveillance that sees beyond what cameras alone ever could.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button className="btn-primary" onClick={onDownloadClick}>
            Download the App
            <ChevronDown size={16} style={{ marginLeft: 2 }} />
          </button>
          <a href="#features" className="btn-secondary">
            Explore Features
          </a>
        </motion.div>

        {/* Floating shield icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="animate-float"
          style={{ marginTop: 80 }}
        >
          <div
            className="glow-orange"
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--orange), #D44A1A)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Shield size={36} color="#fff" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} color="var(--text-3)" />
        </motion.div>
      </motion.div>
    </section>
  )
}
