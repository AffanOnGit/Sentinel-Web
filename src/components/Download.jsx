import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download as DownloadIcon, Smartphone, Shield, ArrowUpRight } from 'lucide-react'

export default function Download() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section style={{ padding: '120px 24px', position: 'relative' }}>
      <div className="section-divider" style={{ marginBottom: 120 }} />

      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(40px, 6vw, 80px)',
            background: 'linear-gradient(135deg, var(--brown) 0%, var(--dark) 100%)',
            border: '1px solid var(--border-bright)',
            textAlign: 'center',
          }}
        >
          {/* Background glow effects */}
          <div style={{
            position: 'absolute', top: -100, right: -100,
            width: 350, height: 350, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(235,94,40,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: -80, left: -80,
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(204,197,137,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Phone mockup icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginBottom: 32 }}
            >
              <div
                className="glow-orange-strong"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 24,
                  background: 'linear-gradient(135deg, var(--orange), #D44A1A)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Smartphone size={36} color="#fff" />
              </div>
            </motion.div>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--cream)',
              marginBottom: 16,
            }}>
              Get the Sentinel App
            </h2>

            <p style={{
              fontSize: 16,
              color: 'var(--text-3)',
              maxWidth: 500,
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Download the Sentinel Mobile App to monitor your home in real-time.
              Available as an Android APK.
            </p>

            {/* Download button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="/Sentinel.apk"
                download="Sentinel.apk"
                className="btn-primary"
                style={{
                  padding: '18px 40px',
                  fontSize: 16,
                  fontWeight: 700,
                  gap: 12,
                }}
              >
                <DownloadIcon size={20} />
                Download APK
                <ArrowUpRight size={16} style={{ opacity: 0.6 }} />
              </a>
            </motion.div>

            {/* Info chips */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 24,
              marginTop: 32,
              flexWrap: 'wrap',
            }}>
              {[
                { icon: Shield, label: 'Verified Build' },
                { icon: Smartphone, label: 'Android 8+' },
              ].map((chip, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  color: 'var(--text-3)',
                  fontWeight: 500,
                }}>
                  <chip.icon size={14} color="var(--tan)" />
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
