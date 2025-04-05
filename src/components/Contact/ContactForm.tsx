import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="p-5 xs:p-6 sm:p-8 md:p-12">
      <h2 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-5 sm:mb-6 text-gray-800">Envíanos un Mensaje</h2>

      <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-xs xs:text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
          <div>
            <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-xs xs:text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 text-xs xs:text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              placeholder="+34 XXX XXX XXX"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-xs xs:text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="¿Sobre qué quieres contactarnos?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-3 py-2 text-xs xs:text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <div className="flex justify-center xs:justify-end mt-4 xs:mt-6">
          <button
            type="submit"
            className="bg-red-600 text-white px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 rounded-full font-medium hover:bg-red-700 transition-colors shadow-md text-xs xs:text-sm sm:text-base w-full xs:w-auto"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
}
