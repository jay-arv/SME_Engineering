import { useState } from 'react'

const categories = [
  { key: 'all', label: 'All (11)', icon: 'view_list' },
  { key: 'civil', label: 'Civil & Road', icon: 'road' },
  { key: 'finishing', label: 'Fit-Out', icon: 'format_paint' },
  { key: 'mep', label: 'MEP & Safety', icon: 'bolt' },
  { key: 'steel', label: 'Heavy Steel', icon: 'precision_manufacturing' },
]

const allServices = [
  { num: '01', cat: 'civil', icon: 'add_road', title: 'Civil works, road works & pathway', desc: 'Pavement repair, asphalt laying, pedestrian walkways, and curbs executed under strict Land Transport Authority standards.', tags: ['Pavement repair', 'Asphalt laying', 'Pedestrian curbs'] },
  { num: '02', cat: 'finishing', icon: 'water_damage', title: 'Painting & waterproof works', desc: 'Exterior/interior coatings, membrane waterproofing, leak sealing, and heavy industrial moisture ingress barriers.', tags: ['Membrane coatings', 'Leak sealing', 'Façade paint'] },
  { num: '03', cat: 'finishing', icon: 'grid_view', title: 'Plastering & tiling works', desc: 'High-finish masonry, wall plaster, industrial floor tiling, and chemical-resistant commercial ceramic placements.', tags: ['High-finish masonry', 'Wall plaster', 'Heavy-duty tiling'] },
  { num: '04', cat: 'finishing', icon: 'dashboard', title: 'False ceiling works', desc: 'Acoustic ceiling panels, plasterboard suspension systems, and recessed industrial fixture framing.', tags: ['Acoustic panels', 'Plasterboard suspension', 'Fixture cut-outs'] },
  { num: '05', cat: 'mep', icon: 'electrical_services', title: 'Electrical & plumbing works', desc: 'Industrial cable routing, distribution boards (DB), high-capacity pipe routing, and sanitary drainage fittings.', tags: ['Cable routing', 'Distribution boards', 'Sanitary fittings'] },
  { num: '06', cat: 'finishing', icon: 'architecture', title: 'All types of architectural works', desc: 'Interior partitions, door/window assemblies, aluminium composite cladding, and structural glazing installations.', tags: ['Partitions', 'ACP cladding', 'Glazing'] },
  { num: '07', cat: 'mep', icon: 'plumbing', title: 'Fire protection & sprinkler systems', desc: 'SCDF-compliant wet/dry sprinkler ring mains, fire hydrant routing, alarm valve installations, and hydrostatic certification.', tags: ['Sprinkler mains', 'Fire hydrant', 'SCDF regs'] },
  { num: '08', cat: 'steel', icon: 'precision_manufacturing', title: 'Structural steel fabrication & erection', desc: 'Heavy I-beam/H-beam profiling, site welding to AWS D1.1, bolted connection assemblies, and column-to-foundation anchor works.', tags: ['Beam profiling', 'AWS welding', 'Anchor bolts'] },
  { num: '09', cat: 'steel', icon: 'directions_boat', title: 'Marine & shipyard operations', desc: 'Drydock hull structural repairs, hatch cover realignments, topside shelter fabrication, and vessel outfitting at Tuas Marine Yard.', tags: ['Hull repairs', 'Hatch covers', 'Vessel outfitting'] },
  { num: '10', cat: 'steel', icon: 'format_paint', title: 'Abrasive blasting & protective coatings', desc: 'Grit & hydro-jetting surface preparation (SA 2.5), epoxy/polyurethane high-build application, and intumescent fireproofing.', tags: ['Hydro-jetting', 'Epoxy coatings', 'Fireproofing'] },
  { num: '11', cat: 'steel', icon: 'home_repair_service', title: 'Plant maintenance & turnarounds', desc: 'Mechanical overhauls, pump alignment, heat exchanger retubing, scheduled shutdowns, and preventive maintenance contracts.', tags: ['Pump alignment', 'Heat exchangers', 'Shutdowns'] },
]

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? allServices : allServices.filter(s => s.cat === activeFilter)

  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span className="eyebrow">ENGINEERING SPECIFICATIONS</span>
          </div>
          <h1 className="headline-lg text-primary">Core Services &amp; Specializations</h1>
          <p className="body-md text-on-surface-variant" style={{ marginTop: 8, maxWidth: 640 }}>
            Complete civil, structural, marine, and building solutions delivered with industrial
            safety and compliance.
          </p>

          {/* Quick counters */}
          <div className="grid-3" style={{ gap: 'var(--space-sm)', marginTop: 'var(--space-lg)', maxWidth: 480 }}>
            <div style={{ background: 'var(--surface-container)', padding: '10px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <span className="title-md text-primary" style={{ fontWeight: 700, display: 'block' }}>11</span>
              <span className="label-sm text-on-surface-variant" style={{ fontSize: 11, textTransform: 'uppercase' }}>Divisions</span>
            </div>
            <div style={{ background: 'var(--surface-container)', padding: '10px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <span className="title-md" style={{ fontWeight: 700, display: 'block', color: 'var(--secondary-container)' }}>BCA</span>
              <span className="label-sm text-on-surface-variant" style={{ fontSize: 11, textTransform: 'uppercase' }}>Compliant</span>
            </div>
            <div style={{ background: 'var(--surface-container)', padding: '10px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <span className="title-md text-primary" style={{ fontWeight: 700, display: 'block' }}>bizSAFE</span>
              <span className="label-sm text-on-surface-variant" style={{ fontSize: 11, textTransform: 'uppercase' }}>Level Star</span>
            </div>
          </div>
        </div>

        {/* Filter pills */}
        <div className="services-filter">
          {categories.map(c => (
            <button
              key={c.key}
              className={`filter-pill ${activeFilter === c.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(c.key)}
            >
              <span className="material-symbols-outlined">{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {filtered.map(s => (
            <div className="service-full-card" key={s.num}>
              <div className="accent-bar" />
              <div className="service-full-header">
                <div className="service-full-info">
                  <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--surface-container-low)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>{s.icon}</span>
                  </div>
                  <div>
                    <span className="division-label">Division {s.num}</span>
                    <h3>{s.title}</h3>
                  </div>
                </div>
                <span className="service-full-number">{s.num}</span>
              </div>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => <span className="service-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
