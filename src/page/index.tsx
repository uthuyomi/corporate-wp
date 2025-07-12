// "use client" は絶対に書かないこと！

import ParticlesBackground from "@/compornent/ParticlesBackground";
import Hero from "@/compornent/Hero";
import Service from "@/compornent/Service";
import Skills from "@/compornent/Skills";
import Contact from "@/compornent/Contact";
import Profile from "@/compornent/Profile";
import Data from "@/data/data.json";

type PageData = {
  acf: {
    hero_heading?: string;
    hero_text?: string;
    hero_url?: string;
    hero_url_label?: string;
  };
};

export default async function Index() {
  const res = await fetch(
    "https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/wp/v2/pages/21?acf_format=standard",
    { cache: "no-store" } // SSRでリアルタイム取得
  );

  const page: PageData = await res.json();
  console.log(page);

  return (
    <>
      <ParticlesBackground />
      <Hero hero={Data.toppage.hero} acf={page.acf} />
      <Profile profile={Data.toppage.profile} acf={page.acf} />
      <Service service={Data.toppage.service} />
      <Skills skills={Data.toppage.skills} />
      <Contact contact={Data.toppage.contact} />
    </>
  );
}
