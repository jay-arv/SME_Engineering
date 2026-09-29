import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuoteModal from '../components/QuoteModal'

const stats = [
  { eyebrow: 'Capabilities', icon: 'precision_manufacturing', value: '11', label: 'Core Capabilities', desc: 'Multidisciplinary industrial spectrum' },
  { eyebrow: 'Execution Record', icon: 'task_alt', value: '40+', label: 'Completed Projects', desc: 'Delivered on schedule across SG' },
  { eyebrow: 'Partnerships', icon: 'corporate_fare', value: '10+', label: 'Enterprise Clients', desc: 'Shipbuilders, MCSTs & MNCs' },
  { eyebrow: 'Registration', icon: 'verified_user', value: '2023', label: 'UEN: 202333665C', desc: 'Incorporated in Singapore', white: true },
]

const services = [
  { icon: 'foundation', title: 'Civil & Infrastructure Works', desc: 'Full-scope reinforced concrete foundations, drainage networks, underground culverts, excavation, pavement re-profiling, and structural subgrades.', meta: 'BCA Compliance • Ground Stability' },
  { icon: 'directions_boat', title: 'Marine & Shipyard Operations', desc: 'Drydock hull structural maintenance, hatch cover alignments, topside shelter fabrications, crane staging rigs, and specialized vessel outfitting.', meta: 'Seatrium Approved • Yard Certified' },
  { icon: 'water_damage', title: 'Waterproofing & Structural Sealing', desc: 'High-pressure polyurethane injection grouting, torch-applied bituminous membrane installation, exterior facade weather-proofing, and basement repairs.', meta: 'MCST Specialized • Leak Guarantees' },
  { icon: 'plumbing', title: 'Fire Protection & Piping Systems', desc: 'Industrial wet and dry sprinkler ring installations, high-pressure hydrant routing, depot pipeline refurbishments, and flow valve hydro-testing.', meta: 'SCDF Regs • Hydrostatic Verification' },
  { icon: 'format_paint', title: 'Abrasive Blasting & Protective Coatings', desc: 'Hydro-jetting, surface profile preparation (SA 2.5), high-build epoxy application, intumescent fireproofing, and aggressive corrosion inhibition coatings.', meta: 'ISO Protective Standards • High Durability' },
  { icon: 'home_repair_service', title: 'Plant Maintenance & Turnarounds', desc: 'Comprehensive mechanical overhauls, pump alignment, heat exchanger retubing, scheduled plant shutdowns, and safety-critical preventive maintenance.', meta: 'Rapid Response • Minimal Downtime' },
]

