import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  className?: string
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles = variant === 'primary' ? 'btn-primary' : 'btn-outline'

  return (
    <Link href={href} className={`${baseStyles} ${className}`}>
      {children}
    </Link>
  )
}
