import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import QuoteModal from './QuoteModal'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

const drawerLinks = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'About Us', path: '/about', icon: 'corporate_fare' },
  { label: 'Services', path: '/services', icon: 'precision_manufacturing' },
  { label: 'Projects', path: '/projects', icon: 'construction' },
  { label: 'Contact', path: '/contact', icon: 'contact_mail' },
]

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setDrawerOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <header className="site-header">
        {/* Top bar */}
        <div className="topbar">
          <div className="container topbar-inner">
            <div className="topbar-left">
              <a href="tel:+6567912288" className="topbar-item">
                <span className="material-symbols-outlined">call</span>
                <span>+65 6791 2288</span>
              </a>
              <a href="mailto:ops@srimaruthi.com.sg" className="topbar-item email">
                <span className="material-symbols-outlined">mail</span>
                <span>ops@srimaruthi.com.sg</span>
              </a>
              <div className="topbar-item topbar-uen">
                <span className="material-symbols-outlined">badge</span>
                <span>UEN: 202333665C</span>
              </div>
            </div>
            <div className="topbar-right">
              <div className="pill">
                <span className="dot"></span>
                Singapore Office &amp; Yard
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="nav-brand">
              <span className="nav-brand-mark" aria-hidden="true">SM</span>
              <div className="nav-brand-text">
                <span className="nav-brand-name">SRI MARUTHI</span>
                <span className="nav-brand-sub">Engineering Pte Ltd</span>
              </div>
            </Link>

            <div className="nav-links">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="nav-actions">
              <button className="nav-cta" onClick={() => setQuoteOpen(true)}>
                Request a Quote
              </button>
              <button
                className="hamburger"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open Menu"
                aria-expanded={drawerOpen}
                aria-controls="mobile-navigation"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 24 }}>menu</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} id="mobile-navigation" aria-hidden={!drawerOpen}>
        <div className="drawer-header">
          <h3>Menu</h3>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close Menu">
            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>close</span>
          </button>
        </div>
        <nav className="drawer-nav" aria-label="Mobile navigation">
          {drawerLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`drawer-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setDrawerOpen(false)}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-footer">
          <button className="drawer-cta" onClick={() => { setDrawerOpen(false); setQuoteOpen(true) }}>
            <span className="material-symbols-outlined">request_quote</span>
            Request a Quote
          </button>
          <a href="tel:+6567912288" className="drawer-cta">
            <span className="material-symbols-outlined">call</span>
            Quick Call
          </a>
        </div>
      </div>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  )
}
