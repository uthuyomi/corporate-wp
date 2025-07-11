"use client";

import { useEffect, useRef } from "react";
import React from "react";
import style from "@/compornent/Skills.module.scss";
import SkillsItem from "./Skills/SkillsItem";

type SkillsProps = {
  skills: {
    heading: string;
  };
};

const Skills = ({ skills }: SkillsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      const atStart = el.scrollLeft === 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      if (inView && !(atStart && e.deltaY < 0) && !(atEnd && e.deltaY > 0)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className={style.Skill}>
      <h2>{skills.heading}</h2>
      <div
        ref={scrollRef}
        className={style.Skill_Slider}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <SkillsItem />
      </div>
    </section>
  );
};

export default Skills;
