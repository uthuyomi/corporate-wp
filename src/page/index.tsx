import React from 'react';
import Hero from "@/compornent/Hero"
import Service from '@/compornent/Service';
import Skills from '@/compornent/Skills';
import Contact from '@/compornent/Contact';
import Profile from '@/compornent/Profile';
import Data from '@/data/data.json'

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/acf/v3/pages/21"
    );

    if (!res.ok) {
      console.error("Fetch失敗:", res.status, res.statusText);
      return { props: { page: null } };
    }

    const page = await res.json();

    console.log("【サーバー側】取得したページデータ:", page);

    return { props: { page } };
  } catch (error) {
    console.error("Fetch例外発生:", error);
    return { props: { page: null } };
  }
}

type PageProps = {
  page: {
    acf: {
      hero_heading?: string;
      hero_text?: string;
    };
  };
};

const index = ({ page }:PageProps) => {
  console.log("取得したページデータ:", page);
  return (
    <>
      {(page?.acf?.hero_heading || page?.acf?.hero_text) && (
        <Hero hero={Data.toppage.hero} acf={page.acf} />
      )}
      <Profile profile={Data.toppage.profile} />
      <Service service={Data.toppage.service} />
      <Skills skills={Data.toppage.skills} />
      <Contact contact={Data.toppage.contact} />
    </>
  );
}

export default index;