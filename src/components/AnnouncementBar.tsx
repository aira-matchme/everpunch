"use client";

const items = [
  "🚚 FREE Next Day Delivery on orders over £30",
  "✅ Genuine products from official UK distributors",
  "⭐ Rated Excellent on Trustpilot — 50,000+ happy customers",
  "♻️ All N2O chargers made from 100% recyclable steel",
  "📦 Order before 4pm for same-day dispatch",
  "💳 Buy Now, Pay Later with Klarna",
];

export default function AnnouncementBar() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#1A0536] text-white text-xs py-2 overflow-hidden">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="inline-flex items-center font-medium">
            <span className="px-6">{t}</span>
            <span className="text-emerald-400">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
