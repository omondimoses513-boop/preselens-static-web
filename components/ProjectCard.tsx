import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  year?: string
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  category,
  year,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-gray/10 cursor-pointer">
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              {category}
            </span>
            {year && <span className="text-xs text-gray">{year}</span>}
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-gray text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  )
}
