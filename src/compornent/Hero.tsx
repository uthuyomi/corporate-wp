import style from "@/compornent/Hero.module.scss";
import Link from "next/link";
import React from "react";
import type { AcfHero } from "@/types/acf";

type DataProps = {
  hero: { 
    heading: string;
    text: string;
    linkUrl: string;
    linkText: string;
  },
  acf: AcfHero;
}


const AboutHero = ({ hero, acf }: DataProps) => {
  const heading = acf.hero_heading ? acf.hero_heading : hero.heading;
  const text = acf.hero_text ? acf.hero_text : hero.text;
  

  return (
    <div className={style.About_Hero}>
      <div className={style.About_Hero_heading}>
        <h1>{heading}</h1>
        <p>{text}</p>
        <Link href={hero.linkUrl}>{ hero.linkText}</Link>
      </div>
    </div>
  );
};

export default AboutHero;
