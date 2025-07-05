import React from "react";
import Image from "next/image";

const SkillsItem = () => {
  return (
    <div className={}>
      <div className={style.img}>
        <Image src={} alt={} width={} height={} />
      </div>
      <div className={}>
        <p>HTML5でのマークアップ、SEOを 意識した構造設計に対応しています。</p>
        <div className={}>
          <h3>スキルレベル</h3>
          <div className={styleText.LevelImg}>
            <Image src={} alt={} width={} height={} />
            <p>{}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
