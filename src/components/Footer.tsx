import { Link, useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-red-600 to-red-500 text-white">
      <div className="custom-container py-8 sm:py-12">
        {/* Main grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {/* Company Info */}
          <div className="text-center sm:text-left space-y-4">
            <h3 className="text-2xl font-bold">DETALLADO AUTO</h3>
            <p className="text-white/90 text-sm sm:text-base">
              Servicio premium de lavado y detallado automotriz
            </p>
            <button
              onClick={() => navigate("/reservar")}
              className="w-full sm:w-auto mt-2 bg-white text-red-600 px-6 py-3 rounded-full text-sm font-semibold 
                hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl 
                flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Reservar Cita</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-3">
              {[
                { to: "/", label: "Inicio" },
                { to: "/servicios", label: "Servicios" },
                { to: "/sobre-nosotros", label: "Nosotros" },
                { to: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-white/90 hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2 
                      text-sm sm:text-base py-2 sm:py-1 px-4 sm:px-0 rounded-full sm:rounded-none 
                      hover:bg-white/10 sm:hover:bg-transparent"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              {[
                { icon: "location", text: "Av. Principal #123" },
                { icon: "phone", text: "+1 234 567 8900" },
                { icon: "email", text: "info@detalladoauto.com" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="bg-white/10 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {/* Add your existing SVG paths here */}
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm sm:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Hours */}
          <div className="text-center sm:text-left space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-6">Síguenos</h3>
              <div className="flex justify-center sm:justify-start gap-4">
                {[
                  { href: "https://facebook.com", icon: "facebook" },
                  { href: "https://instagram.com", icon: "instagram" },
                  { href: "https://twitter.com", icon: "twitter" },
                ].map((social) => (
                  <a 
                    key={social.icon}
                    href={social.href}
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 
                      transform hover:scale-110"
                  >
                    {/* Add your existing social SVG icons here */}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Horario de atención</h4>
              <div className="space-y-1 text-sm">
                <p className="text-white/90">Lun-Vie: 8:00 - 20:00</p>
                <p className="text-white/90">Sáb-Dom: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} DETALLADO AUTO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
