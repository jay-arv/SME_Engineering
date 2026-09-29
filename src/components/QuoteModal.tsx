import { useState } from 'react'

interface QuoteModalProps {
  open: boolean
  onClose: () => void
}

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className={`modal-overlay ${open ? 'open' : ''}`} onClick={handleClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>close</span>
        </button>

        <div style={{ marginBottom: 24 }}>
          <span className="eyebrow" style={{ color: 'var(--secondary)' }}>Quick Quote • Tender Enquiry</span>
          <h3 className="headline-sm" style={{ color: 'var(--primary)', marginTop: 4 }}>Request Industrial Quotation</h3>
          <p className="body-sm text-on-surface-variant" style={{ marginTop: 4 }}>
            Fill in your basic project outline and our technical team will respond within 24 hours.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Company / Organization Name</label>
              <input className="form-input" type="text" placeholder="e.g. Seatrium, Keppel, or MCST Name" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Contact Person</label>
                <input className="form-input" type="text" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" placeholder="name@company.com" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Service Required</label>
              <select className="form-select form-input">
                <option value="civil">Civil &amp; Concrete Infrastructure</option>
                <option value="marine">Marine Vessel Outfitting &amp; Shipyard</option>
                <option value="fire">Sprinkler &amp; Fire Protection Systems</option>
                <option value="waterproofing">Waterproofing &amp; Injection Grouting</option>
                <option value="coatings">Blasting &amp; Protective Coatings</option>
                <option value="other">Turnaround Plant Maintenance</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Brief Scope Description</label>
              <textarea className="form-textarea form-input" placeholder="Provide site location, BOQ specifics, or key deadlines..." rows={3} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Transmit Tender Enquiry
            </button>
          </form>
        ) : (
          <div className="success-msg">
            <div className="success-icon">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <h4 className="headline-sm" style={{ color: 'var(--primary)' }}>Request Received</h4>
            <p className="body-sm text-on-surface-variant" style={{ marginTop: 8 }}>
              Our engineering estimator will examine your request and follow up directly via email.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
