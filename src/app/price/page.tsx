// src/app/price/page.tsx

import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Data from "@/data/data.json";

type PageData = {
  acf: {
    hero_heading?: string;
    hero_text?: string;
    hero_url?: string;
    hero_url_label?: string;
  };
};

export default async function PricePage() {
  const res = await fetch(
    "https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/wp/v2/pages/21?acf_format=standard",
    { cache: "no-store" } // ← SSR強制（リアルタイム取得）
  );

  const page: PageData = await res.json();

  return (
    <>
      <Header />
      <ParticlesBackground />

      <Hero hero={Data.toppage.hero} acf={page.acf} />
      <Footer />
    </>
  );
}
