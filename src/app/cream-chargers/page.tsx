import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const subCategories = [
  { label: "8g N2O Chargers", href: "#8g" },
  { label: "8.2g Chargers", href: "#8-2g" },
  { label: "8.4g Chargers", href: "#8-4g" },
  { label: "8.5g Chargers", href: "#8-5g" },
  { label: "Bulk Packs", href: "#bulk" },
  { label: "Fast Gas Cylinders", href: "/fast-gas" },
];

export default function CreamChargersPage() {
  const chargers = products.filter((p) => p.category === "cream-chargers");

  return (
    <>
      <PageHeader
        title="N2O Cream Chargers"
        subtitle="Premium quality N2O cream chargers from the world's leading brands. Next day UK delivery on all orders."
        crumbs={[{ label: "Cream Chargers" }]}
      />

      {/* Sub-category tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[104px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {subCategories.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="whitespace-nowrap px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-emerald-400 hover:text-emerald-600 transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Info banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <span className="text-3xl">🫧</span>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">About Our N2O Cream Chargers</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              All our cream chargers contain food-grade nitrous oxide (N2O) in 100% recyclable steel cartridges.
              Sold for culinary use only — whipped cream, mousses, espumas and molecular gastronomy.
              Compatible with all standard cream dispensers/whippers.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-2xl font-extrabold text-emerald-500">From £7.49</div>
            <div className="text-xs text-gray-500">per 24-pack</div>
          </div>
        </div>

        {/* Products */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-gray-900">{chargers.length} Cream Chargers</h2>
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-400">
            <option>Sort: Best Selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {chargers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-14 max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the difference between 8g and 8.5g chargers?",
                a: "8g is the standard size and fits all dispensers. 8.5g chargers contain slightly more N2O, giving better output per charger — ideal for high-volume use.",
              },
              {
                q: "Are your cream chargers food grade?",
                a: "Yes. All chargers are made from 100% recyclable food-grade steel and contain pharmaceutical-grade N2O.",
              },
              {
                q: "Do you offer trade / wholesale pricing?",
                a: "Yes! We offer significant discounts for businesses. Contact us or sign up for a trade account to unlock wholesale prices.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-white border border-gray-200 rounded-lg">
                <summary className="px-5 py-4 font-semibold text-gray-900 cursor-pointer hover:text-emerald-600 transition-colors">
                  {faq.q}
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
