import HeroSection from '@/components/HeroSection'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const allProjects = [
    {
      id: 'nairobi-complex',
      title: 'Nairobi Commercial Complex',
      description: 'Multi-storey commercial building with integrated smart systems and sustainable design.',
      image: '/images/project1.jpg',
      category: 'Commercial',
      year: '2023',
    },
    {
      id: 'mombasa-plant',
      title: 'Mombasa Industrial Plant',
      description: 'Large-scale industrial facility with specialized electrical and mechanical systems.',
      image: '/images/project2.jpg',
      category: 'Industrial',
      year: '2022',
    },
    {
      id: 'solar-farm',
      title: 'Solar Farm Development',
      description: 'Renewable energy facility generating 2MW of clean electricity for the region.',
      image: '/images/project3.jpg',
      category: 'Energy',
      year: '2023',
    },
    {
      id: 'kisumu-hospital',
      title: 'Kisumu Medical Center',
      description: 'State-of-the-art healthcare facility with advanced MEP systems and emergency backup.',
      image: '/images/project4.jpg',
      category: 'Healthcare',
      year: '2022',
    },
    {
      id: 'nairobi-roads',
      title: 'Nairobi Road Network',
      description: 'Urban road rehabilitation project spanning 15km with modern drainage systems.',
      image: '/images/project5.jpg',
      category: 'Infrastructure',
      year: '2021',
    },
    {
      id: 'eldoret-mall',
      title: 'Eldoret Shopping Mall',
      description: 'Modern retail complex featuring energy-efficient systems and sustainable design.',
      image: '/images/project6.jpg',
      category: 'Commercial',
      year: '2023',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Our Projects"
        subtitle="Portfolio"
        description="Showcase of engineering excellence across residential, commercial, industrial, and energy sectors"
      />

      {/* Projects Grid */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allProjects.map((project, idx) => (
              <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '50+', label: 'Years Experience' },
              { number: '95%', label: 'On-Time Delivery' },
              { number: '98%', label: 'Client Retention' },
            ].map((stat, idx) => (
              <div key={idx} className="p-8">
                <div className="text-5xl font-bold text-secondary mb-3">{stat.number}</div>
                <p className="text-gray font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Impressed by Our Work?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us bring your vision to life with the same expertise and dedication.
          </p>
          <a href="/contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}
