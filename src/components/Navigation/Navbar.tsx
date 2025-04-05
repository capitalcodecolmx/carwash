import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        <div
          className="flex-shrink-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-2xl font-bold">CAR DETAIL</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => navigate("/")}
            className="font-medium text-black hover:text-red-600 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/services")}
            className="font-medium text-black hover:text-red-600 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => navigate("/about")}
            className="font-medium text-black hover:text-red-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="font-medium text-black hover:text-red-600 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Book Now Button */}
        <button
          onClick={() => navigate("/book")}
          className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
        >
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => navigate("/")}
                className="font-medium text-black hover:text-red-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/services")}
                className="font-medium text-black hover:text-red-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => navigate("/about")}
                className="font-medium text-black hover:text-red-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="font-medium text-black hover:text-red-600 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => navigate("/book")}
                className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
