import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Praecellens</h3>
            <p className="text-white text-sm leading-relaxed">
              Engineering excellence for Kenya&apos;s infrastructure development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white hover:text-secondary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-white">Civil Engineering</span>
              </li>
              <li>
                <span className="text-white">Structural Design</span>
              </li>
              <li>
                <span className="text-white">Mechanical Engineering</span>
              </li>
              <li>
                <span className="text-white">Energy Solutions</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>Email: info@praecellens.ke</li>
              <li>Phone: 0714623210</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              &copy; {currentYear} Praecellens Consultancy Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-secondary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
