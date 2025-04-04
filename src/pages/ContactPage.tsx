import React from "react";
import { Navbar } from "../components/Navigation/Navbar";
import { Footer } from "../components/Footer";

export function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-8">Contáctanos</h1>
          {/* Add contact form and information */}
        </div>
      </main>
      <Footer />
    </div>
  );
}