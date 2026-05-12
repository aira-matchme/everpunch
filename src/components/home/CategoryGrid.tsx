import Link from "next/link";
import { categories } from "@/data/products";

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="text-emerald-500 font-semibold text-xs uppercase tracking-widest mb-1">Browse By Category</p>
            <h2 className="text-2xl font-extrabold text-gray-900">Shop Our Range</h2>
          </div>
          <Link href="/shop" className="text-emerald-500 hover:text-emerald-700 text-sm font-semibold transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="group flex flex-col items-center text-center gap-2.5 p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-md bg-white transition-all"
            >
              <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center text-2xl transition-colors">
                {cat.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                  {cat.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{cat.count}+ products</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
