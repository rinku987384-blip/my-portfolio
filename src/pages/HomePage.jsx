import { useState } from 'react'

const services = [
  {
    title: 'SEO Audit',
    description:
      'A complete technical and content review that uncovers visibility gaps and ranking opportunities.',
  },
  {
    title: 'On-Page SEO',
    description:
      'Optimize page titles, meta descriptions, headers, content structure, and internal links for better search performance.',
  },
  {
    title: 'Off-Page SEO',
    description:
      'Build authority with high-quality backlinks and trusted outreach strategies that support long-term growth.',
  },
  {
    title: 'Local SEO',
    description:
      'Improve Google Business Profile presence and local search visibility to reach nearby customers faster.',
  },
]

const projects = [
  {
    title: 'Local Business Growth Project',
    description:
      'Improved search discoverability and local ranking visibility for a service-based business website.',
  },
  {
    title: 'Website Optimization Campaign',
    description:
      'Enhanced on-page structure, technical SEO, and keyword targeting for better organic reach.',
  },
  {
    title: 'Content SEO Strategy',
    description:
      'Developed content alignment and optimization plans that helped increase search relevance and traffic quality.',
  },
]

const experience = [
  {
    role: 'SEO Executive',
    company: 'JRS Techvision Pvt. Ltd.',
    duration: '1.7 Years +',
    summary:
      'Handled on-page, off-page, technical SEO, keyword research, backlink strategies, GMB optimization, and website performance improvement.',
  },
]

const skills = [
  'On-Page SEO',
  'Off-Page SEO',
  'Technical SEO',
  'Keyword Research',
  'Schema Markup',
  'Backlink Building',
  'GMB SEO',
  'Website Optimization',
]

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="home-page">
      <section className="hero-section">
        <div>
          <p className="eyebrow">Freelance SEO Specialist</p>
          <h1>Helping businesses rank higher and grow online.</h1>
          <p className="hero-text">
            I’m Rinku Bharti, an SEO Executive with practical experience in on-page,
            off-page, technical SEO, keyword research, and website optimization. I help
            businesses become more visible, more trusted, and more discoverable on search.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#services">
              View Services
            </a>
            <a className="btn btn-secondary" href="#contact-form">
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="hero-card-box">
          <div className="mini-stat">
            <strong>1.7+</strong>
            <span>Years of SEO Work</span>
          </div>
          <div className="mini-stat">
            <strong>100%</strong>
            <span>Growth-focused mindset</span>
          </div>
          <div className="mini-stat">
            <strong>Open</strong>
            <span>For freelance projects</span>
          </div>
        </div>
      </section>

      <section id="about" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>About Me</h2>
        </div>
        <p>
          I am a motivated SEO professional with practical exposure to search optimization,
          content structure improvement, keyword strategy, and technical website enhancement.
          My goal is to help businesses gain stronger organic visibility and produce long-term
          digital growth.
        </p>
      </section>

      <section id="services" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>What I Offer</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="info-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Core Skills</h2>
        </div>
        <div className="pill-wrap">
          {skills.map((skill) => (
            <span key={skill} className="pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="experience" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Professional Experience</h2>
        </div>
        {experience.map((item) => (
          <article key={item.role} className="experience-box">
            <div className="experience-top">
              <div>
                <h3>{item.role}</h3>
                <span>{item.company}</span>
              </div>
              <strong>{item.duration}</strong>
            </div>
            <p>{item.summary}</p>
          </article>
        ))}
      </section>

      <section id="projects" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected Work Areas</h2>
        </div>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.title} className="info-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-layout">
          <div className="contact-details">
            <div className="detail-row">
              <span>Phone</span>
              <strong>+91 9878342246</strong>
            </div>
            <div className="detail-row">
              <span>Email</span>
              <strong>rinkubharti9873@gmail.com</strong>
            </div>
            <div className="detail-row">
              <span>Location</span>
              <strong>Kulesra, Greater Noida, Gautam Buddha Nagar - 201306</strong>
            </div>
          </div>

          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                required
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {submitted ? <p className="success-message">Thank you! Your message has been recorded.</p> : null}
          </form>
        </div>
      </section>
    </div>
  )
}