const projects = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpYWV3o2w7-olJr4AfIa7LHil_DYPSVcs1ALIqoQ_7jEDTeiAGvz3eio2FBB4t6kWFshFSoGKQyRUJaBbtdI7EIqD0kKjfwAxdoMN_UG6mGRlD_gqdA_vFTxUhz5njktWPLeAXfTXDA0yqr1Gj8ASRzZiNJMblzvDqwtnVb6DhTJrwRoa23AOAfseU1ay9wplgq_kiJtn2HxWGzDjxbBVPAtl-5wCO3DMeWytA5LLtY9SiddlEJxm6',
    badge: 'MARINE • TUAS YARD', client: 'Seatrium (SG) Pte Ltd',
    title: 'Industrial Roof Renewal & B4 Shelter Mounting',
    desc: 'Full-scale structural roof profiling, corroded purlin structural replacements, anti-condensation insulation, and engineering heavy shelter mounting over operative drydock staging bays.',
    date: 'Completed: 2024', status: 'Zero Lost-Time Incident',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYTMl2KNIpW36BxH8_kcnCuTcl6u-yg4jT3VkZB53R4UtGf41gZk8nO1yyAxTflcg6-wPGyzjY8wu64rrl-eraq3yQglvEGZILxIo0PoLee4GnbJpwY6ZGBc2gDoaclcQXvnaE4YU3MOkTjMpWYqn9Xrz2ZXuqD2QA-3Vg39GiRA0QHH0A4TCIqFUw_hdmhPMzQtGWee2sSojfEHEiknigyUJpYBmBTffnHYvKTxXuSFjM03IyT9A_',
    badge: 'CIVIL • MCST 1040', client: 'Dairy Farm Estate MCST 1040',
    title: 'Waterproofing, Pathways & Balustrade Replacement',
    desc: 'Comprehensive estate overhaul including subterranean leakage grouting, aesthetic washed pebble pedestrian pathways, and structural marine-grade aluminum balustrade retrofitting.',
    date: 'Estate Scope: 42 Blocks', status: '10-Year Warranty',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlnSqecldX_bR7Lk3XZAVwljlBleSvSJLxCKFuHjReJCQJw7r5VawPE47uX0Zh-LueExidvg_Xa7CxPuRu9VjWtXGNVq-_TTFtX6Nf7OuDAYi4xE6785jjjWJNbkEKsR2U-zqNkm9ws6o7XeJdwRA-jKu3mL6AgXPJajPYWGc5xzLptac4A-Ya8jogrAtkCNkal1C5WN7XZi4d1aQzxBTZsmwel_OODfpwC9vWziISwdmfEc7rWCfA',
    badge: 'DEPOT INFRASTRUCTURE • CHUBB', client: 'Chubb Singapore Pte Ltd',
    title: 'Tanah Merah Depot Sprinkler & Fire Piping',
    desc: 'Turnkey installation and pressure certification of high-caliber sprinkler mains, overhead distribution lines, and fire suppression bypass manifolds within the Tanah Merah Rail Depot facility.',
    date: 'Changi Rail Corridor', status: 'SCDF Approved',
  },
]

