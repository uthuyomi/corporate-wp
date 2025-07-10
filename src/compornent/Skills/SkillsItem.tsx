"use client";

import { useEffect, useState } from "react";
import { AcfSkill } from "@/types/acf";
import React from "react";
import Image from "next/image";
import style from "@/compornent/Skills.module.scss";
import dummy from "../../../public/assets/Hero.jpg";
const SkillsItem = () => {
  const [skill, setSkill] = useState<AcfSkill[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("https://webyayasu.sakura.ne.jp/webyayasu-next/wp-json/wp/v2/skill")
      .then((res) => res.json())
      .then((data: AcfSkill[]) => setSkill(data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>エラーが発生しました</p>;
  if (!skill) return <p>読み込み中...</p>;

  return (
  <>
    {skill.map((item) => (
    <div className={style.Skill_slider_slide}>
      <div className={style.img}>
        <Image src={item.acf.skill_item_thumbnail} alt="サムネイル" width={100} height={100} />
      </div>
      <div className={style.text}>
          <p>{item.acf.skill_item_text}</p>
        <div className={style.Level}>
          <h3>スキルレベル</h3>
          <div className={style.Level_img}>
            <Image src={dummy} alt="dummy" width={100} height={100} />
            <p>{}</p>
          </div>
        </div>
      </div>
      </div>
    ))}
  </>
  );
};

export default SkillsItem;
