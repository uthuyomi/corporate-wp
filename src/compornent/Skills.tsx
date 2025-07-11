"use client";

import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";
import style from "@/compornent/Skills.module.scss";
import SkillsItem from "./Skills/SkillsItem";

type SkillsProps = {
  skills: {
    heading: string;
  };
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className={style.Skill}>
      <h2>{skills.heading}</h2>
      <Swiper
        className={style.Skill_Slider}
        spaceBetween={16}
        slidesPerView={"auto"}
        style={{ padding: "20px 0" }}
      >
        <SkillsItem />
      </Swiper>
    </section>
  );
};

export default Skills;
