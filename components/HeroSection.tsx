import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover brightness-50"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 z-0"></div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-4 animate-fade-in">
          {subtitle}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 animate-slide-up leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray max-w-2xl mx-auto mb-8 animate-slide-up">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link href={ctaHref} className="btn-primary">
            {ctaText}
          </Link>
          <Link href="/services" className="btn-outline">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}
