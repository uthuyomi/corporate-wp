import React from "react";
import style from "./TopAbout.module.scss";
import TopAboutHero from "./Section01/Section01Hero";
import TopAboutProfile from "./Section01/Section01Profile";

const TopAbout = () => {
  return (
    <div className={style.TopAbout}>
      <TopAboutHero />
      <TopAboutProfile/>
    </div>
  );
};

export default TopAbout;
