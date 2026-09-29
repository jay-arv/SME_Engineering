import { useState } from 'react'
import { submitToWeb3Forms } from '../utils/web3forms'

interface QuoteModalProps {
  open: boolean
  onClose: () => void
}

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    const result = await submitToWeb3Forms(formData)

    setSubmitting(false)
    if (result.success) {
      setSubmitted(true)
    } else {
      setErrorMsg(result.message || 'Submission failed. Please email us directly at admin@sm-eng.co.')
    }
  }

  const handleClose = () => {
    setSubmitted(false)
    setErrorMsg('')
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
            <input type="hidden" name="subject" value="New Quick Quote Request - Sri Maruthi Engineering" />
            <input type="hidden" name="from_name" value="Sri Maruthi Engineering Website" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="form-group">
              <label className="form-label">Company / Organization Name</label>
              <input className="form-input" name="company" type="text" placeholder="e.g. Seatrium, Keppel, or MCST Name" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Contact Person</label>
                <input className="form-input" name="name" type="text" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" name="email" type="email" placeholder="name@company.com" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Service Required</label>
              <select className="form-select form-input" name="service">
                <option value="Civil & Concrete Infrastructure">Civil &amp; Concrete Infrastructure</option>
                <option value="Marine Vessel Outfitting & Shipyard">Marine Vessel Outfitting &amp; Shipyard</option>
                <option value="Sprinkler & Fire Protection Systems">Sprinkler &amp; Fire Protection Systems</option>
                <option value="Waterproofing & Injection Grouting">Waterproofing &amp; Injection Grouting</option>
                <option value="Blasting & Protective Coatings">Blasting &amp; Protective Coatings</option>
                <option value="Turnaround Plant Maintenance">Turnaround Plant Maintenance</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Brief Scope Description</label>
              <textarea className="form-textarea form-input" name="message" placeholder="Provide site location, BOQ specifics, or key deadlines..." rows={3} />
            </div>

            {errorMsg && (
              <div style={{ background: '#fee2e2', color: '#b91c1c', border: '1px solid #f87171', padding: '10px 14px', borderRadius: 8, fontSize: 13, marginBottom: 16 }}>
                {errorMsg}
              </div>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
              {submitting ? 'Transmitting Enquiry...' : 'Transmit Tender Enquiry'}
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
