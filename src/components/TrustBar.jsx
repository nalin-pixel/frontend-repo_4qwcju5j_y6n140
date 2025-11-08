import { Truck, ShieldCheck, Phone } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="border-y bg-emerald-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 text-sm text-emerald-900 sm:grid-cols-3">
        <div className="flex items-center gap-3">
          <Truck className="h-5 w-5" />
          <span>Free shipping over $49</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-5 w-5" />
          <span>Authentic, lab-tested ingredients</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5" />
          <span>Ayurvedic coach support</span>
        </div>
      </div>
    </section>
  );
}
