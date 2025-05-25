export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="p-6 border-b shadow-sm">
        <h1 className="text-3xl font-bold">Sufra</h1>
        <p className="text-sm text-gray-600">Mumbai's Food Redistribution Network</p>
      </header>

      <main className="p-8 max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Give Food. Share Hope.</h2>
          <p className="text-gray-700 text-lg">
            Sufra is a food redistribution app based in Mumbai, connecting surplus meals from homes, restaurants, and caterers to local shelters and communities in need. Our goal is to reduce food waste and hunger, one meal at a time.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-2">How It Works</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Post your excess food through the Sufra app</li>
            <li>We coordinate pickup and safe delivery to nearby shelters</li>
            <li>Track your impact and reduce food waste</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-2">Why Sufra?</h3>
          <p className="text-gray-700 text-lg">
            Mumbai generates thousands of tonnes of food waste every day, while millions go hungry. Sufra bridges this gap—empowering people to redistribute food with dignity, efficiency, and care.
          </p>
        </section>

        <section className="mb-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Join the Movement</h3>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-2xl shadow">
            Get Early Access
          </button>
        </section>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500 border-t">
        &copy; {new Date().getFullYear()} Sufra. Built with love for Mumbai.
      </footer>
    </div>
  );
}
