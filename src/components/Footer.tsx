import { Link, useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-red-600 to-red-500 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
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
                flex items-center justify-center gap-2 mx-auto sm:mx-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Reservar Cita</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4 sm:mb-6">Enlaces Rápidos</h3>
            <ul className="grid grid-cols-2 gap-4 sm:gap-3 sm:grid-cols-1">
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
                      text-sm sm:text-base py-2 px-4 sm:px-0 rounded-lg sm:rounded-none 
                      hover:bg-white/10 sm:hover:bg-transparent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4 sm:mb-6">Contacto</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: "location",
                  text: "Av. Principal #123",
                  svg: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  ),
                },
                {
                  icon: "phone",
                  text: "+1 234 567 8900",
                  svg: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                },
                {
                  icon: "email",
                  text: "info@detalladoauto.com",
                  svg: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 justify-center sm:justify-start"
                >
                  <div className="bg-white/10 p-2 rounded-full flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {item.svg}
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm sm:text-base break-all">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Hours */}
          <div className="text-center sm:text-left space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 sm:mb-6">Síguenos</h3>
              <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
                {[
                  {
                    href: "https://facebook.com",
                    icon: "facebook",
                    svg: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      />
                    ),
                  },
                  {
                    href: "https://instagram.com",
                    icon: "instagram",
                    svg: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    ),
                  },
                  {
                    href: "https://twitter.com",
                    icon: "twitter",
                    svg: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      />
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all duration-300 
                      transform hover:scale-110 flex-shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {social.svg}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">
                Horario de atención
              </h4>
              <div className="space-y-1 text-xs sm:text-sm">
                <p className="text-white/90">Lun-Vie: 8:00 - 20:00</p>
                <p className="text-white/90">Sáb-Dom: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/80 text-xs sm:text-sm">
            © {new Date().getFullYear()} DETALLADO AUTO. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
