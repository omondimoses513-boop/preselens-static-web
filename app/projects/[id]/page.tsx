import Image from 'next/image'
import Link from 'next/link'

interface ProjectDetailsPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata(props: ProjectDetailsPageProps) {
  const params = await props.params
  return {
    title: `Project: ${params.id.replace(/-/g, ' ')} | Praecellens`,
  }
}

const projectsData: { [key: string]: any } = {
  'nairobi-complex': {
    title: 'Nairobi Commercial Complex',
    category: 'Commercial',
    year: '2023',
    client: 'Nairobi Development Corp',
    location: 'Nairobi, Kenya',
    duration: '18 months',
    budget: 'KES 450M',
    image: '/images/building1.jpg',
    description: 'A modern multi-storey commercial complex featuring office spaces, retail outlets, and hospitality services. The project integrated smart building systems, sustainable design practices, and advanced MEP solutions.',
    scope: [
      'Architectural design',
      'Structural engineering',
      'Electrical systems',
      'HVAC design',
      'Plumbing & drainage',
      'Fire safety systems',
      'Smart building integration',
    ],
    achievements: [
      'LEED certification standards',
      'On-time project delivery',
      '95% energy efficiency improvement',
      'Zero safety incidents',
    ],
  },
  'mombasa-plant': {
    title: 'Mombasa Industrial Plant',
    category: 'Industrial',
    year: '2022',
    client: 'Industrial Solutions Ltd',
    location: 'Mombasa, Kenya',
    duration: '24 months',
    budget: 'KES 550M',
    image: '/images/building2.jpg',
    description: 'Large-scale manufacturing facility with specialized electrical systems, mechanical equipment, and infrastructure. Designed for high operational efficiency with redundant power systems and advanced safety features.',
    scope: [
      'Civil infrastructure',
      'Industrial layout',
      'Heavy electrical systems',
      'Machinery installation',
      'Power backup systems',
      'Safety & compliance',
      'Wastewater treatment',
    ],
    achievements: [
      'ISO 9001 compliance',
      'Advanced safety systems',
      'Operational efficiency gain',
      'Environmental standards met',
    ],
  },
  'solar-farm': {
    title: 'Solar Farm Development',
    category: 'Energy',
    year: '2023',
    client: 'Renewable Energy Kenya',
    location: 'Kajiado County, Kenya',
    duration: '12 months',
    budget: 'KES 350M',
    image: '/images/building3.jpg',
    description: 'A 2MW solar photovoltaic facility designed to provide clean electricity to rural communities. Features advanced inverter technology, battery storage integration, and grid connection capabilities.',
    scope: [
      'Solar PV system design',
      'Civil works',
      'Electrical infrastructure',
      'Battery storage system',
      'Grid integration',
      'Monitoring systems',
      'Maintenance planning',
    ],
    achievements: [
      '2MW generation capacity',
      'Community impact',
      '25-year design life',
      'Renewable energy contribution',
    ],
  },
}

export default async function ProjectDetail(props: ProjectDetailsPageProps) {
  const params = await props.params
  const project = projectsData[params.id]

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
        <p className="text-gray mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/projects" className="btn-primary">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero with Image */}
      <section className="relative h-96 md:h-96 overflow-hidden bg-gray-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-secondary font-bold uppercase tracking-wider mb-2">{project.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Project Overview</h2>
              <p className="text-lg text-gray leading-relaxed mb-8">{project.description}</p>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Project Scope</h3>
              <ul className="space-y-3 mb-8">
                {project.scope.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">✓</span>
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.achievements.map((achievement: string, idx: number) => (
                  <div key={idx} className="bg-light p-4 rounded-lg">
                    <p className="text-gray font-medium">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Info Card */}
            <div>
              <div className="bg-light rounded-xl p-8 sticky top-20">
                <h3 className="text-2xl font-bold text-primary mb-6">Project Details</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray uppercase tracking-wider font-bold mb-1">Client</p>
                    <p className="text-lg font-semibold text-primary">{project.client}</p>
                  </div>

                  <div className="border-t border-gray/20 pt-4">
                    <p className="text-sm text-gray uppercase tracking-wider font-bold mb-1">Location</p>
                    <p className="text-lg font-semibold text-primary">{project.location}</p>
                  </div>

                  <div className="border-t border-gray/20 pt-4">
                    <p className="text-sm text-gray uppercase tracking-wider font-bold mb-1">Duration</p>
                    <p className="text-lg font-semibold text-primary">{project.duration}</p>
                  </div>

                  <div className="border-t border-gray/20 pt-4">
                    <p className="text-sm text-gray uppercase tracking-wider font-bold mb-1">Project Value</p>
                    <p className="text-lg font-semibold text-secondary">{project.budget}</p>
                  </div>

                  <div className="border-t border-gray/20 pt-4">
                    <p className="text-sm text-gray uppercase tracking-wider font-bold mb-1">Completion Year</p>
                    <p className="text-lg font-semibold text-primary">{project.year}</p>
                  </div>
                </div>

                <button className="w-full btn-primary mt-8">
                  Request Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">More Projects</h2>
          <div className="text-center">
            <Link href="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
