import { ShoppingCart, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <a href="#" className="text-xl font-bold tracking-tight">
            Ayurveda+ Shop
          </a>
        </div>

        <nav
          className={`$${""} ${
            open ? "block" : "hidden"
          } absolute left-0 right-0 top-full border-b bg-white px-4 pb-4 md:static md:block md:border-none md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <li>
              <a href="#benefits" className="text-gray-700 hover:text-gray-900">
                Benefits
              </a>
            </li>
            <li>
              <a href="#products" className="text-gray-700 hover:text-gray-900">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#learn" className="text-gray-700 hover:text-gray-900">
                Learn
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border px-3 py-2 md:flex">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              className="w-40 bg-transparent text-sm focus:outline-none"
              placeholder="Search products"
              aria-label="Search products"
            />
          </div>
          <button className="relative rounded-full border p-2 hover:bg-gray-100">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emerald-600 px-1.5 text-xs font-semibold text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
