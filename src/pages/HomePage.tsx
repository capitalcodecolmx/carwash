import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Expert Car Detailing From Luxury Brands To Your Everyday Ride In
              Sydney
            </h1>
            <div className="grid grid-cols-2 gap-4 mb-12">
              <img
                src="https://images.unsplash.com/photo-1600320844644-0e144d76f5ae"
                alt="Car Detailing"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f"
                alt="Car Cleaning"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Services we provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Ceramic Coating</h3>
              <p className="text-gray-600">
                Professional ceramic coating services
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Wheel Protection</h3>
              <p className="text-gray-600">
                Complete wheel care and protection
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Paint Correction</h3>
              <p className="text-gray-600">Expert paint correction services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Interior Detailing</h3>
              <p className="text-gray-600">Complete interior restoration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Choose your Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Basic Wash</h3>
              <ul className="space-y-2 mb-6">
                <li>✓ Exterior Wash</li>
                <li>✓ Wheel Cleaning</li>
                <li>✓ Windows Cleaning</li>
              </ul>
              <button
                onClick={() => navigate("/book")}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg"
              >
                Select Package
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Premium Wash</h3>
              <ul className="space-y-2 mb-6">
                <li>✓ All Basic Features</li>
                <li>✓ Interior Vacuum</li>
                <li>✓ Wax Protection</li>
              </ul>
              <button
                onClick={() => navigate("/book")}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg"
              >
                Select Package
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Ultimate Detail</h3>
              <ul className="space-y-2 mb-6">
                <li>✓ All Premium Features</li>
                <li>✓ Paint Correction</li>
                <li>✓ Ceramic Coating</li>
              </ul>
              <button
                onClick={() => navigate("/book")}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg"
              >
                Select Package
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
