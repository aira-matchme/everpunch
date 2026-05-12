import Link from "next/link";
import { brands } from "@/data/products";

export default function BrandsSection() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-emerald-500 font-semibold text-xs uppercase tracking-widest mb-1">Official UK Distributor</p>
          <h2 className="text-2xl font-extrabold text-gray-900">Top Brands</h2>
          <p className="text-gray-500 text-sm mt-2">Genuine products from the world&apos;s leading manufacturers</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.slug}`}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm bg-gray-50 hover:bg-white transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1A0536] flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">{brand.logo}</span>
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-emerald-600 transition-colors text-center">
                {brand.name}
              </span>
              <span className="text-[10px] text-gray-400">{brand.productCount} products</span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/brands"
            className="text-emerald-500 hover:text-emerald-700 font-semibold text-sm transition-colors"
          >
            View All Brands →
          </Link>
        </div>
      </div>
    </section>
  );
}
