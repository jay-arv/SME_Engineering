import { useState } from 'react'

const filters = ['All Scopes', 'Marine & Shipyard', 'Waterproofing & Leak Repair', 'Pathway & Pebble Works', 'Roofing', 'Fire Protection', 'Additions & Alterations']

const allProjects = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm650bkO5XGDvH5yz-n6b-sXpkygYu4sn_oBOQwfxH5GKLVBF3acyI8WIFTa6Wu5ZoMB42BSdBTKiPC1pWTSDIuB7a0REufUatH-vDEkfZlXJq_eq7pAhiVK_10HpVCyhbgJcsC5bvCmBpdpwBz4Mo1ywpR2VsX6aIMCfxJgR1qihTcpCwjE2CVQiAxYiY1asr_pFH_8TGnbYlXZMNWJyvaoYAxtRWRfqtS1afqHflJbc4N6Hp03-U',
    category: 'Marine & Shipyard', client: 'Seatrium (SG) Pte Ltd', clientType: 'Industrial Marine Client',
    tags: [{ label: 'Marine & Shipyard', accent: true }, { label: 'Roofing Overhaul' }, { label: 'Singapore' }],
    scopes: ['Roof sheets renewal with heavy-gauge corrugated sheeting', 'Protective waterproof paint membrane coating at roof sheets', 'Mount protective modular shelters at operational Area B4', 'Supply & install high-spec structural ducting above roof level'],
    safety: 'Hot-Work Permitted & Safe Execution', ref: 'SM-2023-STR',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVBIivIFVhcPrqGxzPcpJJ-8tmbPCx6TZpHuFAFbXXkN3gmwwLiZarDT8I7DqfqZhO1aget0oiJ93vCMxKQ4xw-mcwqNROJEHonNzrFrW2vv0sUOTCIXpJ4PYd5TdjNOrIcO__K-mfhMMDsuv_xt0TXxdUEcl9CCbf6f_yyQl_eStbyxtMOajJsMOhUSXUqBO7IdgP6DvxhzdJknpMB71XRZcgMAuYPLGZ70VUfZbiuINqnyx7O9DG',
    category: 'Waterproofing & Leak Repair', client: 'Dairy Farm Estate MCST 1040', clientType: 'Residential Estate Management',
    tags: [{ label: 'Waterproofing', accent: true }, { label: 'Pathway & Pebble', accent: true }, { label: 'Estate Maintenance' }],
    scopes: ['Water leakage repair works across multiple occupied residential blocks', 'Estate pathway reconstruction with decorative exposed pebble works', 'Fabricate and replace aged perimeter safety balustrades', 'Comprehensive multi-pitch roof repair & architectural tile restoration', 'Supply & custom fit architectural Nyatoh solid plywood doors'],
    safety: 'Multi-Block Turnkey Handover', ref: 'SM-2023-DFE',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlnSqecldX_bR7Lk3XZAVwljlBleSvSJLxCKFuHjReJCQJw7r5VawPE47uX0Zh-LueExidvg_Xa7CxPuRu9VjWtXGNVq-_TTFtX6Nf7OuDAYi4xE6785jjjWJNbkEKsR2U-zqNkm9ws6o7XeJdwRA-jKu3mL6AgXPJajPYWGc5xzLptac4A-Ya8jogrAtkCNkal1C5WN7XZi4d1aQzxBTZsmwel_OODfpwC9vWziISwdmfEc7rWCfA',
    category: 'Fire Protection', client: 'Chubb Singapore Pte Ltd', clientType: 'Fire & Security Systems',
    tags: [{ label: 'Fire Protection', accent: true }, { label: 'Depot Infrastructure' }, { label: 'Rail Corridor' }],
    scopes: ['High-caliber sprinkler main supply & distribution routing', 'Overhead pipe installation across depot transit bays', 'Fire suppression bypass manifold & alarm valve fitment', 'Full hydrostatic pressure certification & SCDF sign-off'],
    safety: 'SCDF Approved & Certified', ref: 'SM-2024-CHB',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7lR5ZoMRjykSVptBnQBuVfAWUMLjHuBMoXKngCVkd7DI8hZTcFLe-QuYLb9GU4eKmrV96XwktNp_cGtfLBF-8ogYG_A_pXJkaBOM2gZqBj8Pwq2Q8M_LYdQkX-z6haAM5vYGtn73FaCNOddjJCXHlHyrekP--7Top3NQ0gj4EvrDdXr0ZyV3OYX9ip09x6WpyghRRJYKh3qyyJlpA9g4_2Mn2kY4-cV3l7I2nEbT2IKwl54uiku10',
    category: 'Additions & Alterations', client: 'Savills Property Management', clientType: 'Commercial Property',
    tags: [{ label: 'A&A Works', accent: true }, { label: 'Commercial' }, { label: 'Fit-Out' }],
    scopes: ['Interior architectural additions & alterations', 'High-spec commercial floor tiling & wall finishes', 'False ceiling installation with integrated MEP coordination', 'Structural partition walls & glazing assemblies'],
    safety: 'BCA Approved A&A Scope', ref: 'SM-2024-SAV',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Scopes')
  const [search, setSearch] = useState('')

  const filtered = allProjects.filter(p => {
    const matchFilter = activeFilter === 'All Scopes' || p.category === activeFilter
    const matchSearch = !search || p.client.toLowerCase().includes(search.toLowerCase()) || p.scopes.some(s => s.toLowerCase().includes(search.toLowerCase()))
    return matchFilter && matchSearch
  })

  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span className="eyebrow">OUR TRACK RECORD</span>
          </div>
          <h1 className="headline-lg text-primary">Completed Engineering Projects</h1>
          <div style={{ width: 56, height: 6, borderRadius: 'var(--radius-full)', background: 'var(--secondary-container)', marginTop: 8 }}></div>
          <p className="body-md text-on-surface-variant" style={{ marginTop: 12, maxWidth: 640 }}>
            Delivering safety-certified engineering across marine shipyards, commercial estates, and
            transport facilities in Singapore.
          </p>
        </div>

        {/* Metric strip */}
        <div className="metric-strip">
          <div className="metric-item">
            <span className="metric-value">100%</span>
            <span className="metric-label">BCA &amp; BizSAFE Compliant</span>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-value white">45+</span>
            <span className="metric-label">Industrial Scopes</span>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-value">Zero</span>
            <span className="metric-label">Safety Incidents</span>
          </div>
        </div>

        {/* Search */}
        <div className="projects-search">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="Search by client or scope..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Filter pills */}
        <div className="services-filter">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-pill ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {filtered.map((p, i) => (
            <div className="project-full-card" key={i}>
              <div className="project-full-img">
                <img src={p.img} alt={p.client} />
                <div className="gradient" />
                <div className="tag">
                  <span className="badge" style={{ background: 'rgba(0,17,38,0.8)', backdropFilter: 'blur(8px)', color: 'var(--on-primary)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--secondary-container)', display: 'inline-block' }}></span>
                    Completed
                  </span>
                </div>
                <div className="client-info">
                  <span className="eyebrow" style={{ color: 'var(--secondary-container)' }}>{p.clientType}</span>
                  <h3>{p.client}</h3>
                </div>
              </div>
              <div className="project-full-body">
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span key={t.label} className={`badge ${t.accent ? 'badge-secondary' : 'badge-surface'}`}>
                      {t.label}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="label-sm text-on-surface-variant" style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>Delivered Engineering Scope</span>
                  <div className="project-scope-list">
                    {p.scopes.map(s => (
                      <div className="scope-item" key={s}>
                        <span className="material-symbols-outlined icon-filled">check_circle</span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project-full-footer">
                  <div className="safety">
                    <span className="material-symbols-outlined">verified_user</span>
                    <span>{p.safety}</span>
                  </div>
                  <span className="ref">Ref: {p.ref}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 48, marginBottom: 16, display: 'block', opacity: 0.3 }}>search_off</span>
            <p className="body-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
