const services = [
  {
    title: 'SEO Audit',
    description:
      'Review technical and content issues to identify ranking opportunities and improve website momentum.',
  },
  {
    title: 'On-Page SEO',
    description:
      'Optimize titles, meta tags, headings, internal links, and content layout for search visibility.',
  },
  {
    title: 'Off-Page SEO',
    description:
      'Develop quality backlink plans and authority-building strategies to strengthen trust online.',
  },
  {
    title: 'Local SEO',
    description:
      'Improve local search presence through Google Business Profile and nearby audience targeting.',
  },
]

export default function ServicesPage() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Freelance SEO Services</h2>
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
  )
}
