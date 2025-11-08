import { Star, BadgeCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-medium text-emerald-700">
            <BadgeCheck className="h-4 w-4" />
            Ayurvedic wellness, delivered
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
            Natural Ayurvedic care for modern living
          </h1>
          <p className="mt-3 max-w-xl text-gray-600">
            Shop doctor-formulated remedies, authentic herbs, and daily rituals that support digestion, energy, skin, and better sleep.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Shop Best Sellers
            </a>
            <a
              href="#learn"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Learn Ayurveda
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
              4.9/5 from 2k+ reviews
            </div>
            <span>•</span>
            <div>Free shipping over $49</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2MDI3MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl" />
        </div>
      </div>
    </section>
  );
}
