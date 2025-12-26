import Image from "next/image";

export default async function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg sm:text-xl">
            Two pilots. One passion. A lifetime of adventures in the sky.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <Image
            src="/couple-flying.jpg"
            alt="Couple in a small airplane cockpit"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            We met in flight school and quickly realized that our shared love
            for aviation was just the beginning. Traveling the world together,
            we’ve experienced the thrill of flight, the beauty of new horizons,
            and the challenges that come with every takeoff and landing.
          </p>
          <p className="mb-4">
            This blog is our way to share our adventures, tips for fellow
            pilots, travel recommendations, and stories from the cockpit.
            Whether you’re a pilot, a student, or just someone who dreams of the
            skies, we hope you find inspiration here.
          </p>
          <p>
            Fly with us through our experiences, and maybe even learn a thing or
            two about aviation along the way!
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold mb-4">Join Us on Our Journey</h3>
          <p className="mb-6">
            Subscribe to our newsletter to get the latest stories and tips from
            our flights.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}
