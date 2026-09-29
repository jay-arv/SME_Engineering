import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span className="eyebrow">GET IN TOUCH</span>
          </div>
          <h1 className="headline-lg text-primary">Contact &amp; Tender Enquiries</h1>
          <p className="body-md text-on-surface-variant" style={{ marginTop: 8, maxWidth: 640 }}>
            Reach out to our technical estimating team for civil projects, structural welding,
            shipyard retrofits, or facilities maintenance across Singapore.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-wrapper">
            <div style={{ marginBottom: 24 }}>
              <span className="eyebrow" style={{ color: 'var(--secondary)' }}>Tender Enquiry Form</span>
              <h2 className="headline-sm" style={{ marginTop: 4 }}>Submit Your Project Details</h2>
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
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Service Required</label>
                    <div className="form-select-wrap">
                      <select className="form-select form-input">
                        <option value="civil">Civil &amp; Concrete Infrastructure</option>
                        <option value="marine">Marine Vessel Outfitting &amp; Shipyard</option>
                        <option value="fire">Sprinkler &amp; Fire Protection Systems</option>
                        <option value="waterproofing">Waterproofing &amp; Injection Grouting</option>
                        <option value="coatings">Blasting &amp; Protective Coatings</option>
                        <option value="other">Turnaround Plant Maintenance</option>
                      </select>
                      <span className="material-symbols-outlined form-select-icon" aria-hidden="true">expand_more</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Project Location</label>
                    <input className="form-input" type="text" placeholder="e.g. Tuas Yard, Jurong Island, Changi Depot" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Brief Scope Description</label>
                  <textarea className="form-textarea form-input" placeholder="Provide site details, BOQ specifics, expected timeline, or key deliverables..." rows={4} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
                  Submit Tender Enquiry
                </button>
              </form>
            ) : (
              <div className="success-msg">
                <div className="success-icon">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <h4 className="headline-sm text-primary">Enquiry Received Successfully</h4>
                <p className="body-sm text-on-surface-variant" style={{ marginTop: 8, maxWidth: 380, marginLeft: 'auto', marginRight: 'auto' }}>
                  Our engineering estimator will examine your request and follow up directly via email within 24 hours.
                </p>
                <button className="btn btn-outline" style={{ marginTop: 20 }} onClick={() => setSubmitted(false)}>
                  Submit Another Enquiry
                </button>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info-card">
            <h2 className="headline-sm" style={{ color: 'var(--surface-bright)', marginBottom: 'var(--space-xl)' }}>Office &amp; Yard Details</h2>

            <div className="contact-info-item">
              <span className="material-symbols-outlined">location_on</span>
              <div>
                <span className="info-label">Registered Head Office</span>
                <span className="info-value">3 Soon Lee Street, #04-13<br />Pioneer Junction, Singapore 627606</span>
              </div>
            </div>


            <div className="contact-info-item">
              <span className="material-symbols-outlined">mail</span>
              <div>
                <span className="info-label">Email</span>
                <a href="mailto:admin@sm-eng.co" className="info-value" style={{ display: 'block', color: 'var(--surface-bright)' }}>admin@sm-eng.co</a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="material-symbols-outlined">schedule</span>
              <div>
                <span className="info-label">Operating Hours</span>
                <span className="info-value">Mon - Sat: 08:00 - 18:00 SGT</span>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="material-symbols-outlined">badge</span>
              <div>
                <span className="info-label">UEN Registration</span>
                <span className="info-value">202333665C</span>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }}></span>
                <span className="label-sm" style={{ color: 'var(--surface-bright)' }}>Emergency Response Available</span>
              </div>
              <p className="body-sm" style={{ color: 'var(--on-primary-container)' }}>
                Under 3 hours onsite deployment for critical shipyard, industrial plant,
                and infrastructure emergencies across Singapore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
