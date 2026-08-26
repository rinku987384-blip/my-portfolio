const services = [
  {
    id: 'seo-audit',
    title: 'SEO Audit',
    description:
      'Review technical and content issues to identify ranking opportunities and improve website momentum.',
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO',
    description:
      'Optimize titles, meta tags, headings, internal links, and content layout for search visibility.',
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    description: 'Improve crawlability, site speed, indexing, mobile performance, and technical health.',
  },
  {
    id: 'keyword-research',
    title: 'Keyword Research',
    description: 'Find relevant search terms, search intent, and content opportunities that attract the right audience.',
  },
  {
    id: 'off-page-seo',
    title: 'Off-Page SEO',
    description:
      'Develop quality backlink plans and authority-building strategies to strengthen trust online.',
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    description:
      'Improve local search presence through Google Business Profile and nearby audience targeting.',
  },
  {
    id: 'schema-markup',
    title: 'Schema Markup',
    description: 'Add structured data that helps search engines understand pages and enhance eligible search results.',
  },
  {
    id: 'gsc-ga4',
    title: 'Google Search Console & GA4',
    description: 'Set up and review search performance, indexing, analytics, traffic sources, and useful growth insights.',
  },
  {
    id: 'wordpress-seo',
    title: 'WordPress SEO',
    description: 'Optimize WordPress pages, settings, plugins, content structure, and performance for search visibility.',
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
          <article id={service.id} key={service.title} className="info-card service-detail-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
