
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'

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
          <NavLink to="/services">Services</NavLink>
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
    </div>
  )
}

function App() {
  return <Layout />
}

export default App
