import React from 'react';
import Hero from "@/compornent/Hero"
import Service from '@/compornent/Service';
import Skills from '@/compornent/Skills';
import Contact from '@/compornent/Contact';
import Profile from '@/compornent/Profile';
import Data from '@/data/data.json'

const index = () => {
  return (
    <>
      <Hero hero={Data.toppage.hero} />
      <Profile profile={Data.toppage.profile} />
      <Service service={Data.toppage.service} />
      <Skills skills={Data.toppage.skills} />
      <Contact contact={Data.toppage.contact} />
    </>
  )
}

export default index;