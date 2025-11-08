import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import BestSellers from "./components/BestSellers";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <TrustBar />
      <BestSellers />

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h4 className="font-semibold">About</h4>
              <p className="mt-2 text-sm text-gray-600">
                We craft honest Ayurvedic products for daily wellness. Made in small batches with traceable sourcing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Shop</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">Digestion</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">Sleep</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">Skin</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">Immunity</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Help</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">Terms</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Newsletter</h4>
              <p className="mt-2 text-sm text-gray-600">10% off your first order.</p>
              <form className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="mt-10 border-t pt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Ayurveda+. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
