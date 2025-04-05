import {
  ContactHero,
  ContactInfo,
  ContactForm,
  LocationMap,
} from "../components/Contact";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactPage() {
  const handleFormSubmit = (formData: FormData) => {
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    // Show success message (in a real app, you'd use a toast or alert component)
    alert(
      "Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto."
    );
  };

  // Contact information data
  const contactInfo = {
    address: "Puerta del Sol, 28013 Madrid, España",
    phone: "+34 91 234 5678",
    email: "info@pristineedge.es",
    hours: {
      weekdays: "Lunes - Viernes: 9:00 - 20:00",
      saturday: "Sábado: 9:00 - 16:00",
      sunday: "Domingo: Cerrado",
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-8 md:py-20">
        {/* Hero Section */}
        <ContactHero
          title="Contáctanos"
          description="Estamos aquí para responder a tus preguntas y ayudarte con tus necesidades de lavado y detallado automotriz."
        />

        {/* Contact Form and Information Section */}
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information */}
              <ContactInfo
                address={contactInfo.address}
                phone={contactInfo.phone}
                email={contactInfo.email}
                hours={contactInfo.hours}
              />

              {/* Contact Form */}
              <ContactForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <LocationMap title="Nuestra Ubicación" address={contactInfo.address} />
      </main>
    </div>
  );
}
