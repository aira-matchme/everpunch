import { brands } from "@/data/products";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function BrandsPage() {
  return (
    <>
      <PageHeader
        title="Our Brands"
        subtitle="Official UK distributor for the world's leading barista, bartender and gastronomy brands"
        crumbs={[{ label: "Brands" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.slug}`}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-md transition-all flex items-center gap-5"
            >
              <div className="w-16 h-16 rounded-xl bg-[#1A0536] flex items-center justify-center shrink-0">
                <span className="text-white font-extrabold text-base">{brand.logo}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {brand.name}
                </div>
                <div className="text-sm text-gray-500 mt-0.5 truncate">{brand.description}</div>
                <div className="text-xs text-emerald-500 font-semibold mt-1.5">
                  {brand.productCount} products →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
