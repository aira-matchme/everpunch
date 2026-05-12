import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe, Share2, Rss, MessageSquareShare } from "lucide-react";

const footerSections = [
  {
    title: "Cream Chargers",
    links: [
      { label: "8g N2O Chargers", href: "/cream-chargers" },
      { label: "8.2g Chargers", href: "/cream-chargers" },
      { label: "8.4g Chargers", href: "/cream-chargers" },
      { label: "8.5g Chargers", href: "/cream-chargers" },
      { label: "Bulk / Wholesale", href: "/cream-chargers" },
      { label: "Fast Gas Cylinders", href: "/fast-gas" },
    ],
  },
  {
    title: "Equipment",
    links: [
      { label: "Cream Dispensers", href: "/cream-dispensers" },
      { label: "Soda Siphons", href: "/bar-supplies" },
      { label: "CO2 Cartridges", href: "/bar-supplies" },
      { label: "Bar Supplies", href: "/bar-supplies" },
      { label: "Accessories", href: "/cream-dispensers" },
    ],
  },
  {
    title: "Drinks & Flavours",
    links: [
      { label: "MONIN Syrups", href: "/syrups" },
      { label: "Sweetbird Syrups", href: "/syrups" },
      { label: "Simply Syrups", href: "/syrups" },
      { label: "Purees & Sauces", href: "/syrups" },
      { label: "Coffee & Blends", href: "/coffee" },
      { label: "Milk Alternatives", href: "/coffee" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Delivery Info", href: "/delivery" },
      { label: "Returns Policy", href: "/returns" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const paymentMethods = ["Visa", "Mastercard", "PayPal", "Apple Pay", "Klarna", "AMEX"];
const certifications = ["Trustpilot ★★★★★", "SSL Secure", "UK Registered"];

export default function Footer() {
  return (
    <footer className="bg-[#1A0536] text-gray-400">
      {/* USP strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🚚", title: "Next Day Delivery", sub: "Order before 4pm" },
            { icon: "✅", title: "Genuine Products", sub: "Official UK distributor" },
            { icon: "🔒", title: "Secure Checkout", sub: "SSL encrypted" },
            { icon: "🔄", title: "Easy Returns", sub: "Hassle-free 30 days" },
          ].map((u) => (
            <div key={u.title} className="flex items-center gap-3">
              <span className="text-2xl">{u.icon}</span>
              <div>
                <div className="text-sm font-semibold text-white">{u.title}</div>
                <div className="text-xs">{u.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2 space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="bg-emerald-500 text-white font-black text-xs px-2 py-1 rounded leading-tight">
                  EVER<br />PUNCH
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">UK #1</div>
                  <div className="text-xs font-bold text-gray-300">Barista & Bartender Supply</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                The UK&apos;s leading distributor of N2O cream chargers, dispensers, flavouring syrups
                and professional bar supplies. Trusted by over 50,000 customers since 2009.
              </p>
            </div>

            <div className="space-y-2">
              {[
                { icon: Phone, text: "0800 123 4567" },
                { icon: Mail, text: "support@everpunch.co.uk" },
                { icon: MapPin, text: "London, United Kingdom" },
                { icon: Clock, text: "Mon–Fri: 9am – 5:30pm" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm">
                  <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-1">
              {[Globe, Share2, Rss, MessageSquareShare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-white/5 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((sec) => (
            <div key={sec.title}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-4">{sec.title}</h4>
              <ul className="space-y-2">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Payment methods */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-600 mr-1">We accept:</span>
            {paymentMethods.map((pm) => (
              <span key={pm} className="bg-white/5 border border-white/10 text-gray-400 text-xs px-3 py-1 rounded font-medium">
                {pm}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((c) => (
              <span key={c} className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded">{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} EverPunch Ltd. All rights reserved. Registered in England & Wales.
        All N2O products sold for culinary use only in compliance with UK law.
      </div>
    </footer>
  );
}
