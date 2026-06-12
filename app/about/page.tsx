import HeroSection from '@/components/HeroSection'

export default function About() {
  const team = [
    { name: 'John Mwangi', title: 'Chief Executive Officer', specialty: 'Civil Engineering' },
    { name: 'Mary Kipchoge', title: 'Technical Director', specialty: 'Electrical Engineering' },
    { name: 'Peter Ochieng', title: 'Operations Manager', specialty: 'Project Management' },
    { name: 'Sarah Kimani', title: 'Senior Engineer', specialty: 'Mechanical Engineering' },
  ]

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="About Praecellens"
        subtitle="Our Story"
        description="Leading the transformation of Kenya's engineering landscape through innovation, expertise, and commitment to excellence"
      />

      {/* Company Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-gray leading-relaxed mb-4">
                To deliver excellence in engineering consulting through innovative solutions, professional integrity, and unwavering commitment to client success.
              </p>
              <p className="text-lg text-gray leading-relaxed mb-4">
                We believe that great engineering begins with understanding. We take the time to listen, analyze, and develop tailored solutions that meet the unique needs of each project.
              </p>
              <p className="text-lg text-gray leading-relaxed">
                Our team of experienced professionals brings together diverse expertise across civil, electrical, mechanical, and energy engineering disciplines.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl h-80 flex items-center justify-center">
              <div className="text-6xl">🏢</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-primary mb-16">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'Delivering superior quality in every project and interaction',
              },
              {
                title: 'Innovation',
                description: 'Embracing new technologies and creative problem-solving',
              },
              {
                title: 'Integrity',
                description: 'Conducting business with honesty, transparency, and ethics',
              },
              {
                title: 'Collaboration',
                description: 'Working effectively with clients, partners, and team members',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-primary mb-16">Our Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-secondary font-semibold mb-2">{member.title}</p>
                <p className="text-gray text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-primary mb-16">Why Experience Matters</h2>

          <div className="bg-white rounded-xl p-12 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">2005</div>
                <p className="text-gray">Founded with vision and expertise</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">18+ yrs</div>
                <p className="text-gray">Industry experience and growth</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">200+</div>
                <p className="text-gray">Successful project completions</p>
              </div>
            </div>
            <p className="text-lg text-gray leading-relaxed">
              Over nearly two decades, Praecellens Consultancy has established itself as a trusted partner for engineering solutions across Kenya. Our experience spans residential, commercial, industrial, and energy sectors, each project strengthening our expertise and expanding our capabilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
