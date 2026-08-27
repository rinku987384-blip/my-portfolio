
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'

function SocialIcon({ label, href, children }) {
  return (
    <a className="social-icon" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  )
}

const serviceMenuItems = [
  ['SEO Audit', 'seo-audit'],
  ['On-Page SEO', 'on-page-seo'],
  ['Technical SEO', 'technical-seo'],
  ['Keyword Research', 'keyword-research'],
  ['Off-Page SEO / Backlinks', 'off-page-seo'],
  ['Local SEO / Google Business Profile', 'local-seo'],
  ['Schema Markup', 'schema-markup'],
  ['Google Search Console & GA4', 'gsc-ga4'],
  ['WordPress SEO', 'wordpress-seo'],
]

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Rinku Bharti</strong>
        <p>Freelance SEO Executive Portfolio</p>
      </div>
      <div className="footer-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="social-links" aria-label="Social media links">
        <SocialIcon label="GitHub" href="https://github.com/rinku987384-blip">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" /></svg>
        </SocialIcon>
        <SocialIcon label="LinkedIn" href="https://www.linkedin.com/in/digitalrinku5911/">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.5v1.6h.1a3.8 3.8 0 0 1 3.4-1.9c3.6 0 4.2 2.4 4.2 5.5v6.3h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.2V9Z" /></svg>
        </SocialIcon>
        <SocialIcon label="Instagram" href="https://www.instagram.com/digitalrinku5911">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2.8h9.6A4.4 4.4 0 0 1 21.2 7v10a4.4 4.4 0 0 1-4.4 4.2H7.2A4.4 4.4 0 0 1 2.8 17V7a4.4 4.4 0 0 1 4.4-4.2Zm0 2A2.4 2.4 0 0 0 4.8 7v10a2.4 2.4 0 0 0 2.4 2.2h9.6a2.4 2.4 0 0 0 2.4-2.2V7a2.4 2.4 0 0 0-2.4-2.2H7.2Zm4.8 2.4A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5-2.6a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17 6.6Z" /></svg>
        </SocialIcon>
        <SocialIcon label="Email" href="mailto:rinku987384@gmail.com">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17A1.5 1.5 0 0 1 22 7v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17V7a1.5 1.5 0 0 1 1.5-1.5Zm.5 2.2v.5l8 5.1 8-5.1v-.5H4Zm16 2.9-7.5 4.8a.9.9 0 0 1-1 0L4 10.6V17h16v-6.4Z" /></svg>
        </SocialIcon>
      </div>
    </footer>
  )
}

function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="brand">Rinku Bharti</div>
        <nav className="site-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <div className="services-nav-item">
            <NavLink to="/services" className="services-nav-link">
              Services <span className="services-chevron" aria-hidden="true" />
            </NavLink>
            <div className="services-dropdown">
              {serviceMenuItems.map(([label, id]) => (
                <NavLink key={id} to={`/services#${id}`}>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="site-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
      <a className="whatsapp-float" href="https://wa.me/919873842246" target="_blank" rel="noreferrer" aria-label="Chat with Rinku Bharti on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 23.8l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.7-5.3 11.7-11.8 0-3.1-1.2-6.1-3.4-8.2Zm-8.3 18c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.9-1.7.1-.2.1-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.2 3.2c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" /></svg>
      </a>
    </div>
  )
}

function App() {
  return <Layout />
}

export default App
