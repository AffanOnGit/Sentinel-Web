import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Wifi, Brain, ShieldCheck, Eye, Zap } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'Computer Vision',
    description: 'YOLOv8-powered real-time object detection and pose estimation for precise visual threat analysis.',
    color: 'var(--orange)',
    bgColor: 'rgba(235,94,40,0.1)',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi CSI Sensing',
    description: 'Sub-carrier level wireless analysis detects motion and presence even through walls, without any cameras.',
    color: 'var(--tan)',
    bgColor: 'rgba(204,197,137,0.1)',
  },
  {
    icon: Brain,
    title: 'Multi-Modal Fusion',
    description: 'Intelligent decision engine fuses visual and wireless data to eliminate false alarms and blind spots.',
    color: '#4ADE80',
    bgColor: 'rgba(74,222,128,0.1)',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-Preserving',
    description: 'All processing happens on-device at the edge. Your data never leaves your home network.',
    color: '#60A5FA',
    bgColor: 'rgba(96,165,250,0.1)',
  },
  {
    icon: Eye,
    title: 'Adaptive Learning',
    description: 'The system learns your environment\'s normal patterns and autonomously adapts over time.',
    color: '#C084FC',
    bgColor: 'rgba(192,132,252,0.1)',
  },
  {
    icon: Zap,
    title: 'Low-Cost & Scalable',
    description: 'Built on affordable hardware — ESP32 modules and standard webcams — designed for real homes.',
    color: '#FACC15',
    bgColor: 'rgba(250,204,21,0.1)',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="frost-card"
      style={{
        padding: 32,
        cursor: 'default',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      {/* Subtle glow on hover */}
      <div style={{
        position: 'absolute', top: -40, right: -40,
        width: 120, height: 120, borderRadius: '50%',
        background: feature.bgColor,
        filter: 'blur(40px)',
        opacity: 0.5,
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          width: 52,
          height: 52,
          borderRadius: 16,
          background: feature.bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
          <feature.icon size={24} color={feature.color} />
        </div>

        <h3 style={{
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--cream)',
          marginBottom: 10,
          letterSpacing: '-0.01em',
        }}>
          {feature.title}
        </h3>

        <p style={{
          fontSize: 14,
          color: 'var(--text-3)',
          lineHeight: 1.7,
        }}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" style={{ padding: '120px 24px', position: 'relative' }}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span className="pill-badge" style={{ marginBottom: 16 }}>
            Core Capabilities
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginTop: 16,
            color: 'var(--cream)',
          }}>
            Security That <span className="gradient-text-orange">Thinks</span>
          </h2>
          <p style={{
            fontSize: 16,
            color: 'var(--text-3)',
            maxWidth: 550,
            margin: '16px auto 0',
            lineHeight: 1.7,
          }}>
            Sentinel combines two sensing modalities into one cohesive system — delivering intelligence no single-sensor approach can match.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
