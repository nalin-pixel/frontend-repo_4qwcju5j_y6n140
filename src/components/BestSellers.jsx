const products = [
  {
    id: 1,
    name: "Triphala Digestive Cleanse",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Ashwagandha Energy Capsules",
    price: "$22",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Neem Skin Clarifying Oil",
    price: "$26",
    image:
      "https://images.unsplash.com/photo-1532186651173-4f0f1621aa26?q=80&w=1200&auto=format&fit=crop",
    badge: "Trending",
  },
  {
    id: 4,
    name: "Turmeric Immune Tea",
    price: "$14",
    image:
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1200&auto=format&fit=crop",
    badge: "Limited",
  },
];

export default function BestSellers() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Best Sellers
            </h2>
            <p className="mt-1 text-gray-600">
              Customer favorites crafted with authentic, lab-tested ingredients.
            </p>
          </div>
          <a href="#" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-emerald-700 shadow">
                  {p.badge}
                </span>
              </div>
              <div className="space-y-1 p-4">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-600">Supports daily balance</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-base font-bold text-gray-900">{p.price}</span>
                  <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
