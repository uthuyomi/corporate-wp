import style from "./TopAbout.module.scss";
import Link from "next/link";
import React from "react";

type DataProps = {
  hero: { 
    heading: string;
    text: string;
    linkUrl: string;
    linkText: string;
  }
}


const AboutHero = ({hero}: DataProps) => {
  return (
    <div className={style.About_Hero}>
      <div className={style.About_Hero_heading}>
        <h1>{hero.heading}</h1>
        <p>{ hero.text}</p>
        <Link href={hero.linkUrl}>{ hero.linkText}</Link>
      </div>
    </div>
  );
};

export default AboutHero;
