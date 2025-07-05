import React from "react";
import style from '@/compornent/Skills.module.scss'

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

      </div>
    </div>
  );
};

export default Skills;
