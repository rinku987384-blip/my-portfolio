import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
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
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
  }

  return (
    <section className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Contact Us</h2>
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </label>
          <label>
            Project Type
            <input
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              placeholder="SEO Audit / Website Optimization"
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
              placeholder="Describe your project requirement"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {submitted ? <p className="success-message">Thanks! Your form has been submitted.</p> : null}
        </form>
      </div>
    </section>
  )
}
