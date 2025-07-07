import React from 'react';
import Hero from "@/compornent/Hero"
import Service from '@/compornent/Service';
import Skills from '@/compornent/Skills';
import Contact from '@/compornent/Contact';
import Profile from '@/compornent/Profile';
import Data from '@/data/data.json'

export async function getStaticProps() { 
  const res = await fetch(
    "https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/acf/v3/pages/21"
  );
  const page = await res.json();

  return {
    props: {
      page,
    },
  }
}

const index = ({ page }) => {
  console.log("取得したページデータ:", page);
  return (
    <>
      {page?.acf?.hero && <Hero hero={Data.toppage.hero} acf={page.acf} />}
      <Profile profile={Data.toppage.profile} />
      <Service service={Data.toppage.service} />
      <Skills skills={Data.toppage.skills} />
      <Contact contact={Data.toppage.contact} />
    </>
  );
}

export default index;