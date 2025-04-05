import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  const testimonials = [
    {
      content: "El mejor servicio de detallado que he encontrado. Mi auto quedó como nuevo.",
      author: "Carlos Rodríguez",
      role: "Cliente Frecuente"
    },
    {
      content: "Profesionales en todo sentido. Recomiendo totalmente sus servicios premium.",
      author: "María González",
      role: "Cliente Nuevo"
    },
    {
      content: "Excelente atención y resultados impecables. Volveré sin duda.",
      author: "Juan Pérez",
      role: "Cliente Frecuente"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="custom-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Nuestros Clientes Satisfechos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lo que dicen nuestros clientes sobre nuestros servicios de detallado automotriz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
