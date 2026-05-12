import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  const featured = products.slice(0, 8);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="text-emerald-500 font-semibold text-xs uppercase tracking-widest mb-1">Top Picks</p>
            <h2 className="text-2xl font-extrabold text-gray-900">Bestselling Products</h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {["All", "Cream Chargers", "Dispensers", "Syrups"].map((t, i) => (
              <button
                key={t}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  i === 0
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-600"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#1A0536] hover:bg-[#2D1B4E] text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
