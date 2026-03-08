import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      padding: '48px 24px 32px',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="section-container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--orange), #D44A1A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Shield size={15} color="#fff" />
            </div>
            <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--cream)', letterSpacing: '-0.01em' }}>
              Sentinel
            </span>
          </div>

          {/* Info */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.7 }}>
              Department of Software Engineering
            </p>
            <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.7 }}>
              National University of Computer and Emerging Sciences, Islamabad
            </p>
            <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 8 }}>
              © {new Date().getFullYear()} Sentinel. Final Year Project.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
