// Skills.tsx
"use client";
import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "@/compornent/Skills.module.scss";
import SkillsItem from "./Skills/SkillsItem";

const Skills = ({ skills }: { skills: { heading: string } }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={style.Skill}>
      <h2>{skills.heading}</h2>
      {loaded && (
        <Swiper
          className={style.Skill_Slider}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SkillsItem />
        </Swiper>
      )}
    </section>
  );
};

export default Skills;
