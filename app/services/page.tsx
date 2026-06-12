import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'

export default function Services() {
  const mainServices = [
    {
      title: 'Civil Engineering',
      description: 'Structural design, construction supervision, and infrastructure development.',
      icon: '🏗️',
      features: [
        'Building design & analysis',
        'Foundation systems',
        'Road & bridge design',
        'Drainage systems',
        'Site investigations',
        'Construction supervision',
      ],
    },
    {
      title: 'Electrical Engineering',
      description: 'Power systems, control systems, and electrical installations.',
      icon: '⚡',
      features: [
        'Power distribution design',
        'Control systems',
        'Lighting design',
        'Fire detection systems',
        'Cabling infrastructure',
        'Energy audits',
      ],
    },
    {
      title: 'Mechanical Engineering',
      description: 'HVAC systems, mechanical equipment, and industrial solutions.',
      icon: '⚙️',
      features: [
        'HVAC design',
        'Plumbing systems',
        'Pneumatic systems',
        'Equipment selection',
        'Maintenance planning',
        'Thermal analysis',
      ],
    },
    {
      title: 'Energy Solutions',
      description: 'Renewable energy systems and sustainable power solutions.',
      icon: '🔋',
      features: [
        'Solar PV design',
        'Wind energy assessment',
        'Energy storage systems',
        'Hybrid systems',
        'Energy efficiency',
        'Grid integration',
      ],
    },
    {
      title: 'Project Management',
      description: 'End-to-end project delivery with quality assurance.',
      icon: '📋',
      features: [
        'Project planning',
        'Schedule management',
        'Budget control',
        'Quality assurance',
        'Risk management',
        'Stakeholder coordination',
      ],
    },
    {
      title: 'Consulting Services',
      description: 'Technical advice and strategic engineering solutions.',
      icon: '💡',
      features: [
        'Feasibility studies',
        'Cost-benefit analysis',
        'Risk assessment',
        'Optimization',
        'Due diligence',
        'Expert opinions',
      ],
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'We evaluate your project scope, requirements, and challenges.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our engineers develop tailored solutions using latest standards.',
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We provide supervision and support throughout execution.',
    },
    {
      number: '04',
      title: 'Verification',
      description: 'Quality checks ensure specifications and performance standards.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Our Services"
        subtitle="Complete Engineering Solutions"
        description="Comprehensive engineering services designed to address your project needs with innovation and expertise"
      />

      {/* Main Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary">Engineering Disciplines</h2>
            <p className="text-center text-gray max-w-3xl mx-auto text-lg">
              Diverse expertise across multiple engineering fields to serve all your project requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-primary mb-16">Our Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-md h-full">
                  <div className="text-4xl font-bold text-secondary mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 w-8 h-0.5 bg-secondary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-primary mb-16">Standards & Compliance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'ISO Certified',
                description: 'We maintain ISO 9001:2015 certification for quality management systems.',
              },
              {
                title: 'Local Compliance',
                description: 'All designs comply with Kenya Building Code and local regulations.',
              },
              {
                title: 'International Standards',
                description: 'We follow ASTM, IEC, and international engineering standards.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-light rounded-xl p-8">
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Need Engineering Solutions?</h2>
          <p className="text-xl text-gray mb-8">
            Contact our team to discuss your project and explore how we can help.
          </p>
          <a href="/contact" className="btn-primary">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  )
}
