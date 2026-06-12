interface ServiceCardProps {
  title: string
  description: string
  icon: string
  features?: string[]
}

export default function ServiceCard({
  title,
  description,
  icon,
  features = [],
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 card-hover border border-gray/10">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray mb-6 leading-relaxed">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray">
              <span className="text-secondary font-bold mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
