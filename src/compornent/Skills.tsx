import React from "react";
import style from '@/compornent/Skills.module.scss'
import SkillsItem from "./Skills/SkillsItem";

type SkillsProps = {
  skills: {
    heading: string;
  };
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className={style.Skill}>
      <h2>{skills.heading}</h2>
      <div className={style.Skill_Slider}>
        <SkillsItem />
      </div>
    </div>
  );
};

export default Skills;
