import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Pristine Edge</h3>
            <p className="text-gray-400">
              Servicio premium de lavado y detallado automotriz
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Av. Principal #123</li>
              <li>📞 +1 234 567 8900</li>
              <li>✉️ info@pristineedge.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pristine Edge. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
