import React from "react";
import Image from "next/image";
import style from '@/compornent/Skills.module.scss'
import dummy from '../../../public/assets/Hero.jpg'
const SkillsItem = () => {
  return (
    <div className={style.Skill_slider_slide}>
      <div className={style.img}>
        <Image src={dummy} alt="dummy" width={100} height={100} />
      </div>
      <div className={style.text}>
        <p>HTML5でのマークアップ、SEOを 意識した構造設計に対応しています。</p>
        <div className={style.Level}>
          <h3>スキルレベル</h3>
          <div className={style.Level_img}>
            <Image src={dummy} alt="dummy" width={100} height={100} />
            <p>{}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
