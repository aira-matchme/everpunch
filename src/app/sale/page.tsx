import { saleProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import PageHeader from "@/components/PageHeader";

export default function SalePage() {
  return (
    <>
      <PageHeader
        title="Sale — Up to 38% Off"
        subtitle="Short-dated and end-of-line stock at unbeatable prices. Same quality, massive savings."
        crumbs={[{ label: "Sale" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Sale banner */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 text-center">
          <div className="text-4xl mb-2">🔥</div>
          <h2 className="text-xl font-extrabold text-red-700 mb-1">Limited Time Offers</h2>
          <p className="text-sm text-red-600">
            All sale items are genuine, short-dated or end-of-line stock from official suppliers.
            Stock is limited — grab your bargains before they&apos;re gone!
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["All Sale", "Cream Chargers", "Dispensers", "Syrups", "Coffee"].map((t, i) => (
            <button
              key={t}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                i === 0
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">{saleProducts.length} sale items</p>
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-400">
            <option>Biggest Discount First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {saleProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  );
}