const clients = [
  { icon: 'directions_boat', name: 'Seatrium (SG)', type: 'Shipbuilding • Tuas' },
  { icon: 'precision_manufacturing', name: 'ST Engineering', type: 'Defense • Aerospace' },
  { icon: 'apartment', name: 'MCST 1040', type: 'Dairy Farm Estate' },
  { icon: 'domain', name: 'Savills', type: 'The Suites Central' },
  { icon: 'shield', name: 'Chubb Singapore', type: 'Fire & Security' },
  { icon: 'fire_extinguisher', name: 'Rico Engineering', type: 'Fire Protection' },
  { icon: 'architecture', name: 'Y&G Construction', type: 'Civil Contracting' },
  { icon: 'anchor', name: 'Admiral Marine', type: 'Offshore Supply' },
  { icon: 'construction', name: 'Fifth Rigging', type: 'Heavy Lifting Tech' },
  { icon: 'router', name: 'Elim Infotec', type: 'Industrial Networks' },
  { icon: 'carpenter', name: 'Sun Demolition Pte Ltd', type: 'Structural Deconstruction' },
]

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKHgwDAlHmE97PxnhSVvOGOumoplQ0s3M0GuI5a7idem1yCoMdwCwhrOGeVkJaOW80zJMwtqEkILn8yvC8xDKAs2v9nKMJKnI7qRgl4pNDU_SQ9vAxykkiGfE_OONE3ww2J4DKnJAuRMnx7iB3lzpXfGazoBEsJjTXUfK_pvRcsXeMOsMW8H_y4AtYP7FB4yZPASiReX99VAchBFTQ9PrcOU4G70hzMBjF-T7QQrEtzrGCQELFNscX" alt="Singapore Shipyard Twilight Industrial Infrastructure" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="pill">
              <span className="dot"></span>
              Singapore Accredited Engineering &amp; Maintenance
            </div>
            <h1 className="display-hero">
              Construction <span className="accent">•</span> Engineering <span className="accent">•</span> Maintenance
            </h1>
            <p className="body-lg hero-subtitle">
              Integrated civil, building services, marine and industrial works across Singapore's key
              shipyards, transit hubs, and commercial properties. Built on structural rigor and verified
              safety standards.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => setQuoteOpen(true)}>
                Request a Quote
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>
              <Link to="/projects" className="btn btn-ghost">Explore Projects</Link>
              <div className="hero-badge">
                <span className="material-symbols-outlined">verified</span>
                <span>BCA Registered &amp; BizSAFE Level 3 Standards</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bar">
          <div className="container hero-bar-inner">
            <span className="hero-bar-locations">JURONG BASIN • TUAS MARINE YARDS • CHANGI DEPOT</span>
            <div className="hero-bar-status">
              <span className="dot"></span>
              <span>Operations Active 24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-card-top">
                <span className="eyebrow">{s.eyebrow}</span>
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <span className={`stat-value ${s.white ? 'white' : ''}`}>{s.value}</span>
              <p className="stat-label">{s.label}</p>
              <p className="stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem' }}>
            <div style={{ maxWidth: 640 }}>
              <div className="section-eyebrow">
                <span className="dot"></span>
                <span className="eyebrow">Integrated Civil &amp; Engineering Matrix</span>
              </div>
              <h2 className="headline-lg text-primary">Specialized Engineering Services</h2>
              <p className="body-md text-on-surface-variant" style={{ marginTop: 8 }}>
                Engineered to satisfy demanding marine classification registers, BCA standards, and industrial
                process specifications with zero-defect execution.
              </p>
            </div>
            <Link to="/services" className="label-md" style={{ color: 'var(--secondary-container)', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
              View all 11 capabilities
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
          <div className="grid-3">
            {services.map((s, i) => (
              <div className="card card-accent service-card" key={i}>
                <div style={{ paddingLeft: 8 }}>
                  <div className="service-icon">
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                  <h3 className="title-md text-primary" style={{ fontWeight: 700 }}>{s.title}</h3>
                  <p className="body-sm">{s.desc}</p>
                  <div className="service-meta">{s.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section bg-surface-low">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem' }}>
            <div style={{ maxWidth: 640 }}>
              <div className="section-eyebrow">
                <span className="dot"></span>
                <span className="eyebrow">Proven Operational Track Record</span>
              </div>
              <h2 className="headline-lg text-primary">Featured Case Studies</h2>
              <p className="body-md text-on-surface-variant" style={{ marginTop: 8 }}>
                Critical infrastructure deployments executed with precision in complex maritime yards,
                active transit rail networks, and residential estates.
              </p>
            </div>
            <Link to="/projects" className="btn btn-secondary">
              Explore All 40+ Projects
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
            </Link>
          </div>
          <div className="grid-3" style={{ gap: '2rem' }}>
            {projects.map((p, i) => (
              <div className="card project-card" key={i}>
                <div className="project-img">
                  <img src={p.img} alt={p.title} />
                  <div className="badge" style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(0,17,38,0.8)', backdropFilter: 'blur(12px)', color: 'var(--surface-bright)', fontSize: 11, letterSpacing: '0.08em' }}>
                    {p.badge}
                  </div>
                </div>
                <div className="project-body">
                  <div>
                    <span className="project-client">{p.client}</span>
                    <h3 className="title-md text-primary" style={{ fontWeight: 700, marginTop: 4 }}>{p.title}</h3>
                    <p className="body-sm" style={{ marginTop: 8 }}>{p.desc}</p>
                  </div>
                  <div className="project-footer">
                    <span className="date">{p.date}</span>
                    <span className="status">{p.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / CORPORATE */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-eyebrow">
                <span className="dot"></span>
                <span className="eyebrow">Structural Engineering Discipline</span>
              </div>
              <h2 className="headline-lg text-primary">Precision Engineering Grounded in Safety &amp; Certified Execution</h2>
              <p className="body-md text-on-surface-variant" style={{ marginTop: 12 }}>
                Founded and anchored in Singapore, Sri Maruthi Engineering operates across industrial fabrication
                yards, major commercial developments, and sensitive transit facilities. Our multi-trade capability
                allows main contractors, facility managers, and vessel owners to execute complex projects through a
                single point of accountability.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon"><span className="material-symbols-outlined">security</span></div>
                  <div>
                    <h4>Rigorous Safety &amp; Risk Mitigation</h4>
                    <p>Strict adherence to MOM guidelines, WSH risk assessments, hot-work permits, and certified scaffold supervisory protocols across hazardous worksites.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><span className="material-symbols-outlined">hub</span></div>
                  <div>
                    <h4>Direct Resource Management</h4>
                    <p>In-house structural welders, pipe fitters, civil masons, and blasting crews ensuring rapid mobilization to Tuas, Jurong Island, or coastal yards.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><span className="material-symbols-outlined">verified</span></div>
                  <div>
                    <h4>Government &amp; Marine Tier Compliance</h4>
                    <p>Registered Singapore entity (UEN: 202333665C) with BCA contractors grading and qualified third-party non-destructive testing (NDT) capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-image-card">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7lR5ZoMRjykSVptBnQBuVfAWUMLjHuBMoXKngCVkd7DI8hZTcFLe-QuYLb9GU4eKmrV96XwktNp_cGtfLBF-8ogYG_A_pXJkaBOM2gZqBj8Pwq2Q8M_LYdQkX-z6haAM5vYGtn73FaCNOddjJCXHlHyrekP--7Top3NQ0gj4EvrDdXr0ZyV3OYX9ip09x6WpyghRRJYKh3qyyJlpA9g4_2Mn2kY4-cV3l7I2nEbT2IKwl54uiku10" alt="Singapore industrial civil engineering yard" />
                <div className="about-image-overlay" />
                <div className="about-image-text">
                  <span className="eyebrow">Operational Base</span>
                  <h3>Pioneer Junction Staging Yard • West Singapore</h3>
                  <p>Immediate proximity to Jurong Industrial Estate, Tuas Mega Port, and maritime shipping hubs.</p>
                </div>
              </div>
              <div className="spec-table">
                <h4>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--secondary-container)', display: 'inline-block' }}></span>
                  Operational Capacities &amp; Certifications
                </h4>
                <div className="spec-row"><span className="key">Entity Registration</span><span className="value">UEN 202333665C</span></div>
                <div className="spec-row"><span className="key">Head Office Location</span><span className="value">#04-13 Pioneer Junction, SG</span></div>
                <div className="spec-row"><span className="key">Service Coverage</span><span className="value">Islandwide (Commercial, Industrial, Marine)</span></div>
                <div className="spec-row"><span className="key">Emergency Response</span><span className="value highlight">Under 3 Hours Onsite Deployment</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section bg-surface-high">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot"></span>
            <span className="eyebrow">Trusted by Singapore's Leading Enterprises</span>
          </div>
          <h2 className="headline-md text-primary" style={{ marginBottom: 8 }}>Our Enterprise &amp; Institutional Clients</h2>
          <p className="body-md text-on-surface-variant" style={{ maxWidth: 600, margin: '0 auto 3rem' }}>
            Sri Maruthi delivers mission-critical maintenance and engineering contracting for public
            utilities, global shipyards, property trusts, and premier main contractors.
          </p>
          <div className="grid-6">
            {clients.map((c, i) => (
              <div className="client-card" key={i}>
                <span className="material-symbols-outlined">{c.icon}</span>
                <span className="name">{c.name}</span>
                <span className="type">{c.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-bg">
          <span className="material-symbols-outlined">handyman</span>
        </div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <div className="pill" style={{ background: 'rgba(103,36,0,0.2)', color: 'var(--surface-bright)' }}>
                Fast Tender Response • Detailed BOQ
              </div>
              <h2 className="headline-lg" style={{ color: 'var(--surface-bright)' }}>
                Need a reliable contractor? Get a free quotation.
              </h2>
              <p className="body-md" style={{ color: 'rgba(255,255,255,0.9)', marginTop: 8 }}>
                Contact our estimating team for civil projects, structural welding, shipyard retrofits,
                or facilities maintenance anywhere across Singapore.
              </p>
              <div className="cta-contacts">
                <a href="tel:+6567912288">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>phone_in_talk</span>
                  +65 6791 2288
                </a>
                <a href="mailto:admin@sm-eng.co">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>mark_email_read</span>
                  admin@sm-eng.co
                </a>
              </div>
            </div>
            <div className="cta-actions">
              <button className="btn btn-secondary" onClick={() => setQuoteOpen(true)}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>request_quote</span>
                Submit Tender Spec
              </button>
              <Link to="/contact" className="btn btn-ghost">Contact Engineers</Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  )
}
