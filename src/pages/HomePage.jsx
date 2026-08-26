import { useEffect, useState } from 'react'
import fallbackHeroImage from '../assets/hero.png'

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
    title: 'TechvisionIndia.com',
    url: 'https://techvisionindia.com',
    location: 'India',
    description: 'Technical SEO, On-Page SEO, Schema, GSC, Sitemap',
  },
  {
    title: 'TravelTurtle.world',
    url: 'https://travelturtle.world',
    location: 'India',
    description: 'On-Page SEO, Content, Keyword Research',
  },
  {
    title: 'ERCOTravels.com',
    url: 'https://ercotravels.com',
    location: 'India',
    description: 'Keyword Research, On-Page SEO',
  },
  {
    title: 'SmartBizUtility.com',
    url: 'https://smartbizutility.com',
    location: 'United Kingdom',
    description: 'On-Page SEO, Content & Technical SEO',
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

const heroSlides = [
  {
    label: 'Technical SEO',
    detail: 'Build a stronger search foundation.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
  },
  {
    label: 'Keyword Research',
    detail: 'Find the opportunities that matter.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
  },
  {
    label: 'Website Growth',
    detail: 'Turn visibility into steady progress.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
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
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4200)

    return () => clearInterval(slideTimer)
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const whatsappMessage = [
      'New SEO inquiry from portfolio website',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Message: ${formData.message}`,
    ].join('\n')

    window.location.href = `sms:+919873842246?body=${encodeURIComponent(whatsappMessage)}`
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Freelance SEO Specialist</p>
          <h1>Helping businesses rank higher and grow online.</h1>
          <p className="hero-text">
            I’m Rinku, an SEO Executive with practical experience in on-page,
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
          <div className="hero-slide">
            <img
              src={heroSlides[activeSlide].image}
              alt={`${heroSlides[activeSlide].label} visual`}
              onError={(event) => {
                event.currentTarget.src = fallbackHeroImage
              }}
            />
            <div className="hero-slide-copy">
              <span>0{activeSlide + 1} / 03</span>
              <strong>{heroSlides[activeSlide].label}</strong>
              <p>{heroSlides[activeSlide].detail}</p>
            </div>
          </div>
          <div className="hero-slider-controls" aria-label="Hero slides">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                className={index === activeSlide ? 'active' : ''}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.label} slide`}
              />
            ))}
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
        <div className="card-grid projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="info-card">
              <h3>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>
              {project.location ? <span className="project-location">{project.location}</span> : null}
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
              <strong>+91 9873842246</strong>
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
