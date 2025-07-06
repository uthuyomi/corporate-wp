import React from "react";
import Image from "next/image";
import style from '@/compornent/Skills.module.scss'

const SkillsItem = () => {
  return (
    <div className={style.Skill_slider_slide}>
      <div className={style.img}>
        <Image src={} alt={} width={} height={} />
      </div>
      <div className={style.text}>
        <p>HTML5でのマークアップ、SEOを 意識した構造設計に対応しています。</p>
        <div className={}>
          <h3>スキルレベル</h3>
          <div className={style.LevelImg}>
            <Image src={} alt={} width={} height={} />
            <p>{}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
