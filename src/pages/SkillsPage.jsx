const skills = [
  'On-Page SEO',
  'Off-Page SEO',
  'Technical SEO',
  'Keyword Research',
  'Backlink Building',
  'Schema Markup',
  'GMB SEO',
  'Website Optimization',
]

const tools = [
  'Google Search Console',
  'Google Analytics',
  'Ahrefs',
  'SEMrush',
  'Canva',
  'WordPress',
]

export default function SkillsPage() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Core Strengths</h2>
      </div>

      <div className="pill-wrap">
        {skills.map((skill) => (
          <span key={skill} className="pill">
            {skill}
          </span>
        ))}
      </div>

      <div className="tools-box">
        <h3>Tools Known</h3>
        <div className="pill-wrap">
          {tools.map((tool) => (
            <span key={tool} className="pill secondary-pill">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
