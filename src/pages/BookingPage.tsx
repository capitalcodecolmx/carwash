import { useState } from "react";

type ServicePackage = "basic" | "premium" | "ultimate";

export function BookingPage() {
  const [selectedPackage, setSelectedPackage] =
    useState<ServicePackage>("basic");

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gray-900 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Book Your Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Schedule your car detailing service today
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-8">
              <div>
                <label className="block text-lg font-medium mb-4">
                  Select Your Package
                </label>
                <div className="grid grid-cols-1 gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedPackage("basic")}
                    className={`p-4 border rounded-lg text-left ${
                      selectedPackage === "basic"
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">Basic Wash</h3>
                    <p className="text-gray-600">
                      Exterior wash, wheel cleaning, windows
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPackage("premium")}
                    className={`p-4 border rounded-lg text-left ${
                      selectedPackage === "premium"
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">Premium Wash</h3>
                    <p className="text-gray-600">
                      All basic features + interior vacuum, wax protection
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPackage("ultimate")}
                    className={`p-4 border rounded-lg text-left ${
                      selectedPackage === "ultimate"
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">Ultimate Detail</h3>
                    <p className="text-gray-600">
                      All premium features + paint correction, ceramic coating
                    </p>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
