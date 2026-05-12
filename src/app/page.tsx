import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandsSection from "@/components/home/BrandsSection";
import USPSection from "@/components/home/USPSection";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <USPSection />
      <BrandsSection />
      <Newsletter />
    </>
  );
}
