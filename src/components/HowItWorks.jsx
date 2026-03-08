import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scan, Cpu, Merge, BellRing } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Scan,
    title: 'Sense',
    description: 'Wi-Fi CSI sensors and cameras simultaneously monitor the environment — capturing both visible and invisible signals.',
    color: 'var(--tan)',
  },
  {
    step: '02',
    icon: Cpu,
    title: 'Process',
    description: 'Edge AI models analyze visual frames with YOLOv8 and CSI patterns with deep neural networks — all locally on-device.',
    color: 'var(--orange)',
  },
  {
    step: '03',
    icon: Merge,
    title: 'Fuse',
    description: "A multi-modal fusion engine correlates both data streams to build a comprehensive understanding of the scene's context.",
    color: '#4ADE80',
  },
  {
    step: '04',
    icon: BellRing,
    title: 'Alert',
    description: 'Real-time, context-aware alerts are sent to your device — only when genuine threats are detected, eliminating false alarms.',
    color: '#60A5FA',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ padding: '120px 24px', position: 'relative' }}>
      {/* Gradient divider at top */}
      <div className="section-divider" style={{ marginBottom: 120 }} />

      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <span className="pill-badge" style={{ marginBottom: 16 }}>
            How It Works
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginTop: 16,
            color: 'var(--cream)',
          }}>
            From Signal to <span className="gradient-text-orange">Safety</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 24,
          position: 'relative',
        }}>
          {steps.map((step, i) => {
            const StepIcon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                style={{
                  padding: 32,
                  position: 'relative',
                  textAlign: 'center',
                }}
              >
                {/* Step number */}
                <div style={{
                  fontSize: 64,
                  fontWeight: 900,
                  color: 'rgba(255,252,242,0.03)',
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  letterSpacing: '-0.06em',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>
                  {step.step}
                </div>

                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: `${step.color}15`,
                  border: `1px solid ${step.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '28px auto 20px',
                }}>
                  <StepIcon size={24} color={step.color} />
                </div>

                <h3 style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: 'var(--cream)',
                  marginBottom: 10,
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: 13,
                  color: 'var(--text-3)',
                  lineHeight: 1.7,
                }}>
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
