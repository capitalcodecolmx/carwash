import { Navbar } from "../components/Navigation/Navbar";
import { Footer } from "../components/Footer";

export function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-8">Nuestros Servicios</h1>
          {/* Add detailed service information */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
