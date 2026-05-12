import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; href?: string }

interface Props {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}

export default function PageHeader({ title, subtitle, crumbs }: Props) {
  return (
    <div className="bg-[#1A0536] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {crumbs && (
          <nav className="flex items-center gap-1 text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-emerald-400 transition-colors">{c.label}</Link>
                ) : (
                  <span className="text-gray-300">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-2xl md:text-3xl font-extrabold">{title}</h1>
        {subtitle && <p className="text-gray-400 mt-2 text-sm max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
