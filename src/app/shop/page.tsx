import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import PageHeader from "@/components/PageHeader";
import { SlidersHorizontal } from "lucide-react";

export default function ShopPage() {
  return (
    <>
      <PageHeader
        title="Shop All Products"
        subtitle="Over 2,000 products from the UK's leading barista and bartender supply brands"
        crumbs={[{ label: "Shop" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </h3>
                <button className="text-xs text-emerald-500 hover:underline">Clear All</button>
              </div>

              {/* Category filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-gray-700 mb-3">Category</h4>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="accent-emerald-500 w-4 h-4" />
                        <span className="text-sm text-gray-700 group-hover:text-emerald-600 transition-colors">
                          {cat.name}
                        </span>
                        <span className="text-xs text-gray-400 ml-auto">({cat.count})</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brand filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-gray-700 mb-3">Brand</h4>
                <ul className="space-y-2">
                  {["Pro Whip", "MOSA", "iSi", "SmartWhip", "MONIN", "Sweetbird"].map((b) => (
                    <li key={b}>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="accent-emerald-500 w-4 h-4" />
                        <span className="text-sm text-gray-700 group-hover:text-emerald-600 transition-colors">{b}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-gray-700 mb-3">Price Range</h4>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border border-gray-200 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-emerald-400"
                  />
                  <span className="text-gray-400">–</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border border-gray-200 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              {/* On sale */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-emerald-500 w-4 h-4" />
                  <span className="text-sm font-medium text-gray-700">On Sale Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-500">{products.length} products</p>
              <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-400">
                <option>Sort: Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-10">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                    n === 1
                      ? "bg-emerald-500 text-white"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-emerald-400 hover:text-emerald-500"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
