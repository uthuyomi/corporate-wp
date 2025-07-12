import style from '@/compornent/Hero/Hero.module.scss'
import Link from "next/link";
import React from "react";


type DataProps = {
  hero: { 
    heading: string;
    text: string;
    linkUrl: string;
    linkText: string;
  },
  acf: {
    hero_heading?: string;
    hero_text?: string;
    hero_url?: string;
    hero_url_label?: string;
  };
}


const Hero = ({ hero, acf }: DataProps) => {
  const heading = acf.hero_heading ? acf.hero_heading : hero.heading;
  const text = acf.hero_text ? acf.hero_text : hero.text;
  const url = acf.hero_url ? acf.hero_url : hero.linkUrl;
  const url_label = acf.hero_url_label ? acf.hero_url_label : hero.linkText;
  

  return (
    <div className={style.About_Hero}>
      <div className={style.About_Hero_heading}>
        <h1>{heading}</h1>
        <p>{text}</p>
        <Link href={url}>{url_label}</Link>
      </div>
    </div>
  );
};

export default Hero;
