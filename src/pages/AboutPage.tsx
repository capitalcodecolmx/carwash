export function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gray-900 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Sydney's premier car detailing service, dedicated to perfection
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              With years of experience in the automotive industry, we've built our reputation
              on providing exceptional car detailing services to Sydney's most discerning
              car enthusiasts and everyday drivers alike.
            </p>

            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-gray-600 mb-8">
              We use only the highest quality products and latest techniques to ensure
              your vehicle receives the best possible care. Our team of certified
              professionals treats every car with the attention to detail it deserves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide unparalleled car detailing services that exceed our
                  customers' expectations while maintaining the highest standards
                  of quality and professionalism.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Quality First</li>
                  <li>✓ Customer Satisfaction</li>
                  <li>✓ Attention to Detail</li>
                  <li>✓ Professional Excellence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}