import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Electrical Engineering',
      description: 'Cutting-edge electrical systems designed for efficiency, safety, and reliability.',
      icon: '⚡',
      features: [
        'Power distribution (LV & MV)',
        'Control systems design',
        'Energy efficiency audits',
        'Grid integration solutions',
      ],
    },
    {
      title: 'Mechanical Engineering',
      description: 'Innovative mechanical solutions for industrial and commercial applications.',
      icon: '⚙️',
      features: [
        'HVAC system design',
        'Equipment selection & sizing',
        'Pneumatic & hydraulic systems',
        'Maintenance planning',
      ],
    },
    {
      title: 'Energy Solutions',
      description: 'Sustainable energy systems for long-term environmental and economic benefits.',
      icon: '🔋',
      features: [
        'Solar PV systems',
        'Wind energy assessment',
        'Energy storage solutions',
        'Renewable integration',
      ],
    },
    {
      title: 'Civil Engineering',
      description: 'Structural design and infrastructure development with precision and innovation.',
      icon: '🏗️',
      features: [
        'Foundation design',
        'Structural analysis',
        'Road & drainage design',
        'Site supervision',
      ],
    },
    {
      title: 'Project Management',
      description: 'Expert management from conception to completion ensuring quality and timelines.',
      icon: '📋',
      features: [
        'Project planning',
        'Budget management',
        'Quality assurance',
        'Stakeholder coordination',
      ],
    },
    {
      title: 'Consulting Services',
      description: 'Strategic technical advice for optimal decision-making and problem-solving.',
      icon: '💡',
      features: [
        'Technical feasibility studies',
        'Cost-benefit analysis',
        'Risk assessment',
        'Optimization strategies',
      ],
    },
  ]

  const projects = [
    {
      id: 'nairobi-complex',
      title: 'Nairobi Commercial Complex',
      description: 'Multi-storey commercial building with integrated smart systems and sustainable design.',
      image: '/images/building1.jpg',
      category: 'Commercial',
      year: '2023',
    },
    {
      id: 'mombasa-plant',
      title: 'Mombasa Industrial Plant',
      description: 'Large-scale industrial facility with specialized electrical and mechanical systems.',
      image: '/images/building2.jpg',
      category: 'Industrial',
      year: '2022',
    },
    {
      id: 'solar-farm',
      title: 'Solar Farm Development',
      description: 'Renewable energy facility generating 2MW of clean electricity for the region.',
      image: '/images/building3.jpg',
      category: 'Energy',
      year: '2023',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Engineering Excellence"
        subtitle="Welcome to Praecellens"
        description="Delivering innovative engineering solutions for Kenya's infrastructure development"
        ctaText="Start Your Project"
        ctaHref="/contact"
        backgroundImage="/images/hero-engineering.jpeg"
      />

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary animate-fade-in">Our Engineering Services</h2>
            <p className="text-center text-gray max-w-3xl mx-auto text-lg animate-fade-in">
              Comprehensive solutions tailored to your project requirements with precision and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary animate-fade-in">Featured Projects</h2>
            <p className="text-center text-gray max-w-3xl mx-auto text-lg animate-fade-in">
              Showcase of our successful implementations across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary">Why Choose Praecellens?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Years Combined Experience' },
              { number: '200+', label: 'Successful Projects' },
              { number: '15+', label: 'Expert Engineers' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-light rounded-xl">
                <div className="text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <p className="text-gray font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Vision?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let&apos;s collaborate to bring your engineering project to life with innovative solutions and expert execution.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
