export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <section style={{ position: 'relative', height: 300, overflow: 'hidden', background: 'var(--primary-container)' }}>
        <div style={{ width: '100%', height: '100%', backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBc_rgfFZpUy3zNiTpZmDa-HLP4G05nR5crxdoD3ou1HYUK5b86fqJ160bWAS88DK2UTGwsmt-5p2318nk-3fWE7byyDYh3GSGWMLiMmpFO8yFuoZ93MLPp6OkXoe0lnfCF_I2rZJUSmjPaOuU6gr6u4QEzIJq2iqdmLQtdfNJsrOOrQtVjCu3ldp4n6Zu7qcvfei2veXNh3JjYeYei7ydL1daHdT5aQxyUHQHeW5iocONB-OYDviC5')`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary), rgba(0,17,38,0.5), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--secondary-container)', animation: 'pulse 2s infinite', display: 'inline-block' }}></span>
              <span className="eyebrow" style={{ color: 'var(--secondary-container)' }}>ABOUT SRI MARUTHI ENGINEERING</span>
            </div>
            <h1 className="headline-lg" style={{ color: 'var(--on-primary)' }}>Engineering Excellence &amp; Operational Rigor</h1>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="section">
        <div className="container">
          <p className="body-lg text-on-surface-variant" style={{ maxWidth: 800, marginBottom: '2.5rem' }}>
            Singapore-registered multidisciplinary engineering contractor delivering heavy-spec infrastructure,
            marine shipyard maintenance, and structural architectural solutions across Tuas, Jurong, and maritime hubs since 2023.
          </p>

          {/* Quick Stats */}
          <div className="grid-2" style={{ marginBottom: '3rem' }}>
            <div style={{ background: 'var(--primary-container)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--secondary-container)' }}>verified</span>
                <span className="label-sm" style={{ color: 'var(--on-primary-container)' }}>ACRA Verified</span>
              </div>
              <p className="headline-sm" style={{ color: 'var(--on-primary)' }}>UEN 202333665C</p>
              <p className="body-sm" style={{ color: 'var(--on-primary-container)' }}>Pioneer Junction, SG</p>
            </div>
            <div style={{ background: 'var(--primary-container)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--secondary-container)' }}>groups</span>
                <span className="label-sm" style={{ color: 'var(--on-primary-container)' }}>Field Readiness</span>
              </div>
              <p className="headline-sm" style={{ color: 'var(--secondary-container)' }}>48+ Certified</p>
              <p className="body-sm" style={{ color: 'var(--on-primary-container)' }}>Engineers &amp; Technicians</p>
            </div>
          </div>

          {/* Corporate Registry */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
              <div style={{ width: 6, height: 16, background: 'var(--secondary-container)', borderRadius: 2 }}></div>
              <h2 className="headline-sm">Corporate Registry</h2>
              <span className="badge badge-surface" style={{ marginLeft: 'auto' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}></span>
                ACTIVE
              </span>
            </div>
            <div style={{ background: 'var(--surface-container-lowest)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ marginBottom: '1rem' }}>
                <span className="label-sm text-on-surface-variant">Registered Legal Entity</span>
                <p className="title-md" style={{ fontWeight: 700 }}>SRI MARUTHI ENGINEERING PTE. LTD.</p>
              </div>
              <div className="grid-2" style={{ gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                <div style={{ background: 'var(--surface-container-low)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-md)' }}>
                  <span className="label-sm text-on-surface-variant" style={{ display: 'block' }}>Company Structure</span>
                  <span className="body-sm" style={{ fontWeight: 600 }}>Exempt Private Limited</span>
                </div>
                <div style={{ background: 'var(--surface-container-low)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-md)' }}>
                  <span className="label-sm text-on-surface-variant" style={{ display: 'block' }}>Incorporation Date</span>
                  <span className="body-sm" style={{ fontWeight: 600 }}>20 August 2023</span>
                </div>
              </div>
              <div className="grid-2" style={{ gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                <div style={{ background: 'var(--surface-container-low)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-md)' }}>
                  <span className="label-sm text-on-surface-variant" style={{ display: 'block' }}>Paid-Up Capital</span>
                  <span className="body-sm" style={{ fontWeight: 600, color: 'var(--secondary-container)' }}>S$100,000 (Fully Paid)</span>
                </div>
                <div style={{ background: 'var(--surface-container-low)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-md)' }}>
                  <span className="label-sm text-on-surface-variant" style={{ display: 'block' }}>Governance Status</span>
                  <span className="body-sm" style={{ fontWeight: 600 }}>Live / Clean Filing</span>
                </div>
              </div>
              <div style={{ background: 'var(--surface-container-low)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--on-surface-variant)', marginTop: 2 }}>location_on</span>
                <div>
                  <span className="label-sm text-on-surface-variant" style={{ display: 'block' }}>Registered Head Office</span>
                  <p className="body-sm">3 Soon Lee Street, #04-13 Pioneer Junction, Singapore 627606</p>
                </div>
              </div>
            </div>
          </div>

          {/* SSIC Scopes */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
              <div style={{ width: 6, height: 16, background: 'var(--secondary-container)', borderRadius: 2 }}></div>
              <h2 className="headline-sm">Regulated SSIC Scopes</h2>
            </div>
            <div className="grid-2" style={{ gap: 'var(--space-md)' }}>
              <div style={{ background: 'var(--surface-container-lowest)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="badge badge-secondary" style={{ marginBottom: 8 }}>PRIMARY • SSIC 43301</div>
                <h3 className="title-md" style={{ marginBottom: 4 }}>Renovation Contractors</h3>
                <p className="body-sm text-on-surface-variant">
                  Turnkey architectural additions &amp; alterations (A&amp;A), high-spec industrial protective coatings,
                  structural waterproofing, and commercial facility retrofitting across Singapore.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 12 }}>
                  <span className="badge badge-surface">Structural Sealing</span>
                  <span className="badge badge-surface">Industrial Epoxy</span>
                  <span className="badge badge-surface">BCA Compliance</span>
                </div>
              </div>
              <div style={{ background: 'var(--surface-container-lowest)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="badge badge-primary" style={{ marginBottom: 8 }}>SECONDARY • SSIC 30111</div>
                <h3 className="title-md" style={{ marginBottom: 4 }}>Building &amp; Repairing Ships &amp; Tankers</h3>
                <p className="body-sm text-on-surface-variant">
                  Drydock maintenance, topside welding, marine high-pressure piping installation, hydro-blasting,
                  and rapid shipyard mobilization at Tuas and Jurong Port facilities.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 12 }}>
                  <span className="badge badge-surface">Drydock Repairs</span>
                  <span className="badge badge-surface">Marine Piping</span>
                  <span className="badge badge-surface">AWS 6G Welding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
