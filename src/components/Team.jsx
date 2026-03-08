import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: 'Affan Hameed',
    role: 'To Be Decided, sadly',
    bio: 'Nothing here....',
    gradient: 'linear-gradient(135deg, #EB5E28, #D44A1A)',
  },
  {
    name: 'Bilal Mehmood',
    role: 'Wi-Fi CSI & Embedded Systems',
    bio: 'Building the ESP32-based Wi-Fi CSI sensing infrastructure and signal processing.',
    gradient: 'linear-gradient(135deg, #CCC589, #A89E5C)',
  },
  {
    name: 'Shoaib Mehmood',
    role: 'Computer Vision & AI',
    bio: 'Developing the YOLOv8 visual processing pipeline and deep learning models.',
    gradient: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
  },
]

function MemberCard({ member, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="frost-card"
      style={{
        padding: 0,
        overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.3s ease',
      }}
    >
      {/* Top gradient bar */}
      <div style={{
        height: 4,
        background: member.gradient,
        width: '100%',
      }} />

      <div style={{ padding: '36px 28px 32px' }}>
        {/* Avatar */}
        <div style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: member.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          fontWeight: 700,
          color: '#fff',
          marginBottom: 24,
          boxShadow: `0 8px 30px ${member.gradient.includes('EB5E28') ? 'rgba(235,94,40,0.25)' : member.gradient.includes('CCC589') ? 'rgba(204,197,137,0.2)' : 'rgba(96,165,250,0.25)'}`,
        }}>
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>

        {/* Name & Role */}
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          color: 'var(--cream)',
          marginBottom: 4,
          letterSpacing: '-0.01em',
        }}>
          {member.name}
        </h3>
        <p style={{
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--orange)',
          marginBottom: 16,
        }}>
          {member.role}
        </p>

        {/* Bio */}
        <p style={{
          fontSize: 14,
          color: 'var(--text-3)',
          lineHeight: 1.7,
          marginBottom: 24,
        }}>
          {member.bio}
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 10 }}>
          {[Github, Linkedin].map((Icon, i) => (
            <div
              key={i}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'rgba(255,252,242,0.05)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,252,242,0.1)'; e.currentTarget.style.borderColor = 'var(--border-bright)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,252,242,0.05)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <Icon size={15} color="var(--text-3)" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ padding: '120px 24px', position: 'relative' }}>
      <div className="section-divider" style={{ marginBottom: 120 }} />

      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span className="pill-badge" style={{ marginBottom: 16 }}>
            The Team
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginTop: 16,
            color: 'var(--cream)',
          }}>
            Built by <span className="gradient-text-orange">Innovators</span>
          </h2>
          <p style={{
            fontSize: 16,
            color: 'var(--text-3)',
            maxWidth: 500,
            margin: '16px auto 0',
            lineHeight: 1.7,
          }}>
            Final Year Project by students of the Department of Software Engineering,
            FAST NUCES Islamabad.
          </p>
        </motion.div>

        {/* Team grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
          maxWidth: 960,
          margin: '0 auto',
        }}>
          {teamMembers.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Supervisor info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="ultra-frost"
          style={{
            maxWidth: 600,
            margin: '48px auto 0',
            padding: '24px 32px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 8 }}>Supervised by</p>
          <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--cream)' }}>
            Dr. Zeshan Khan
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 4 }}>
            Co-supervised by <span style={{ color: 'var(--cream)', fontWeight: 500 }}>Dr. Subhan Ullah</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
